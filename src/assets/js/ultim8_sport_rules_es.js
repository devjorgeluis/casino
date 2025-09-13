export const ultim8SportRulesData = [
    {
        id: 'definiciones',
        title: 'DEFINICIONES',
        description: `Empresa – La compañía que administra el sitio web.
            Cliente (jugador) – Persona que realiza una apuesta con la Empresa.
            Apuesta – Acuerdo entre el Cliente y la Empresa, por el cual la parte perdedora debe cumplir con las obligaciones según las reglas establecidas. Las apuestas se aceptan conforme a las reglas establecidas por la Empresa en la línea.
            Línea – Lista de eventos y sus posibles resultados con cuotas propuestas por la Empresa para realizar apuestas.
            Apuesta (importe) – Inversión monetaria que representa el compromiso del Jugador con la Empresa. El Jugador realiza la apuesta como pago por participar en la predicción del resultado. Es la suma apostada.
            Resultado – Resultado del evento sobre el cual se realiza la apuesta.
            Cuota de ganancia – Valor establecido por la Empresa para cada resultado posible.
            Los conceptos de “local” (equipo anfitrión) y “visitante” se aplican en competencias por equipos, excepto en los siguientes casos:
            a) Cuando el torneo se realiza en una sola ciudad o país (en torneos internacionales).
            b) Cuando el evento es una final única de cualquier torneo de copa.
            En la línea de apuestas, los equipos “local” y “visitante” aparecen enumerados como 1 y 2 respectivamente. En otros casos, la numeración es simbólica y la información sobre la sede del evento es meramente informativa.`
    },
    {
        id: 'disposiciones-generales',
        title: 'DISPOSICIONES GENERALES',
        description: `La Empresa acepta apuestas sobre eventos deportivos y de otro tipo (en adelante, “eventos”). Todas las apuestas se aceptan conforme a las normas vigentes. El Jugador debe leer y aceptar estas reglas.
            La Empresa puede modificar o complementar estas reglas, términos y métodos de cálculo de ganancias sin previo aviso. Las condiciones de apuestas realizadas antes de dichos cambios no se verán afectadas. Las apuestas posteriores estarán sujetas a las nuevas reglas.
            Las reglas específicas para cada tipo de deporte prevalecerán sobre las reglas generales.`
    },
    {
        id: 'tipos-de-apuestas',
        title: 'TIPOS DE APUESTAS',
        description: `La Empresa ofrece los siguientes tipos de apuestas:
            Apuesta simple (Ordinaria) – Apuesta sobre un único evento. La ganancia se calcula multiplicando el importe apostado por la cuota del resultado.
            Combinada (Express) – Apuesta sobre varios eventos independientes. La ganancia es el importe multiplicado por el producto de todas las cuotas. Se permite combinar diferentes deportes si no están relacionados. Se considera ganadora solo si todos los resultados se aciertan. Un fallo anula toda la combinada. Cuota máxima: 2000.
            Sistema – Conjunto completo de combinadas según el tamaño elegido por el Cliente. La ganancia es la suma de las combinadas ganadoras del sistema. Cuota máxima: 2000.
            Express+ – Lista diaria de eventos con cuotas elevadas y condiciones especiales. Permite mejorar la cuota frente a la línea regular y reducir el número de eventos para alcanzar la cuota máxima (K = 2000).
            Mínimo de eventos: 3.
            No se aceptan apuestas de tipo “Sistema” en algunos casos (según reglas).
            Prohibido en combinadas y sistemas:
            Incluir diferentes resultados del mismo evento.
            Apuestas opuestas o relacionadas al mismo jugador/equipo en el mismo torneo o evento (ej. ganador del partido y del torneo).
            Tales apuestas serán anuladas y reembolsadas, incluso si fueron aceptadas por el sistema.
            Las cuotas pueden ajustarse según condiciones específicas del evento (hándicap, total, aplazamiento, etc.). Si un evento se aplaza, se aplica cuota 1.0.`
    },
    {
        id: 'bet-builder-constructor-de-apuestas',
        title: 'Bet Builder (Constructor de Apuestas)',
        description: `Bet Builder – Apuesta combinada sobre eventos relacionados dentro de un solo partido.
            Máximo de selecciones por apuesta: 9.
            Disponible en todos los tipos de apuestas: Ordinaria, Combinada, Sistema.
            Se considera ganadora si todos los resultados son acertados. Si uno falla, se pierde la apuesta.
            Si una selección se liquida con cuota 1.0 y las demás no se pierden, la apuesta se liquida con cuota 1.0.
            Ejemplos:
            Apuesta 1
            Tipo: Ordinaria
            Combinación: Gana Real Madrid + Más de 2.5 goles + Ambos equipos marcan
            Cuota: 2.15
            Importe: 100
            Resultado: 3-1
            Ganancia: 2.15 × 100 = 215
            Apuesta 2
            Tipo: Combinada de dos eventos
            Importe: 100
            Real Madrid – Barcelona
            Bet Builder: Gana Real + Más de 3 goles + Ambos marcan
            Resultado: 2-1 → Cuota 1
            Milan – Inter
            Resultado: Gana Milan
            Cuota: 1.85
            Resultado: 2-1
            Ganancia: 1 × 1.85 × 100 = 185
            Notas:
            No se permite repetir la misma selección.
            Bet Builder no está disponible si se repiten selecciones dentro del mismo evento.
            Máximo 9 selecciones en Bet Builder.
            Hasta 100 selecciones en el carrito de apuestas.`
    },
    {
        id: 'condiciones-de-aceptación-de-apuestas',
        title: 'CONDICIONES DE ACEPTACIÓN DE APUESTAS',
        description: `Las apuestas se aceptan según la línea, es decir, la lista de eventos con cuotas propuestas por la Empresa.
            La línea puede cambiar (cuotas, hándicaps, totales, límites, etc.) después de cada apuesta. Sin embargo, las condiciones de apuestas ya realizadas no cambian.
            Las apuestas se aceptan solo si el saldo del Cliente lo permite.
            El total apostado por un Cliente sobre un evento en un día no debe superar el límite máximo indicado. Las apuestas que superen dicho límite serán rechazadas.
            Las apuestas deben realizarse antes de que comience el evento. Apuestas hechas después del inicio son inválidas y serán reembolsadas, incluso si fueron parte de combinadas.
            Excepción: Apuestas en vivo (Live), que son válidas solo si se hacen antes del final del evento.
            Los resultados en Live se muestran solo como referencia. Errores en esta información no justifican cancelaciones. La Empresa no es responsable por su precisión.
            La fecha y hora del evento en la línea son informativas. Si hay errores, no se reembolsará la apuesta si se hizo antes del inicio real (según fuentes oficiales).
            La Empresa no se responsabiliza por errores tipográficos en nombres de jugadores, equipos o ciudades.
            En caso de errores humanos, fallos evidentes del sistema (cuotas incorrectas, inconsistencias) o fraude, la Empresa puede anular apuestas, incluso hechas antes o después del evento, y devolver el importe al Cliente.
            Una vez confirmada y asignado el número de apuesta, el Cliente no puede modificarla ni cancelarla.
            Fallas técnicas o de conexión no justifican cancelación si la apuesta se registró en el servidor.
            La pérdida de contraseña no justifica cancelaciones ni reclamos.
            Cada Cliente puede tener una sola cuenta de juego, salvo autorización previa de la Empresa.
            Está prohibido compartir datos de cuenta con terceros.
            La Empresa se reserva el derecho a:
            Limitar o rechazar apuestas sin justificación ni aviso previo.
            En caso de sospecha de fraude, anular todas las apuestas del Cliente, devolver el saldo y cerrar la cuenta.
            Cerrar una cuenta a solicitud del Cliente sin posibilidad de reactivación.
            Las decisiones sobre rechazo de apuestas o cierre de cuentas se toman según estas reglas, el historial del Cliente y las circunstancias específicas.`
    },
    {
        id: 'condiciones-especiales',
        title: 'CONDICIONES ESPECIALES',
        description: `Si un evento:
            1.1. No se realiza en la fecha programada y se reprograma por más de 36 horas desde la hora indicada en el cupón — todas las apuestas sobre ese evento se liquidan con cuota 1 (salvo que las reglas del deporte en particular indiquen lo contrario).
            1.2. Es suspendido y no finaliza dentro de las 12 horas desde la hora de inicio establecida en el cupón — las apuestas sobre resultados ya determinados se liquidan conforme al resultado real. Las demás se liquidan con cuota 1 (salvo que se especifique lo contrario).
            Si un partido se traslada a cancha neutral, las apuestas se mantienen. Si se traslada al estadio del equipo contrario — se devuelven y se eliminan de las combinadas. Si el cambio de sede ocurre dentro de la misma ciudad — las apuestas siguen vigentes.
            Si se modifica o anula el resultado (protestas, dopaje, etc.), se mantiene el resultado original para el cálculo de apuestas.
            Si se declara a varios ganadores del evento, todas las apuestas a esos participantes se liquidan con cuota 1.
            La Empresa publica los resultados oficiales basándose en fuentes y actas oficiales. En caso de discrepancias entre fuentes, la Empresa toma la decisión final.
            Si hay indicios de que una apuesta fue realizada con conocimiento previo del resultado o con ventaja significativa (por ejemplo: marcador, expulsión, sustitución), la Empresa podrá anularla, gane o pierda.
            Para apuestas en vivo (Live), se utilizan los datos internos de la Empresa. Si el resultado no puede determinarse por fallos técnicos o falta de datos, las apuestas se liquidan con cuota 1.
            El Cliente debe revisar su cupón. En caso de cualquier error (independientemente de la causa o el responsable), la Empresa puede anular la apuesta y devolver el importe.
            Si luego de un recálculo por error de resultado el Cliente tiene saldo negativo, la cuenta será bloqueada hasta que se reponga el saldo. De no hacerlo, la Empresa puede suspender la aceptación de apuestas. Las apuestas realizadas antes del recálculo siguen siendo válidas.`
    },
    {
        id: 'límites-financieros',
        title: 'LÍMITES FINANCIEROS',
        description: `Apuesta mínima: 200 ARS
            Apuesta mínima en sistemas: 1/3 de la apuesta mínima del evento correspondiente
            Cuota máxima en combinadas: 2000. Si la cuota se supera, se calcula como 2000.
            La ganancia total por apuesta no debe superar el límite máximo permitido.
            El importe máximo de una apuesta depende del evento y del deporte. La Empresa lo define individualmente y puede cambiarlo sin previo aviso.
            La Empresa puede limitar montos para eventos específicos o establecer límites personales para Clientes, sin necesidad de notificación previa.`
    },
    {
        id: 'fútbols',
        title: 'FÚTBOLS',
        description: `Reglas generales
            Apuestas sobre tiempo reglamentario (2 tiempos de 45 min), salvo indicación contraria.
            En partidos de eliminación directa o finales, solo se consideran los 90 minutos, salvo que se indique lo contrario.
            Si el partido se pospone más de 36 h o se suspende y no finaliza dentro de 12 h, las apuestas no definidas se anulan.
            Si se invierte el orden de los equipos (local/visitante), las apuestas se anulan, salvo en cancha neutral.
            En caso de descalificación o anulación, se utiliza el resultado en el momento de la suspensión si la apuesta ya puede liquidarse.
            Tipos de apuestas
            Ganador del partido (1X2): resultado al término de los 90 minutos.
            Doble oportunidad (1X, 12, X2): se acierta si se cumple uno de los dos posibles resultados elegidos.
            Hándicap (Fora): puede ser entero, fraccionado o asiático. Si el resultado ajustado coincide con la línea — reembolso.
            Totales (goles): totales generales, individuales, par/impar.
            Goles del tiempo reglamentario.
            Si se acierta el valor exacto, puede haber reembolso si está indicado.
            0:0 = par.
            Apuestas combinadas
            Victoria + Ambos marcan
            Victoria + Total
            Ambos marcan + Total
            1er tiempo / Resultado final (ej.: P1 / P1 = gana el 1er tiempo y el partido)
            Todas las combinadas se liquidan sobre los 90 minutos reglamentarios.
            Apuestas por tiempos
            Ganador del primer/segundo tiempo
            Más/menos goles en el primer tiempo
            Hándicap y total por tiempo
            Apuestas se liquidan por el resultado de ese tiempo específico.
            Goleador / primero, último, cualquiera
            Según acta oficial.
            Goles en propia puerta no cuentan.
            Si el jugador no participa — reembolso.
            Tarjetas y faltas
            Amarilla = 1 punto, Roja directa = 2 puntos
            Doble amarilla = 3 puntos (1+2)
            Solo se cuentan tarjetas mostradas a jugadores en cancha, durante el tiempo reglamentario.
            No se cuentan tarjetas desde el banco o después del pitido final.
            Córners
            Total, hándicap, par/impar, primero/último.
            Solo los del tiempo reglamentario.
            Penales (si se otorgan / convierten / tanda de penales)
            Mercados especiales contemplan: asignación, disparo, acierto/error.
            En tanda de penales: solo se consideran los de la tanda, no los del tiempo regular.
            Clasificación / Campeón del torneo / Ganador de serie
            Ganador tras ida y vuelta.
            Se incluyen tiempos extras y penales si aplican.`
    },
    {
        id: 'fútbol-americano',
        title: 'FÚTBOL AMERICANO',
        description: `Reglas generales
            Las apuestas incluyen tiempo extra, salvo indicación contraria.
            Si se suspende y no termina en 12 h, se anulan apuestas no definidas.
            Si no se juega en la fecha prevista, las apuestas se anulan.
            Error en el orden local/visitante: se anulan salvo en campo neutral.
            Si aplica la “Mercy Rule” (finalización anticipada), se liquida con el marcador registrado.
            Tipos de apuestas
            Ganador (2 opciones): incluye tiempo extra. Si hay empate y no hay prórroga — se anula.
            Ganador del cuarto (3 opciones): según resultado oficial.
            1er tiempo / Final: sin tiempo extra.
            Totales de puntos: general, por equipo, par/impar, por cuartos y mitades. Incluyen tiempo extra.
            Si se acierta el valor exacto (total/hándicap), se anula.
            Margen de victoria: incluye prórroga.
            Hándicap: general, por cuarto o mitad. Si se acierta justo — reembolso.
            Cuarto más anotador: si hay empate entre varios — gana “2 o más”.
            Estadísticas
            Touchdowns (TD): Ganador (3 vías), doble oportunidad, hándicap, total. Un touchdown vale 6 puntos.
            Field goals (FG): Igual que los TD. Vale 3 puntos.
            Yardas en ofensiva: distancia recorrida en jugadas de ataque.
            Yardas por pase (Pass Yards): yardas ganadas por pases completados.
            Pases atrapados (Caught Passes): solo pases capturados por un compañero ofensivo.`
    },
    {
        id: 'fútbol-australiano',
        title: 'FÚTBOL AUSTRALIANO',
        description: `Reglas generales
            Todas las apuestas se calculan según el resultado oficial del tiempo reglamentario, sin incluir prórroga (salvo que se indique lo contrario).
            Si el partido se suspende y no finaliza dentro de las 12 horas desde la hora programada, las apuestas cuyos resultados no estén determinados se anulan.
            Si el partido se reprograma más de 36 horas después de la hora original, todas las apuestas se anulan.
            Tipos de apuestas
            Ganador del partido (2 opciones)
            Resultado del tiempo reglamentario. Si hay empate — apuestas anuladas.
            Ganador del partido (3 opciones)
            Victoria del primer equipo, empate o victoria del segundo equipo — en tiempo reglamentario.
            Hándicap
            Se calcula según el tiempo reglamentario. Si el resultado ajustado es igual a la línea — reembolso.
            Totales:
            Total general, par/impar, totales individuales por equipo.
            Se calcula según el tiempo reglamentario. Si el resultado coincide con la línea — reembolso.
            Clasificación a la siguiente ronda
            Se calcula según el resultado oficial de clasificación.
            El equipo puede clasificar en uno o más partidos.`
    },
    {
        id: 'bádminton',
        title: 'BÁDMINTON',
        description: `Reglas generales
            Si el partido se suspende y no finaliza en 12 horas, se anulan las apuestas no decididas.
            Si el partido es oficialmente suspendido y no se reanuda, las apuestas no determinadas se anulan.
            Si el partido se reprograma más de 36 horas desde la hora original — todas las apuestas se anulan.
            En dobles, si uno o más jugadores son reemplazados — apuestas anuladas.
            Tipos de apuestas
            Ganador del partido (2 opciones)
            Ganador del set (2 opciones)
            Se calcula según el resultado oficial. Si hay retiro o descalificación y al menos un set fue completado — se paga según el marcador. En otros casos — anulación.
            Hándicap del partido / del set / Victoria por diferencia
            Calculado según el resultado oficial. El hándicap es en puntos, salvo que se indique lo contrario. Si el jugador se retira y el resultado no estaba definido — anulación.
            Total de puntos (en el partido / por sets / individual / par-impar)
            Calculado según los puntos del resultado oficial.
            Si el jugador se retira y el total no se determina — anulación.
            Marcador exacto del partido
            Calculado según el resultado oficial. Si no se puede determinar — anulación.
            Cantidad de sets jugados
            Según el número oficial de sets completados. Si no se puede determinar — anulación.
            Carrera a N puntos
            Gana el jugador que anota primero el punto N en un set. Si se retira antes — anulación.
            ¿Habrá puntos extra?
            Si se juegan más de 21 puntos en un set, se cuenta como punto extra.
            ¿Quién anotará el punto N?
            Según los datos oficiales. Si no se anota — anulación.`
    },
    {
        id: 'bandy-hockey-sobre-hielo-con-pelota',
        title: 'BANDY (HOCKEY SOBRE HIELO CON PELOTA)',
        description: `Reglas generales
            Las apuestas se basan en el tiempo reglamentario (sin prórroga).
            Si el partido se suspende y no se finaliza en 12 horas, se anulan apuestas no definidas.
            Si se reprograma más de 36 horas después de la hora original — se anulan todas las apuestas.
            Si hay error en los equipos local/visitante — apuestas anuladas, salvo en campo neutral.
            El reglamento del partido es el de la federación, salvo que se indique otra cosa.
            Tipos de apuestas
            Ganador del partido (3 vías) / Doble oportunidad
            Se calcula por el tiempo reglamentario. No se incluyen goles en prórroga.
            Si cambia el reglamento — anulación.
            Hándicap
            Según el tiempo reglamentario. Si coincide con la línea — anulación.
            Cambio de reglamento — anulación.
            Total tiempo reglamentario / Par-impar / Totales por equipo
            Calculado por los goles en el tiempo reglamentario. Si coincide con la línea — anulación.
            Resultado 0:0 se considera par.
            Equipo que anota el gol N
            Según datos oficiales, en tiempo reglamentario.
            Carrera hasta N goles
            Gana el equipo que anota primero el gol N.
            Si hay cambio de reglamento o suspensión — anulación si el resultado no está definido.
            Clasificación a la siguiente ronda
            Según publicación oficial del torneo. Se requiere al menos un partido.`
    },
    {
        id: 'béisbol',
        title: 'BÉISBOL',
        description: `Reglas generales
            Todas las apuestas incluyen extra innings si hay empate.
            Si se suspende y no finaliza en 12 horas, se anulan apuestas no decididas.
            Si se pospone más de 12 horas desde la hora original — se anulan todas las apuestas.
            Si se cambia el lanzador antes del inicio — las apuestas siguen vigentes.
            Si hay error en local/visitante — apuestas anuladas, salvo en campo neutral.
            Si aplica la “Mercy Rule” — se paga según el marcador oficial.
            Tipos de apuestas
            Ganador del partido (2 opciones)
            Incluye extra innings.
            Si se juegan menos de 5 innings — anulación (salvo que el segundo al bate esté ganando tras 4.5 innings).
            Si se confirma el marcador antes de la suspensión — se paga.
            Si hay empate — anulación.
            Ganador del inning (3 vías) / Primeros 5 innings (3 vías)
            Se paga según el resultado oficial del inning o de los 5 primeros.
            El inning debe completarse, salvo que el resultado ya esté definido.
            Hándicap: del partido, primeros 5 innings, inning específico
            Se paga incluyendo extra innings.
            Si se juegan menos de 7 innings y no hay resultado — anulación (excepto si el segundo al bate lidera tras 6.5 innings).
            Totales: general, individual, por inning, primeros 5 innings
            Se calculan incluyendo extra innings.
            Si se juegan menos de 7 innings y no se define el total — anulación, salvo excepciones como en el hándicap.
            Resultado + Total
            Calculado con resultado oficial, incluyendo extra innings.
            ¿Habrá extra innings?
            Se gana si se juega al menos un extra inning.
            Si hay empate sin extra innings — anulación.
            ¿Quién anota primero?
            Según el primer equipo en anotar, incluyendo extra innings.
            Clasificación a la siguiente ronda
            Se paga según resultado oficial publicado.
            Apuestas estadísticas
            Se calculan según estadísticas oficiales del torneo. Ejemplos:
            Total de hits / carreras / errores
            Strikeouts (eliminación con tres strikes)
            Turnos al bate (At Bats)
            Doble jugada (Double Plays)
            Errores defensivos
            Hits del jugador
            Bases robadas
            Home runs
            ERA (promedio de carreras permitidas por el lanzador)
            Carreras anotadas por el jugador (Runs)`
    },
    {
        id: 'baloncesto',
        title: 'BALONCESTO',
        description: `Disposiciones generales
            Las apuestas se aceptan incluyendo la prórroga, si el partido termina empatado en el tiempo reglamentario.
            Excepción: las apuestas al resultado 1, X, 2 se liquidan solo según el tiempo reglamentario.
            En series de playoffs a dos partidos, si el reglamento indica que el ganador se determina por el resultado global, no se considera la prórroga (excepto en apuestas sobre la clasificación).
            Ejemplos:
            Partido 1: 79–71
            Partido 2: 80–80
            Global: 159–151 → No hay prórroga
            Partido 1: 85–80
            Partido 2: 96–91
            Global: 176–176 → Se juega prórroga, pero solo cuenta para apuestas de clasificación.
            Si el partido se suspende y no se finaliza en 12 horas, las apuestas no decididas se anulan.
            Si el partido se reprograma más de 36 horas después del horario original, todas las apuestas se anulan.
            Si hay error en los equipos (local/visitante) — apuestas anuladas, salvo cancha neutral.
            Si se aplica la “Mercy Rule”, se liquida por el marcador oficial.
            Tipos de apuestas
            Ganador del partido (2 opciones)
            Se calcula con prórroga incluida. Si no se juega prórroga — anulación.
            ¿Habrá prórroga?
            Se gana si se juega al menos una prórroga. Si hay empate sin prórroga — anulación.
            Ganador del cuarto o del medio tiempo (3 opciones)
            Se calcula según el período indicado, sin contar prórroga.
            Hándicap: partido, por cuartos, por la primera mitad
            Siempre se calcula con prórroga incluida.
            Totales: general, por equipo, por cuarto, mitad, par/impar
            Incluyen prórroga.
            Carrera hasta N puntos (por cuartos)
            Gana el equipo que anota primero N puntos en el cuarto. Si no se completa — anulación.
            Apuestas combinadas
            Un equipo gana todos los cuartos
            Un equipo gana el primer cuarto y el partido
            Cuarto más anotador / menos anotador (si hay empate — gana “2 o más”)
            Apuestas por mitades
            Ganar ambos tiempos → sin prórroga
            Ganar primer tiempo + partido → con prórroga
            Tiempo más o menos anotador → sin prórroga
            Resultado + total / Tiempo + partido / Rango de puntos / Clasificación
            Salvo que se indique lo contrario, se calcula con prórroga.
            Estadísticas de jugadores y equipos
            Datos oficiales del torneo.
            Se contabilizan: puntos, rebotes, asistencias, tapones, robos, faltas, tiros de 2 y 3 puntos.
            Doble-Doble: 10+ en dos categorías.
            Si un jugador no juega — apuesta anulada.
            Comparación entre jugadores: si uno no juega — todas las apuestas se anulan.`
    },
    {
        id: 'vóley-playa',
        title: 'VÓLEY PLAYA',
        description: `Disposiciones generales
            Las apuestas se aceptan sobre los sets programados (2 o 3), sin contar tiempos técnicos.
            Si el partido se suspende y no finaliza en 12 horas — apuestas anuladas, salvo si ya están decididas.
            Si se reprograma más de 36 horas — se anulan todas las apuestas.
            Si hay sustitución de jugadores en una pareja — todas las apuestas se anulan, salvo las ya calculadas.
            Tipos de apuestas
            Ganador del partido (2 opciones)
            Según resultado oficial.
            Si un jugador abandona o es descalificado:
            Si se completó al menos un set — se paga según marcador.
            Si no — anulación.
            Hándicap (partido / sets / puntos)
            Expresado en sets o puntos según la línea.
            Si hay abandono y el resultado no está claro — anulación.
            Totales (general / por equipo / por set / par-impar)
            Se calcula según puntos oficiales.
            Coincidencia exacta con la línea — anulación.
            Si no se termina el partido — anulación si el resultado no está definido.
            Marcador exacto
            Según resultado oficial.
            Si se suspende antes de completarse — anulación.
            Cantidad de sets jugados
            Apuesta sobre si se jugarán 2 o 3 sets.
            Si no puede determinarse — anulación.
            ¿Quién anota el punto N?
            Según protocolo oficial del set.
            Si no se anota — anulación.
            Carrera hasta N puntos
            Gana el equipo que anota N puntos primero en un set.
            Si no se completa — anulación.
            ¿Habrá punto extra?
            Si en un set a 21 puntos se juega hasta 22 o más — se considera punto extra.
            Se calcula según puntuación oficial.`
    },
    {
        id: 'boxeo-mma-ufc',
        title: 'BOXEO / MMA / UFC',
        description: `Disposiciones generales
            Todas las apuestas se basan en los resultados oficiales publicados por las organizaciones o promotores autorizados.
            Si la pelea se pospone más de 36 horas o se cancela — todas las apuestas se anulan.
            Si hay reemplazo de luchador, cambio de formato (número de asaltos, categoría de peso, etc.) — todas las apuestas se anulan, excepto las ya calculadas.
            Tipos de apuestas
            Ganador de la pelea (1, 2 o empate)
            Gana quien sea declarado oficialmente vencedor (por puntos, KO, TKO, descalificación, etc.).
            Si hay empate o empate técnico — se pierden las apuestas al ganador.
            Forma de victoria
            Puntos
            KO / TKO / RET (abandono) / DQ (descalificación)
            Empate / empate técnico
            Nota: KO/TKO/RET/DQ a veces se agrupan como “Victoria anticipada”.
            Victoria por decisión
            Puede dividirse en:
            Unánime
            Dividida
            Por mayoría
            ¿Habrá KO?
            Gana si la pelea termina por KO, TKO, RET o DQ.
            Total de asaltos
            Apuesta sobre si habrá más/menos de X.5 asaltos.
            Un asalto se considera completo si pasan 2:30 min en uno de 3 min.
            Hándicap por asaltos
            Comparación por número de asaltos ganados (por ejemplo, ±1.5, ±2.5).
            ¿Terminará la pelea antes del límite?
            Sí / No — se consideran KO, TKO, RET, DQ.
            Si va a la decisión de los jueces — gana la opción “No”.
            ¿Durará toda la pelea?
            Sí — se completan todos los asaltos programados.
            No — termina antes.
            Victoria en asalto específico / en tramo de asaltos
            Ej: “Victoria en asalto 1–2”, “Victoria en asalto 3–5”.
            ¿Habrá asalto adicional? (MMA)
            En algunos torneos, se juega un round extra si hay empate.
            Si se juega — gana la opción “Sí”.`
    },
    {
        id: 'tenis-de-mesa',
        title: 'TENIS DE MESA',
        description: `Disposiciones generales
            Todas las apuestas se basan en el tiempo regular del partido.
            Si el partido se suspende y no termina en 12 h — se anulan las apuestas no definidas.
            Si se reprograma más de 36 h — se anulan todas las apuestas.
            Si hay reemplazo de uno o ambos jugadores — apuestas anuladas, salvo las ya calculadas.
            Tipos de apuestas
            Ganador del partido
            Gana si el jugador es declarado oficialmente vencedor.
            Si un jugador se retira o es descalificado:
            Si se completó un set — se liquida según el marcador.
            En otros casos — anulación.
            Hándicap
            En puntos o sets (según la línea).
            Si el jugador se retira y el resultado no está claro — anulación.
            Totales: generales, individuales, por sets, par/impar
            Calculado según puntos o sets.
            Coincidencia exacta con la línea — anulación.
            Si el partido no termina y no se define — anulación.
            Marcador exacto
            Apuesta al resultado exacto en sets (ej. 3:1).
            Si no se completa — anulación.
            Cantidad de sets
            Se liquida según la cantidad de sets jugados oficialmente.
            Si no se puede determinar — anulación.
            ¿Quién anota el punto N en un set?
            Gana el jugador que llega primero a ese punto.
            Si no se juega — anulación.
            ¿Habrá punto extra?
            Si se juegan 12 puntos o más en un set a 11 — cuenta como punto extra.
            Carrera a N puntos
            Gana quien primero alcanza X puntos en el set.
            Si el set no termina — anulación.`
    },
    {
        id: 'críquet',
        title: 'CRÍQUET',
        description: `Disposiciones generales
            Todas las apuestas se basan en los resultados oficiales del torneo.
            Si el partido se pospone más de 36 h — se anulan, salvo apuestas ya definidas.
            Si el partido se suspende sin completarse — se anulan apuestas no definidas.
            Si el partido se declara “No Result” — se anulan todas las apuestas.
            Tipos de apuestas
            Ganador del partido
            Gana la apuesta si el equipo es declarado oficialmente vencedor.
            Si hay empate o “No Result” — se anulan todas las apuestas.
            Ganador de la serie
            Apuesta al equipo que gane una serie (3 o 5 partidos).
            Se calcula según resultado oficial de la serie.
            Mejor bateador / lanzador
            Apuesta al jugador con más carreras o eliminaciones.
            Si hay empate — se puede dividir la ganancia.
            Si el jugador no participa — anulación.
            Totales: de equipo, individuales, par/impar, overs, carreras
            Según estadísticas oficiales.
            Si se cambia el formato (menos overs) — algunas apuestas se anulan.
            Coincidencia exacta con la línea — anulación si no se indica lo contrario.
            Primer jugador eliminado
            Apuesta al primero en ser eliminado.
            Si el jugador no entra al campo — anulación.
            Método de victoria
            Por carreras, eliminaciones, método Duckworth-Lewis, DQ, etc.
            ¿Se jugará el over completo?
            Sí / No — depende de si se completan las 6 bolas del over.
            Si el partido se acorta — la apuesta puede anularse.
            Comparación entre jugadores
            ¿Quién anota más carreras, más eliminaciones, etc.?
            Si uno no juega — se anulan todas las apuestas.`
    },
    {
        id: 'esports-deportes-electrónicos',
        title: 'eSPORTS (DEPORTES ELECTRÓNICOS)',
        description: `Disposiciones generales
            Todas las apuestas se aceptan sobre torneos oficiales verificados por organizadores o plataformas (ESL, Blast, Valve, etc.).
            Si el partido se pospone más de 36 horas — todas las apuestas se anulan, salvo las ya decididas.
            Si se reemplaza a un jugador o equipo, la Empresa puede anular todas las apuestas, salvo las ya calculadas.
            El cálculo se basa en estadísticas oficiales del torneo.
            Tipos de apuestas (generales)
            Ganador del partido / mapa / serie
            Según resultado oficial. Si el partido se suspende y no se finaliza — anulación, salvo apuestas ya definidas.
            Marcador exacto
            Apuesta al resultado final en mapas (ej. 2:0, 2:1).
            Si no se completa el partido — anulación.
            Ganador del mapa (Mapa 1, Mapa 2…)
            Apuesta sobre el vencedor de un mapa específico.
            Si hay problemas técnicos o repetición del mapa — anulación.
            Hándicap / total por mapas
            Basado en mapas ganados.
            Si se acorta la serie (por ejemplo, de Bo3 a Bo1) — anulación.
            Hándicap / total por rondas
            Se cuentan todas las rondas del mapa.
            Si se cambia la cantidad de rondas — anulación.
            Par / impar por rondas o mapas
            Basado en marcador oficial.
            Disciplinas populares
            CS:GO / CS2
            Ganador del mapa, hándicap, total de rondas.
            Apuestas sobre muertes, headshots, primer kill, ronda con cuchillo, etc.
            Si se reinicia el mapa tras comenzar — se anulan las apuestas.
            Dota 2 / League of Legends
            Ganador del partido, mapa, marcador exacto, hándicap de kills, total de kills.
            Apuestas especiales: “First Blood”, primera torre, primer Roshan/dragón.
            Si un equipo gana por decisión sin destruir el nexo/trono — se paga según el resultado oficial.
            Valorant / Overwatch / Call of Duty
            Apuestas similares a CS:GO: hándicap por rondas, total, ganador del mapa, MVP, etc.
            FIFA / eFootball
            Ganador del partido, total de goles, marcador exacto.
            Si el partido es jugado CPU vs CPU — se anula salvo que se especifique lo contrario.`
    },
    {
        id: 'floorball-fútbol-sala-con-palo',
        title: 'FLOORBALL (FÚTBOL SALA CON PALO)',
        description: `Disposiciones generales
            Todas las apuestas se aceptan por el tiempo reglamentario (3 periodos de 20 minutos), sin contar prórroga salvo que se indique en la línea.
            Si el partido se pospone más de 36 h — apuestas anuladas, salvo ya liquidadas.
            Si se suspende y no finaliza en 12 h — se anulan apuestas no decididas.
            Si hay error en la designación de local/visitante — apuestas anuladas, salvo en cancha neutral.
            Tipos de apuestas
            Ganador del partido (3 vías) / Doble oportunidad
            Según el tiempo reglamentario. Goles en prórroga o penales no se cuentan.
            Victoria incluyendo prórroga / penales
            Estas apuestas se aceptan solo si se indica (ej. “Ganador con OT/penales”).
            Hándicap
            Solo se cuentan los goles en tiempo reglamentario. Si el resultado coincide con la línea — anulación.
            Totales (general, por equipo, por periodos / par-impar)
            Basado en goles en tiempo reglamentario. Coincidencia exacta — anulación.
            0:0 se considera par.
            Resultado + total
            Apuestas combinadas se calculan con el resultado del tiempo reglamentario.
            Equipo que anota el gol N / Carrera a N goles
            Gana quien anota primero el gol N en tiempo reglamentario.
            Si no se determina — anulación.
            ¿Habrá prórroga?
            Se considera válido si se juega tiempo adicional, sin importar el resultado.`
    },
    {
        id: 'fórmula-1',
        title: 'FÓRMULA 1',
        description: `Disposiciones generales
            Todas las apuestas se basan en los resultados oficiales publicados por la FIA u otros organismos autorizados.
            Si la carrera se pospone más de 36 horas o se cancela — se anulan todas las apuestas, salvo ya decididas.
            Si la cantidad de vueltas se reduce pero la carrera es válida — apuestas se mantienen si se define el resultado.
            Si el piloto no toma la salida (DNS) — se anula la apuesta (salvo mercados tipo “no termina”).
            Si el piloto abandona (DNF) — la apuesta se pierde, salvo que se indique lo contrario.
            Tipos de apuestas
            Ganador de la carrera / Top-3 / Top-6 / Top-10
            Según clasificación oficial tras la carrera, incluyendo sanciones.
            Clasificación: ganador / entrar a Q3
            Si no hay clasificación — se anulan apuestas.
            Vuelta rápida (Fastest Lap)
            Gana el piloto con el tiempo más rápido.
            En caso de empate — se divide la ganancia.
            Solo se cuentan pilotos que terminen la carrera, salvo que se indique otra cosa.
            Comparación entre pilotos (H2H)
            Gana quien termine en mejor posición.
            Si ambos no terminan — gana quien haya recorrido más vueltas.
            Si abandonan en la misma vuelta — anulación.
            Terminará / No terminará la carrera
            Según clasificación oficial. Si no hay finalización — anulación.
            Primer / último en abandonar
            Según orden de abandono en la pista.
            ¿Habrá Safety Car?
            “Sí” si hay un coche de seguridad real (no virtual).
            Si solo hay VSC — pierde la opción “Sí”, salvo que se indique que cuentan ambos.
            Cantidad de líderes / cambios de líder
            Apuestas sobre cuántos pilotos lideraron la carrera (según estadísticas).
            Apuestas por equipos
            Ej.: victoria de equipo, ambos pilotos puntúan, ambos terminan.
            Se liquida según tabla oficial.`
    },
    {
        id: 'fútbol-sala-futsal',
        title: 'FÚTBOL SALA (FUTSAL)',
        description: `Disposiciones generales
            Todas las apuestas se aceptan sobre el tiempo reglamentario del partido, sin incluir prórroga ni penales, salvo que se indique lo contrario en la línea.
            Si el partido se pospone más de 36 horas o se suspende y no finaliza dentro de 12 horas, las apuestas no decididas se anulan.
            Si el partido se juega en cancha neutral — las apuestas siguen vigentes.
            Si hay error en la designación de local/visitante — se anulan todas las apuestas, salvo en cancha neutral.
            Tipos de apuestas
            Ganador del partido (3 opciones) / Doble oportunidad
            Se liquida según el tiempo reglamentario. No se incluye prórroga ni penales, salvo mercados especiales.
            Hándicap
            Puede ser entero, fraccionado o asiático.
            Se calcula sobre el tiempo reglamentario.
            Coincidencia exacta con la línea — reembolso.
            Totales: generales, individuales, par/impar
            Solo se cuentan los goles del tiempo reglamentario.
            Coincidencia exacta — anulación.
            Resultado 0:0 se considera par.
            Apuestas combinadas
            Victoria + Total
            Ambos equipos anotan + Total
            Resultado + Ambos anotan
            Todas se calculan por el tiempo reglamentario.
            Tiempos / periodos
            Victoria en primer/segundo tiempo
            Total por tiempo
            Hándicap por tiempo
            Tiempo más anotador
            ¿Habrá prórroga o penales?
            Apuestas aceptadas solo si figuran en la línea.
            Se paga si se juega prórroga o penales, sin importar el resultado.
            Goleador (primero, último, cualquiera)
            Según acta oficial.
            Si el jugador no participa — anulación.
            Goles en propia puerta no se cuentan.`
    },
    {
        id: 'balonmano-handball',
        title: 'BALONMANO (HANDBALL)',
        description: `Disposiciones generales
            Las apuestas se aceptan por el tiempo reglamentario del partido (2 tiempos de 30 minutos), sin contar prórroga ni penales, salvo que se indique en la línea.
            Si el partido se pospone más de 36 horas o se suspende y no se completa en 12 horas — las apuestas no decididas se anulan.
            Si hay error en los equipos local/visitante — apuestas anuladas, salvo en cancha neutral.
            Tipos de apuestas
            Ganador del partido (3 vías) / Doble oportunidad
            Victoria del equipo 1, empate o victoria del equipo 2.
            Se calcula por el tiempo reglamentario.
            Ganador con prórroga incluida
            Apuesta válida si así se indica en la línea. Incluye prórroga y penales.
            Hándicap
            Solo se cuentan los goles del tiempo reglamentario.
            Coincidencia exacta con la línea — reembolso.
            Totales: generales, individuales, por tiempo, par/impar
            Basado en el tiempo reglamentario.
            Coincidencia exacta — anulación.
            Resultado 0:0 se considera par.
            Apuestas combinadas
            Victoria + Total
            Victoria en tiempo + victoria en partido
            Resultado + Ambos anotan
            Todas se calculan por el tiempo reglamentario.
            Apuestas por mitades
            Victoria / empate / total en primer o segundo tiempo
            Tiempo más anotador
            Más/menos goles en un tiempo
            ¿Habrá empate / prórroga / penales?
            Se aceptan como mercados separados, según el torneo.
            Se paga si efectivamente se juega tiempo extra o penales.
            Diferencia de goles
            Apuesta sobre margen de victoria (ej. victoria por 1–3 goles).
            Se calcula por el tiempo reglamentario.`
    },
    {
        id: 'hockey-sobre-hielo',
        title: 'HOCKEY SOBRE HIELO',
        description: `Disposiciones generales
            Por defecto, todas las apuestas se aceptan sobre el tiempo reglamentario del partido (3 periodos de 20 minutos), sin incluir prórroga ni penales, salvo que se indique lo contrario en la línea.
            En partidos de playoffs, si la línea dice “con prórroga y penales”, esos periodos se incluyen en el cálculo.
            Si el partido se pospone más de 36 horas o se suspende y no finaliza en 12 horas, las apuestas no definidas se anulan.
            Si hay error en la asignación de local/visitante — apuestas anuladas, salvo en cancha neutral.
            Si el partido termina anticipadamente (por ejemplo, derrota técnica), se usa el marcador al momento de la suspensión para calcular las apuestas ya decididas.
            Tipos de apuestas
            Ganador del partido (3 vías) / Doble oportunidad
            Se calcula solo por los 60 minutos reglamentarios, sin incluir prórroga.
            Ganador con prórroga / penales
            Si se indica en la línea, la apuesta incluye prórroga y penales, si se juegan.
            Hándicap
            Se calcula por el tiempo reglamentario, salvo que se indique lo contrario.
            Coincidencia exacta con la línea — reembolso.
            Totales: general, individual, por periodos / par-impar
            Por defecto, solo se consideran los 60 minutos.
            Si coincide exactamente con la línea — anulación (si está indicado).
            Apuestas combinadas
            Victoria + Ambos anotan
            Victoria + Total
            Resultado + Par/impar
            Todas se calculan por el tiempo reglamentario, salvo indicación en contra.
            Apuestas por periodo
            Victoria, hándicap, total por periodo
            Periodo más anotador
            Victoria en 2+ periodos
            ¿Habrá prórroga / penales?
            Se apuesta sobre si se jugará tiempo extra o tanda de penales.
            Goleador (primero, último, cualquiera)
            Según acta oficial.
            Autogoles no cuentan.
            Si el jugador no participa — anulación.
            Tiempo de penalización / tiros / bloqueos
            Solo se considera el tiempo reglamentario, salvo que se indique lo contrario.
            Ejemplos: total de minutos de penalización, tiros a portería, bloqueos, face-offs, etc.`
    },
    {
        id: 'lacrosse',
        title: 'LACROSSE',
        description: `Disposiciones generales
            Las apuestas se aceptan sobre el tiempo reglamentario, salvo que se indique lo contrario.
            En algunos torneos (como NCAA o PLL), la prórroga forma parte del reglamento — en esos casos, puede incluirse en el cálculo si la línea lo especifica.
            Si el partido se pospone más de 36 horas o se suspende y no se finaliza en 12 horas — se anulan las apuestas no decididas.
            Si hay error en la designación de equipos — apuestas anuladas, salvo en cancha neutral.
            Tipos de apuestas
            Ganador del partido (3 vías) / Doble oportunidad
            Se calcula sobre el tiempo reglamentario (por ejemplo, 4 cuartos).
            En caso de empate — se paga la apuesta al empate (si está disponible) y pierden las demás.
            Ganador con prórroga incluida
            La apuesta incluye prórroga si esta se juega según el reglamento.
            Hándicap
            Se cuentan solo los goles del tiempo reglamentario, salvo que se indique lo contrario.
            Coincidencia con la línea — reembolso.
            Totales: general, individual, por tiempos / par-impar
            Solo se consideran los goles del tiempo reglamentario.
            Coincidencia exacta — anulación.
            Resultado 0:0 se considera par.
            Apuestas por tiempos / periodos
            Victoria, total, hándicap en el 1º o 2º tiempo, o por cuartos
            Periodo con más goles
            Apuestas combinadas
            Victoria + Total
            Victoria en el primer tiempo + partido
            Resultado + Ambos anotan
            Se calculan por el tiempo reglamentario, salvo que se indique lo contrario.`
    }
]