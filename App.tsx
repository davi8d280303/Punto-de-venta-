// Archivo: App.tsx
import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // ← El import corregido
import { inventarioFalso, Producto } from './src/mockData';

// Obtenemos el ancho de la pantalla para calcular el tamaño de las tarjetas
const { width } = Dimensions.get('window');
const TAMANO_TARJETA = (width / 2) - 20; // La mitad de la pantalla menos el margen

export default function App() {
  
  const renderizarProducto = ({ item }: { item: Producto }) => {
    return (
      <View style={styles.tarjetaProducto}>
        <Text style={styles.nombreProducto} numberOfLines={2}>{item.nombre}</Text>
        <Text style={styles.precioProducto}>${item.precio.toFixed(2)}</Text>
        <Text style={styles.stockProducto}>Stock: {item.stock}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.contenedorPrincipal} edges={['top']}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>SIVEN POS - Catálogo</Text>
      </View>

      <FlatList
        data={inventarioFalso}
        keyExtractor={(item) => item.id}
        renderItem={renderizarProducto}
        numColumns={2} // ← ¡Aquí está la magia de las 2 columnas!
        contentContainerStyle={styles.lista}
        columnWrapperStyle={styles.fila} // Estilo para separar las columnas
      />

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  encabezado: {
    padding: 20,
    backgroundColor: '#2563eb',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  lista: {
    padding: 10,
  },
  fila: {
    justifyContent: 'space-between', // Empuja las tarjetas a los extremos
  },
  tarjetaProducto: {
    width: TAMANO_TARJETA, // Ancho calculado dinámicamente
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    // Sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nombreProducto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  precioProducto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16a34a',
    marginBottom: 4,
  },
  stockProducto: {
    fontSize: 14,
    color: '#6b7280',
  }
});