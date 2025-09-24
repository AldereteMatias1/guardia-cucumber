Feature: Registrar Signos vitales
    Para asegurar la integridad de los registros
    Como usuario del sistema
    Quiero poder registrar los signos vitales de los pacientes de manera confiable

    Background: paciente registrado
    Given existe un paciente con DNI "45678901"

    @signosVitales
    Scenario: Tomar signos vitales validos 
        When se registran los signos vitales T "39" SO "98" TA1 "120" TA2 "90" FC "100" asociados al DNI "45678901"
        Then el sistema asigna los signosVitales al paciente con DNI "45678901"

    Scenario: Tomar signos vitales con temperatura fuera de rango por debajo
        When se registran los signos vitales T "29" SO "98" TA1 "120" TA2 "90" FC "100" asociados al DNI "45678901"
        Then el sistema advierte que la temperatura T está fuera de rango
    
    Scenario: Tomar signos vitales con temperatura fuera de rango por encima
        When se registran los signos vitales T "51" SO "98" TA1 "120" TA2 "90" FC "100" asociados al DNI "45678901"
        Then el sistema advierte que la temperatura T está fuera de rango