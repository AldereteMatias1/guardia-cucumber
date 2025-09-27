Feature: Registrar Signos vitales
    Para asegurar la integridad de los registros
    Como usuario del sistema
    Quiero poder registrar los signos vitales de los pacientes de manera confiable

    # Background: paciente registrado
    # Given existe un paciente con DNI "45678901"

    @signosVitales
    Scenario: Tomar signos vitales validos 
        Given existe un paciente con DNI "41383873"
        When se registran los signos vitales T "39" SO "98" TA1 "120" TA2 "90" FC "100" asociados al DNI "41383873"
        Then el sistema muestra los signosVitales del paciente con DNI "41383873"

    # Scenario Outline: Tomar signos vitales fuera de rango
    #     When se registran los signos vitales T "<temperatura>" SO "<saturacionOxigeno>" TA1 "<tensionMax>" TA2 "<tensionMin>" FC "<frecuenciaCardiaca>" asociados al DNI "45678901"
    #     Then el sistema advierte que <campo> está fuera de rango

    #     Examples:
    #         | campo              | temperatura | saturacionOxigeno | tensionMax | tensionMin | frecuenciaCardiaca |
    #         | temperatura T      | 29          | 98                | 120        | 90         | 100                 |
    #         | temperatura T      | 51          | 98                | 120        | 90         | 100                 |
    #         | saturacionOxigeno  | 39          | 10                | 120        | 90         | 100                 |
    #         | saturacionOxigeno  | 39          | 150               | 120        | 90         | 100                 |
    #         | tensionMax         | 39          | 98                | 30         | 90         | 100                 |
    #         | tensionMin         | 39          | 98                | 120        | 10         | 100                 |
    #         | frecuenciaCardiaca | 39          | 98                | 120        | 90         | 500                 |