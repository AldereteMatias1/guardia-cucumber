Feature: Registro de paciente
    Para asegurar la integridad de los registros
    Como usuario del sistema
    Quiero poder registrar pacientes de manera confiable
@registrarPacienteNuevo
Scenario:Registrar un paciente nuevo
    Given no existe un paciente con DNI "45678901"
    When se registra un paciente con DNI "45678901"
    Then el sistema crea un nuevo paciente con DNI "45678901"
@registrarPacienteExistente
Scenario: Intentar registrar un paciente ya existente
    Given existe un paciente con DNI "45678901"
    When se intenta registrar un paciente con DNI "45678901"
    Then el sistema no guarda el paciente con DNI "45678901"
    And se traen los datos del paciente con DNI "45678901"
