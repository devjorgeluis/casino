import { useState, useEffect, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { callApi } from "../../utils/Utils";
import IconChevronLeft from "/src/assets/svg/chevron-left.svg";
import IconChevronRight from "/src/assets/svg/chevron-right.svg";
import IconDoubleLeft from "/src/assets/img/double-left.png";
import IconDoubleRight from "/src/assets/img/double-right.png";

const PayHistory = () => {
    const { contextData } = useContext(AppContext);
    const { isMobile } = useOutletContext();
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        start: 0,
        length: 15,
        totalRecords: 0,
        currentPage: 1,
    });

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

        const queryParams = new URLSearchParams({
            start: pagination.start,
            length: pagination.length,
            type: "slot",
            ...(statusParams.length > 0 && { status: statusParams.join(",") }),
        }).toString();

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

    useEffect(() => {
        fetchHistory();
    }, [pagination.start, pagination.length]);

    const formatBalance = (value) => {
        const num = value > 0 ? parseFloat(value) : Math.abs(value);
        if (isNaN(num)) return "";
        return num.toLocaleString("de-DE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
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

    return (
        <div className="pay-history-desktop">
            {
                !isMobile && 
                <div className="pay-history-desktop__filter">
                    <div className="pay-history-desktop__filter-header">
                        <div className="pay-history-desktop__filter-header-title">Historial de Operaciones</div>
                    </div>
                </div>
            }
            <section className="pay-history-desktop__main">
                <div className="pay-history-desktop__content-container">
                    <div className="pay-history-desktop__content">
                        {loading ? (
                            <div className="pay-history-desktop__empty">Cargando...</div>
                        ) : transactions.length > 0 ? (
                            <div className="pay-history-desktop__list">
                                {transactions.map((txn) => (
                                    <div key={txn.id} className="pay-history-item-desktop">
                                        <div className="pay-history-item-desktop__item">
                                            <div className="pay-history-item-desktop__title">Fecha</div>
                                            <div className="pay-history-item-desktop__description pay-history-item-desktop__description_date">
                                                {txn.created_at_formatted}
                                            </div>
                                        </div>
                                        <div className="pay-history-item-desktop__item">
                                            <div className="pay-history-item-desktop__title">Id</div>
                                            <div className="pay-history-item-desktop__description pay-history-item-desktop__description_date">
                                                {txn.txn_id}
                                            </div>
                                        </div>
                                        <div className="pay-history-item-desktop__item">
                                            <div className="pay-history-item-desktop__title">Monto</div>
                                            <div className={`pay-history-item-desktop__description pay-history-item-desktop__date-number_status_${txn.value_after > txn.value_before ? 2 : 1}`}>
                                                {formatBalance(txn.value || txn.amount || 0)}
                                            </div>
                                        </div>
                                        <div className="pay-history-item-desktop__item">
                                            <div className="pay-history-item-desktop__title">Balance Previo</div>
                                            <div className="pay-history-item-desktop__description">
                                                {formatBalance(txn.value_before) || 0}
                                            </div>
                                        </div>
                                        <div className="pay-history-item-desktop__item">
                                            <div className="pay-history-item-desktop__title">Balance Posterior</div>
                                            <div className="pay-history-item-desktop__date-number">
                                                {formatBalance(txn.value_after) || 0}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="pay-history-desktop__empty">El historial de operaciones está vacío</div>
                        )}
                    </div>
                    {totalPages > 1 && (
                        <div className="pay-history-desktop__paginator">
                            <div className="paginator-desktop">
                                <div className="paginator-desktop__main">
                                    {pagination.currentPage > 1 && (
                                        <>
                                            <div
                                                className="paginator-desktop__item"
                                                onClick={handleFirstPage}
                                            >
                                                <span className="paginator-desktop__item-value paginator-desktop__item-value_first">
                                                    <img src={IconDoubleLeft} alt="first" width={12} />
                                                </span>
                                            </div>
                                            <div
                                                className="paginator-desktop__item"
                                                onClick={handlePrevPage}
                                            >
                                                <span className="paginator-desktop__item-value">
                                                    <img src={IconChevronLeft} alt="before" width={20} />
                                                </span>
                                            </div>
                                        </>
                                    )}

                                    {visiblePages.map((page) => (
                                        <div
                                            key={page}
                                            className={`paginator-desktop__item ${page === pagination.currentPage ? "paginator-desktop__item_current" : ""}`}
                                            onClick={() => handlePageChange(page)}
                                        >
                                            <span className={`paginator-desktop__item-value ${page === pagination.currentPage ? "paginator-desktop__item-value_current" : ""}`}>
                                                {page}
                                            </span>
                                        </div>
                                    ))}

                                    {pagination.currentPage < totalPages && (
                                        <>
                                            <div
                                                className="paginator-desktop__item"
                                                onClick={handleNextPage}
                                            >
                                                <span className="paginator-desktop__item-value">
                                                    <img src={IconChevronRight} alt="next" width={14} />
                                                </span>
                                            </div>
                                            <div
                                                className="paginator-desktop__item"
                                                onClick={handleLastPage}
                                            >
                                                <span className="paginator-desktop__item-value paginator-desktop__item-value_last">
                                                    <img src={IconDoubleRight} alt="last" width={12} />
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PayHistory;