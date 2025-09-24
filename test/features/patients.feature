Feature: Registro de paciente duplicado
    Para asegurar que no se creen duplicados
    Como usuario
    Quiero que al registrar un paciente existente se devuelvan sus datos

Scenario:Registrar un paciente con DNI ya existente
    Given existe un paciente con DNI "45678901" y email "juan.perez@example.com"
    When se registra un paciente con DNI "45678901" y email "juan.perez@example.com"
    Then se traen los datos del paciente con DNI "45678901"
