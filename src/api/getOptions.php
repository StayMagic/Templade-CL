<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require "conexion.php";

try {
    // Obtener tipos de documento
    $stmt = $pdo->query("SELECT label FROM document_types");
    $documentTypes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // // Obtener departamentos
    // $stmt = $pdo->query("SELECT id, nombre FROM departamentos");
    // $departments = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // // Obtener municipios
    // $stmt = $pdo->query("SELECT id, nombre, departamento_id FROM municipios");
    // $municipalities = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // // Obtener entidades de salud
    // $stmt = $pdo->query("SELECT id, nombre FROM entidades_salud");
    // $entities = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // // Obtener especialidades médicas
    // $stmt = $pdo->query("SELECT id, nombre FROM especialidades");
    // $specialties = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "documentTypes" => $documentTypes,
        // "departments" => $departments,
        // "municipalities" => $municipalities,
        // "entities" => $entities,
        // "specialties" => $specialties
    ]);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
