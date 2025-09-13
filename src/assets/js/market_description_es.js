export const marketDescriptionData = [
    {
        id: 'fútbol',
        title: 'Fútbol',
        description: `Las apuestas en partidos de fútbol se aceptan en el tiempo principal, a menos que el organizador especifique lo contrario en la Línea. Los resultados registrados en el tiempo añadido y en la tanda de penaltis no se tienen en cuenta a la hora de calcular las apuestas sobre los resultados ofrecidos para el tiempo principal. El tiempo compensado por el árbitro se atribuye a la mitad correspondiente o al tiempo principal del partido. El tiempo principal de los partidos de fútbol se fija en 90 minutos de juego (en dos tiempos de 45 minutos cada uno). En el caso de partidos de fútbol con un formato diferente, en la línea aparece una marca especial sobre el formato del partido. El formato del partido también puede cambiar durante el partido. En tales casos, todas las apuestas se valorarán según el resultado final, si el organizador ha realizado una marca especial en la línea sobre el posible cambio del formato del partido; en ausencia de dicha marca en la línea, todas las apuestas se valorarán según la cuota "1" (uno), excepto aquellas apuestas cuyos resultados ya se conozcan de forma inequívoca y no dependan del formato del partido.

            Un partido de fútbol (de 90 minutos de duración) interrumpido y no continuado o finalizado en un plazo de 24 horas se considera disputado si se han jugado al menos 70 minutos. Los resultados de los partidos interrumpidos y fallados, que ya se conocen inequívocamente en el momento de la interrupción del partido y no dependen del resultado final del mismo, están sujetos a liquidación, y las demás apuestas se liquidan con cuota "1" (uno).

            resultado Resultado: se le ofrece predecir qué equipo ganará el partido. Es posible apostar por una de las siguientes opciones:
            P1 - victoria del equipo 1.
            P2 - victoria del equipo 2.
            X - el partido terminará en empate.

            Doble oportunidad: se ofrece apostar a dos posibles resultados del partido al mismo
            tiempo. Si uno de los resultados se pronostica correctamente, la apuesta se valorará como ganadora. Son posibles las siguientes opciones de apuesta:
            1X - una victoria para el equipo 1 o un empate.
            12 - Gana el equipo 1 o el equipo 2.
            X2 - una victoria para el equipo 2 o un empate.
            Ejemplo:
            Al final del partido con el resultado 2:2, las apuestas realizadas a los resultados 1X y X2 se valorarán como ganadoras, mientras que las apuestas al resultado 12 se valorarán como perdedoras.




            Resultado sin empate: se ofrece apostar por la victoria de uno de los equipos en el
            partido, y si el partido termina en empate, la apuesta se resolverá con una devolución. Son posibles las siguientes opciones de apuesta:
            Equipo 1 - victoria del equipo 1. En caso de empate se devolverá la apuesta.
            Equipo 2 - victoria del equipo 2. En caso de empate se devolverá la apuesta.


            Total: La apuesta se ofrece para apostar que el número total de goles marcados en el
            partido será mayor o menor que el valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Total más: el número total de goles marcados será mayor que el valor del argumento de apuesta seleccionado. Si el número total de goles y el valor del argumento son iguales, la apuesta se resolverá con una devolución.
            Ejemplo:
            Apuesta: total sobre (3). En esta apuesta, "3" es el argumento de la apuesta. Por lo tanto, para que la apuesta se liquide como ganadora, el número total de goles marcados debe ser superior a 3. Si el número total de goles es igual a 3, la apuesta se calculará como ganadora.
            Total menos: el número total de goles marcados será inferior al valor del argumento seleccionado. Si el número de goles y el valor del argumento coinciden, la apuesta se resolverá con una devolución.
            Ejemplo: Apuesta
            : total inferior a (3). En esta apuesta, "3" es el argumento de la apuesta. Así, para que la apuesta se liquide como ganadora, el número total de goles marcados en el partido debe ser inferior a 3. Si el número total de goles será 3, la apuesta se calculará como ganadora.

            Total: se ofrece para apostar al número de goles marcados en el partido. Son posibles
            las siguientes opciones de apuesta:

            Total over: el número total de goles marcados será superior al valor del argumento de apuesta seleccionado.
            Ejemplo:
            Apuesta: Total sobre (3). En esta apuesta, "3" es el argumento de la apuesta. Por lo tanto, para que la apuesta se considere ganadora, el número total de goles marcados debe ser superior a 3.

            Total igual: el número total de goles marcados será igual al valor del argumento de apuesta seleccionado.
            Ejemplo: Apuesta
            : Total igual a (3). En esta apuesta, "3" es el argumento de la apuesta. Por lo tanto, para que la apuesta se considere ganadora, el número total de goles marcados debe ser igual a 3.

            Total menos: el número total de goles marcados será menor que el valor del argumento seleccionado.
            Ejemplo: Apuesta
            : Total inferior a (3). En esta apuesta, "3" es el argumento de la apuesta. Así, para que la apuesta se calcule como ganadora, el número total de goles marcados en el partido debe ser inferior a 3.
            Lo que ocurre primero en cinco minutos
            Qué ocurrirá primero en 5 minutos: se le invita a predecir qué acción ocurrirá primero en el partido dentro de un periodo de tiempo especificado de cinco minutos. Se ofrecen las siguientes opciones de apuesta:
            En
            Penalti
            Saque de meta
            Esquina
            Penalti
            Ninguna de las sugerencias
            Ejemplo

            El jugador ha realizado una apuesta a Qué ocurrirá primero en 5 minutos: Saque de esquina (05:00-09:59). Para que la apuesta se considere ganadora, un saque de esquina debe ser el primer saque de esquina del partido entre el minuto 5:00 segundos y el minuto 9:59 segundos.
            *Nota: en el sitio web, este mercado se presenta en una pestaña Minutos separada (similar a las pestañas para el 1er tiempo, el 2º tiempo, las esquinas, etc.).


            Próximo minuto: se le pide que pronostique qué acción ocurrirá (o no) durante el
            periodo de tiempo especificado de un minuto. Se ofrecen las siguientes opciones de apuesta:
            Objetivo: sí/no
            Esquina : sí/no
            Saque de puerta: sí/no
            Penalti: sí/no
            Salida: sí/no
            Tarjeta: sí/no
            Sanción: sí/no
            Ejemplo

            El jugador ha apostado Próximo minuto: Gol: Sí (02:00 - 02:59). Para que la apuesta se considere ganadora, debe producirse un gol entre el minuto 2:00 y el minuto 2:59.
            *Nota: en el sitio web, este mercado se presenta en una pestaña Minutos separada (similar a las pestañas para el 1er tiempo, el 2º tiempo, las esquinas, etc.).




            Primer tiempo o partido: Se le invita a pronosticar la victoria de uno de los equipos en
            el primer tiempo o en todo el partido. Son posibles las siguientes opciones de apuesta:
            P1: El equipo 1 ganará el primer tiempo o el partido.
            X: o el primer tiempo o el partido terminará en empate.
            P2: El equipo 2 ganará el primer tiempo o el partido.


            Team to Score: predecir si los equipos marcarán goles en el partido. Son posibles las
            siguientes opciones de apuesta:
            El equipo 1 marcará:
            Sí - El Equipo 1 marcará al menos 1 gol en el partido.
            No - El equipo 1 no marcará ningún gol en el partido.
            El equipo 2 marcará:
            Sí - El equipo 2 marcará al menos 1 gol en el partido.
            No - El equipo 2 no marcará ningún gol en el partido.
            Ambos equipos marcarán:
            Sí, cada equipo marcará al menos un gol.
            No - uno de los equipos no marcará ningún gol o ninguno de los dos marcará ningún gol.
            Sólo un equipo marcará:
            Sí, sólo uno de los equipos marcará goles en el partido.
            No, ambos equipos marcarán goles en el partido.


            Primer gol
            Primer gol: Se ofrece apostar a qué equipo marcará el primer gol. Son posibles las siguientes opciones de apuesta:
            Equipo 1: El equipo 1 marcará el primer gol del partido.
            Equipo 2: El equipo 2 marcará el primer gol del partido.
            Nadie: ninguno de los dos equipos marcará goles en el partido.

            Resultado en un plazo determinado: se le pide que pronostique el resultado en un
            plazo determinado. En este tipo de apuesta, el resultado que se registró antes del inicio del periodo de tiempo especificado no se incluye en la apuesta.

            Ejemplo:
            Apuesta: P1: 16-30 min. Para que la apuesta se considere ganadora, el Equipo 1 debe ganar dentro del periodo de tiempo especificado. Es importante que el resultado registrado antes del inicio del periodo de tiempo especificado no se incluya en el cálculo de la apuesta.
            Supongamos que en el minuto 16 del partido el resultado era 0-0, y en el minuto 27, el equipo 1 marca un gol. En este caso, la apuesta se calculará como ganadora.
            Supongamos ahora que en el minuto 16 el marcador del partido era 2-0 (se marcaron goles en los minutos 10 y 14), y que del minuto 16 al 30 no se marcó ningún gol. En este caso, la apuesta se liquidará como pérdida, ya que el resultado registrado antes del minuto 16 no entra en el cálculo de la apuesta.


            Total en el periodo de tiempo especificado: la apuesta se ofrece para apostar que el
            número total de goles marcados en el partido durante el periodo de tiempo especificado será mayor o menor que el valor del argumento de apuesta seleccionado. En este tipo de apuesta, no se tienen en cuenta los goles marcados antes del inicio del periodo de tiempo especificado.

            Ejemplo:
            Apuesta: Total de 16-30 min. Más (0.5). Para que la apuesta se calcule como ganadora, el número total de goles durante el periodo de tiempo especificado debe ser superior a 0,5. Es importante que el resultado registrado antes del inicio del periodo de tiempo especificado no entre en el cálculo de la apuesta.
            Supongamos que en el minuto 16 del partido el marcador era 0-0, y en el minuto 20 el marcador pasa a ser 0-1. En este caso, la apuesta se calculará como ganadora.
            Supongamos ahora que en el minuto 16 el marcador era 0-1 (el gol se marcó en el minuto 4). En el período comprendido entre el minuto 16 y el 30 no se marcó ningún gol. En este caso, la apuesta se calculará como pérdida, ya que los goles marcados antes del minuto 16 no se incluyen en el cálculo de la apuesta.


            Se ofrece apostar a que se marcará un gol en el periodo de tiempo especificado. Son
            posibles las siguientes opciones de apuesta:
            Ejemplo:
            Apuesta: Gol del minuto 60 al 70: sí - para que la apuesta se liquide como ganadora del minuto 60 al 70, debe marcarse un gol en el partido (los goles tempraneros o tardíos no se tienen en cuenta a la hora de calcular la apuesta).
            ¡Importante! El
            tiempo exacto para tener en cuenta este tipo de apuestas se determina sin tener en cuenta los segundos. Por ejemplo, si el gol se marcó en el minuto 70 07 segundos, se considera el minuto 71. Asimismo, el minuto 11 0 segundos, se considera el minuto 12.

            Fora
            Hándicap: Un hándicap es una ventaja positiva o negativa que se añade al resultado de un equipo. Para que una apuesta con hándicap se calcule como ganadora, el equipo por el que se apuesta debe ser el ganador del partido después de que la ventaja reclamada por la apuesta se haya aplicado al resultado del equipo.

            Hándicap positivo: Este hándicap consiste en añadir goles, cuyo número viene determinado por el valor del argumento de la apuesta, a la puntuación total del equipo por el que se ha apostado.

            Ejemplo:
            Apuesta: Handicap 2 (2). La apuesta se realiza al equipo 2, y (2) es el argumento de la apuesta. Para que la apuesta se considere ganadora, el equipo 2 debe ganar el partido después de que se añadan 2 goles a su marcador. Consideremos tres posibles resultados de la apuesta:
            El partido terminó con un resultado de 2:1. Si se añaden 2 goles al resultado del equipo 2, el marcador pasa a ser 2:3. En este caso, la apuesta se calculará como ganadora, porque tras la adición de goles, el equipo 2 se convirtió en el ganador del partido.
            El partido terminó con un resultado de 3:0. Si se añaden 2 goles al resultado del equipo 2, el marcador pasa a ser 3:2. En este caso, la apuesta se calculará como pérdida, porque después de añadir los goles el equipo 2 pierde el partido.
            El partido terminó con un resultado de 2:0. Si se añaden 2 goles al resultado del equipo 2, el marcador pasa a ser 2:2. En este caso, la apuesta se calculará como ganancia, porque después de añadir los goles, el resultado se convierte en empate.
            Hándicap de apuesta negativo: Este hándicap consiste en restar los goles, cuyo número viene determinado por el argumento de apuesta seleccionado, del resultado total del equipo por el que se ha apostado.

            Ejemplo:
            Apuesta: Hándicap 1(-2). La apuesta se realiza al equipo 1 y (-2) es el argumento de la apuesta. Para que la apuesta se considere ganadora, el equipo 1 debe ganar el partido después de que se hayan descontado 2 goles de su resultado. Consideremos tres posibles resultados de la apuesta:
            El partido terminó con un resultado de 4:1. Al restar 2 goles del resultado del equipo 1, el marcador pasa a ser 2:1. En este caso, la apuesta se calculará como ganadora, porque después de restar los goles, el equipo 1 sigue siendo el ganador del partido.
            El partido terminó con un resultado de 2:1. Al restar 2 goles del resultado del equipo 1, el marcador pasa a ser 0:1. En este caso, la apuesta se calculará como pérdida, ya que tras la resta de goles, el equipo 1 pierde el partido.
            El partido terminó con un resultado de 4:2. Al restar 2 goles del resultado del equipo 1, el marcador pasa a ser 2:2. En este caso, la apuesta se calculará como ganancia, porque después de restar los goles, el resultado se convierte en empate.



            Handicap asiático (doble): En esta apuesta, el argumento es un número que es
            múltiplo de 0,25 (es decir, divisible por 0,25 sin resto). Por ejemplo, 0,25; 1,25; 1,75,
            etc. Cuando se apuesta a cuota asiática, la apuesta se divide en dos apuestas iguales con la misma cuota, pero con argumentos diferentes. En una apuesta, el argumento será el número obtenido tras sumar 0,25 al argumento principal. En la otra apuesta, el argumento será el número obtenido tras restar 0,25 al argumento principal.

            Ejemplo:
            Apuesta: Hándicap 2 (1,75) con cuota 3 e importe de apuesta de 100 rublos. La apuesta se realiza al equipo 2, (1,75) es el argumento de la apuesta. Esto significa que la apuesta se divide en dos apuestas:

            Handicap 2(1.5), con cuota de 3 y cantidad apostada de 50 rublos (argumento de apuesta aquí: 1.75-0.25)

            Handicap 2(2), con cuotas de 3 y cantidad apostada de 50 rublos (argumento de apuesta aquí:1.75+0.25)

            Así, obtenemos dos apuestas regulares en el hándicap, y el cálculo se hará sobre el resultado de estas dos apuestas. Consideremos las posibles variantes de cálculo de esta apuesta:
            La apuesta Handicap 2(1.75) se valora totalmente como ganadora. Esto significa que tanto el Hándicap 2(1.5) como el Hándicap 2(2) deben valorarse como ganados. Para calcular el importe ganador, el importe total de la apuesta debe multiplicarse por la cuota. El importe de la apuesta es igual a 100 rublos y la cuota es 3. Por lo tanto, la ganancia será: 100×3=300
            La apuesta Handicap 2(1.75) se liquida completamente como pérdida. Esto significa que tanto la apuesta Handicap 2(1.5) como la apuesta Handicap 2(2) se valorarán como perdidas. Por ejemplo, si el resultado del partido es 3-0, ambas apuestas se valorarán como perdidas.
            La apuesta Fore 2(1,75) se calcula como media pérdida. Esto significa que una de las apuestas debe calcularse como pérdida y la otra como ganancia. Por ejemplo, si el resultado del partido es 2:0, la apuesta FORA 2(2) se calculará como ganancia y la apuesta FORA 2(1.5) se calculará como pérdida. En este caso, el importe de la devolución será igual a la mitad del importe total de la apuesta. El importe total de la apuesta es de 100 rublos, por lo que el importe de la devolución será de 50 rublos.
            Veamos ahora un ejemplo de una apuesta en Fora Asiática (Doble), que se salda con una ganancia a medias:
            Apuesta: Hándicap 2(0,25) con cuota 2, y el importe de la apuesta es de 200 rublos. La apuesta se realiza al equipo 2, (0,25) es el argumento del hándicap. Esto significa que la apuesta se divide en dos apuestas:
            Forex 2(0.5) con cuotas de 2, y cantidad apostada de 100 rublos (argumento de la apuesta aquí: 0.25+0.25)
            Forex 2(0) con cuotas de 2, y cantidad apostada de 100 rublos (argumento de apuesta aquí: 0.25-0.25)

            Supongamos que el partido terminó con el marcador 0:0. En este caso, la apuesta se calculará como media ganancia. Esto significa que una apuesta se calculará como ganancia y la segunda como devolución. En este caso, la apuesta se calculará como ganancia y la segunda como devolución. El importe ganador se calcula según la siguiente fórmula:
            Importe de la apuesta × (coeficiente +1)÷2
            En este caso, 200 × (2+1)÷2=300.




            Total asiático (doble): en este tipo de apuesta, el argumento del total es un número que
            es múltiplo de 0,25 (es decir, divisible por 0,25 sin resto). Por ejemplo, 0,25; 1,25; 1,75, etc. Cuando se apuesta al total asiático, la apuesta se divide en dos apuestas iguales con la misma cuota, pero con argumentos diferentes. En una apuesta, el argumento será el número obtenido tras sumar 0,25 al argumento principal. En la segunda apuesta, el argumento será el número obtenido tras restar 0,25 al argumento principal.
            Ejemplo:
            Apuesta Total superior a (0,75) con cuota de 2,5 e importe apostado de 200 rublos. Esto significa que la apuesta se divide en dos apuestas:
            Total mayor que (1) con coeficiente. 2,5 y cantidad apostada 100 (argumento total aquí: 0,75+0,25)
            Total superior a (0,5) con coeficiente. 2,5 y cantidad apostada 100 (el argumento total aquí es 0,75-0,25)

            Así, obtenemos dos apuestas estándar sobre el total, y el cálculo de la apuesta dependerá del resultado de estas 2 apuestas. Consideremos los posibles resultados de esta apuesta:
            Total sobre (0.75) se liquida totalmente por ganancia - significa que dos apuestas: Total sobre (1) y Total sobre (0.5) deben ser liquidadas por ganancia. Por ejemplo, si el resultado del partido es 1:1, ambas apuestas se valorarán como ganadoras. Para calcular la ganancia, el importe total de la apuesta debe multiplicarse por la cuota. En este caso 200 × 2.5=500.
            La apuesta total más (0,75) se valorará completamente como pérdida, lo que significa que ambas apuestas: total más (1) y total más (0,5) se valorarán como pérdida. Por ejemplo, si el resultado es 0:0, ambas apuestas se valorarán como perdidas.
            La apuesta Total más (0,75) se calcula a medias - significa que una de las apuestas debe calcularse por ganancia y la otra por devolución. Por ejemplo, si el resultado es 1:0, la apuesta Total más (0,5) se calculará como ganancia, y la apuesta Total más (1) se calculará como devolución. El importe de las ganancias se calcula mediante la siguiente fórmula:
            Importe de la apuesta × (coeficiente +1)÷2
            En este caso: 200 × (2.5+1) ÷2=350.

            Consideremos ahora el ejemplo de una apuesta al Total Asiático, que se salda con media pérdida:
            Apuesta: Total por debajo de (1.75) con una cuota de 1.5 y un importe de apuesta de 300 rublos. 1,5 y el importe de la apuesta es de 300 rublos. Así, obtenemos dos apuestas estándar al total:
            Total inferior a (2) con coeficiente 1,5 e importe de apuesta 150 (argumento total aquí: 1,75+0,25). 1,5 e importe de apuesta 150 (argumento total aquí: 1,75+0,25)
            Total inferior a (1,5) con coeficiente 1,5 e importe de apuesta 150 (argumento de apuesta aquí: 1,75-0,25). 1,5 e importe de apuesta 150 (argumento total aquí: 1,75-
            0,25)
            Supongamos que el partido terminó con el marcador 2:0. En este caso, la apuesta se calculará como media pérdida. Esto significa que una apuesta se calculará como pérdida y la segunda como ganancia. En este caso, la apuesta: total inferior a (1,5) se calculará como pérdida, y la apuesta total inferior a (2) se calculará como devolución. El importe de la devolución será la mitad del importe total de la apuesta. En este caso 150 rublos.


            Doble: Se ofrece una apuesta a que el mismo jugador marca dos goles contra el
            adversario.



            Hat-trick: se apuesta a que un mismo jugador marcará tres goles contra el adversario.


            Póquer
            Póquer: se propone apostar a que un mismo jugador marcará cuatro goles al adversario.
            Es importante que si se registra un Hat-trick en el partido, la apuesta realizada al Doble pierde. Asimismo, si se registra un Póquer en el partido, las apuestas al Hat- trick y al Doble pierden.


            Hándicap (Hándicap europeo): Este tipo de hándicap implica que se añade un
            argumento propuesto al resultado final del partido. Para que la apuesta se liquide como ganadora, el equipo por el que se apuesta debe ser el ganador después de añadir el argumento.
            Ejemplo:
            Handicap (2:1): P1 - la apuesta se realiza a la victoria del equipo 1. Esta apuesta implica, que la puntuación del argumento propuesto se añadirá a la puntuación final.
            Supongamos que el partido terminó con un resultado de 3:3. Tras añadir la puntuación del argumento propuesto, el resultado pasa a ser 5:4. En este caso, la apuesta se calculará como ganadora, ya que tras los cambios oportunos en las cuotas de apuestas, el equipo 1 se convierte en el ganador.


            Marcador del partido: Se le pide que prediga el marcador exacto con el que finalizará
            el tiempo principal del partido.



            Par/Impar: se le pide que prediga si el número total de goles marcados en un partido
            será un número par o impar.



            Empezará el partido desde el centro del campo: se le pide que prediga qué equipo
            empezará el partido desde el centro del campo.
            El equipo 1 comenzará el partido desde el centro del campo: El equipo 1 comenzará el partido desde el centro del campo.
            Equipo 2- El equipo 2 comenzará el partido desde el centro del campo.



            Victoria del equipo de la diferencia
            Equipo gana por diferencia: Se ofrece para predecir la diferencia de goles con la que el equipo por el que se apuesta ganará el partido.
            Ejemplo:
            Apuesta: El equipo 1 ganará por dos goles - se realiza una apuesta a que el equipo 1 ganará por 2 goles.




            Victoria en seco: Se sugiere pronosticar que el equipo por el que se apuesta ganará el
            partido en seco, es decir, que el otro equipo no marcará ni un solo gol.



            Tarjetas amarillas (Y/C): se ofrece apostar por el número de tarjetas amarillas
            recibidas en el partido. Nota: si el mismo jugador recibe una segunda tarjeta amarilla, contará como tarjeta roja. Son posibles las siguientes opciones de apuesta:
            Tarjetas amarillas: Resultado P1 - El equipo 1 será el ganador en el recuento de tarjetas amarillas.
            Tarjetas amarillas: Resultado P2 - El equipo 2 será el ganador en el recuento de tarjetas amarillas.
            Tarjetas amarillas: Resultado X - el recuento de tarjetas amarillas será de empate.
            Tarjetas amarillas: total más - el número de tarjetas amarillas debe ser mayor que el valor del argumento seleccionado.
            Tarjetas amarillas: total menos - el número de tarjetas amarillas debe ser inferior al valor del argumento seleccionado.
            Tarjetas amarillas: F1- El equipo 1 ganará según el número de tarjetas amarillas después de haber realizado los cambios correspondientes en el hándicap.
            Tarjetas amarillas: F2 - El equipo 2 ganará según el número de tarjetas amarillas después de que se hayan realizado los respectivos cambios en las cuotas de apuestas.



            Primera sustitución: se le invita a apostar por la primera sustitución del partido. Son
            posibles las siguientes opciones de apuesta:
            Primera sustitución: El Equipo 1 realizará la primera sustitución para el Equipo 1.
            Primera sustitución: El Equipo 2 realizará la primera sustitución para el Equipo 2.
            Primera sustitución: ambos equipos al mismo tiempo - dos equipos realizarán la primera sustitución al mismo tiempo.
            Primera sustitución: nadie -ningún equipo hará una sustitución.
            Primera sustitución: en el primer tiempo - la primera sustitución se realizará en el primer tiempo.
            Primera sustitución: en el segundo tiempo - la primera sustitución se realizará en el segundo tiempo.


            Total de sustituciones: La apuesta se ofrece para apostar que el número de
            sustituciones realizadas en el partido será mayor o menor que el valor del argumento de apuesta seleccionado. Son posibles las siguientes opciones de apuesta:
            Total de sustituciones: más - el número de sustituciones realizadas en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Total de sustituciones: menos - el número de sustituciones realizadas en el partido será inferior al valor del argumento de apuesta seleccionado.



            Empate a cero: se ofrece la posibilidad de apostar por un empate a cero, lo que
            excluye el empate a cero. Si la apuesta se realiza a un resultado de empate y el resultado del partido es 0-0, la apuesta se valorará como pérdida.


            Salida: se propone apostar sobre si el equipo se clasificará para la fase seleccionada de
            la competición.
            Ejemplo:
            Apuesta: clasificación para la 1/2 final: equipo 1. Para que la apuesta se considere ganadora, el equipo 1 debe clasificarse para la 1/2 final del campeonato seleccionado.


            Saques de esquina: se le invita a apostar por el número de saques de esquina lanzados
            en el partido. Son posibles las siguientes opciones de apuesta:
            Saques de esquina: Resultado P1 - El equipo 1 será el ganador del recuento de saques de esquina.
            Saques de esquina: Resultado P2 - El equipo 2 será el ganador del recuento de saques de esquina.
            Saques de esquina: Resultado X - habrá empate en el marcador de saques de esquina.
            Saques de esquina: Total más - el número de saques de esquina será mayor que el valor del argumento de apuesta seleccionado.
            Saques de esquina: total menos - el número de saques de esquina será inferior al valor del argumento de apuesta seleccionado.
            Saques de esquina: F1- El equipo 1 será el ganador de los saques de esquina después de que se hayan realizado los cambios correspondientes en la delantera.
            Saques de esquina: F2- El equipo 2 será el ganador de los saques de esquina después de que se hayan realizado los cambios pertinentes en la delantera.



            El primer saque de esquina
            Primer saque de esquina: apueste a qué equipo lanzará el primer saque de esquina del partido. Son posibles las siguientes opciones de apuesta:
            Primer saque de esquina: Equipo 1- El primer saque de esquina será ejecutado por el Equipo 1.
            Primer saque de esquina: Equipo 2- El primer saque de esquina será ejecutado por el Equipo 2.
            Primer saque de esquina: ninguno - no se lanzará ningún saque de esquina en el partido.



            Minuto del primer saque de esquina - ofrece apostar a que el minuto del primer saque
            de esquina será anterior o posterior al minuto indicado por el valor del argumento de apuesta seleccionado. Son posibles las siguientes opciones de apuesta:
            Minuto del primer saque de esquina: más - el primer saque de esquina se lanzará después del minuto indicado por el valor del argumento de apuesta seleccionado.
            Minuto del primer saque de esquina: menos - el primer saque de esquina se lanzará antes del minuto indicado por el valor del argumento de apuesta seleccionado.
            El último saque de esquina
            Último saque de esquina - se ofrece para apostar a quién lanzará el último saque de esquina del partido. Son posibles las siguientes opciones de apuesta:
            Último saque de esquina: equipo 1- El último saque de esquina será ejecutado por el equipo 1.
            Último saque de esquina: equipo 2- El último saque de esquina será ejecutado por el equipo 2.
            Último saque de esquina: ninguno - sólo se lanzará un saque de esquina en el partido.


            Próximo saque de esquina: apueste a qué equipo lanzará el próximo saque de esquina
            después de haber realizado la apuesta. Están disponibles las siguientes opciones de apuesta:
            Próximo saque de esquina: Equipo 1- Después de la apuesta, el próximo saque de esquina será
            ejecutado por el Equipo 1.
            Próximo saque de esquina: Equipo 2- Después de la apuesta, el próximo saque de esquina será
            ejecutado por el Equipo 2.
            Siguiente saque de esquina: ninguno - no se lanzaron más saques de esquina después de realizar la apuesta.
            Es importante destacar que si no se ofrece ninguna apuesta a que ninguno de los dos equipos lanzará el siguiente saque de esquina, se reembolsarán las apuestas al Equipo 1 y al Equipo 2.


            Saques de esquina desde los cuatro lados - Se le invita a apostar si los saques de
            esquina se lanzarán desde cada uno de los cuatro lados del campo. Están disponibles las siguientes opciones de apuesta:
            Tiros de esquina desde los cuatro lados: sí - se lanzará al menos un tiro de esquina desde cada uno de los 4 lados del campo.
            Saques de esquina desde los cuatro lados del campo: ninguno - no se lanzará ningún saque de esquina desde al menos uno de los cuatro lados del campo.

            Rendimiento en el descanso: se ofrece apostar sobre cuál de las mitades será más
            efectiva. Son posibles las siguientes opciones de apuesta:
            1ª <2-o: se marcará el mayor número total de goles (de ambos equipos combinados) en la
            segunda parte del partido.
            1ª = 2-U: el
            número total de goles (ambos equipos combinados) en la primera y la segunda parte será
            igual.
            1º> 2º-o: el mayor número total de goles (de ambos equipos combinados) que se hayan marcado en la
            primera mitad del partido.

            Ejemplo:
            Si el marcador del primer tiempo es 1:3 y el marcador del segundo tiempo es 1:1, obtenemos que el número total de goles en el primer tiempo es 4 y en el segundo tiempo es 2. En este caso la apuesta: 1ª parte> 2ª parte se calculará como ganadora, y las apuestas 1ª parte < 2ª parte y 1ª parte = 2ª parte se calcularán como perdedoras.


            Resto del partido: ofrece apostar por el resultado del partido, que se fijará desde el
            momento en que se realice la apuesta hasta el final del partido. Nota: el resultado que se fijó en el partido anterior a la apuesta no se tiene en cuenta a la hora de calcular esta apuesta. Son posibles las siguientes opciones de apuesta:
            Resto del partido: P1- El equipo 1 ganará el partido desde el momento en que se realiza la apuesta
            hasta el final del partido.
            Resto del partido: P2- El equipo 2 ganará el partido desde el momento en que se realiza la apuesta
            hasta el final del partido.
            Resto del partido: X- desde el momento en que se realiza la apuesta hasta el final del partido se
            registrará un empate.
            Ejemplo:
            El marcador del partido en el minuto 75 es 3-1. Apuesta: Resto del partido: P2 realizada en el minuto 76. En el minuto 85, el Equipo 2 marca otro gol y el Equipo 1 no marca más goles. Como resultado, el marcador de todo el partido es 3-2. En este caso, la apuesta se valorará como ganadora, a pesar de que el Equipo 1 haya ganado todo el partido. Ya que el cálculo de esta apuesta es sólo el resultado registrado desde el momento de la apuesta, y desde el minuto 76 hasta el final del partido el marcador fue 0-1.


            Penaltis: Se le invita a apostar por el número de penaltis concedidos en un partido. Un
            penalti es un lanzamiento a puerta concedido por una infracción del adversario, que sólo es defendido por el portero. Están disponibles las siguientes opciones de apuesta:
            Penaltis: sí - se pitará al menos un penalti en el partido.
            Penalización: ninguna - no se concederá ninguna penalización en el partido.
            Penalti: más - el número de penaltis concedidos en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Penalti: menos - el número de penaltis concedidos en el partido será inferior al valor del argumento de apuesta seleccionado.



            Realiza un penalti con un tiro "Panenka": le invitamos a apostar a que el penalti
            concedido se realizará con un tiro "Panenka". ("Panenka" es una forma de ejecución de penaltis, cuando el balón se introduce en la portería desde el centro, mientras que el portero lo desvía hacia la esquina de la portería). Son posibles las siguientes opciones de apuesta:
            Se realizará un penalti con un tiro a lo Panenka: sí - se realizará al menos un penalti con un tiro a lo Panenka.
            Realizará un penalti Panenka: no - ninguno de los penaltis será realizado por Panenka.


            No realiza un penalti: se ofrece apostar a qué equipo no realiza un penalti. (No lanzar
            un penalti significa que el jugador que lanza el penalti no marcará un gol. ) Se ofrecen los siguientes mercados:
            No lanza un penalti: Equipo 1: El equipo 1 no lanza al menos un penalti.
            No lanza un penalti: Equipo 2: El equipo 2 no lanza al menos un penalti.



            Se marcará un gol de penalti: Se ofrece predecir si se marcará un gol de penalti. Son
            posibles las siguientes opciones de apuesta:
            Anotador de penaltis: Equipo 1- El equipo 1 marcará al menos un gol en la tanda de penaltis.
            Gol de penalti: Equipo 2- El equipo 2 marcará al menos un gol de penalti.



            Se utilizará el arbitraje asistido por vídeo (VAR): se ofrecen apuestas sobre si se
            utilizará el sistema VAR en el partido. Se ofrecen las siguientes opciones de apuesta:
            Se utilizará el sistema VAR: sí - Se utilizará el sistema VAR en el partido.
            Se utilizará el sistema VAR: no - no se utilizará el sistema VAR en el partido.


            Abandono del campeonato
            Descenso del campeonato: apuesta sobre si el equipo por el que se realiza la apuesta descenderá a una liga inferior al final del campeonato. Son posibles las siguientes opciones de apuesta:
            Descenso de campeonato: sí - el equipo por el que se apuesta descenderá a una liga inferior al final del torneo.
            Descenso a una liga inferior: ninguno - el equipo por el que se realiza la apuesta no descenderá a una liga inferior al final del torneo.


            Distancia total recorrida (km): se ofrece apostar por la distancia total recorrida en el
            partido del equipo por el que se apuesta. Son posibles las siguientes opciones de apuesta:
            Kilometraje total (km): mayor - la distancia total recorrida por el equipo apostante será mayor que el valor del argumento de apuesta seleccionado.
            Distancia total recorrida (km): menos - la distancia total recorrida por el equipo apostante será inferior al valor del argumento de apuesta seleccionado.


            Siguiente minuto.
            Minuto siguiente: Se le invita a apostar sobre qué acción tendrá lugar en el minuto siguiente a la realización de la apuesta. Están disponibles las siguientes opciones de apuesta:
            Objetivo: sí/no
            Saque de esquina: sí/no
            Saque de puerta: sí/no
            Penalti: sí/no
            Saque de banda: sí/no
            Tarjeta: sí/no
            Tanda de penaltis: sí/no


            Primera acción en los próximos 5 minutos: se le invita a apostar sobre qué acción
            ocurrirá primero en los próximos 5 minutos desde el momento en que realice su apuesta. Son posibles las siguientes opciones de apuesta:
            En
            Penalti
            Saque de meta
            Tiro de esquina
            Tanda de penaltis
            No es una de las opciones



            Cómo se marcará el próximo gol: se le invita a apostar sobre cómo se marcará el
            próximo gol desde el momento en que realice su apuesta. Están disponibles las siguientes opciones de apuesta:
            No es una cabeza normal.
            Gol de cabeza
            Penalti
            Penalti
            Autogol
            No habrá gol


            Posesión del balón (%): Se le invita a apostar por el porcentaje de posesión del balón.
            Son posibles las siguientes opciones de apuesta:
            Posesión del balón (%): mayor - el porcentaje de posesión del equipo apostante será mayor que el valor seleccionado del argumento de apuesta.
            Posesión de balón (%): menor - el porcentaje de posesión de balón del equipo apostante será menor que el valor del argumento de apuesta seleccionado.



            Primera sustitución: Se le invita a apostar por la primera sustitución del partido. Son
            posibles las siguientes opciones de apuesta: Son posibles las siguientes opciones de apuesta:
            Primera sustitución: equipo 1- La primera sustitución del partido la realizará el equipo 1.
            Primera sustitución: equipo 2 - la primera sustitución del partido la realizará el equipo 2.
            Primera sustitución: ambos equipos al mismo tiempo - la primera sustitución la realizarán ambos equipos al mismo tiempo.
            Primera sustitución: ninguna - no se realizarán sustituciones en el partido.
            Primera sustitución: en el primer tiempo - la primera sustitución se realizará en el primer tiempo.
            Primera sustitución: durante el descanso - la primera sustitución se realizará durante el descanso.
            Primera sustitución: en el segundo tiempo - la primera sustitución se realizará en el segundo tiempo.


            Sustituciones: se ofrece apostar por el número de sustituciones realizadas en el
            partido. Son posibles las siguientes opciones de apuesta:
            Sustituciones: más - el número de sustituciones realizadas en el partido será mayor que el valor del argumento de apuesta seleccionado.Sustituciones: menos - el número de sustituciones realizadas en el partido será inferior al valor del argumento de apuesta seleccionado.






            El sustituto marcará: puede apostar a que el sustituto marcará un gol. Son posibles las
            siguientes opciones de apuesta:
            El sustituto marcará: Sí - el jugador sustituido marcará al menos un gol en el partido.
            El suplente marcará: ninguno - el jugador que entró como suplente no marcará ningún gol.
            El sustituto marcará: más - el número de goles marcados por el jugador sustituto será mayor que el valor seleccionado del argumento de apuesta.
            El sustituto marcará: menos - el número de goles marcados por el jugador sustituto será inferior al valor del argumento de apuesta seleccionado.


            Primer minuto de tarjeta amarilla: se le invita a apostar por el periodo de tiempo en
            minutos durante el cual se concederá la primera tarjeta amarilla.
            Ejemplo: Minuto de la primera tarjeta amarilla: 1 a 21.




            El primero en ocurrir: se le invita a apostar sobre cuál de los eventos del partido
            ocurrirá primero. Son posibles las siguientes opciones de apuesta:
            Lo primero que ocurrirá es: fuera
            Lo primero que ocurrirá es una falta
            Lo primero que ocurrirá es un saque de meta
            Primero que pasa: fuera de juego
            Lo primero que ocurrirá: un gol


            Cómo se marcará el primer gol: se le ofrece apostar sobre cómo se marcará el primer
            gol. Son posibles las siguientes opciones de apuesta:
            Un gol rutinario/no de cabeza
            Gol de cabeza
            Penalti
            Penalti
            Autogol



            Asistencias precisas (%): se le invita a apostar por el porcentaje de asistencias precisas
            realizadas en el partido. Están disponibles las siguientes opciones de apuesta:
            Pases precisos (%): más - el porcentaje de pases precisos realizados en el partido por el equipo por el que se realiza la apuesta será mayor que el valor del argumento de apuesta seleccionado.
            Pases precisos (%): menos - el porcentaje de pases precisos realizados en el partido por el equipo por el que se realiza la apuesta será inferior al valor del argumento de apuesta seleccionado.


            Pases cortos precisos (%): Se le invita a apostar por el porcentaje de pases cortos
            realizados en el partido. Están disponibles las siguientes opciones de apuesta:
            Pases cortos precisos (%): más - el porcentaje de pases cortos precisos realizados en el partido por el equipo por el que se realiza la apuesta será mayor que el valor del argumento de apuesta seleccionado.
            Pases cortos precisos (%): menos - el porcentaje de pases cortos precisos realizados en el partido por el equipo por el que se realiza la apuesta será inferior al valor del argumento de apuesta seleccionado.



            Media de asistencias precisas (%): Se le invita a apostar por el porcentaje de media de
            asistencias precisas realizadas en el partido. Son posibles las siguientes opciones de apuesta:
            Media de asistencias precisas (%): mayor - el porcentaje de media de asistencias precisas realizadas en el partido por el equipo al que se apuesta será mayor que el valor del argumento de apuesta seleccionado.
            Media de asistencias precisas (%): menos - el porcentaje de media de asistencias precisas realizadas en el partido por el equipo por el que se realiza la apuesta será menor que el valor del argumento de apuesta seleccionado.


            Pases largos precisos (%): Se le invita a apostar por el porcentaje de pases largos
            precisos realizados en el partido. Están disponibles las siguientes opciones de apuesta:
            Pases largos precisos (%): mayor: el porcentaje de pases largos precisos realizados en el partido por el equipo por el que se realiza la apuesta será mayor que el valor del argumento de apuesta seleccionado.
            Pases largos precisos (%): menos - el porcentaje de pases largos precisos realizados en el partido por el equipo por el que se realiza la apuesta será inferior al valor del argumento de apuesta seleccionado.



            Penalti: se propone apostar por el número de penaltis del partido. Penalti: el árbitro
            muestra al jugador una tarjeta roja por conducta antideportiva y el jugador abandona el campo. El equipo termina el partido con una plantilla reducida. Son posibles las siguientes opciones de apuesta:
            Penalti: sí - habrá al menos un penalti en el partido.
            Penalización: ninguna - no habrá penalizaciones en el partido.
            Penaltis: más - el número de penaltis en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Penaltis: menos - el número de penaltis en el partido será menor que el valor seleccionado del argumento de la apuesta.


            Mitad/Match: se ofrece apostar a los resultados de la primera mitad y de todo el
            partido al mismo tiempo, y sólo si ambos resultados se pronostican correctamente, la apuesta se resolverá como ganadora. Son posibles las siguientes opciones de apuesta:
            P1/P1: El equipo 1 ganará tanto el primer tiempo como el partido completo.
            P1/X: El equipo 1 ganará en la primera parte, pero el partido acabará en empate.
            P1/P2: El equipo 2 ganará en la primera parte, pero el partido terminará con la victoria del equipo 2.
            X/P1: el primer tiempo terminará en empate, pero el partido terminará con victoria del Equipo 1.
            H/H: tanto la primera parte como todo el partido acabarán en empate.
            X/P2: la primera parte acabará en empate, pero el partido terminará con victoria del Equipo 2.
            P2/P1: el primer tiempo terminará con victoria del Equipo 2, pero el partido terminará con victoria del Equipo 1.
            P2/X: la primera parte acabará con victoria del Equipo 2, pero el partido terminará en empate.
            P2/P2: el primer tiempo y el partido terminarán con una victoria del Equipo 2.



            Tiros a puerta: se ofrecen apuestas sobre el número de tiros a puerta realizados en el
            partido.
            Un saque de meta (en un partido, en un tiempo, por un equipo, por un jugador) es cualquier intento claro de gol.
            a) que da lugar a que el balón entre en la portería y se marque un gol,
            que habría dado lugar a que el balón entrara en la portería si el guardameta no hubiera impedido que se marcara el gol,
            que habría dado lugar a que el balón entrara en la meta si no lo hubiera detenido un defensor (jugador del equipo adversario) que se hallaba detrás del guardameta en ese momento y el guardameta no tuvo oportunidad de defender la meta.

            Un tiro que golpea el larguero o el travesaño no es un saque de meta. Un tiro bloqueado por otro jugador con otros jugadores detrás no es saque de meta.

            Existen las siguientes opciones de apuesta:
            Tiros a puerta: más - el número de tiros a puerta será mayor que el valor del argumento de apuesta seleccionado.
            Tiros a puerta: menos - el número de tiros a puerta será mayor que el valor del argumento de apuesta seleccionado.
            Saques de meta: F1 - El equipo 1 será el ganador por el número de saques de meta después de que se realicen los cambios correspondientes en el saque de meta.
            Saques de meta: F2 - El equipo 2 será el ganador de los saques de meta después de que se realicen los cambios correspondientes en el saque de meta.


            Disparos a puerta: Se le invita a apostar por el número de disparos a puerta realizados
            en el partido.
            Un tiro a puerta es cualquier intento deliberado de marcar un gol

            a) que hace que el balón toque la red de la portería,

            que habría dado lugar a que el balón se dirigiera hacia la meta si el guardameta no hubiera defendido la meta o un jugador del equipo adversario, que era el último jugador en ese momento, no lo hubiera detenido,

            que hace que el balón se dirija hacia la portería y sea bloqueado por un defensor, que también tiene detrás a otro(s) defensor(es) o al guardameta,

            que habría dado lugar a que el balón sobrepasara la meta o el lateral de la meta si no hubiera sido detenido por el guardameta o cualquier otro jugador,que hace que el balón toque el poste de la portería,

            que hace que el balón pase por encima de la meta o del lateral de la meta sin tocar a ningún jugador.


            Existen las siguientes opciones de apuesta:

            Disparos a puerta: más - el número de disparos a puerta será mayor que el valor seleccionado del argumento de apuesta.

            Disparos a puerta: menos - el número de disparos a puerta será inferior al valor del argumento de apuesta seleccionado.



            Fuera de juego: se propone apostar por el número de fueras de juego. El fuera de
            juego es una posición en la que el jugador que recibe el pase está más cerca de la portería contraria que los demás jugadores de campo del adversario, excepto el portero. El fuera de juego en el fútbol es registrado por un árbitro especial "lateral", que levanta su bandera en caso de fuera de juego. Son posibles las siguientes opciones de apuestas:
            Fuera de juego: más - el número de fueras de juego en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Fuera de juego: menos - el número de fueras de juego en el partido será menor que el valor del argumento de apuesta seleccionado.
            Fuera de juego: F1 - El equipo 1 será el ganador por el número de fueras de juego después de que se realicen los cambios apropiados en la pérdida.
            Fuera de juego: F2 - El equipo 2 será el ganador en el número de fuera de juego después de que se realicen los cambios apropiados en la delantera.


            Faltas: se le invita a apostar por el número de faltas en el partido. Una falta es una
            acción de un jugador contraria a las reglas del fútbol. Cada falta es registrada por el árbitro. Son posibles las siguientes opciones de apuesta:
            Faltas: más - el número de faltas en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Faltas: menos - el número de faltas en el partido será menor que el valor del argumento de apuesta seleccionado.
            Faltas: F1 - El equipo 1 será el ganador por el número de faltas después de que se hayan realizado los cambios apropiados en el golpe de derecha.
            Faltas: F2 - El equipo 2 será el ganador por el número de faltas después de que se realicen los cambios apropiados en la delantera.

            Lugar en el grupo
            Puesto en el grupo: se le invita a apostar por la posición del equipo seleccionado en el grupo. Son posibles las siguientes opciones de apuesta:
            1er puesto: el equipo debe estar clasificado en primer lugar en el grupo.
            2º puesto: el equipo debe quedar 2º de grupo.
            3er puesto: el equipo debe quedar 3º en el grupo.
            4º puesto: el equipo debe quedar 4º en el grupo.
            1º o 2º: el equipo debe quedar 1º o 2º del grupo.
            2º o 3º: el equipo debe quedar 2º o 3º del grupo.
            3º o 4º: el equipo debe quedar 3º o 4º del grupo.


            Carrera hacia un determinado número de goles: se le invita a apostar por qué equipo
            marcará primero un determinado número de goles en el partido.
            Ejemplo:
            Apuesta: Carrera a 3 goles: Equipo 1. Para que la apuesta se valore como ganadora, el Equipo 1 debe ser el primero en marcar 3 goles.


            Tiempo de igualdad en el marcador: se propone apostar por el número total de
            minutos durante los cuales el marcador del partido estuvo empatado.


            Plazo de entrega: se propone apostar por el plazo de entrega del equipo en minutos.

            Ejemplo:
            Apuesta: Tiempo de ventaja del equipo 1: superior a 31,5. Para que la apuesta se calcule como ganadora, el tiempo total de ventaja del equipo 1 debe ser superior a 31 minutos.

            Resultado o Ambos Marcadores: La apuesta se ofrece para apostar tanto al resultado
            del partido como a si cada equipo marcará goles en el partido. La apuesta se valorará como ganadora si al menos uno de los supuestos es correcto. Se ofrecen las siguientes opciones de apuesta:
            P1 o ambas puntuaciones
            X o ambas puntuaciones
            P2 o ambas puntuaciones
            P1 o al menos un no puntuado
            X o al menos uno no puntúa
            P2 o al menos un no puntuado

            Ejemplo
            Un jugador ha realizado una apuesta: P1 o ambos goles. La apuesta se valorará como ganadora si el equipo 1 gana el partido o si cada equipo marca al menos un gol.

            Resultado del primer tiempo o ambos goles: Se ofrece apostar tanto al resultado del
            primer tiempo como a si cada equipo marcará goles en el partido. La apuesta se valorará como ganadora si al menos uno de los supuestos es correcto. Se ofrecen las siguientes opciones de apuesta:
            Com.1 para ganar la primera parte o ambos para marcar
            Empate en la 1ª parte o ambos goles marcados
            Com.2 a ganar en el 1er tiempo o ambos a marcar
            Com.1 ganará la 1ª parte o al menos uno de ellos no marcará
            Un empate en la 1ª parte o al menos un empate sin goles
            Com.2 ganará en el 1er tiempo o al menos uno no marcará
            Ejemplo Un
            jugador ha realizado una apuesta: Empate en la 1ª parte o ambos goles. La apuesta se valorará como ganadora si la primera parte termina en empate o si cada equipo marca al menos un gol.

            Resultado del 2º tiempo o de ambos
            Resultado de la 2ª parte o Ambos goleadores: Se ofrece apostar tanto al resultado de la segunda parte como a si cada equipo marcará goles en el partido. La apuesta se valorará como ganadora si al menos uno de los supuestos es correcto. Se ofrecen las siguientes opciones de apuesta:
            Com.1 a ganar en la 2ª parte o ambos a marcar
            Empate en la 2ª parte o ambos goles
            Com.2 a ganar en la 2ª parte o ambos a marcar
            Com.1 ganará la 2ª parte o al menos uno de ellos no marcará
            Un empate en la 2ª parte o al menos un empate a cero
            Com.2 ganará en la 2ª parte o al menos uno no marcará

            Ejemplo Un
            jugador ha realizado una apuesta: Com.1 ganará el 2º tiempo o ambos equipos marcarán. La apuesta se valorará como ganadora si el equipo 1 gana la 2ª parte o si cada equipo marca al menos un gol.

            Resultado o Total: ofrece apostar al resultado del partido y a que el número total de
            goles marcados en el partido será mayor (menor) que el valor seleccionado del argumento de apuesta. Se ofrecen las siguientes opciones de apuesta:
            P1 o superior
            Dibujar o más
            P2 o más
            P1 o inferior
            Sorteo o menos
            P2 o inferior
            Ejemplo Un
            jugador ha realizado una apuesta: P2 o Más de (2,5). La apuesta se valorará como ganadora si el equipo 2 gana el partido o si se marcan al menos 3 goles en el partido.

            Total o Ambos Marcadores: Se ofrece una apuesta sobre si el número de goles
            marcados en el partido será mayor (o menor) que el valor seleccionado del argumento de apuesta y sobre si cada equipo marcará goles en el partido. Se ofrecen las siguientes opciones de apuesta:
            Ambos puntúan o más
            Al menos uno no marcará o Más
            Ambos Puntuación o menos
            Al menos un no score o Under

            Ejemplo
            Un jugador ha realizado una apuesta: Ambos marcan o Más de (3,5). La apuesta se valorará como ganadora si cada equipo marca al menos un gol en el partido o si se marcan al menos 4 goles en el partido.`
    },
    {
        id: 'baloncesto',
        title: 'Baloncesto',
        description: `Las apuestas de baloncesto se aceptan teniendo en cuenta el tiempo extra (prórroga). Se exceptúan los casos en los que la línea ofrece apuestas al empate.

            Resultado: se le ofrece apostar por el ganador del partido. Son posibles las siguientes opciones de apuesta:
            P1: Gana el equipo 1.
            P2: Gana el equipo 2.
            X: el partido terminará en empate.


            Hándicap: Un hándicap es una ventaja positiva o negativa que se añade al resultado de un equipo. Para que una apuesta con hándicap se calcule como ganada, el equipo por el que se apuesta debe ganar el partido después de que la ventaja reclamada por el hándicap seleccionado se haya aplicado al resultado del equipo.
            Hándicap positivo: Este hándicap consiste en añadir puntos, cuyo número viene determinado por el valor del argumento de la apuesta, a la puntuación total del equipo por el que se apuesta.
            Ejemplo:
            Apuesta Handicap 2 (5): La apuesta se realiza al equipo 2 y "5" es el argumento de apuesta. Para que la apuesta se salde como ganadora, el equipo 2 debe ser el vencedor del partido tras sumar 5 puntos a su marcador final. Consideremos tres posibles resultados de la apuesta:
            El partido termina con un resultado de 108-105. Si se añaden 5 puntos al resultado del equipo 2, el marcador pasa a ser 108-110. En este caso, la apuesta se calculará como ganadora, porque después de añadir cinco puntos, el equipo 2 es el ganador.
            El partido termina con un resultado de 106-100. Si se añaden 5 puntos al resultado del equipo 2, el marcador pasa a ser 106-105. En este caso, la apuesta se calculará como pérdida, porque después de añadir 5 puntos, el equipo 2 pierde.
            El partido termina con un resultado de 104-99. Si se añaden 5 puntos al resultado del equipo 2, el resultado pasa a ser 104-104. En este caso, la apuesta se calculará como ganancia, porque después de añadir 5 puntos, el resultado se convierte en empate.
            Hándicap negativo: Este hándicap consiste en restar puntos, cuyo número viene determinado por el valor del argumento de apuesta
            seleccionado, de la puntuación total del equipo por el que se apuesta.
            Ejemplo:
            Apuesta Handicap 1 (-5): La apuesta se realiza al equipo 1 y (-5) es el argumento de apuesta. Para que la apuesta se considere ganadora, el equipo 1 debe ser el ganador después de que se le hayan restado 5 puntos de su puntuación final. Considere tres posibles resultados para esta apuesta:
            El partido terminó con un resultado de 110-104. Si se restan 5 puntos al resultado del equipo 1, el resultado pasa a ser 105-104. En este caso, la apuesta se calculará como ganadora, porque después de restar 5 puntos, el equipo 1 es el ganador.
            El partido terminó con un resultado de 105-102. Si se restan 5 puntos al resultado del equipo 1, el resultado pasa a ser 100-102. En este caso, la apuesta se calculará como pérdida, porque después de restar 5 puntos, el equipo 1 pierde.
            El partido terminó con un resultado de 110-105. Si se restan 5 puntos al resultado del equipo 1, el marcador pasa a ser 105-105. En este caso, la apuesta se calculará como ganancia, porque después de restar 5 puntos, el resultado se convierte en empate.


            Total: La apuesta se ofrece para apostar que el número total de puntos anotados será mayor o menor que el valor del argumento de apuesta seleccionado. Son posibles las siguientes opciones de apuesta:
            Total over: el número total de puntos marcados será superior al valor del argumento de
            apuesta seleccionado
            .
            Si el número de puntos y el valor del argumento son iguales, la apuesta se resolverá con una devolución.

            Ejemplo:
            Apuesta Total sobre (214): En esta apuesta, "214" es el argumento de apuesta
            . Para que la apuesta se determine como ganadora, el número total de puntos anotados debe ser
            superior a 214.
            Si el número total de puntos anotados es exactamente 214, la apuesta se valorará como ganadora
            Total menos: el número total de puntos marcados será inferior al valor del argumento de
            apuesta seleccionado.
            Si el número de puntos marcados y el valor del argumento son iguales, la apuesta
            se resolverá con una devolución.
            Ejemplo:
            Apuesta: Total por debajo de (214): En esta apuesta, "214" es el argumento de apuesta. Para que la apuesta se determine como ganadora, el número total de puntos anotados debe ser inferior a 214. Si el número total de puntos anotados es exactamente 214, la apuesta se valorará como ganadora.

            Primer tiempo/partido: se le invita a apostar por el resultado del primer tiempo y del partido completo al mismo tiempo. Si ambos resultados se predicen correctamente, la apuesta se valorará como ganadora. En baloncesto, la primera mitad incluye el primer y segundo cuartos, y la segunda mitad incluye el tercer y cuarto cuartos. Son posibles las siguientes opciones de apuesta:
            P1/P1: El equipo 1 ganará tanto el primer tiempo como el partido completo.
            P1/X: El equipo 1 ganará la primera parte, pero el partido terminará en empate.
            P1/P2: El Equipo 1 ganará la primera parte, pero el partido terminará con una victoria del Equipo 2.
            X/P1: el primer tiempo terminará en empate, pero el partido terminará con victoria del Equipo 1.
            X/X: tanto la primera parte como todo el partido acabarán en empate.
            X/P2: la primera parte acabará en empate, pero el partido terminará con victoria del Equipo 2.
            P2/P1: el primer tiempo terminará con la victoria del Equipo 2, sin embargo, el partido terminará con la victoria del Equipo 1.
            P2/X: la primera parte acabará con victoria del Equipo 2, pero el partido terminará en empate.
            P2/P2: el primer tiempo y el partido terminarán con una victoria del Equipo 2.


            Primer cuarto/partido: se ofrece apostar al resultado del primer cuarto y de todo el partido al mismo tiempo. Si ambos resultados se pronostican correctamente, la apuesta se valorará como ganadora. Son posibles las siguientes opciones de apuesta:
            P1/P1: El equipo 1 ganará tanto el primer cuarto como el partido completo.
            P1/X: El equipo 1 ganará el primer cuarto, pero el partido terminará en empate.
            P1/P2: El equipo 1 ganará el primer cuarto, pero el partido terminará con una victoria del equipo 2.
            X/P1: el primer cuarto terminará en empate, pero el partido terminará con victoria del Equipo 1.
            X/X: Tanto el primer cuarto como todo el partido terminarán en empate.
            X/P2: el primer cuarto terminará en empate, pero el partido terminará con victoria del Equipo 2.
            P2/P1: el primer cuarto terminará con la victoria del Equipo 2, pero el partido terminará con la victoria del Equipo 1.
            P2/X: el primer cuarto acabará con victoria del Equipo 2, pero el partido terminará en empate.
            P2/P2: el primer cuarto y el partido terminarán con una victoria del Equipo 2.


            Triple-doble: Se ofrece una apuesta sobre si se registrará o no un triple-doble en un partido. Un triple-doble en baloncesto es una anotación de dos dígitos del mismo jugador en tres de las cinco categorías siguientes: tiros bloqueados, puntos, rebotes, robos y asistencias. En otras palabras, el mismo jugador debe anotar un mínimo de 10
            puntos en cualquiera de estas tres categorías. Están disponibles las siguientes opciones de apuesta:
            Triple-doble: sí - se registrará al menos un triple-doble en el partido.
            Triple-doble: ninguno - no se registrarán triples-dobles en el partido.
            Triple-doble: más - el número de triples-dobles registrados en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Triple-doble: menos - el número de triples-dobles registrados en el partido será inferior al valor del argumento de apuesta seleccionado.


            Total par. /Odds: Se ofrece apostar a que el número total de puntos anotados en el partido será un número par o impar. Son posibles las siguientes opciones de apuesta:
            Total: par: el número total de puntos será un número par.
            Total: Impar: El número total de puntos será un número impar.


            Saque de banda inicial: se ofrece una apuesta sobre qué equipo ganará el saque de
            banda inicial. El árbitro se sitúa entre dos jugadores de equipos contrarios y lanza el balón verticalmente hacia arriba. Cada jugador intenta hacerse con el balón saltando.
            Está prohibido rodear el balón con ambas manos. El jugador debe tocar el balón y ser capaz de dirigirlo hacia su equipo con una mano. Existen las siguientes opciones de apuesta:
            Saque de salida: Equipo 1 - el saque de salida lo ganará el Equipo 1.
            Saque de salida: Equipo 2 - el saque de salida lo ganará el Equipo 2.


            Primer tiempo muerto: Una apuesta sobre qué equipo tomará el primer tiempo muerto (según las reglas de la NBL, cada equipo tiene derecho a tomar 6 tiempos muertos en 48 minutos de juego). Están disponibles las siguientes opciones de apuesta:
            Primer tiempo muerto: Equipo 1 - El equipo 1 hará el primer tiempo muerto.
            Primer tiempo muerto: Equipo 2 - El equipo 2 hará el primer tiempo muerto.



            Último tiempo muerto: Se ofrece una apuesta sobre qué equipo se tomará el último tiempo muerto. Según las reglas de la NBL, cada equipo tiene derecho a 6 tiempos muertos en 48 minutos de juego. Se ofrecen las siguientes opciones de apuesta:
            Último tiempo muerto: Equipo 1 - El equipo 1 realizará el último tiempo muerto.
            Último tiempo muerto: Equipo 2 - El equipo 2 realizará el último tiempo muerto.


            Los mismos puntos en al menos dos cuartos: se ofrece apostar a si la cantidad total de puntos anotados por los equipos será la misma en al menos 2 cuartos del partido. Se ofrecen las siguientes opciones de apuesta:
            Puntos idénticos en al menos dos cuartos: Sí - la cantidad total de puntos anotados por los equipos será la misma en al menos 2 cuartos del partido.
            Puntos idénticos en al menos dos cuartos: No - la cantidad total de puntos anotados por los equipos no será la misma en ningún cuarto.
            Ejemplo
            Apuesta Los mismos puntos en al menos dos cuartos: Sí. Supongamos que el marcador del 1er cuarto es 25:30 y el marcador del segundo cuarto es 22:33. En este caso, la apuesta se valorará como ganadora porque la suma total de puntos tanto en el primer cuarto como en el segundo es el mismo número, es decir, 55: (25+30 = 55) y (22+33 = 55).


            Cuarto más goleador: apueste a qué cuarto anotará más puntos (de ambos equipos en total) en el partido. Son posibles las siguientes opciones de apuesta:
            Cuarto más goleador: el primer cuarto - la mayor cantidad de puntos se anotarán en el primer cuarto.
            Cuarto con mayor puntuación: segundo cuarto - la mayor cantidad de puntos se anotará en el segundo cuarto.
            Cuarto con mayor puntuación: tercer cuarto - la mayor cantidad de puntos se anotará en el tercer cuarto.
            Trimestre más anotador: cuarto trimestre - el mayor número de puntos se anotará en el cuarto trimestre.


            Total del mejor cuarto: La apuesta se ofrece para apostar a que el número total de puntos anotados en el cuarto de mayor anotación será mayor o menor que el valor del argumento de apuesta seleccionado. Son posibles las siguientes opciones de apuesta:
            Total del cuarto más goleador: mayor - el número total de puntos anotados en el cuarto más goleador será mayor que el valor del argumento de apuesta seleccionado.
            Total del cuarto más goleador: menos - el número total de puntos anotados en el cuarto más goleador será menor que el valor del argumento de apuesta seleccionado.



            Total del cuarto sin anotación: La apuesta se ofrece para apostar a que el número total de puntos anotados en el cuarto con menor anotación será mayor o menor que el valor del argumento de apuesta seleccionado. Son posibles las siguientes opciones de apuesta:
            Total del cuarto con mayor puntuación: mayor - el número total anotado en el cuarto con menor puntuación será mayor que el valor del argumento de apuesta seleccionado.
            Total del cuarto con mayor anotación: menos - el número total de puntos
            anotados en el cuarto con menor anotación será inferior al valor del argumento de apuesta seleccionado.



            Mitad con más puntos: Se le invita a apostar sobre qué mitad del partido producirá más puntos. En baloncesto, la primera mitad incluye el primer y segundo cuartos, y la segunda mitad incluye el tercer y cuarto cuartos. Están disponibles las siguientes opciones de apuesta:
            Mitad más goleadora: la primera mitad - la mayor cantidad de puntos se anotarán en la primera mitad.
            Mitad más goleadora: la segunda mitad - la mayor cantidad de puntos se anotarán en la segunda mitad.


            Ganará en todos los cuartos: se ofrece apostar por la victoria del equipo en los cuatro cuartos. Son posibles las siguientes opciones de apuesta:
            El equipo 1 ganará todos los cuartos: Sí - El equipo 1 ganará los cuatro cuartos.
            El equipo 1 ganará todos los cuartos: no - El equipo 1 perderá al menos un cuarto.
            El equipo 2 ganará todos los cuartos: Sí - El equipo 2 ganará los cuatro cuartos.
            El equipo 2 ganará todos los cuartos: no - El equipo 2 perderá al menos un cuarto.


            Ganar las dos mitades: apostar a que un equipo gana las dos mitades del partido. En baloncesto, la primera mitad incluye el primer y segundo cuartos y la segunda mitad incluye el tercer y cuarto cuartos. Son posibles las siguientes opciones de apuesta:
            El equipo 1 gana las dos mitades: sí - El equipo 1 ganará las dos mitades del partido.
            El equipo 1 gana las dos mitades: no - El equipo 1 no gana las dos mitades del partido.
            El equipo 2 gana las dos mitades: sí - El equipo 2 ganará las dos mitades del partido.
            El equipo 2 gana las dos mitades: no - El equipo 2 no ganará las dos mitades del partido.


            Puntos anotados: se le invita a apostar por el número de puntos anotados en el partido.

            Ejemplo:
            Apueste puntos marcados de 101 a 110. Para que esta apuesta se calcule como ganadora, el número de puntos anotados debe estar comprendido entre 101 y 110, ambos inclusive.

            Ganar por diferencia: Se ofrece para apostar a la diferencia de puntos con la que el equipo por el que se apuesta ganará el partido.
            Ejemplo:
            Apuesta Equipo 1: gana por 6-10 puntos. La apuesta implica que el equipo 1 ganará con un margen de 6 a 10 puntos. Por lo tanto, si suponemos que el partido finalizará con un resultado de 107-100, la apuesta se valorará como ganadora.


            Ganar por diferencia: Cualquier otra: Se ofrece una apuesta a que el partido terminará con cualquier diferencia excepto las opciones ofrecidas.
            Ejemplo:
            Las opciones de apuesta disponibles para el mercado 1er Trimestre son las siguientes: Ganar por Diferencia:
            P1 con una diferencia de 3 puntos o más
            P2 con una diferencia de 3 puntos o más
            Cualquier otro

            Para que la apuesta se calcule como ganadora, el primer cuarto debe terminar con cualquier diferencia excepto 3 puntos o más.



            Número de mates en el partido: se le invita a apostar a que el número total de mates en el partido será superior o inferior al valor seleccionado del argumento de apuesta. Un mate en baloncesto es un tipo de tiro en el que un jugador introduce el balón en la canasta desde arriba hacia abajo con una o ambas manos. Son posibles las siguientes opciones de apuesta:
            Número de mates en el partido: más - el número total de mates en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Número de mates en el partido: menos - el número total de mates en el partido será inferior al valor del argumento de apuesta seleccionado.


            Victoria y total: se ofrece apostar a la victoria y al total del partido al mismo tiempo. Si ambos resultados se pronostican correctamente, la apuesta se resolverá con una victoria. Son posibles las siguientes opciones de apuesta:
            Equipo 1 y total: más - El equipo 1 ganará el partido y el número total de puntos anotados será superior al valor del argumento de apuesta seleccionado.
            Equipo 1 y total: menos - El equipo 1 ganará el partido y el número total de puntos anotados será inferior al valor del argumento de apuesta seleccionado.
            Equipo 2 y total: más - El equipo 2 ganará el partido y el número total de puntos anotados será superior al valor del argumento de apuesta seleccionado.
            Equipo 2 y total: menos - El equipo 2 ganará el partido y el número total de puntos anotados será inferior al valor del argumento de apuesta seleccionado.


            Habrá prórroga: se ofrece apostar a si el partido se jugará en prórroga o no. Son posibles las siguientes opciones de apuesta:
            Habrá prórroga: sí, se jugará al menos una prórroga en el partido.
            Habrá prórroga: no - no se jugará prórroga en el partido.



            Marcar primero: apueste a qué equipo marcará primero en el partido. Están disponibles las siguientes opciones de apuesta:
            El equipo 1 marcará primero: Equipo 1 - El equipo 1 marcará primero.
            Marcará primero: Equipo 2 - El equipo 2 marcará primero.


            Marcará el último: se ofrece una apuesta sobre qué equipo marcará los últimos puntos del partido. Son posibles las siguientes opciones de apuesta:
            Último en anotar: Equipo 1 - El equipo 1 anotará los últimos puntos del partido.
            Último en anotar: Equipo 2 - El equipo 2 anotará los últimos puntos del partido.


            Rebote: le invitamos a apostar por el número de rebotes del partido. Un rebote es un elemento del juego del baloncesto que consiste en recuperar el balón después de un tiro malo, de dos puntos, de tres puntos o libre. Están disponibles las siguientes opciones de apuesta:
            Rebotes: más - el número de rebotes en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Rebotes: menos - el número de rebotes en el partido será menor que el valor del argumento de apuesta seleccionado.
            Rebotes: F1 - El equipo 1 será el vencedor por el número de rebotes en el partido una vez realizados los cambios correspondientes en el hándicap.
            Rebotes: F2 - El equipo 2 será el ganador en cuanto al número de rebotes en el partido una vez realizados los cambios correspondientes en el golpe de derecha.





            Asistencias efectivas: se ofrece apostar por el número de asistencias efectivas
            realizadas en el partido. Una asistencia efectiva en baloncesto es una situación en la que un jugador realiza un pase a su compañero de equipo y éste, a su vez, consigue anotar el balón en la canasta. Son posibles las siguientes opciones de apuesta:
            Asistencias resultantes: más - el número de asistencias resultantes en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Asistencias resultantes: menos - el número de asistencias resultantes en el partido será menor que el valor del argumento de apuesta seleccionado.
            Asistencias resultantes: F1 - El equipo 1 será el ganador por el número de asistencias resultantes en el partido después de que se realicen los respectivos cambios en las cuotas de apuestas.
            Asistencias resultantes: F2 - El equipo 2 será el ganador por el número de
            asistencias resultantes en el partido después de que se realicen los respectivos cambios en la derecha.



            Faltas: se propone apostar por el número de faltas en el partido. En baloncesto, una falta es una infracción grave del reglamento. Se ofrecen las siguientes opciones de apuesta:
            Faltas: más - el número de faltas en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Faltas: menos - el número de faltas en el partido será menor que el valor del argumento de apuesta seleccionado.
            Faltas: F1 - El equipo 1 será el ganador por el número de faltas en el partido después de que se hayan realizado los cambios apropiados en el hándicap.
            Faltas: F2 - El equipo 2 será el ganador por el número de faltas en el partido después de que se hayan realizado los respectivos cambios en el forfeit.


            Pérdidas: se ofrecen apuestas sobre el número de pérdidas cometidas en un partido. En baloncesto, una pérdida es cuando un jugador en posesión del balón pierde el control del mismo antes de que consiga lanzar a canasta y el balón pasa al equipo defensor. Se ofrecen las siguientes opciones de apuestas:
            Pérdidas: más - el número de pérdidas en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Pérdidas: menos - el número de pérdidas en el partido será inferior al valor del argumento de apuesta seleccionado.
            Pérdidas: F1 - El equipo 1 será el ganador por abandono tras realizar los cambios pertinentes en el hándicap.
            Pérdidas: F2 - El equipo 2 será el ganador por el número de pérdidas después de realizar los cambios apropiados en el golpe de derecha.



            Tiros Bloqueados: se ofrece apostar por el número de tiros bloqueados realizados en un partido. En baloncesto, un Tiro Bloqueado es una acción de un jugador para bloquear el intento de un adversario de lanzar el balón a canasta. Son posibles las siguientes opciones de apuesta:
            Tiros bloqueados: más - el número de tiros bloqueados en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Tiros bloqueados: menos - el número de tiros bloqueados en el partido será inferior al valor del argumento de apuesta seleccionado.
            Tiros en bloque: F1 - El equipo 1 será el ganador en cuanto al número de tiros en bloque después de realizar los cambios pertinentes en el golpe de derecha.
            Tiros en bloque: F2 - El equipo 2 será el ganador por el número de tiros en bloque después de realizar los cambios apropiados en el golpe de derecha.



            Intercepciones: se le invita a apostar por el número de intercepciones realizadas en el partido. En baloncesto, una intercepción es una acción de un jugador defensivo que conduce a un robo. Están disponibles las siguientes opciones de apuesta:
            Intercepciones: más - el número de intercepciones del equipo por el que se apuesta será mayor que el valor seleccionado del argumento de la apuesta.
            Intercepciones: menos - el número de intercepciones del equipo por el que se apuesta será inferior al valor seleccionado del argumento de la apuesta.
            Intercepciones: F1 - El equipo 1 será el ganador por el número de intercepciones después de que se realicen los cambios apropiados en la delantera.
            Intercepciones: F2 - El equipo 2 será el ganador por el número de intercepciones después de que se realicen los cambios apropiados en la delantera.


            Puntos marcados desde la zona de 3 seg. Puntos anotados desde la zona de 3 segundos: se ofrecen apuestas sobre el número de puntos anotados desde la zona de 3 segundos. En baloncesto, la zona de 3 segundos es la zona de tiros libres de la cancha de baloncesto, que es un trapecio. Se ofrecen las siguientes opciones de apuesta:
            Puntos marcados desde la zona de 3 seg.: más - el número de puntos marcados desde la zona de 3 seg. será mayor que el valor seleccionado del argumento de apuesta.
            Puntos marcados desde la zona de 3 seg.: menos - el número de puntos marcados desde la zona de 3 seg. será menor que el valor seleccionado del argumento de apuesta.
            Puntos anotados desde la zona de 3 segundos: F1 - El equipo 1 será el ganador por el número de puntos anotados desde la zona de 3 segundos después de haber realizado los cambios apropiados en el golpe de derecha.
            Puntos anotados desde la zona de 3 segundos: F2 - El equipo 2 será el ganador por el número de puntos anotados desde la zona de 3 segundos después de haber realizado los cambios apropiados en el golpe de derecha.



            Puntos de segunda oportunidad: se ofrecen apuestas sobre el número de puntos de segunda oportunidad. En baloncesto, los puntos de segunda oportunidad son puntos ganados después de que el equipo atacante ya haya realizado un intento fallido de lanzar el balón durante un ataque. Están disponibles las siguientes opciones de apuesta:
            Puntos de segunda oportunidad: más - el número de puntos de segunda oportunidad anotados será mayor que el valor del argumento de apuesta seleccionado.
            Puntos de segunda oportunidad: menos - el número de puntos de segunda oportunidad anotados será inferior al valor del argumento de apuesta seleccionado.
            Puntos de segunda oportunidad: F1 - El equipo 1 será el ganador de los puntos de segunda oportunidad una vez realizados los cambios pertinentes en el hándicap.
            Puntos de segunda oportunidad: F2 - El equipo 2 será el ganador de los puntos de segunda oportunidad una vez realizados los cambios pertinentes en el hándicap.


            Puntos en un descanso rápido: se ofrecen apuestas sobre el número de puntos en un descanso rápido. En baloncesto, un descanso rápido es una situación en la que un
            equipo consigue lanzar el balón a canasta con maniobras rápidas y un número mínimo de pases. Son posibles las siguientes opciones de apuesta:
            Puntos en ruptura rápida: más - el número de puntos en ruptura rápida será mayor que el valor seleccionado del argumento de apuesta.
            Puntos de ruptura rápida: menos - el número de puntos de ruptura rápida será menor que el valor del argumento de apuesta seleccionado.
            Puntos de saque rápido: F1 - El equipo 1 será el ganador de los puntos de saque rápido después de que se hayan realizado los cambios apropiados en el golpe de derecha.
            Puntos de saque rápido: F2 - El equipo 2 será el ganador de los puntos de saque rápido después de que se hayan realizado los cambios apropiados en la derecha.


            Mitad/Match: se ofrece apostar a los resultados de la primera mitad y de todo el partido al mismo tiempo, y sólo si ambos resultados se pronostican correctamente, la apuesta se resolverá como ganadora. Son posibles las siguientes opciones de apuesta:
            P1/P1: El equipo 1 ganará tanto el primer tiempo como el partido completo.
            P1/X: El equipo 1 ganará en la primera parte, pero el partido acabará en empate.
            P1/P2: El equipo 2 ganará en la primera parte, pero el partido terminará con la victoria del equipo 2.
            X/P1: el primer tiempo terminará en empate, pero el partido terminará con victoria del Equipo 1.
            H/H: tanto la primera parte como todo el partido acabarán en empate.
            X/P2: la primera parte acabará en empate, pero el partido terminará con victoria del Equipo 2.
            P2/P1: el primer tiempo terminará con victoria del Equipo 2, pero el partido terminará con victoria del Equipo 1.
            P2/X: la primera parte acabará con victoria del Equipo 2, pero el partido terminará en empate.
            P2/P2: el primer tiempo y el partido terminarán con una victoria del Equipo 2.



            Primeros puntos marcados: se le invita a apostar sobre qué tiro marcará los primeros puntos. Son posibles las siguientes opciones de apuesta:
            Primeros puntos anotados: tiro de dos puntos - los primeros puntos se anotarán con un tiro de dos puntos.
            Primeros puntos anotados: tiro de tres puntos - los primeros puntos se anotarán con un tiro de tres puntos.
            Primeros puntos anotados: tiro libre - los primeros puntos se anotarán mediante tiro libre.



            Últimos puntos anotados: se ofrece apostar sobre qué tiro se utilizará para anotar los últimos puntos. Son posibles las siguientes opciones de apuesta:
            Últimos puntos anotados: tiro de dos puntos - los últimos puntos se anotarán con un tiro de dos puntos.
            Últimos puntos anotados: tiro de tres puntos - los últimos puntos se anotarán con un tiro de tres puntos.
            Últimos puntos anotados: tiro libre - los últimos puntos se anotarán mediante tiro libre.


            Primera falta: apueste a qué equipo cometerá la primera falta. Están disponibles las siguientes opciones de apuesta:

            Primera falta: Equipo 1 - la primera falta será cometida por el Equipo 1.
            Primera falta: Equipo 2 - La primera falta será cometida por el Equipo 2.


            Última falta: Se ofrece una apuesta sobre qué equipo cometerá la última falta. Están disponibles las siguientes opciones de apuesta:
            Última falta: Equipo 1 - la última falta será cometida por el Equipo 1.
            Última falta: Equipo 2 - la última falta será cometida por el Equipo 2.


            Primer rebote: apuesta a qué equipo hará el primer rebote del partido. Son posibles las siguientes opciones de apuesta:
            Primer rebote: equipo 1 - el primer rebote del partido lo efectuará el equipo 1.
            Primer rebote: equipo 2 - el primer rebote del partido lo efectuará el equipo 2.


            Última elección
            Último rebote: apuesta a qué equipo hará el último rebote del partido. Están disponibles las siguientes opciones de apuesta:
            Última elección: Equipo 1 - El Equipo 1 hará la primera elección.
            Última elección: Equipo 2 - El Equipo 2 hará la primera elección.


            Primer tiro de tres puntos: se le invita a apostar sobre qué equipo realizará el primer tiro de tres puntos del partido. En baloncesto, un tiro de tres puntos es un tiro realizado con éxito desde detrás de la línea de tres puntos (arco de tres puntos). Están disponibles las siguientes opciones de apuesta:
            Primer tiro de tres puntos: Equipo 1 - El equipo 1 realizará el primer tiro de tres puntos.
            Primer tiro de tres puntos: Equipo 2 - El equipo 2 realizará el primer tiro de tres puntos.

            Último tiro de tres puntos: apueste a qué equipo realizará el último tiro de tres puntos del partido. Están disponibles las siguientes opciones de apuesta:
            Último tiro de tres puntos: Equipo 1 - El Equipo 1 realizará el último tiro de tres puntos.
            Último tiro de tres puntos: Equipo 2 - El equipo 2 realizará el último tiro de tres puntos.


            Tiros de 3 puntos: Total: Over/Under: se ofrece apostar al número de tiros de tres puntos realizados en total por dos equipos o uno de los equipos.


            Primer tiro de dos puntos: se le invita a apostar sobre qué equipo realizará el primer tiro de dos puntos del partido. En baloncesto, un tiro de dos puntos es un tiro realizado con éxito desde cualquier posición dentro de la zona de tres puntos. Están disponibles las siguientes opciones de apuesta:
            Primer tiro de dos puntos: Equipo 1 - El equipo 1 realizará el primer tiro de dos puntos.
            Primer tiro de dos puntos: Equipo 2 - El equipo 2 realizará el primer tiro de dos puntos.

            El último tiro de dos puntos Último tiro de dos puntos: apueste a qué equipo realizará el último tiro de dos puntos del partido. Están disponibles las siguientes opciones de apuesta:
            Último tiro de dos puntos: Equipo 1 - El equipo 1 realizará el último tiro de dos puntos.
            Último tiro de dos puntos: Equipo 2 - El equipo 2 realizará el último tiro de dos puntos.




            Primer tiro libre lanzado: le invitamos a apostar sobre qué equipo lanzará el primer tiro libre del partido. Un tiro libre en baloncesto es un lanzamiento efectuado por un jugador después de que el equipo contrario haya cometido una infracción. Un tiro libre acertado hace ganar un punto a un equipo. Están disponibles las siguientes opciones de apuesta:
            Primer lanzamiento de penalti: Equipo 1 - El equipo 1 lanzará el primer penalti.
            Primer penalti lanzado: Equipo 2 - El equipo 2 lanza el primer penalti.


            Realización de tiros de dos puntos (%)
            Realización de tiros de dos puntos (%) - se ofrece apostar a que el porcentaje de tiros de dos puntos realizados en el partido por el equipo, por el que se realiza la apuesta,
            será mayor o menor que el valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Realización de tiros de dos puntos (%): mayor: el porcentaje de tiros de dos puntos realizados en el partido por el equipo por el que se realiza la apuesta será mayor que el valor del argumento de apuesta seleccionado.
            Realización de tiros de dos puntos (%): menos - el porcentaje de tiros de dos puntos realizados en el partido por el equipo por el que se realiza la apuesta será inferior al valor del argumento de apuesta seleccionado.


            Realización de tiros de tres puntos (%) - se ofrece apostar a que el porcentaje de tiros de tres puntos realizados en el partido del equipo por el que se apuesta será mayor o menor que el valor seleccionado del argumento de la apuesta. Son posibles las siguientes opciones de apuesta:
            Rendimiento en tiros de tres puntos (%): mayor: el porcentaje de tiros de tres puntos realizados en el partido por el equipo por el que se realiza la apuesta será mayor que el valor del argumento de apuesta seleccionado.
            Realización de tiros de tres puntos (%): menos - el porcentaje de tiros de tres puntos realizados en el partido por el equipo por el que se realiza la apuesta será inferior al valor del argumento de apuesta seleccionado.


            Realización de penaltis (%) - la apuesta se ofrece para apostar que el porcentaje de penaltis lanzados en el partido por el equipo por el que se apuesta será superior o inferior al valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Porcentaje de tiros libres lanzados (%): mayor - el porcentaje de tiros libres lanzados en el partido por el equipo por el que se realiza la apuesta será mayor que el valor del argumento de apuesta seleccionado.
            Realización de tiros de tres puntos (%): menos - el porcentaje de tiros libres realizados en el partido por el equipo por el que se realiza la apuesta será inferior al valor del argumento de apuesta seleccionado.


            Se marcará primero un determinado número de puntos: se le invita a apostar por el equipo que será el primero en marcar el número de puntos seleccionado.
            Ejemplo
            Apuesta 1er Cuarto: El Equipo 1 anotará 10 puntos primero. La apuesta implica que el Equipo 1 debe anotar 10 puntos primero en el 1er cuarto.



            Número de cambios de líder: se ofrece apostar a que el número de cambios del equipo líder será mayor o menor que el valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Número de cambios de líder: más - el número de cambios del equipo líder será mayor que el valor seleccionado del argumento apuesta.
            Número de cambios del líder: menos - el número de cambios del equipo líder será menor que el valor seleccionado del argumento apuesta.





            Apuesta por puntos: Se ofrece para apostar a que un punto concreto de un partido será ganado por un equipo determinado.

            Ejemplo:
            Apuesta Equipo 1 (47): para que la apuesta se calcule como ganadora, el Equipo 1 debe ganar 47 puntos en el partido. Por ejemplo, si el marcador del partido de 20:25 se convierte en 22:25, significa que el Equipo 1 ha ganado 47 punt`
    },
    {
        id: 'tenis',
        title: 'Tenis',
        description: `El formato preanunciado de un partido de tenis puede modificarse antes del partido (por ejemplo, en un partido de individuales, se juega un super tie-break en lugar del tercer set decisivo, o 3 sets en lugar de 5 sets). En tales casos, las apuestas sobre los resultados del partido y los sets "P1" y "P2" se valorarán según el resultado final, y todas las demás apuestas se valorarán según la cuota "1".



            Si antes del comienzo del partido una de las partes se niega a participar en el mismo, las apuestas sobre todos los resultados de este partido se valorarán con cuota "1" (uno). En los torneos por equipos, cuando los nombres de los adversarios se indican bajo los nombres de los equipos (países) (por ejemplo, España-Suiza), si se produce una sustitución de un tenista (pareja) (jugador o pareja previamente anunciados, por los que se ofrecieron las apuestas), las apuestas sobre todos los resultados de este partido seguirán vigentes.



            Si un partido ha sido aplazado o interrumpido, las apuestas sobre su resultado seguirán siendo válidas hasta el final del torneo en el que se haya celebrado.




            Resultado: se ofrece para apostar por la victoria del jugador en el partido. Se ofrecen las siguientes opciones de apuesta:
            P1: victoria del jugador1
            P2: victoria del jugador2

            Las apuestas (incluidas las realizadas sobre datos estadísticos), cuyos resultados en el momento de la interrupción del partido (uno de los tenistas, por cualquier motivo, es descalificado, se niega a jugar o no puede continuar el juego) son claramente conocidos, en función del formato del partido, se considerarán como realizadas y estarán sujetas a liquidación. Las demás apuestas, incluidas "P1" y "P2", se liquidarán a cuota "1".

            Total: se ofrece para apostar por el número total de partidos jugados. Se ofrecen las siguientes opciones de apuesta:
            Total más: el número total de juegos será mayor que el valor del argumento de apuesta seleccionado.
            Ejemplo:
            Apuesta 1ª serie total: más (8,5). En esta apuesta "8.5" es el argumento de apuesta. Supongamos que el primer set ha terminado con un resultado de 6-4, es decir, que se han jugado 10 juegos. La apuesta se valorará como ganadora, ya que 10>8,5.
            Total menos: el número total de juegos será menor que el valor del argumento de apuesta seleccionado.
            Ejemplo:
            Apuesta 1er set total: menor que (8.5). En esta apuesta "8.5" es el argumento de apuesta. Supongamos que el primer set terminó con el marcador 2-6, es decir, se jugaron 8 juegos. La apuesta se resolverá ganando, ya que 8<8.5.


            Hándicap: Este tipo de apuesta es una ventaja positiva o negativa en los juegos aplicada a la puntuación del juego de un jugador. El jugador por el que se realice la apuesta será el ganador una vez realizados los cambios oportunos en el hándicap.
            Retrospectiva positiva: Este tipo de Retrospectiva implica que el jugador por el que se apuesta será el ganador después de que se sume a su resultado el número de juegos determinado por el argumento de apuesta seleccionado.
            Ejemplo:
            Apuesta Forehand 2 (3.5). La apuesta se realiza
            sobre el jugador2, "3.5" es el argumento de apuesta. Para que la apuesta se considere ganadora, el jugador2 debe ser el ganador después de que se haya añadido una ventaja de 3,5 juegos a su resultado.
            Considere los posibles resultados de esta apuesta:
            El resultado por juegos en el partido es 14-12 (1er set: 7-6; 2º set: 7-6). Al añadir una ventaja de 3,5 juegos al resultado del jugador2, el marcador pasa a ser 14-15,5. En este caso, la apuesta se resolverá como ganadora, ya que tras los cambios en el hándicap, el jugador2 es el ganador.
            El resultado del partido es 13-9 (1er set: 6-3, 2º set 7-6). Al añadir una ventaja de 3,5 juegos al resultado del jugador 2, el marcador pasa a ser 13-12,5. En este caso, la apuesta se valorará como pérdida, ya que tras los cambios realizados en la apuesta, el jugador2 no es el ganador.
            *Nota: si el argumento de la apuesta en el hándicap es un número entero, y después de los cambios realizados en el hándicap el resultado se convierte en empate, la apuesta se calculará como ganadora (calculada con cuota 1).
            Retrospectiva negativa: Este tipo de Retrospectiva implica que el jugador por el que se apuesta será el ganador después de que se haya restado a su resultado el número de juegos determinado por el argumento de apuesta seleccionado. Ejemplo:
            Apuesta Fore 1(-3.5). La
            apuesta se realiza al jugador1, "-3.5" es el argumento de apuesta. Para que la apuesta se considere ganadora, el jugador1 debe ser el ganador después de restar 3,5 juegos a su resultado.

            Consideremos los posibles resultados de esta apuesta:
            El resultado por juegos en el partido es 12-6 (1er set: 6-2; 2º set 6-4). Si restamos 3,5 juegos al resultado del jugador 1, la puntuación pasa a ser 8,5-6. En este caso, la apuesta se resolverá como ganadora, ya que tras los cambios en la derecha el jugador1 es el ganador.
            El resultado del partido es 14-12 (1er set: 7-6; 2º set: 7-6). Si restamos 3,5 juegos al resultado del jugador 1, el marcador pasa a ser 10,5-12. En este caso, la apuesta se resolverá como pérdida, porque después de los cambios realizados en la derecha el jugador1 no es ganador.
            *Nota: si el argumento de la apuesta en el hándicap es un número entero, y después de los cambios realizados en el hándicap la puntuación se convierte en empate, la apuesta se calculará como ganadora (calculada con probabilidades de 1).


            Juego por sets: Este tipo de hándicap es una ventaja positiva o negativa en sets aplicada a la puntuación de un jugador por set. El jugador por el que se realiza la apuesta debe ser el ganador tras la modificación del hándicap.

            Hindsight positivo: Este tipo de Hindsight implica que el jugador por el que se apuesta será el ganador después de que se sume a su resultado el número de sets determinado por el argumento de apuesta seleccionado.
            Ejemplo:
            Apuesta Forehand 2 (1.5). La apuesta se realiza al jugador
            2 y "1.5" es el argumento de apuesta. Para que la apuesta se considere ganadora, el jugador 2 debe ser el ganador después de que se hayan añadido 1,5 sets a su resultado.

            Consideremos los posibles resultados de esta apuesta:
            El resultado del set del partido es 2-1. Al añadir una ventaja de 1,5 sets al resultado del jugador 2, el marcador pasa a ser 2-2,5. En este caso, la apuesta se resolverá con una ganancia, ya que tras los cambios realizados en la derecha el jugador2 es el ganador.
            El resultado de sets en el partido es 2-0. Al añadir la ventaja de 1,5 sets al resultado del jugador 2, el marcador pasa a ser 2-1,5. En este caso, la apuesta se valorará como pérdida, ya que tras los cambios realizados en el golpe de derecha el jugador 2 no es el ganador del partido.
            Hindsight negativo: Este tipo de Hindsight implica que el jugador por el que se apuesta será el ganador después de restar a su resultado el número de sets determinado por el argumento de apuesta seleccionado.
            Ejemplo:
            Se realiza una apuesta al jugador 1 (-1,5). La apuesta se realiza al jugador 1 y "-1.5" es el argumento de apuesta. Para que
            la apuesta se considere ganadora, el jugador 1 debe ser el ganador después de restar 1,5 sets a su resultado.

            Consideremos los posibles resultados de esta apuesta:
            El resultado en sets del partido es 2-0. Si restamos 1,5 sets al resultado del jugador 1, el marcador pasa a ser 0,5-0. En este caso, la apuesta se resolverá como ganadora, ya que tras los cambios en el hándicap, el jugador 1 es el ganador.
            El resultado en sets del partido es 2-1. Si restamos 1,5 sets al resultado del jugador 1, la puntuación pasa a ser 0,5-1. En este caso, la apuesta se calculará como pérdida, porque después de los cambios realizados en el revés el jugador 1 no es ganador.




            Resultado del partido: se le invita a apostar por el resultado exacto (set score) del partido.
            Ejemplo:
            Apuesta El resultado del partido es 2-0. Para que la apuesta se considere ganadora, el partido debe terminar con un resultado de 2-0.


            Total sobre sets over/under: se ofrece para apostar sobre el número de sets jugados en el partido. Se ofrecen las siguientes opciones de apuesta:
            Total en sets más (2,5): Para que la apuesta se calcule ganadora, el número de sets jugados en el partido debe ser superior a 2,5.
            Total en sets menos (2,5): Para que la apuesta se calcule como ganadora, el número de sets jugados en el partido debe ser inferior a 2,5.

            Ejemplo:
            Apuesta Total a sets over (2.5). El resultado del partido es 1-2. En este caso, la apuesta se resolverá con una ganancia, ya que en total se jugaron 3 sets en el partido (3>2,5).


            Set/Match: se ofrece apostar al ganador del 1er set y al ganador del partido al mismo tiempo. Para que la apuesta se liquide como ganadora, ambos resultados deben pronosticarse correctamente.
            Ejemplo:
            Apuesta set/partido: P1/P2. Para que la apuesta se considere ganadora, el jugador 1 debe ganar el primer set, pero el jugador 2 debe ganar el partido.


            Marcador del set: oferta para apostar por el marcador exacto del set.

            Ejemplo:
            Apuesta 1er set: resultado 1-6. Para que la apuesta se considere ganadora, el primer set debe terminar con un resultado de 1-6.


            Match Tie-break: Se ofrece una apuesta sobre si se jugará un tie-break en el partido. El tie-break se juega cuando el marcador llega a 6-6 y continúa hasta que se ganan 7 puntos, con una ventaja de 2 puntos (por ejemplo, 7-5). Si el marcador llega a 6-6 en el tie-break, éste continúa hasta que uno de los jugadores consiga una ventaja de 2 puntos (por ejemplo, 8-10;12-10). Si se gana el tie-break, se registra una victoria en el set con una puntuación de 7-6. Se ofrecen las siguientes opciones de apuesta:
            Match tie-break: Sí - se jugará al menos un tie-break en el partido.
            Match tie-break: No - no se jugará tie-break en el partido


            1er set: resultado - se ofrece apostar al ganador del 1er set. Se ofrecen las siguientes opciones de apuesta:
            1er set: Resultado: P1 - El jugador 1 gana el 1er set.
            1er set: Resultado: P2 - El jugador 2 gana el 1er set.



            Total del set más efectivo: se ofrece apostar por el número total de partidos jugados en el set más efectivo (es decir, el set con mayor número de partidos jugados). Se ofrecen las siguientes opciones de apuesta:
            Total del conjunto de mayor puntuación: mayor - el número total de partidos del conjunto de mayor puntuación será mayor que el valor del argumento de apuesta seleccionado.
            Total del conjunto de mayor puntuación: menos - el número total de partidos del conjunto de mayor puntuación será menor que el valor del argumento de apuesta seleccionado.

            Ejemplo: Total de la
            apuesta del set con mayor puntuación: más de (8,5). El marcador del 1er set es 6-3 y el marcador del 2º set es 6-2. En este caso, el 1er set es el más efectivo, ya que en él se jugó el mayor número de juegos. La apuesta se resolverá con una victoria, ya que el total de este set es 9 (6+3), y 9> 8.5.


            Total del set más inconcluso: se propone apostar por el número total de juegos disputados en el set más inconcluso. (es decir, el set con el menor número de juegos disputados). Se ofrecen las siguientes opciones de apuesta:
            Total del conjunto más inconcluso: mayor – el número total de juegos en el conjunto más inconcluso será mayor que el valor seleccionado del argumento de apuesta.
            Total del conjunto más inconcluso: menos – el número total de partidas del conjunto más inconcluso será menor que el valor del argumento de apuesta
            seleccionado.

            Ejemplo:
            Apuesta Total del set más improductivo: menos de (10,5). El resultado del 1er set es 2-6 y el del 2º set es 4-6. En este caso, el 1er set es el más improductivo, ya que en él
            se jugó el menor número de juegos. En este caso, el 1er set es el más improductivo, ya que en él se jugó el menor número de juegos. La apuesta se resolverá con una ganancia, ya que el total de este set es 8 (2+6), y 8<10.5.


            Puntos totales (en un partido): se ofrece apostar por el número total de puntos de un partido concreto (15=1 punto, 30=2 puntos, 40=3 puntos, victoria del partido =4 puntos). Se ofrecen las siguientes opciones de apuesta:
            Total de puntos: mayor - el número total de puntos será mayor que el valor seleccionado del argumento de apuesta.

            Total de puntos: menos - el número total de puntos del partido seleccionado será menor que el valor del argumento de apuesta seleccionado.
            Ejemplo:
            Apuesta al total de puntos del
            8º juego del 2º set: over (5,5). El partido terminó con el resultado 15:P2 (es decir, 1+4). En este caso, la apuesta se calculará como pérdida, ya que 5<5,5.


            Total de puntos par/impar (en un partido): se ofrece apostar a que el número total de puntos de un partido concreto será un número par o impar (15=1 punto, 30=2 puntos, 40=3 puntos, ganar un partido =4 puntos). Se ofrecen las siguientes opciones de apuesta:
            Puntos totales: par. - el número total de puntos del juego seleccionado será un número par.
            Total Puntos: Impar. - el número total de puntos del juego seleccionado será un número impar.

            Ejemplo:
            Apuesta 1er set 7º juego total de puntos: impar. Si el resultado del 7.º juego es 15:P2 (es decir, 1+4), la apuesta se valorará como ganadora, ya que 5 es un número impar.


            Total de puntos (en juego) 3 resultados: Se ofrece una apuesta para apostar a que el número total de puntos de un partido concreto será mayor, menor o igual que el valor seleccionado del argumento de apuesta. (15=1 punto, 30=2 puntos, 40=3 puntos, victoria del partido =4 puntos). Se ofrecen las siguientes opciones de apuesta:
            Total de puntos (en un partido) 3 resultados: más - el número total de puntos de un partido concreto será mayor que el valor del argumento de apuesta seleccionado.
            Total de puntos (en un partido) 3 resultados: menos - el número total de puntos de un partido concreto será inferior al valor del argumento de apuesta seleccionado.
            Total de puntos (en juego) 3 resultados: igual - el número total de puntos de un determinado partido será igual al argumento de apuesta seleccionado. Ejemplo:
            Apuesta 1er set 1er set 4º juego total de puntos: igual a (5). Si el resultado del juego es 15:P2 (es decir, 1+4), la apuesta se valorará como ganadora, ya que el número total de puntos del set es igual a 5.


            Resultado del partido: se le invita a apostar por el resultado de un partido concreto.

            Ejemplo:
            Apuesta 1er set 1er juego: Puntuación P1:30. La apuesta asume que el 1er juego del 1er set será ganado por el jugador 1, con el jugador 2 anotando 30 puntos.


            Número de tie-breaks en el partido: se ofrece apostar por el número de tie-breaks jugados. Se juega un tie-break cuando el marcador llega a 6-6 y continúa hasta que se ganan 7 puntos, con una ventaja de 2 puntos (por ejemplo, 7-5). Si el marcador llega a 6-6 en un tie-break, éste continúa hasta que un jugador obtiene una ventaja de 2 puntos (por ejemplo, 8-10;12-10). Si se gana el tie-break, se registra una victoria en el set con una puntuación de 7-6.Se ofrecen las siguientes opciones de apuesta:
            Número de tie-breaks en el partido: más - el número de tie-breaks jugados será mayor que el argumento de apuesta seleccionado.
            Número de tie-breaks en el partido: menos - el número de tie-breaks jugados será inferior al argumento de apuesta seleccionado.


            1er set: número de breaks: se propone apostar por el número de breaks en el 1er set. En tenis, un break es cuando un jugador que saca en un juego pierde ese juego. Se ofrecen las siguientes opciones de apuesta:
            1er set: número de breaks: más - el número de breaks realizados en el 1er set será mayor que el valor seleccionado del argumento de apuesta.
            1er set: número de breaks: menos - el número de breaks realizados en el 1er set será menor que el valor seleccionado del argumento de apuesta.


            Número de breaks en el partido: se ofrece apostar al número de breaks en el partido En tenis, un break es una situación en la que un jugador que sirve en un juego, pierde el juego. Se ofrecen las siguientes opciones de apuesta:
            Número de descansos en el partido: más - el número de descansos realizados en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Número de descansos en el partido: menos - el número de descansos realizados en el partido será inferior al valor del argumento de apuesta seleccionado.


            1er Set 1er Break: apuesta sobre qué jugador romperá primero en el 1er set. En tenis, un break es cuando un jugador que saca en un juego pierde ese juego. Se ofrecen las siguientes opciones de apuesta:
            1er set 1er break: jugador1 - el primer break del 1er set lo hará el jugador1.
            1er set 1er break: jugador2 - el primer break del 1er set lo hará el jugador2.
            1er set 1er break: no - no se hará ningún break en el 1er set.


            Resultado del set: se propone apostar por el ganador de un set determinado.


            Ejemplo:
            Apuesta al resultado del 1er set: P1. La apuesta asume que el jugador1 será el ganador del 1er set.



            Total del set Par/Impar: Se ofrece una apuesta sobre si el número total de juegos jugados en un set será un número par o impar. Se ofrecen las siguientes opciones de apuesta:
            Total del set: par. - el número total de partidas jugadas en el set será un número par.
            Total del set: impar. - el número total de partidos jugados en el set será un número impar.
            Ejemplo:
            Apuesta al total del 1er set par/impar: par. La apuesta implica que el número total de juegos jugados en el 1er set será un número par. Supongamos que el resultado del 1er set es 2-6. Resulta que el número total de juegos será igual a
            8. La apuesta se valorará como ganadora, ya que 8 es un número par.


            Total del tie-break - oferta para apostar por el número total de puntos conseguidos en el tie-break. El tie-break se juega cuando el marcador llega a 6-6 y continúa hasta que se ganan 7 puntos, con una ventaja de 2 puntos (por ejemplo, 7-5). Si el marcador llega a 6-6 en un tie-break, éste continúa hasta que uno de los jugadores obtenga una ventaja de 2 puntos (por ejemplo, 8-10;12-10). Si se gana el tie-break, se registra una victoria en el set con una puntuación de 7-6. Se ofrecen las siguientes opciones de apuesta:
            Total desempate: mayor - el número total de puntos conseguidos en el desempate será mayor que el valor del argumento de apuesta seleccionado. Ejemplo:
            Apostar al total del tie-break del 1er set: mayor (11.5). Supongamos que el resultado del tie-break en el 1er set es 7-5. En este caso, la apuesta se valorará como ganadora, ya que 12 (7+5)>11.5.
            Total desempate: menos - el número total de puntos conseguidos en el desempate será menor que el valor seleccionado del argumento de apuesta. Ejemplo:
            Apostar al total del tie-break del 1er set: menos (11.5). Supongamos que el resultado del tie-break en el 1er set es 7-1. En este caso, la apuesta se valorará como ganadora ya que 8 (7+1) <11.5


            Hándicap de desempate

            Tie-break hándicap es una apuesta al ganador de un tie-break con hándicap. El tie- break se juega a 6-6 y continúa hasta que se ganan 7 puntos, con una ventaja de 2 puntos (por ejemplo, 7-5). Si el marcador llega a 6-6 en un tie-break, éste continúa hasta que uno de los jugadores gane una ventaja de 2 puntos (por ejemplo, 8-10;12- 10). Si se gana el tie-break, se registra una victoria en el set con una puntuación de 7-
            6. Se ofrecen las siguientes opciones de apuesta:
            Anulación del tie-break: F1 - El jugador 1 será el ganador del tie-break después de que se hayan realizado los cambios de anulación correspondientes.
            El jugador 2 será el ganador del desempate después de que se hayan realizado los cambios apropiados en el desempate.
            Ejemplo:
            Apuesta 2° set tie-break derecha: F2(3). La apuesta implica que el jugador 2 será el ganador del tie-break después de que se hayan añadido 3 puntos a su marcador. Supongamos que el resultado del tie-break en el segundo set será 7-
            5. Por lo tanto, la puntuación incluyendo el hándicap se convierte en 7-8. En este caso, la apuesta se resolverá como ganadora, porque después de los cambios en el hándicap, el jugador 2 es el ganador del tie-break.


            Resultado del tie-break: se ofrece apostar por el resultado exacto del tie-break.

            Ejemplo:
            Apuesta al resultado del tie-break del primer set 7-2. La apuesta implica que el resultado del tie-break del primer set será 7-2.


            Resultado del partido: se le invita a apostar por el ganador de un partido concreto.

            Ejemplo:
            Apuesta al resultado del 5º juego del 1er set: P1. La apuesta asume que el jugador 1 gana el 5º juego del 1er set.



            El resultado de un punto: se le invita a apostar por el ganador de un punto concreto.

            Ejemplo:
            Apuesta 1er set 1er juego 2º punto resultado: P1. La apuesta asume que el jugador1 gana el 2º punto del 1er juego en el primer set.


            Número de partidos: se propone apostar por el número total de partidos jugados en un set.

            Ejemplo:
            Apuesta 1ª serie: número de juegos: 10. Para que la apuesta se considere ganadora, el número total de juegos disputados en el primer set debe ser 10.


            El resultado será 40-40: Se ofrece una apuesta sobre si el resultado será 40-40 durante el partido. Se ofrecen las siguientes opciones de apuesta:
            El resultado será de 40-40: sí, el resultado del partido será de 40-40.
            El resultado será exactamente 40-40: No, el resultado del partido no será 40-40.
            Ejemplo:
            Apostar si el marcador será 40-40 en el 7º juego del 2º set: Sí. La apuesta implica que el marcador alcanzará 40-40 en el 7º juego del 2º set.


            Ganar después del 40-40: Se ofrece para apostar a que un jugador ganará después de que el marcador alcance el 40-40.
            Ejemplo:
            Apuesta 1er set 2º juego victoria tras 40-40: P1. La apuesta implica que después de que el marcador sea 40-40 en el 2º juego del 1er set, el juego será ganado por el jugador1.


            Ganará al menos dos sets: se ofrece apostar a que el jugador ganará en 2 sets. Se ofrecen las siguientes opciones de apuesta:
            Ganará al menos 2 sets: sí - el jugador por el que se apuesta ganará al menos 2 sets.
            Ganará al menos dos sets: no - el jugador por el que se apuesta no ganará en 2 sets.
            Ejemplo:
            Apuesta a si el jugador 1 ganará al menos dos sets: sí. Para que la apuesta se considere ganadora, el jugador 1 debe ganar al menos dos sets del partido.


            Quién sacará primero en el partido: apueste a qué jugador sacará primero en el partido. Se ofrecen las siguientes opciones de apuesta:
            El jugador 1 saca primero en el partido - El jugador 1 saca primero en el partido.
            El jugador 2 saca primero en el partido - El jugador 2 saca primero en el partido.


            Número de ochos en el partido: Se ofrece apostar por el número de ochos conseguidos en el partido. En tenis, un ace es una situación en la que el servidor gana un punto en un partido sirviendo correctamente y el jugador que recibe no ha tocado la pelota. Se ofrecen las siguientes opciones de apuesta:
            Número de Eisks en el partido: más - el número de Eisks tomados en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Número de Eisks en el partido: menos - el número de Eisks tomados en el partido será menor que el valor del argumento de apuesta seleccionado.


            Primer Eis: Se ofrece una apuesta sobre qué jugador se llevará el primer eis en un partido. En tenis, un eis se produce cuando el servidor gana un punto en un partido sacando correctamente y el jugador que recibe no ha tocado la pelota. Se ofrecen las siguientes opciones de apuesta:
            Primer as: Jugador 1 - El jugador 1 se llevará el primer as del partido.
            Primer ece: Jugador 2 - El jugador 2 tomará el primer ece del partido.
            Primer eis: ninguno - no se tomará ningún eis en el partido.


            Número de dobles faltas en un partido: Se ofrece apostar por el número de dobles faltas cometidas en un partido. En tenis, una doble falta es una situación en la que el jugador que saca comete errores en dos de sus saques a la vez, y el punto se concede al adversario. Se ofrecen las siguientes opciones de apuesta:
            Número de dobles faltas en el partido: más - el número de dobles faltas cometidas en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Número de dobles faltas en el partido: menos - el número de dobles faltas cometidas en el partido será menor que el valor del argumento de apuesta seleccionado.


            Primera doble falta: Se ofrece una apuesta sobre qué jugador cometerá la primera doble falta del partido. En tenis, una doble falta es una situación en la que el servidor comete errores en dos de sus saques a la vez y el punto se concede al adversario. Se ofrecen las siguientes opciones de apuesta:
            Primera doble falta: Jugador 1 - El jugador 1 cometerá la primera doble falta.
            Primera doble falta: Jugador 2 - El jugador 2 cometerá la primera doble falta.
            Primera doble falta: ninguna - no habrá dobles faltas en el partido.


            Rendimiento del lance: Pronostique qué lance dará lugar al mayor número de partidos. Se ofrecen las siguientes opciones de apuesta:
            1º < 2º: el mayor número de juegos se jugará en el 2º set.
            1º = 2º: se jugará el mismo número de juegos en el primer y segundo set.
            1º > 2º: se jugará el mayor número de juegos en el 1º set.
            Ejemplo:
            El marcador del 1er set es 6-1 y el marcador del 2º set es 6-4, es decir, el 2º set es el de mayor puntuación. En este caso, la apuesta: 1º < 2º se calcularía como ganadora, mientras que las apuestas 1º = 2º y 1º > 2º se calcularían como perdedoras.


            Tiempo muerto médico: Se ofrece una apuesta sobre si habrá un tiempo muerto médico durante el partido (Los jugadores tienen derecho a solicitar un tiempo muerto médico en caso de lesiones). Se ofrecen las siguientes opciones de apuesta:
            Tiempo muerto médico: sí - se solicitará un tiempo muerto médico en el partido.
            Tiempo muerto médico: ninguno - no se solicitará tiempo muerto médico en el partido.


            Duración del 1er set (minutos): se ofrecen apuestas sobre la duración del 1er set en minutos. Se ofrecen las siguientes opciones de apuesta:
            Duración del 1er set (minuto): más larga - la duración del primer set en minutos será más larga que el valor del argumento de apuesta seleccionado.
            Duración del 1er set (minuto): menos - la duración del primer set en minutos será menor que el valor del argumento de apuesta seleccionado.



            Duración del partido (minutos): se ofrecen apuestas sobre la duración del partido en minutos. Se ofrecen las siguientes opciones de apuesta:
            Duración del partido (minutos): más larga - la duración del partido en minutos será mayor que el valor del argumento de apuesta seleccionado.
            Duración del partido (minutos): menos - la duración del partido en minutos será menor que el valor del argumento de apuesta seleccionado.


            El partido será ganado por un ace: se propone apostar a que el resultado del partido se decidirá por un ace (En tenis, un ace es una situación en la que el servidor gana un punto en un juego mediante un saque correctamente ejecutado y el jugador que lo recibe no ha tocado la pelota). Se ofrecen las siguientes opciones de apuesta:
            El partido lo ganará un as: sí, el resultado del partido se decidirá por un as.
            El partido lo ganará un as: no - el resultado del partido no se decidirá por un as.

            Velocidad máxima de saque (km/h): Se le invita a apostar por la velocidad máxima de saque del jugador. Se ofrecen las siguientes opciones de apuesta:
            Velocidad máxima de lanzamiento (km/h): mayor: la velocidad máxima de lanzamiento del jugador será mayor que el valor seleccionado del argumento de apuesta.
            Velocidad máxima de lanzamiento (km/h): menor - la velocidad máxima de lanzamiento del jugador será menor que el valor seleccionado del argumento de apuesta.

            Velocidad media del 1er avance (km/h) Velocidad media del 1er saque (km/h): Se ofrece apostar por la velocidad media del primer saque de un jugador. Se ofrecen las siguientes opciones de apuesta:
            Velocidad media del 1er saque (km/h): mayor - la velocidad media del primer saque del jugador será mayor que el valor seleccionado del argumento de apuesta.
            Velocidad media del 1er saque (km/h): menos - la velocidad media del primer saque del jugador será inferior al valor seleccionado del argumento de apuesta.


            Ganador del torneo: le invitamos a apostar por el ganador del torneo.

            Ejemplo:
            Ganador de la apuesta al Qatar Exxon Mobile Open: R.Federer. Para que la apuesta se calcule como ganadora. R. Federer debe ganar en este torneo.


            Marcador del partido 15-15: La propuesta de apuesta consiste en apostar a que el marcador llegará a 15-15 durante el partido. Se ofrecen las siguientes opciones de apuesta:
            Marcador del partido 15-15: sí - el marcador del partido llegará a 15-15.
            Marcador de juego 15-15: no - el marcador de juego no llegará a 15-15. Ejemplo: Apuesta 1er set 2º juego 15-15: sí. Para que la apuesta se considere ganadora, el marcador debe alcanzar 15-15 durante el 2º juego del 1er set.


            Marcador del partido 30-30: Se ofrece una apuesta al marcador del partido para llegar al 30-30 durante el partido. Se ofrecen las siguientes opciones de apuesta:
            Puntuación del juego 30-30: Sí, la puntuación del juego llegará a 30-30.
            Puntuación del juego 30-30: no - la puntuación del juego no llegará a 30-30.
            Ejemplo:
            Apuesta 2º set 3er juego 30-30: no. Para que la apuesta se considere ganadora, el marcador no debe alcanzar el 30-30 durante el 3er juego del 2º set.


            El primero en ganar 2 juegos: Se ofrece una apuesta sobre qué jugador será el primero en ganar 2 juegos en un set. Se ofrecen las siguientes opciones de apuesta:
            El primero en ganar 2 juegos: Jugador 1 - El jugador 1 es el primero en ganar 2 juegos en un set.
            Primero en ganar 2 juegos: Jugador 2 - El jugador 2 es el primero en ganar 2 juegos en un set.
            Ejemplo:
            Apuesta 1er set Primero en ganar 2 juegos: jugador 1. Para que la apuesta se calcule como ganadora, el jugador 1 debe ser el primero en ganar 2 juegos en el 1er set.


            El primero en ganar 3 juegos: Se ofrece una apuesta sobre qué jugador será el primero en ganar 3 juegos en un set. Se ofrecen las siguientes opciones de apuesta:
            El primero en ganar 3 juegos: Jugador 1 - El jugador 1 es el primero en ganar 3 juegos en un set.
            Primero en ganar 3 juegos: jugador 2 - el jugador 2 es el primero en ganar 3 juegos en un set.
            Ejemplo:
            Apuesta 2º set Primero en ganar 3 juegos: jugador 2. Para que la apuesta se calcule como ganadora, el jugador 2 debe ser el primero en ganar 3 juegos en el 2º set.

            El primero en ganar 4 juegos: Se ofrece una apuesta sobre qué jugador será el primero en ganar 4 juegos en un set. Se ofrecen las siguientes opciones de apuesta:
            El primero en ganar 4 juegos: Jugador 1 - El jugador 1 es el primero en ganar 4 juegos en un set.
            Primero en ganar 4 juegos: jugador 2 - el jugador 2 es el primero en ganar 4 juegos en un set.
            Ejemplo:
            Apuesta 1er set Primero en ganar 4 juegos: jugador 1. Para que la apuesta se calcule como ganadora, el jugador 1 debe ser el primero en ganar 4 juegos en el 1er set.


            El primero en ganar 5 juegos: Se ofrece una apuesta sobre qué jugador será el primero en ganar 5 juegos en un set. Se ofrecen las siguientes opciones de apuesta:
            El primero en ganar 5 juegos: Jugador 1 - El jugador 1 es el primero en ganar 5 juegos en un set.
            Primero en ganar 5 juegos: jugador 2 - el jugador 2 es el primero en ganar 5 juegos en un set.
            Ejemplo:
            Apuesta 2º set El primero en ganar 5 juegos: jugador 2. Para que la apuesta se calcule como ganadora, el jugador 2 debe ser el primero en ganar 5 juegos en el 2º set.


            Si un jugador ganará al menos un set: se ofrece apostar a que el jugador ganará al menos un set. Se ofrecen las siguientes opciones de apuesta:
            Ganará al menos un set: Sí - el apostante ganará al menos un set.
            Ganará al menos un set: no - el jugador por el que se apuesta no ganará ninguno de los sets.
            Ejemplo:
            Apuesta a si el jugador 2 ganará al menos un set: sí. Para que la apuesta se considere ganadora, el jugador 2 debe ganar al menos un set. Supongamos que el marcador del partido es 2-1. En este caso, la apuesta se valorará como ganadora porque el jugador 2 ha ganado al menos un set.


            El jugador ganará el partido tras perder el 1er set: se ofrece una apuesta a que un jugador perderá el 1er set pero ganará el partido.
            El jugador ganará el partido tras perder el 1er set: sí - el jugador por el que se realiza la apuesta perderá en el primer set, pero ganará el partido.
            El jugador ganará el partido perdiendo el 1er set: no - el jugador por el que se realiza la apuesta ganará el 1er set o perderá el partido, o ambos a la vez. Ejemplo:
            Apuesta Jugador 1 ganará el partido perdiendo el 1er set: sí. Para que la apuesta se considere ganadora, el jugador 1 debe perder el 1er set, pero debe ganar el partido.


            Setball (set ball/set point) - situación en el tenis que denota el sorteo de un punto decisivo para determinar el ganador de un set.
            Considere los dos ejemplos siguientes:

            Ejemplo 1
            Setball Bet: Total Under (1.5) en 1er set
            La puntuación actual del primer set es 5:4 en juegos y 40:0 en puntos. Por lo tanto, si el jugador 1 gana el siguiente punto, será el ganador del set con una puntuación de 6:4. En este caso, la apuesta se valorará como ganadora, ya que el punto decisivo se ganó una vez. En este caso, la apuesta se valorará como ganada, ya que el punto decisivo se ganó una vez. Si el marcador es 40:0, el resultado es 40:15, entonces la apuesta se liquidará como pérdida, ya que el punto decisivo no se ganó una vez.

            Ejemplo 2
            Setball Bet: Total over (2.5) en el 1er set
            El marcador actual del primer set es 5:4 en juegos y 40:0 en puntos. Después el marcador pasa a ser 40:15, luego 40:30, y sólo entonces el Jugador 1 gana el punto decisivo y se convierte en el ganador del set. En este caso, la apuesta se calculará como ganadora, ya que el punto decisivo se ha jugado tres veces`
    },
    {
        id: 'hockey',
        title: 'Hockey',
        description: `Las apuestas sobre hockey sobre hielo se aceptan en el tiempo principal, excepto para el resultado "Ganador del partido", al calcular las apuestas en las que también se tiene en cuenta el resultado registrado en la prórroga (tiempo extra) y la tanda de penaltis. Los resultados registrados durante la prórroga y la tanda de penaltis no se tienen en cuenta al calcular las apuestas sobre los resultados ofrecidos para el tiempo principal.



            Un partido interrumpido y no continuado o finalizado en un plazo de 24 horas se
            considerará disputado si se han jugado al menos 50 minutos. En los demás casos, se
            considerará que el partido ha fracasado. Las apuestas realizadas al resultado "Ganador del partido" están sujetas a cálculo con cuota "1" si el partido ha sido interrumpido con resultado de empate y se considera que ha tenido lugar (se han jugado al menos 50 minutos).Los resultados de partidos interrumpidos y fallidos (se han jugado menos de 50 minutos), que en el momento de la interrupción ya se conozcan inequívocamente y no dependan del resultado final del partido, están sujetos a cálculo, y todas las demás apuestas se calculan con cuota "1".




            Resultado: Se ofrece para predecir qué equipo ganará el partido. Son posibles las siguientes opciones de apuesta:
            P1 - victoria del equipo 1
            P2 - victoria del equipo 2
            X - el partido acabará en empate


            Ganador del partido (incluidas prórroga y tanda de penaltis): se propone apostar por el ganador del partido, incluidas prórroga y tanda de penaltis. La prórroga se convoca si hay empate al final del tercer periodo. Los shootouts son lanzamientos de penalti que se conceden en caso de empate al final de la prórroga.
            Ganador del partido (incluidas prórroga y tanda de penaltis): com.1 - El equipo 1 será el ganador del partido, incluidas prórroga y tanda de penaltis.
            Ganador del partido (incluidas prórroga y tanda de penaltis): com 2 - El equipo 2 será el ganador del partido, incluidas prórroga y tanda de penaltis.


            Doble oportunidad: se le ofrece apostar al mismo tiempo por dos resultados del partido. Si uno de los resultados se pronostica correctamente, la apuesta se valorará como ganadora. Son posibles las siguientes opciones de apuesta:
            1X - Equipo 1 victoria o empate
            12 - gana el equipo 1 o el equipo 2
            X2 - una victoria para el equipo 2 o un empate


            Ejemplo:
            Si el partido terminó 2:2, las apuestas 1X y X2 se calcularán como ganancia y la apuesta 12 se calculará como pérdida.


            Hándicap: Un hándicap es una ventaja positiva o negativa que se añade al resultado de un equipo. Para que una apuesta con hándicap se calcule como ganadora, el equipo por el que se apuesta debe ser el ganador del partido después de que la ventaja reclamada por la apuesta se haya aplicado a su resultado.
            Hándicap positivo: Este hándicap consiste en añadir goles, cuyo número viene determinado por el valor del argumento de la apuesta, a la puntuación total del equipo por el que se ha apostado.

            Por ejemplo:
            Apuesta Handicap 2 (2). La apuesta es al equipo 2, y (2) es el argumento de la apuesta. Para que la apuesta se determine como ganadora, el equipo 2 debe ser el ganador del partido después de que se añadan 2 goles a su resultado. Consideremos tres posibles resultados de la apuesta:
            El partido terminó con un resultado de 2:1. Si se añaden 2 goles al resultado del equipo 2, el marcador pasa a ser 2:3. En este caso, la apuesta se calculará como ganadora, porque después de sumar los goles el equipo 2 se convirtió en el ganador.
            El partido terminó con un resultado de 3:0. Si se añaden 2 goles al resultado del equipo 2, el marcador pasa a ser 3:2. En este caso, la apuesta se calculará como pérdida, porque después de añadir los goles el equipo 2 pierde.
            El partido terminó con un resultado de 2:0. Si se añaden 2 goles al resultado del equipo 2, el marcador pasa a ser 2:2. En este caso, la apuesta se calculará como ganancia, porque después de añadir los goles el resultado se convierte en empate.

            Hándicap de apuesta negativo: Este hándicap consiste en restar los goles, cuyo número viene determinado por el argumento de apuesta seleccionado, del resultado total del equipo por el que se ha apostado.

            Por ejemplo:
            Apuesta Handicap 1(-2). La apuesta se realiza al equipo 1 y (-2) es el argumento de la apuesta. Para que la apuesta se considere ganadora, el equipo 1 debe ganar el partido después de que se hayan descontado 2 goles de su resultado. Consideremos tres posibles resultados de la apuesta:
            El partido terminó con un resultado de 4:1. Al restar 2 goles del resultado del equipo 1, el marcador pasa a ser 2:1. En este caso, la apuesta se calculará como ganadora, porque después de restar los goles, el equipo 1 sigue siendo el ganador.
            El partido terminó con un resultado de 2:1. Al restar 2 goles del resultado del equipo 1, el marcador pasa a ser 0:1. En este caso, la apuesta se calculará como pérdida, ya que tras la resta de goles el equipo 1 pierde.
            El partido terminó con un resultado de 4:2. Al restar 2 goles al resultado del equipo 1, el marcador pasa a ser 2:2. En este caso, la apuesta se calculará como ganancia, porque después de restar los goles el resultado se convierte en empate.

            Handicap asiático (doble): En esta apuesta, el argumento es un número que es un multiplicador de 0,25 (es decir, divisible por 0,25 sin resto). Por ejemplo, 0,25; 1,25; 1,75, etc. Cuando se apuesta al hándicap asiático, la apuesta se divide en dos apuestas iguales con la misma cuota, pero con argumentos diferentes. En una apuesta, el argumento será el número obtenido tras sumar 0,25 al argumento principal. En la otra apuesta, el argumento será el número obtenido tras restar 0,25 al argumento principal.

            Por ejemplo:
            La apuesta es al equipo 2 (1,75) con cuota de 3 e importe apostado de 100 rublos. La apuesta se realiza al equipo 2, (1,75) es el argumento de la apuesta. Esto significa que la apuesta se divide en dos apuestas:
            Handicap 2(1.5), con cuota de 3 y cantidad apostada de 50 rublos (argumento de apuesta aquí: 1.75-0.25)
            Handicap 2(2), con cuotas de 3 y cantidad apostada de 50 rublos (argumento de apuesta aquí:1.75+0.25)
            Así, obtenemos dos apuestas regulares en el hándicap, y el cálculo se hará sobre el resultado de estas dos apuestas. Consideremos las posibles variantes de cálculo de esta apuesta:
            La apuesta Handicap 2(1.75) se valora totalmente como ganadora. Esto significa que tanto el Hándicap 2(1.5) como el Hándicap 2(2) deben valorarse como ganados. Para calcular el importe ganador, el importe total de la apuesta debe multiplicarse por la cuota. El importe de la apuesta es de 100 rublos y la cuota es de 3. Por lo tanto, la ganancia será: 100×3=300.
            La apuesta Handicap 2(1.75) se liquida completamente como pérdida. Esto significa que tanto la apuesta Handicap 2(1.5) como la apuesta Handicap 2(2) se valorarán como perdidas. Por ejemplo, si el resultado del partido es 3-0, ambas apuestas se valorarán como perdidas.
            La apuesta Fore 2(1,75) se calcula como media pérdida. Esto significa que una de las apuestas se calculará como pérdida y la otra como ganancia. Por ejemplo, si el resultado del partido es 2:0, la apuesta Forex 2(2) se calculará como ganancia, y la apuesta Forex 2(1.5) se calculará como pérdida. En este caso, el importe de la devolución será igual a la mitad del importe total de la apuesta. El importe total de la apuesta es de 100 rublos, por lo que el importe de la devolución será de 50 rublos.
            Veamos ahora un ejemplo de una apuesta en Fora Asiática (Doble), que se salda con una ganancia a medias:
            La apuesta es un hándicap
            2(0,25) con cuota 2, y el importe de la apuesta es de 200 rublos. La apuesta se realiza al
            equipo 2, (0,25) es el argumento del hándicap.
            Esto significa que la apuesta se divide en dos apuestas:
            Forex 2(0.5) con probabilidades de 2, y cantidad apostada de 100 rublos (argumento de la apuesta aquí: 0.25+0.25)
            Forex 2(0) con cuotas de 2, y cantidad apostada de 100 rublos (argumento de apuesta aquí: 0.25-0.25)
            Supongamos que el partido terminó con el marcador 0:0. En este caso, la apuesta se calculará como media ganancia. Esto significa que una apuesta se calculará como ganancia y la segunda como devolución. En este caso, la apuesta se calculará como ganadora y la segunda como perdedora. El importe ganador se calcula según la siguiente fórmula:
            Importe de la apuesta × (coeficiente +1)÷2
            En este caso, 200 × (2+1)÷2=300


            Total: La apuesta se ofrece para apostar que el número total de goles marcados en el partido será mayor o menor que el valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Total más: el número total de goles marcados será mayor que el valor del argumento de la apuesta seleccionada. Si el número total de goles y el valor del argumento son iguales, la apuesta se resolverá con una devolución.

            Ejemplo:
            Apuesta Total sobre (3). En esta apuesta, "3" es el argumento de la apuesta. Por lo tanto, para que la apuesta se calcule como ganadora, el número total de goles marcados debe ser superior a 3. Si el número total de goles es igual a 3, la apuesta se calculará como ganadora.
            Total menos: el número total de goles marcados será inferior al valor del argumento de apuesta seleccionado. Si el número de goles y el valor del argumento son iguales, la apuesta se resolverá con una devolución.

            Ejemplo:
            Apuesta Total Under (3). En esta apuesta, "3" es el argumento de la apuesta. Por lo tanto, para que la apuesta se determine como ganadora, el número total de goles marcados debe ser inferior a 3. Si el número total de goles es 3, la apuesta se valorará como ganadora.


            Hándicap (Hándicap europeo): Este tipo de hándicap implica que se añade un argumento propuesto al resultado final del partido. Para que la apuesta se calcule como ganadora, el equipo por el que se apuesta debe ser el ganador después de añadir el argumento.

            Ejemplo:
            Apuesta de hándicap (2:1): П1. La apuesta se realiza a la victoria del Equipo 1. Esta apuesta implica que el marcador indicado por el argumento de la apuesta se añadirá al marcador final. Supongamos que el partido finaliza con un resultado de 3:3.
            Después de añadir el resultado indicado por el argumento de la apuesta, el resultado es 5:4. En este caso, la apuesta se cancelará. En este caso, la apuesta se valorará como ganadora, ya que tras los cambios pertinentes en el hándicap, el equipo 1 es el ganador.

            1er gol: puede apostar a qué equipo marcará el primer gol del partido. Son posibles las siguientes opciones de apuesta:
            Com.1 marcará: El equipo 1 marcará el primer gol
            Com.2 marcará: El primer gol lo marcará el equipo 2
            Sin goles: no se han marcado goles en el partido


            Resultado del partido: se le pide que pronostique el resultado del partido.

            Ejemplo:
            Apostar resultado del partido 1:5. Para que la apuesta se calcule como ganadora, el partido debe finalizar con el resultado 1:5.


            Gol (Seleccionado): se le ofrece apostar a qué equipo marcará el gol seleccionado. Son posibles las siguientes opciones de apuesta:
            El Equipo 1 marcará: el gol seleccionado será marcado por el Equipo 1
            El Equipo 2 marcará: el gol seleccionado será marcado por el Equipo 2
            Nadie marcará: ninguno de los dos equipos marcará el gol seleccionado


            Por ejemplo:
            Apuesta 10º gol: El equipo 1 marcará. Para que la apuesta se considere ganadora, el equipo 1 debe marcar el 10º gol.

            El equipo marcará su primer gol: se le ofrece apostar por el periodo en el que el equipo marcará su primer gol. Son posibles las siguientes opciones de apuesta:
            1er periodo: el equipo marcará su primer gol en el 1er periodo
            2º periodo: un equipo marcará su primer gol en el 2º periodo
            3er periodo: un equipo marcará su primer gol en el 3er periodo
            No marcará: el equipo no marcará ningún gol en el partido



            Por ejemplo:
            Apuesta Equipo 1 marcará su primer gol: 1er periodo. Para que la apuesta se considere ganadora, el equipo 1 debe marcar su primer gol en el primer periodo.


            Se marcará el primer gol: se ofrece apostar por el periodo en el que se marcará el 1er gol. Son posibles las siguientes opciones de apuesta:
            1er periodo: El 1er gol se marcará en el 1er periodo
            2º periodo: El primer gol se marcará en el segundo periodo
            3er periodo: El 1er gol se marcará en el 2º periodo
            No marcará: No se marcarán goles en ninguno de los dos periodos.


            El equipo no perderá y el total del partido
            El equipo no perderá y el total del partido: se ofrece apostar por el hecho de que el equipo no perderá en el partido y al mismo tiempo por el número total de goles marcados en el partido. Para que la apuesta se calcule como ganadora, ambos
            resultados deben pronosticarse correctamente. Son posibles las siguientes opciones de apuesta:
            El equipo no perderá y el total del partido: más - el equipo no perderá en el partido y el número total de goles marcados será mayor que el valor
            del argumento de apuesta seleccionado
            El equipo no perderá
            y el total del partido: menos - el equipo no perderá el
            partido y el número total de goles marcados será inferior al valor seleccionado del
            argumento de la apuesta


            Por ejemplo:
            Apuesta a que el Equipo 1 no perderá y el total del partido es superior a (5). Para que la apuesta se considere ganadora, el Equipo 1 no debe perder (es decir, debe ser el ganador o debe registrarse un empate) y el número total de goles marcados debe ser superior a 5. Supongamos que el marcador del partido es 3:3. En este caso, la apuesta se valorará como ganadora, ya que el equipo 1 no ha perdido y el número total de goles marcados es 6.

            El equipo marcará el primer gol y ganará el partido
            El equipo marcará el primer gol y ganará el partido: se ofrece una apuesta al equipo que marcará el primer gol en el partido y lo ganará. Son posibles las siguientes opciones de apuesta:
            El equipo marcará el primer gol y ganará el partido: sí - el equipo marcará el primer gol y ganará el partido (para que la apuesta se calcule como ganadora, ambos resultados deben ser pronosticados correctamente).
            El equipo marcará el primer gol y ganará el partido: no - el equipo no marcará el primer gol o no ganará el partido (o las dos opciones simultáneamente)

            Ejemplo:
            Apueste a que el Equipo 2 marcará el primer gol y ganará el partido. Para que la apuesta se considere ganadora, el equipo 2 debe marcar el primer gol y ganar el partido.


            El equipo marcará el primer gol y no ganará el partido: se ofrece una apuesta a que un equipo marcará el primer gol en el partido y no lo ganará. Son posibles las siguientes opciones de apuesta:
            El equipo marcará el primer gol y no ganará el partido: sí - el equipo marcará el primer gol en el partido y no lo ganará (para que la apuesta se calcule como ganadora, ambos resultados deben predecirse correctamente)
            El equipo marcará el primer gol y no ganará el partido: no - el equipo no marcará el primer gol o ganará el partido (o dos opciones simultáneamente)

            Ejemplo:
            Apueste a que el Equipo 1 marcará el primer gol y no ganará el partido. Para que la apuesta se determine como ganadora, el Equipo 1 debe marcar el primer gol del partido, pero no ganar el partido.


            Voluntad de victoria: se sugiere apostar por la victoria de un equipo, sin embargo, para que esta apuesta se calcule como victoria, en algún momento del partido el equipo debe perder ante el adversario para luego tomar la delantera y convertirse en ganador.

            Ejemplo:
            Apuesta a que el Equipo 1 ganará: sí. Supongamos que en el minuto 36 del partido el marcador era 2-3, sin embargo, el partido terminó con el marcador 4-3. En este caso, la apuesta se calculará como ganadora porque el Equipo 1 ganó el partido y hubo un momento durante el partido en el que iba perdiendo.

            El equipo ganará al menos un periodo: se ofrece apostar a que el equipo ganará al menos un periodo del partido. Son posibles las siguientes opciones de apuesta:
            El equipo ganará al menos un periodo
            : sí - el
            equipo ganará al menos un periodo del partido.
            El equipo ganará al menos un periodo
            : no - el
            equipo no ganará en ningún periodo del partido.


            Ejemplo
            Apostar a que el Equipo 1 ganará al menos un periodo: sí. Para que la apuesta se considere ganadora, el Equipo 1 debe ganar al menos un periodo.


            El equipo ganará y el total del partido: se propone apostar al resultado del partido y al número total de goles marcados al mismo tiempo (para que la apuesta se calcule como ganadora, ambos resultados deben pronosticarse correctamente).

            Ejemplo:
            Apueste a que el Equipo 1 ganará y el total del partido es superior a (1,5). Para que la apuesta se calcule como ganadora, el partido debe terminar con una victoria del Equipo 1 y el número total de goles marcados debe ser superior a 1,5.


            El equipo marcará: se propone apostar a que el equipo marcará goles en el partido. Son posibles las siguientes opciones de apuesta:
            El equipo 1 marcará:
            Sí: El equipo 1 marcará al menos un gol
            No: El equipo 1 no marcará ningún gol
            El equipo 2 marcará:
            Sí: El equipo 2 marcará al menos un gol
            No: El equipo 2 no marcará ningún gol
            Ambos equipos marcarán:
            Sí: cada equipo marcará al menos un gol.
            No: uno de los equipos no marcará ningún gol o ambos equipos no marcarán ningún gol.
            Sólo un equipo marcará
            Sí: sólo un equipo marcará goles
            No: o ninguno de los dos equipos marcará en el partido o ambos marcarán


            Minuto del primer gol: se le pide que prediga el intervalo de tiempo durante el cual se marcará el primer gol.

            Por ejemplo:
            Apuesta Minuto del primer gol: del minuto 26 al 60. Para que la apuesta se considere ganadora, el primer gol debe marcarse entre los minutos 26 y 60.


            Minuto del último gol: se le pide que prediga el intervalo de tiempo durante el cual se marcará el último gol.
            Por ejemplo:
            Apuesta Último Gol Minuto: del minuto 56 al 60. Para que la apuesta se valore como ganadora, el último gol debe marcarse entre los minutos 56 y 60.


            Resultado de la prórroga: oferta para apostar sobre el resultado de la prórroga. En hockey se designa tiempo extra si al final del tercer periodo hay empate. Son posibles las siguientes opciones de apuesta:
            P1: El equipo 1 será el ganador de la prórroga
            P2: El equipo 2 será el ganador de la prórroga
            X: la prórroga acabará en empate


            El equipo marcará 2 goles seguidos: se ofrece una apuesta al equipo que marcará dos goles seguidos. Son posibles las siguientes opciones de apuesta:
            El equipo marcará 2 goles seguidos: sí - el equipo marcará dos goles seguidos
            El equipo marcará 2 goles seguidos: no - el equipo no marcará dos goles seguidos

            Ejemplo:
            Apueste a que el Equipo 1 marcará dos goles seguidos. Para que la apuesta se considere ganadora, el Equipo 1 debe marcar dos goles seguidos.

            Gol en cada periodo: se ofrece apostar a que se marcarán goles en cada uno de los tres periodos. Son posibles las siguientes opciones de apuesta:
            Gol en cada periodo: sí - se marcará al menos un gol en cada uno de los tres periodos
            Gol en cada periodo: ninguno - no se marcarán goles en al menos uno de los periodos


            Un gol a puerta vacía
            Gol a puerta vacía: ofrece apuestas sobre el número de goles marcados a puerta vacía. En hockey, un gol a puerta vacía es un gol marcado contra un equipo que ha sustituido al portero por el sexto jugador del equipo, es decir, el portero sale de la portería y el sexto jugador entra en el campo. Son posibles las siguientes opciones de apuesta:
            Gol a puerta vacía: sí - se marcará al menos un gol a puerta vacía en el partido
            Gol a puerta vacía: no - no se marcarán goles a puerta vacía en el partido
            Gol a puerta vacía: más - el número de goles marcados a puerta vacía será mayor que el valor seleccionado del argumento de apuesta
            Gol a puerta vacía: menos - el número de goles marcados a puerta vacía será inferior al valor seleccionado del argumento de apuesta

            Equipo que marcará en minoría: se ofrecen apuestas sobre el número de goles marcados en minoría. En hockey, un gol marcado en minoría es una situación en la
            que el número de jugadores del equipo que ha marcado el gol es inferior al del equipo contrario. Son posibles las siguientes opciones de apuesta:
            El equipo marcará en minoría: Sí - se marcará al menos un gol en minoría
            El equipo marcará en minoría: no - no se marcarán goles en minoría
            El equipo marcará en la minoría: más - el número de goles marcados en la minoría será mayor que el valor del argumento de apuesta seleccionado
            El equipo marcará en minoría: menos - el número de goles marcados en minoría será inferior al valor seleccionado del argumento de la apuesta


            Tiroteo. Marcador de goles: puede apostar a que se marcará un gol en la tanda seleccionada. Una tanda es un lanzamiento de penaltis que se concede en caso de empate al final de la prórroga. Son posibles las siguientes opciones de apuesta:
            Tiro: gol marcado: sí - el gol se marcará mediante el tiro seleccionado
            Tiro: se marcará un gol: no - el gol no se marcará por el tiro seleccionado


            Ejemplo:
            Apuesta 2ª tanda. Se marcará gol: sí. Para que la apuesta se salde con una victoria, el gol deberá marcarse en la segunda tanda de penaltis.

            Número de realizaciones de la mayoría numérica: se ofrece apostar a que el número de realizaciones de la mayoría numérica será superior o inferior al valor seleccionado del argumento de apuesta. En el hockey sobre hielo, una mayoría numérica es una situación en la que al menos un jugador del equipo contrario es retirado
            temporalmente del campo, es decir, el equipo tiene una ventaja numérica en el número de jugadores sobre el hielo y consigue marcar un gol en esta posición. Si ambos equipos tienen el mismo número de jugadores, no hay ventaja numérica en el juego. Son posibles las siguientes opciones de apuesta:
            Número de realizaciones de la mayoría numérica: mayor: el número de
            realizaciones de la mayoría numérica será mayor que el valor seleccionado del argumento de apuesta.
            Número de realizaciones de la mayoría numérica: menos: el número de
            realizaciones de la mayoría numérica será inferior al valor seleccionado del argumento de tasa.


            Número de goles: se propone apostar por el número de goles marcados.

            Ejemplo:
            Apuesta Número de goles: 6. Para que la apuesta se considere ganadora, el número total de goles marcados debe ser exactamente 6.

            Periodos de ejecución Rendimiento de los periodos: se ofrece apostar por cuál de los periodos marcará más goles. Son posibles las siguientes opciones de apuesta:
            2>1: el número de goles marcados en el segundo periodo será mayor que en el primero
            3>1: el número de goles marcados en el tercer periodo será mayor que en el primero
            3>2: el número de goles marcados en el tercer periodo será mayor que en el segundo periodo


            El equipo ganará todos los periodos: se ofrece apostar a que el equipo ganará todos los periodos. Son posibles las siguientes opciones de apuesta:
            El equipo ganará todos los periodos: sí - el equipo ganará los tres periodos
            El equipo ganará todos los periodos: no - el equipo no ganará al menos un periodo

            Ejemplo:
            Apuesta a que el Equipo 2 ganará todos los periodos: sí. Para que la apuesta se considere ganadora, el equipo 2 debe ganar los tres periodos del partido.

            Ganar con ventaja: se propone apostar por la diferencia de goles con la que el equipo ganará el partido.

            Ejemplo:
            Apuesta Equipo 1: gana por 2 goles. Para que la apuesta se considere ganadora, el Equipo 1 debe ganar por 2 goles.

            Todos los periodos (over/under): la apuesta se ofrece para apostar a que el número total de goles marcados en cada uno de los tres periodos será superior o inferior al valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Todos los periodos: más - el número de goles marcados en cada uno de los tres periodos será mayor que el valor del argumento de apuesta seleccionado.
            Todos los periodos: menos - el número de goles marcados en cada uno de los tres periodos será inferior al valor del argumento de apuesta seleccionado.

            Ejemplo:
            Apuesta Todos los periodos: más (3). Para que la apuesta se considere ganadora, el número total de goles marcados en cada uno de los tres periodos debe ser superior a tres.

            Cada equipo marcará (over/under): La apuesta se ofrece para apostar que el número de goles marcados por cada equipo será mayor o menor que el valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Cada equipo marcará: más - el número de goles marcados por cada equipo será mayor que el valor seleccionado del argumento de la apuesta
            Cada equipo marcará menos: el número de goles marcados por cada equipo será inferior al valor seleccionado del argumento de la apuesta.
            Ejemplo:
            Apuesta Cada equipo marcará: más (2,5). Para que la apuesta se valore como ganadora, el número de goles marcados por cada equipo debe ser superior a 2,5.

            Empate en al menos uno de los periodos: se ofrece apostar a que al menos uno de los periodos terminará en empate. Son posibles las siguientes opciones de apuesta:
            Empate en al menos uno de los periodos: sí - al menos uno de los periodos terminará en empate
            Empate en al menos uno de los periodos: no - ninguno de los periodos terminará en empate


            El equipo ganará al menos dos periodos: se ofrece apostar a que el equipo ganará al menos dos periodos. Son posibles las siguientes opciones de apuesta:
            El equipo ganará al menos dos periodos: sí - el equipo ganará al menos dos periodos
            El equipo ganará al menos dos periodos: no - el equipo no ganará en dos periodos




            El equipo ganará en la tanda de penaltis: se propone apostar a que el equipo ganará el partido en la tanda de penaltis. Los shootouts son lanzamientos de penaltis que se
            conceden en caso de empate al final de la prórroga. Son posibles las siguientes opciones de apuesta:
            El equipo ganará la tanda de penaltis: sí - el equipo será el ganador de los resultados de la tanda de penaltis
            El equipo ganará en la tanda de penaltis: no - el equipo no ganará en la tanda de penaltis

            Ejemplo:
            Apostar a que el Equipo 1 ganará la tanda de penaltis: sí. Para que la apuesta se salde con una victoria, el Equipo 1 debe ganar la tanda de penaltis.


            El ganador se determinará en la prórroga: se ofrece apostar a que el ganador del partido se determinará en la prórroga. La prórroga se designa si después de tres periodos en el partido hay empate. Son posibles las siguientes opciones de apuesta:
            El ganador se determinará en la prórroga: sí - el ganador del partido se determinará por el resultado de la prórroga
            El ganador se determinará en la prórroga: No - el ganador del partido no se determinará por el resultado de la prórroga.


            Victoria en seco: se propone pronosticar que el equipo por el que se apuesta ganará el partido en seco, es decir, que el otro equipo no marcará ni un solo gol.

            Ejemplo:
            Apuesta Equipo 1: Victoria en seco. Para que la apuesta se determine como ganadora, el Equipo 1 debe ganar el partido y el equipo contrario no debe marcar ni un solo gol.


            Total par/impar: Se propone apostar sobre si el número total de goles marcados será un número par o impar (0 cuenta como número par).

            Ejemplo:
            Total de la apuesta par/impar: impar. Para que la apuesta se considere ganadora, el número total de goles marcados debe ser impar. (1,3, 5, 7)

            Empate en el primer periodo: se ofrece apostar a que el primer periodo del partido terminará en empate. Son posibles las siguientes opciones de apuesta:
            Empate en el primer periodo: sí - el primer periodo terminará en empate
            Empate en el primer periodo: no - el primer periodo no terminará en empate


            Más/menos puntos Más/Menos: se le invita a apostar a que el número de puntos marcados por un jugador concreto será superior o inferior al valor seleccionado del argumento de la apuesta. Se concede un punto por cada gol marcado y por cada pase que dé lugar a un gol.

            Ejemplo:
            Evgeny Kuznetsov apuesta: puntos más (0.5). Para que la apuesta se calcule como ganadora, este jugador debe anotar al menos 1 punto.

            Total de penaltis de 2 minutos: La apuesta se ofrece para apostar a que el tiempo total (en minutos) de los penaltis de 2 minutos lanzados en el partido será mayor o menor que el valor del argumento de apuesta seleccionado. Al calcular las apuestas a este resultado, no se tiene en cuenta el número de penaltis lanzados, sino su tiempo total. Son posibles las siguientes opciones de apuesta:
            Tiempo total de penaltis de 2 minutos
            : más - el tiempo total (en minutos) de penaltis de 2 minutos concedidos en el partido será mayor que el valor
            del argumento de apuesta seleccionado.
            Tiempo total de penaltis de 2 minutos
            : menos - el tiempo total (en minutos) de los
            penaltis de 2 minutos concedidos en el partido será inferior al valor del argumento de apuesta
            seleccionado.


            Ejemplo:
            Apuesta Total de penaltis de 2 minutos: más (6). Para que la apuesta se salde con una victoria, el penalti de 2 minutos debe concederse al menos 4 veces en el partido, ya
            que en este caso el número total de minutos será igual a 8 (4×2), y 8>6.`
    },
    {
        id: 'voleibol',
        title: 'Voleibol',
        description: `Un partido de voleibol consta de 3 ó 5 sets. El partido continúa hasta que uno de los equipos gana en tres sets. Los sets no tienen límite de tiempo, cada set continúa hasta
            que uno de los equipos anota 25 puntos. En este caso, si la ventaja sobre el adversario es inferior a 2 puntos (25:24), los equipos juegan hasta que uno de ellos consigue una ventaja de 2 puntos. Las
            pérdidas y el total de un partido de voleibol se indican en puntos.


            Resultado: se le ofrece apostar por el ganador del partido. Son posibles las siguientes opciones de apuesta:
            P1: Gana el equipo 1
            P2: Gana el equipo 2


            Hándicap: Un hándicap es una ventaja positiva o negativa que se añade al resultado de un equipo. Para que una apuesta con hándicap se calcule como ganada, el equipo por el que se apuesta debe ganar el partido después de que la ventaja reclamada por el hándicap se haya aplicado al resultado del equipo.

            Hándicap positivo: Este hándicap consiste en añadir puntos, cuyo número viene determinado por el valor del argumento de la apuesta, a la puntuación total del equipo por el que se apuesta.

            Ejemplo:
            Apuesta Handicap 2 (20.5). Se realiza una apuesta al equipo 2 y (20,5) es el argumento de la apuesta. Para que la apuesta se considere ganadora, el equipo 2 debe ser el ganador después de que se hayan añadido 20,5 puntos a su marcador. Consideremos los posibles resultados de esta apuesta:
            El partido termina con un resultado de 78-60 (1er set 25-13; 2º set 25-21; 3er set 28-26). Añadiendo 20,5 puntos al resultado del equipo 2, el marcador pasa a ser 78-80,5. En este caso, la apuesta se valorará como ganadora, porque después de sumar los puntos, el equipo 2 es el ganador.
            El partido finaliza con el resultado 78-52 (1er set 25-13; 2º set 25-13; 3er set 28-26). Cuando se añaden 20,5 puntos al resultado del equipo 2, el marcador pasa a ser 78-72,5. En este caso, la apuesta se valorará como pérdida, porque después de añadir los puntos el equipo 2 no es el ganador.


            Hándicap negativo: Este hándicap consiste en restar puntos, cuyo número viene determinado por el valor del argumento de apuesta seleccionado, de la puntuación total del equipo por el que se apuesta.

            Ejemplo:
            Apuesta Handicap 1 (-20.5). Se realiza una apuesta al equipo 1 y (20,5) es el argumento de la apuesta. Para que la apuesta se considere ganadora, el equipo 1 debe ser el ganador después de que se le hayan restado 20,5 puntos de su puntuación final. Consideremos los posibles resultados de esta apuesta:
            El partido terminó con un resultado de 75-45 (1er set 25-13; 2º set 25-19; 3er set 25-13). Al restar 20,5 puntos del resultado del equipo 1, el marcador pasa a
            ser 54,5-45. En este caso, la apuesta se valorará como ganadora, porque después de restar los puntos el equipo 1 es el ganador.
            El partido terminó con un resultado de 75-64 (1er set 25:22; 2º set 25-23; 3er set 25-19). Al restar 20,5 puntos del resultado del equipo 1, el marcador pasa a ser 54,5-64. En este caso la apuesta se calculará como pérdida, porque después de restar los puntos el equipo 1 no es el ganador.



            Total: La apuesta se ofrece para apostar que el número total de puntos anotados será mayor o menor que el valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Total: más - el número total de puntos anotados será mayor que el valor del argumento de apuesta seleccionado
            Total: menos - el número total de puntos anotados será inferior al valor del argumento de apuesta seleccionado

            Ejemplo:
            Total de la apuesta superior a (182,5). Para que la apuesta se calcule como ganadora, el número total de puntos anotados debe ser superior a 182,5.

            Set total
            Total en sets: Se ofrece apostar a que el número total de sets jugados será mayor o menor que el valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Total en sets: más - el número total de sets jugados será mayor que el valor seleccionado del argumento de apuesta.
            Total en sets: menos - el número total de sets jugados será menor que el valor seleccionado del argumento de apuesta.

            Ejemplo:
            Apuesta Total a sets: más (3,5). Para que la apuesta se calcule como ganadora, el número total de sets jugados debe ser al menos 4.


            Total Par/Impar: Se ofrece apostar a que el número total de puntos anotados será un número par o impar.

            Ejemplo: Total de la
            apuesta par/impar: impar. Para que la apuesta se considere ganadora, el número total de puntos anotados debe ser impar (por ejemplo: 181, 183, 185).


            Resultado establecido Resultado del set: se le invita a apostar por el ganador del set. Son posibles las siguientes opciones de apuesta:
            P1: El equipo 1 gana el set
            P2: El equipo 2 gana el set


            Ejemplo:
            Apuesta resultado 2º set: P1. Para que la apuesta se considere ganadora, el equipo 1 debe ser el ganador del segundo set.


            Equipo que gana tras perder 0:2 o 2:0: la propuesta de apuesta es que uno de los equipos puede ganar el partido tras perder los dos primeros sets (es decir, a 0:2 o 2:0). Son posibles las siguientes opciones de apuesta:
            El equipo ganará después de perder 0:2 o 2:0: sí - uno de los equipos puede ganar el partido después de perder los dos primeros sets.
            Un equipo ganará tras perder 0:2 o 2:0: no - uno de los equipos no puede ganar el partido tras perder los dos primeros sets.


            Resultado del partido
            Resultado del partido: se le invita a apostar por el resultado exacto con el que finalizará el partido.
            Ejemplo:
            Apuesta Resultado del partido: 2:3. Para que la apuesta se salde con una victoria, el partido debe finalizar con el resultado 2:3.


            Total del mejor set: La apuesta se ofrece para apostar que el número total de puntos anotados en el mejor set (el set en el que se anotó el mayor número de puntos) será mayor o menor que el valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Total del conjunto de mayor puntuación: mayor - el número total de puntos anotados en el conjunto de mayor puntuación será mayor que el valor del argumento de apuesta seleccionado.
            Total del conjunto de mayor puntuación: menos - el número total de puntos anotados en el conjunto de mayor puntuación será menor que el valor seleccionado del argumento de apuesta.


            Total del set más improductivo: se ofrece apostar a que el número total de puntos anotados en el set más improductivo (el set en el que se anotó el menor número de
            puntos) será mayor o menor que el valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Total del lance más inconcluso: mayor - el número total de puntos anotados en el lance más inconcluso será mayor que el valor del argumento de apuesta seleccionado.
            Total del lance más improductivo: menos - el número total de puntos anotados en el lance más improductivo será inferior al valor seleccionado del argumento de apuesta.



            Número de Bloqueos: Se ofrece apostar a que el número de bloqueos realizados en el partido será mayor o menor que el valor seleccionado del argumento de apuesta. En voleibol, un bloqueo es la acción de un jugador cerca de la red para interceptar un balón procedente de un adversario. Un bloqueo puede ser realizado por uno o más jugadores saltando cerca de la red para evitar que el balón penetre por su lado. Son posibles las siguientes opciones de apuesta:
            Número de bloques: más - el número de bloques comprometidos en el partido será mayor que el valor del argumento de apuesta seleccionado.
            Número de bloques: menos: el número de bloques comprometidos en el partido será inferior al valor del argumento de apuesta seleccionado.

            Ejemplo:
            Apuesta Equipo 1: El número de bloques es superior a (20). Para que la apuesta se considere ganadora, el número de bloques realizados por el Equipo 1 debe ser superior a 20.


            Número de Eisks: Se ofrece apostar a que el número de eisks en el partido será mayor o menor que el valor seleccionado del argumento de apuesta. En voleibol, un ace se produce cuando un jugador realiza un saque y el equipo contrario no consigue interceptar el balón y éste cae en la pista. Son posibles las siguientes opciones de apuesta:
            Número de eis: más - el número de eis será mayor que el valor del argumento de apuesta seleccionado.
            Número de eis: menos - el número de eis será menor que el valor del argumento de apuesta seleccionado.

            Ejemplo:
            Apuesta Equipo 2: el número de ochos menos (10). Para que la apuesta se considere ganadora, el número de ochos del equipo 2 debe ser inferior a 10.



            Número de errores de saque: se ofrece apostar a que el número de errores de saque cometidos por un equipo será mayor o menor que el valor seleccionado del argumento de apuesta. Son posibles las siguientes opciones de apuesta:
            Número de errores de lanzamiento: más - el número de errores de lanzamiento cometidos por el equipo será mayor que el valor del argumento de apuesta seleccionado.
            Número de errores de lanzamiento: menos - el número de errores de
            lanzamiento cometidos por el equipo será menor que el valor del argumento de apuesta seleccionado.

            Ejemplo:
            Apuesta Equipo 1: Número de errores de saque: menos de (10). Para que la apuesta se considere ganadora, el número de errores de saque cometidos por el Equipo 1 debe ser inferior a 10.


            Set: Ganar por diferencia - se propone apostar por la diferencia de puntos con la que un equipo ganará el set.

            Ejemplo:
            Apuesta victoria en el 2º set con diferencia: Equipo 1 con una ventaja de 5 a 7 puntos. Para que la apuesta se salde con una victoria, el Equipo 1 debe ganar el segundo set con una ventaja de entre 5 y 7 puntos.


            Primer tiempo muerto. Se propone apostar sobre qué equipo será el primero en solicitar un tiempo muerto. Son posibles las siguientes opciones de apuesta:
            1er Tiempo muerto: Equipo 1 - el primer tiempo muerto lo tomará el Equipo 1
            1er Tiempo muerto: Equipo 2 - el primer tiempo muerto lo tomará el Equipo 2


            Set: 5 puntos primero
            Set: 5 puntos primero: apueste a qué equipo será el primero en anotar 5 puntos en un set. Son posibles las siguientes opciones de apuesta:
            Set: 5 puntos primero: Equipo 1 - El equipo 1 es el primero en anotar 5 puntos en el set
            Set: 5 puntos primero: Equipo 2 - El equipo 2 es el primero en anotar 5 puntos en el set

            Por ejemplo:
            Apuesta 2º set 5 puntos primero en anotar: equipo 1. Para que la apuesta se considere ganadora, el equipo 1 debe ser el primero en anotar 5 puntos en el segundo set.


            Set: 10 puntos primero: apueste a qué equipo será el primero en anotar 10 puntos en un set. Son posibles las siguientes opciones de apuesta:
            Set: 10 puntos primero: Equipo 1 - El equipo 1 es el primero en anotar 10 puntos en el set
            Set: 10 puntos primero: Equipo 2 - El equipo 2 es el primero en anotar 10 puntos en el set

            Por ejemplo:
            Apuesta 2º set 10 puntos primero en anotar: equipo 1. Para que la apuesta se considere ganadora, el equipo 1 debe ser el primero en anotar 10 puntos en el segundo set.


            Set: 15 puntos primero: apueste a qué equipo será el primero en anotar 15 puntos en un set. Son posibles las siguientes opciones de apuesta:
            Set: 15 puntos primero: Equipo 1 - El equipo 1 es el primero en anotar 15 puntos en un set
            Set: 15 puntos primero: Equipo 2 - El equipo 2 es el primero en anotar 15 puntos en un set

            Por ejemplo:
            Apuesta 3er set 15 puntos primero: equipo 1. Para que la apuesta se considere ganadora, el equipo 1 debe ser el primero en anotar 15 puntos en el tercer set.

            Set: 20 puntos primero: apueste a qué equipo será el primero en anotar 20 puntos en un set. Son posibles las siguientes opciones de apuesta:
            Set: 20 puntos primero: Equipo 1 - El equipo 1 es el primero en anotar 20 puntos en el set
            Set: 20 puntos primero: Equipo 2 - El equipo 2 es el primero en anotar 20 puntos en un set

            Ejemplo:
            Apuesta 3er set 20 puntos primero: equipo 1. Para que la apuesta se considere ganadora, el equipo 1 debe ser el primero en anotar 20 puntos en el tercer set.


            Set: 25 puntos primero: apueste a qué equipo será el primero en anotar 25 puntos en un set. Son posibles las siguientes opciones de apuesta:
            Set: 25 puntos primero: Equipo 1 - El equipo 1 es el primero en anotar 25 puntos en un set
            Set: 25 puntos primero: Equipo 2 - El equipo 2 es el primero en anotar 25 puntos en un set

            Ejemplo:
            Apuesta 1er set 25 puntos primero: equipo 2. Para que la apuesta se considere ganadora, el equipo 2 debe ser el primero en anotar 25 puntos en el tercer set.


            Set: Si puntuación extra: Se ofrece apostar sobre si se registrará una puntuación extra en el set. El marcador extra de un set son los puntos después de que el marcador llegue a 24:24 y el set continúe hasta que uno de los equipos tenga una ventaja de dos puntos. Se ofrecen las siguientes opciones de apuesta:
            Set: habrá una puntuación extra: sí - habrá una puntuación extra en el set
            Set: habrá puntuación extra: no - no habrá puntuación extra en el set


            Se ganará el 5º punto
            Ganar el 5º punto: apueste a qué equipo ganará el 5º punto del set. Son posibles las siguientes opciones de apuesta:
            El equipo 1 gana el 5º punto - El equipo 1 gana el 5º punto
            El equipo 2 gana el 5º punto - El equipo 2 gana el 5º punto


            Ejemplo:
            Apuesta 2º set: 5º punto ganado: Equipo 1. Para que la apuesta se considere ganadora, el equipo 1 debe ganar el 5º punto del segundo set.


            Ganar el 10º punto: apueste a qué equipo ganará el 10º punto del set. Son posibles las siguientes opciones de apuesta:
            El 10º punto lo ganará: Equipo 1 - El equipo 1 gana el 10º punto.
            10º punto gana: equipo 2 -10º punto gana equipo 2


            Ejemplo:
            Apuesta 2º set: El equipo 1 gana el 10º punto. Para que la apuesta se considere ganadora, el equipo 1 debe ganar el décimo punto del segundo set.

            Ganar el 15º punto: apueste a qué equipo ganará el 15º punto del set. Son posibles las siguientes opciones de apuesta:
            El 15º punto lo ganará: equipo 1 - El 15º punto lo ganará: equipo 1
            15º punto gana: equipo 2 -15º punto gana equipo 2


            Ejemplo:
            Apuesta 2º set: 15º punto ganará: Equipo 1. Para que la apuesta se considere ganadora, el Equipo 1 debe ganar el 15º punto del segundo set.


            Ganar el 20º punto: apueste a qué equipo ganará el 20º punto del set. Son posibles las siguientes opciones de apuesta:
            20º punto gana: equipo 1 - 20º punto gana equipo 1
            20º punto gana: equipo 2- 20º punto gana equipo 2


            Ejemplo:
            Apuesta 2º set: 20º punto ganará: Equipo 1. Para que la apuesta se considere ganadora, el Equipo 1 debe ganar el 2º punto del segundo set.


            25º punto ganado: apuesta a qué equipo ganará el 25º punto del set. Son posibles las siguientes opciones de apuesta:
            25 puntos gana: Equipo 1 - 25 puntos gana: Equipo 1
            25º punto gana: Equipo 2 - 25º punto gana Equipo 2


            Ejemplo :
            Apuesta 2º set: 25º punto ganado: Equipo 1. Para que la apuesta se considere ganadora, el Equipo 1 debe ganar el 20º punto del segundo set.

            Resultado tras los cuatro primeros sets: se ofrece apostar por el resultado del partido tras los 4 sets jugados.

            Por ejemplo:
            Apuesta Resultado tras los cuatro primeros sets: 1:3. Para que la apuesta se considere ganadora, el resultado del partido tras los cuatro sets jugados debe ser 1:3.


            Resultado después de los 3 primeros sets: se ofrece apostar por el resultado del partido después de que se hayan jugado 3 sets.

            Por ejemplo:
            Apuesta El resultado después de los tres primeros sets: 2:1. Para que la apuesta se salde con una victoria, el resultado del partido después de los tres sets jugados debe ser 2:1.

            El marcador tras los dos primeros sets:
            se ofrece para apostar al resultado del partido después de que se hayan jugado 2 sets.

            Ejemplo:
            Apuesta El resultado después de los dos primeros sets: 2:0. Para que la apuesta se salde con una victoria, el resultado del partido tras los dos sets jugados debe ser 2:0.


            Habrá un 5º set: se ofrece apostar sobre si el partido se jugará en el 5º set. El 5º set decisivo se juega si el marcador es 2:2 al final del 4º periodo. El set continúa hasta que uno de los equipos anota 15 puntos con una ventaja mínima de dos puntos. En caso contrario (15:14), los equipos juegan hasta que uno de ellos consigue una ventaja de 2 puntos. Son posibles las siguientes opciones de apuesta:
            Habrá un 5º set: sí - se jugará el 5º set
            Habrá un 5º set: no - no se jugará un 5º set



            Quién sacará primero en el partido: apueste a qué equipo sacará primero en el partido. Están disponibles las siguientes opciones de apuesta:
            Quién sacará primero en el partido: Equipo 1 - El equipo 1 sacará primero en el partido
            Quién sacará primero en el partido: Equipo 2 - El equipo 2 sacará primero en el partido


            El partido se ganará por un bloqueo: se ofrece una apuesta a que el resultado del partido se decidirá por un bloqueo. En voleibol, un bloqueo es la acción de un jugador cerca de la red para interceptar un balón procedente de un adversario. Un bloqueo
            puede realizarse saltando uno o más jugadores cerca de la red para impedir que el balón entre por su lado. Son posibles las siguientes opciones de apuesta:
            El partido lo ganará el bloque: sí - el resultado del partido lo determinará el bloque
            El partido lo ganará un bloque: no - el resultado del partido se decidirá por un no bloque



            El partido lo ganará un as: se propone apostar a que el resultado del partido se decidirá por un as. En voleibol, un ace se produce cuando un jugador realiza un saque y el
            equipo contrario no consigue interceptar el balón y éste cae en la pista. Son posibles las siguientes opciones de apuesta:
            El partido lo ganará un as: sí - el resultado del partido se decidirá por un as
            El partido lo ganará un as: no - el resultado del partido lo decidirá un as no un as




            El punto ganará: se le invita a apostar sobre qué equipo ganará el punto especificado.


            Ejemplo:
            Apuesta 3er punto de set ganado: Equipo 1(43). Para que la apuesta se considere ganadora, el equipo 1 debe ganar el punto 43. Supongamos que el resultado actual del set es 19-23, es decir, que se han jugado 42 puntos (19+23). Para que la apuesta se considere ganadora, el resultado debe ser 20-23, es decir, el equipo 1 debe ganar el 43º punto.



            Primera repetición en vídeo: se propone apostar sobre qué equipo será el primero en solicitar una repetición en vídeo. Son posibles las siguientes opciones de apuesta:
            Primera repetición de vídeo: mando 1 - el mando 1 será el primero en solicitar una repetición de vídeo
            Primera repetición de vídeo: mando 2 - el mando 2 será el primero en solicitar una repetición de vídeo
`
    },
];