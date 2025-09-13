import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { callApi } from "../../utils/Utils";
import MobileFilterModal from "./MobileFilterModal";
import IconChevronLeft from "/src/assets/svg/chevron-left.svg";
import IconChevronRight from "/src/assets/svg/chevron-right.svg";
import IconDoubleLeft from "/src/assets/img/double-left.png";
import IconDoubleRight from "/src/assets/img/double-right.png";
import IconFilter from "/src/assets/svg/filter.svg";

const MobileProfileHistory = () => {
    const navigate = useNavigate();
    const { contextData } = useContext(AppContext);
    const [filters, setFilters] = useState({
        status: { cancelled: false, pending: false, completed: false },
        dateFrom: new Date("2025-09-09"),
        dateTo: new Date("2025-09-10"),
    });
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [pagination, setPagination] = useState({
        start: 0,
        length: 3,
        totalRecords: 0,
        currentPage: 1,
    });

    const handleFilterChange = (name, checked) => {
        setFilters((prev) => ({
            ...prev,
            status: { ...prev.status, [name]: checked },
        }));
    };

    const handleDateChange = (date, name) => {
        setFilters((prev) => ({ ...prev, [name]: date }));
    };

    const handlePageChange = (page) => {
        setPagination((prev) => ({
            ...prev,
            start: (page - 1) * prev.length,
            currentPage: page,
        }));
    };

    const fetchHistory = () => {
        setLoading(true);
        const statusParams = [];
        if (filters.status.cancelled) statusParams.push("cancelled");
        if (filters.status.pending) statusParams.push("pending");
        if (filters.status.completed) statusParams.push("completed");

        // Format dates to YYYY-MM-DD for API
        const formatDate = (date) => {
            if (!date) return '';
            const d = new Date(date);
            return d.toISOString().split('T')[0];
        };

        const queryParams = new URLSearchParams({
            start: pagination.start,
            length: pagination.length,
            type: "slot",
            ...(statusParams.length > 0 && { status: statusParams.join(",") }),
            ...(filters.dateFrom && { date_from: formatDate(filters.dateFrom) }),
            ...(filters.dateTo && { date_to: formatDate(filters.dateTo) }),
        }).toString();

        // Use null for the data parameter since it's a GET request
        callApi(
            contextData,
            "GET",
            `/get-history?${queryParams}`,
            (response) => {
                if (response.status === "0") {
                    setTransactions(response.data);
                    setPagination((prev) => ({
                        ...prev,
                        totalRecords: response.recordsTotal || 0,
                    }));
                } else {
                    setTransactions([]);
                    console.error("API error:", response);
                }
                setLoading(false);
            },
            null
        );
    };

    const handleSubmitFilters = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        setPagination((prev) => ({ ...prev, start: 0, currentPage: 1 }));
        fetchHistory();
    };

    useEffect(() => {
        fetchHistory();
    }, [pagination.start, pagination.length]);

    const formatOperation = (operation, value) => {
        return operation === "change_balance" && parseFloat(value) > 0
            ? "Depósito"
            : operation === "change_balance"
                ? "Retiro"
                : operation;
    };

    const formatStatus = (value) => {
        if (parseFloat(value) > 0) return "Acreditado";
        if (parseFloat(value) < 0) return "Cancelado";
        return "Pendiente";
    };

    const formatDateDisplay = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const totalPages = Math.ceil(pagination.totalRecords / pagination.length);

    const getVisiblePages = () => {
        const delta = 1;
        const visiblePages = [];
        let startPage = Math.max(1, pagination.currentPage - delta);
        let endPage = Math.min(totalPages, pagination.currentPage + delta);

        if (endPage - startPage + 1 < 2 * delta + 1) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + 2 * delta);
            } else {
                startPage = Math.max(1, endPage - 2 * delta);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push(i);
        }

        return { visiblePages, startPage, endPage };
    };

    const { visiblePages } = getVisiblePages();

    const handleFirstPage = () => handlePageChange(1);
    const handlePrevPage = () => handlePageChange(pagination.currentPage - 1);
    const handleNextPage = () => handlePageChange(pagination.currentPage + 1);
    const handleLastPage = () => handlePageChange(totalPages);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="profile-layout-mobile">
            <MobileFilterModal
                isOpen={showFilterModal}
                onClose={() => setShowFilterModal(false)}
                filters={filters}
                onFilterChange={handleFilterChange}
                onDateChange={handleDateChange}
                onSubmit={handleSubmitFilters}
            />

            <section className="pay-history-mobile">
                <div className="pay-history-mobile__back-block">
                    <button className="back-block" onClick={handleBack}>
                        <span className="SVGInline back-block__arrow">
                            <img src={IconChevronLeft} alt="back" width={30} />
                        </span>
                        <span className="back-block__content">Historial de Operaciones</span>
                    </button>
                    <span 
                        className="pay-history-mobile__back-block-icon"
                        onClick={() => setShowFilterModal(true)}
                    >
                        <span className="SVGInline SVG-component__content">
                            <img src={IconFilter} alt="filter" width={20} />
                        </span>
                    </span>
                </div>

                <div className="pay-history-mobile__content">
                    {loading ? (
                        <div className="pay-history-mobile__empty">Cargando...</div>
                    ) : transactions.length > 0 ? (
                        <div className="pay-history-mobile__list">
                            {transactions.map((txn) => (
                                <div key={txn.id} className="pay-history-item-mobile">
                                    <div className="pay-history-item-mobile__content">
                                        <div className="pay-history-item-mobile__container">
                                            <span className="pay-history-item-mobile__type">
                                                {formatOperation(txn.operation, txn.value)}
                                            </span>
                                            <span className={`pay-history-item-mobile__date-number pay-history-item-mobile__date-number_status_${
                                                txn.value > 0 ? 2 : txn.value < 0 ? 0 : 1
                                            }`}>
                                                {formatStatus(txn.value)}
                                            </span>
                                        </div>
                                        <div className="pay-history-item-mobile__container">
                                            <span className="pay-history-item-mobile__date">
                                                {formatDateDisplay(txn.created_at)}
                                            </span>
                                            <span className="pay-history-item-mobile__amount">
                                                <span className="pay-history-item-mobile__amount-title">Suma:</span>
                                                {parseFloat(txn.value).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="pay-history-mobile__empty">
                            El historial de operaciones está vacío
                        </div>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="pay-history-mobile__paginator">
                        <div className="paginator-mobile">
                            <div className="paginator-mobile__main">
                                {pagination.currentPage > 1 && (
                                    <>
                                        <div className="paginator-mobile__item" onClick={handleFirstPage}>
                                            <div className="paginator-mobile__item-value-container">
                                                <span className="paginator-mobile__item-value paginator-mobile__item-value_first">
                                                    <img src={IconDoubleLeft} alt="first" width={12} />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="paginator-mobile__item" onClick={handlePrevPage}>
                                            <div className="paginator-mobile__item-value-container">
                                                <span className="paginator-mobile__item-value">
                                                    <img src={IconChevronLeft} alt="next" width={20} />
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {visiblePages.map((page) => (
                                    <div
                                        key={page}
                                        className={`paginator-mobile__item ${page === pagination.currentPage ? "paginator-mobile__item_current" : ""}`}
                                        onClick={() => handlePageChange(page)}
                                    >
                                        <div className="paginator-mobile__item-value-container">
                                            <span className={`paginator-mobile__item-value ${page === pagination.currentPage ? "paginator-mobile__item-value paginator-mobile__item-value_current" : ""}`}>
                                                {page}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                {pagination.currentPage < totalPages && (
                                    <>
                                        <div className="paginator-mobile__item" onClick={handleNextPage}>
                                            <div className="paginator-mobile__item-value-container">
                                                <span className="paginator-mobile__item-value">
                                                    <img src={IconChevronRight} alt="next" width={20} />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="paginator-mobile__item" onClick={handleLastPage}>
                                            <div className="paginator-mobile__item-value-container">
                                                <span className="paginator-mobile__item-value paginator-mobile__item-value_last">
                                                    <img src={IconDoubleRight} alt="last" width={12} />
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default MobileProfileHistory;