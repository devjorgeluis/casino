import { useState, useEffect, useMemo, useCallback } from "react";
import IconChevronLeft from "/src/assets/svg/chevron-left.svg";

const TypeOfBet = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkIsMobile = useCallback(() => window.innerWidth <= 767, []);

    useEffect(() => {
        setIsMobile(checkIsMobile());

        const handleResize = () => {
            setIsMobile(checkIsMobile());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [checkIsMobile]);

    const renderMobileBackButton = (onClick, content) => (
        <button className="back-block">
            <span className="SVGInline back-block__arrow" onClick={onClick}>
                <img className="SVGInline-svg back-block__arrow-svg" src={IconChevronLeft} alt="back" />
            </span>
            <div className="back-block__content">{content}</div>
        </button>
    );

    const handleBack = useCallback(() => {
        if (isMobile) {
            window.history.back();
        }
    }, [isMobile]);
    
    return (
        <div className="sport-rules-layout bet-layout">
            {isMobile && renderMobileBackButton(handleBack, "Tipos de apuestas")}

            <div className="sport-rules-layout__content">
                <div className="sport-rules-layout__description">
                    <h3 className="sport-rules-layout__content-title">Apuesta Individual</h3>
                    Una apuesta individual requiere que el jugador prediga correctamente el resultado de solo un evento o mercado. Las apuestas individuales se pueden realizar en cualquier evento ofrecido en el programa. Para determinar la cantidad de ganancia de una apuesta individual, se debe multiplicar la cantidad apostada por el coeficiente ofrecido para el resultado seleccionado.
                    Por ejemplo, si apostamos 10 unidades a la victoria del equipo 1 (1X) con un coeficiente propuesto de 2.5 y gana el equipo 1, la cantidad de la ganancia será de 10 x 2.5 = 25 unidades. Así, el jugador gana 25 unidades.
                    <h3 className="sport-rules-layout__content-title">Apuesta Expresa</h3>
                    Para una apuesta expresa, el jugador necesita predecir correctamente los resultados de todos los eventos incluidos en la apuesta expresa (el número mínimo de resultados incluidos en la apuesta expresa es 2 y el máximo es 30). Una condición obligatoria es que los resultados incluidos en la apuesta expresa sean independientes entre sí.
                    Los resultados del partido que dependen uno del otro no pueden ser incluidos en una misma apuesta expresa (por ejemplo, Resultado y Marcador del Partido). Si un jugador intenta agregar varios resultados dependientes en el cupón, aparecerá un mensaje de error y la apuesta no será aceptada.
                    Sin embargo, el jugador puede combinar en la apuesta varios mercados para el mismo evento si no dependen entre sí (por ejemplo, apuestas en los mercados principales y datos estadísticos).
                    Una apuesta expresa puede incluir cualquier combinación de eventos no relacionados si las reglas del juego no implican otras restricciones previstas por el reglamento.
                    A discreción del organizador, las apuestas expres no pueden ofrecerse en ciertos eventos.
                    Para determinar la ganancia de la apuesta expresa, primero se deben multiplicar los coeficientes de todos los eventos incluidos en la expresa, luego multiplicar la cantidad de la apuesta por el coeficiente resultante.
                    Por ejemplo, si apostamos 8 unidades en una apuesta expresa que consta de los siguientes eventos: Georgia - Bielorrusia 1X con un coeficiente de 2; Noruega - Serbia X con un coeficiente de 3.5; Bulgaria - Hungría 2X con un coeficiente de 2.5; y todos los resultados de los eventos se predicen correctamente, entonces la cantidad de la ganancia será de 8 x (2 x 3.5 x 2.5) = 140 unidades. Así, el jugador gana 140 unidades.
                    Incluso si el resultado de un evento se predice incorrectamente, toda la apuesta expresa se considera perdida. A discreción del organizador, se le puede ofrecer al jugador una oportunidad adicional de no perder la apuesta expresa, sobre lo cual el jugador será informado previamente en el sitio web del organizador o a través del sistema.
                    Por ejemplo, si la apuesta expresa incluye 6 o más eventos, cada uno con un coeficiente de ganancia de al menos 17, y solo el resultado de un evento se predice incorrectamente mientras que todos los demás eventos de la apuesta expresa se consideran ganados con los coeficientes correspondientes, entonces la apuesta expresa no se considera perdida y la cantidad de la apuesta será devuelta.
                    <h3 className="sport-rules-layout__content-title">Apuesta de Sistema</h3>
                    Un sistema es un tipo de apuesta que representa una combinación de un número determinado de apuestas expres. El número máximo de eventos incluidos en el tipo de apuesta de sistema es 16. Para este tipo de apuestas es característico tener una parte igual de la cantidad de la apuesta realizada para cada componente (cada apuesta expresa) y el mismo número de eventos incluidos en ellos (en cada apuesta expresa). Los componentes de la apuesta de sistema se calculan como apuestas expres separadas. Antes, es necesario indicar el número total de todos los eventos incluidos en el sistema, así como el número de eventos incluidos en cada componente (expresa). La cantidad de la apuesta para el componente (una apuesta expresa) se determina dividiendo la cantidad de la apuesta por el número de componentes incluidos en la apuesta de sistema (número de apuestas expres). Para calcular la cantidad de la ganancia por la apuesta de sistema, es necesario obtener la suma de las ganancias de todas las apuestas expres incluidas en la apuesta de sistema.
                    Por ejemplo, supongamos que hicimos una apuestade sistema 2/3 (el número total de eventos incluidos en la apuesta de sistema es 3, y el número de eventos incluidos en cada componente (expresa) es 2), y la suma de la apuesta realizada es de 12 unidades. Los siguientes eventos están incluidos en la apuesta de sistema: Escocia - Israel X con un coeficiente de 3.5; Islandia - Rumania 2X con un coeficiente de 2; Valencia - Atalanta 1X con un coeficiente de 2.5. Se forman las siguientes combinaciones:
                    Por lo tanto, la suma de la apuesta en un componente es de 4 unidades. 12 (suma de la apuesta) / 3 (número de apuestas expresas) = 4. Los ganancias para las apuestas expresas serán las siguientes: Componente 1 = 3.5 x 2 x 4 = 28 Unidades; Componente 2 = 2 x 2.5 x 4 = 20 Unidades; Componente 3 = 3.5 x 2.5 x 4 = 35 Unidades. Así, la suma total de la ganancia por la apuesta de sistema será igual a la suma de las ganancias de todas las apuestas expresas, es decir, 28 + 20 + 35 = 83 Unidades.
                    En caso de predicción incorrecta de los resultados de 2 o más eventos para la apuesta de sistema 2/3, toda la apuesta se considera perdida. Pero si el resultado de solo un evento se predice incorrectamente, todavía hay una ganancia.
                    Por ejemplo, supongamos que se predijo incorrectamente Escocia - Israel X, entonces todos los componentes (apuestas expresas) en los que se incluyó este evento se consideran perdidos (apuesta expresa 1 y 3), y solo gana la apuesta expresa 2.
                    Por lo tanto, la suma total de la ganancia por la apuesta de sistema es igual a la ganancia de la apuesta expresa 2 - 20 unidades
                </div>
            </div>
        </div>
    )
};

export default TypeOfBet;