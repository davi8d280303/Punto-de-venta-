

//1. Plano de la interfaz (definir reglas)
export interface Producto {
    id:string;
    negocioId:string;
    nombre:string;
    precio:number;
    costo:number;
    stock:number;
    stockMinimo:number;
    categoria:string;
    codigoBarras?:string;//? significa que es opcional
}

//2. Datos reales (simulación de datos)
export const inventarioFalso:Producto[] = [
    {
        id:"prod_001",
        negocioId:"negocio_don_pepe_123",
        nombre:"Coca Cola 2L",
        precio:30,
        costo:36,
        stock:100,
        stockMinimo:10,
        categoria:"Bebidas",
        codigoBarras:"1234567890123"
    },
    {
        id:"prod_002",
        negocioId:"negocio_don_pepe_123",
        nombre:"Pepsi 2L",
        precio:28,
        costo:34,
        stock:80,
        stockMinimo:10,
        categoria:"Bebidas",
        codigoBarras:"9876543210987"
    },
    {
        id:"prod_003",
        negocioId:"negocio_don_pepe_123",
        nombre:"Fanta 2L",
        precio:29,
        costo:35,
        stock:90,
        stockMinimo:10,
        categoria:"Bebidas",
        codigoBarras:"1234567890123"
    }
]
    

