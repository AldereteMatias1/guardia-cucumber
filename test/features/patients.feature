Feature: Registro de paciente
    Para asegurar la integridad de los registros
    Como usuario del sistema
    Quiero poder registrar pacientes de manera confiable

Scenario:Registrar un paciente nuevo
    Given no existe un paciente con DNI "45678901" ni email "juan.perez@example.com"
    When se registra un paciente con DNI "45678901" y email "juan.perez@example.com"
    Then el sistema guarda al paciente
    And se traen los datos del paciente con DNI "45678901"

Scenario: Intentar registrar un paciente ya existente
    Given existe un paciente con DNI "45678901" y email "juan.perez@example.com"
    When se registra un paciente con DNI "45678901" y email "juan.perez@example.com"
    Then el sistema no crea un nuevo registro
    And se traen los datos del paciente con DNI "45678901"

