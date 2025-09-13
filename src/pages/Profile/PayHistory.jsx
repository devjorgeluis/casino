import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";
import { callApi } from "../../utils/Utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconChevronUp from "/src/assets/svg/chevron-up.svg";
import IconChevronDown from "/src/assets/svg/chevron-down.svg";
import IconChevronLeft from "/src/assets/svg/chevron-left.svg";
import IconChevronRight from "/src/assets/svg/chevron-right.svg";
import IconDoubleLeft from "/src/assets/img/double-left.png";
import IconDoubleRight from "/src/assets/img/double-right.png";
import IconCalendar from "/src/assets/svg/calendar.svg";

const PayHistory = () => {
    const { contextData } = useContext(AppContext);
    const [filters, setFilters] = useState({
        status: { cancelled: false, pending: false, completed: false },
        dateFrom: new Date("2025-09-09"), // Changed to Date object
        dateTo: new Date("2025-09-10"),   // Changed to Date object
    });
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showHistory, setShowHistory] = useState(true);
    const [pagination, setPagination] = useState({
        start: 0,
        length: 3,
        totalRecords: 0,
        currentPage: 1,
    });

    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
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

    const handleSubmit = (e) => {
        e.preventDefault();
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

    // Custom input component for DatePicker to match your design
    const CustomDateInput = ({ value, onClick }) => (
        <div className="input-date-desktop__custom-date-input" onClick={onClick}>
            <span className="input-date-desktop__custom-date-input-calendar">
                <span className="SVGInline SVG-component__content">
                    <img className="SVGInline-svg SVG-component__content-svg" src={IconCalendar} alt="calendar" />
                </span>
            </span>
            <span className="input-date-desktop__custom-date-input-value">
                {value}
            </span>
            <span className="input-date-desktop__custom-date-input-arrow">
                <span className="SVGInline SVG-component__content">
                    <img className="SVGInline-svg SVG-component__content-svg" src={IconChevronDown} alt="dropdown" />
                </span>
            </span>
        </div>
    );

    return (
        <div className="pay-history-desktop">
            <div className="pay-history-desktop__filter">
                <div className="pay-history-desktop__filter-header">
                    <div className="pay-history-desktop__filter-header-title">Historial de Operaciones</div>
                    <span className="pay-history-desktop__filter-header-arrow">
                        <span className="SVGInline SVG-component__content" onClick={() => setShowHistory(!showHistory)}>
                            <img className="SVGInline-svg SVG-component__content-svg" src={showHistory ? IconChevronUp : IconChevronDown} alt="chevron" />
                        </span>
                    </span>
                </div>
                {
                    showHistory && <div className="pay-history-desktop__filter-content">
                        <div className="pay-history-desktop__filter-select-multi">
                            <div className="pay-history-desktop__filter-label">Estado</div>
                            <ul className="select-multi-desktop">
                                <li className="select-multi-desktop__item">
                                    <div className="select-multi-desktop__checkbox">
                                        <label className="check-box-desktop">
                                            <input
                                                id="cancelled-checkbox"
                                                className="check-box-desktop__input"
                                                type="checkbox"
                                                name="cancelled"
                                                checked={filters.status.cancelled}
                                                onChange={handleFilterChange}
                                            />
                                            <span className="check-box-desktop__checkmark"></span>
                                        </label>
                                    </div>
                                    <label className="select-multi-desktop__item-value" htmlFor="cancelled-checkbox">Canceladas</label>
                                </li>
                                <li className="select-multi-desktop__item">
                                    <div className="select-multi-desktop__checkbox">
                                        <label className="check-box-desktop">
                                            <input
                                                id="pending-checkbox"
                                                className="check-box-desktop__input"
                                                type="checkbox"
                                                name="pending"
                                                checked={filters.status.pending}
                                                onChange={handleFilterChange}
                                            />
                                            <span className="check-box-desktop__checkmark"></span>
                                        </label>
                                    </div>
                                    <label className="select-multi-desktop__item-value" htmlFor="pending-checkbox">Pendientes</label>
                                </li>
                                <li className="select-multi-desktop__item">
                                    <div className="select-multi-desktop__checkbox">
                                        <label className="check-box-desktop">
                                            <input
                                                id="completed-checkbox"
                                                className="check-box-desktop__input"
                                                type="checkbox"
                                                name="completed"
                                                checked={filters.status.completed}
                                                onChange={handleFilterChange}
                                            />
                                            <span className="check-box-desktop__checkmark"></span>
                                        </label>
                                    </div>
                                    <label className="select-multi-desktop__item-value" htmlFor="completed-checkbox">Realizadas</label>
                                </li>
                            </ul>
                        </div>
                        <form className="slots-bets-filter-pay-history-desktop" onSubmit={handleSubmit}>
                            <div className="slots-bets-filter-pay-history-desktop__values">
                                <div className="slots-bets-filter-pay-history-desktop__item">
                                    <span className="slots-bets-filter-pay-history-desktop__item-label">Fecha de</span>
                                    <div className="slots-bets-filter-pay-history-desktop__item-input">
                                        <div className="input-date-desktop">
                                            <div className="react-datepicker-wrapper">
                                                <DatePicker
                                                    selected={filters.dateFrom}
                                                    onChange={(date) => handleDateChange(date, "dateFrom")}
                                                    dateFormat="dd.MM.yyyy"
                                                    customInput={<CustomDateInput />}
                                                    maxDate={filters.dateTo}
                                                    popperPlacement="bottom-start"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slots-bets-filter-pay-history-desktop__item">
                                    <span className="slots-bets-filter-pay-history-desktop__item-label">Fecha hasta</span>
                                    <div className="slots-bets-filter-pay-history-desktop__item-input">
                                        <div className="input-date-desktop">
                                            <div className="react-datepicker-wrapper">
                                                <DatePicker
                                                    selected={filters.dateTo}
                                                    onChange={(date) => handleDateChange(date, "dateTo")}
                                                    dateFormat="dd.MM.yyyy"
                                                    customInput={<CustomDateInput />}
                                                    minDate={filters.dateFrom}
                                                    popperPlacement="bottom-start"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slots-bets-filter-pay-history-desktop__button">
                                <button type="submit" className="button-desktop button-desktop_color_default">
                                    <span className="slots-bets-filter-pay-history-desktop__button-text">Aceptar</span>
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>
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
                                            <div className="pay-history-item-desktop__title">Tipo</div>
                                            <div className="pay-history-item-desktop__description">
                                                {formatOperation(txn.operation, txn.value)}
                                            </div>
                                        </div>
                                        <div className="pay-history-item-desktop__item">
                                            <div className="pay-history-item-desktop__title">Suma</div>
                                            <div className="pay-history-item-desktop__description">
                                                {parseFloat(txn.value).toFixed(2)}
                                            </div>
                                        </div>
                                        <div className="pay-history-item-desktop__item">
                                            <div className="pay-history-item-desktop__title">Estado</div>
                                            <div className={`pay-history-item-desktop__date-number pay-history-item-desktop__date-number_status_${txn.value > 0 ? 2 : txn.value < 0 ? 0 : 1}`}>
                                                {formatStatus(txn.value)}
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