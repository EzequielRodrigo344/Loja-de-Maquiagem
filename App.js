import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Dados fictícios dos produtos
const produtos = [
  {
    id: '1',
    nome: 'Delineado - Dior',
    preco: 'R$ 200,00',
    descricao: 'Diorshow On Stage Liner é o delineador líquido à prova dágua Dior com uma ponta de feltro ultra-flexível que desenha uma linha precisa e    permite ajustar a espessura com base na pressão aplicada. A sua fórmula eficaz garante 24 horas* de cor intensa. Redesenhada por Peter Philips, Diretor de Criação e Imagem da Dior Makeup, a gama de tons Diorshow On Stage Liner apresenta cores intensas e de alta costura. O delineador líquido vem em uma paleta de tons em acabamento fosco, acetinado e perolado. Diorshow On Stage Liner é o must-have da Dior para recriar todos os looks da passarela em uma única passagem. * Teste instrumental em 30 sujeitos.',
    imagem: 'https://lojadior.vtexassets.com/arquivos/ids/179728-1200-800/3348901595971_02--highlight-dior-show-on-stage-liner-waterproof-felt-tip-liquid-eyeliner-24-h-intense-c.jpg?v=637902096787700000' // Link de imagem fictícia
  },
  
  {
    id: '2',
    nome: 'Rimel - Dior',
    preco: 'R$ 250,00',
    descricao: 'Dior reinventa Diorshow Iconic Overcurl, a icônica máscara de cílios da Maison, agora refilável* e composta por uma fórmula enriquecida com água floral de centáurea azul. Esta máscara de cílios contribui para nutrir, fortalecer e projetar os cílios, proporcionando um volume e uma curvatura espetaculares durante 24 horas*. Os cílios parecem mais longos e o olhar, mais aberto. Sem o risco de borrar, a cor se mantém intensa e de longa duração. Com um estojo moderno e sofisticado, Diorshow Iconic Overcurl é a 1ª máscara de cílios refilável, em linha com a iniciativa de beleza sustentável da Maison Dior. * Tonalidade 090 Black. ** Teste instrumental realizado em 25 pessoas.',
    imagem: 'https://lojadior.vtexassets.com/arquivos/ids/189404-1200-800/3348901663335_02--highlight-iconic-overcurl-mascara.jpg?v=638321318867670000' // Link de imagem fictícia
  }
];

// Tela Inicial
const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bem-vindo ao VeryMackup!</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Produtos')}>
      <Text style={styles.buttonText}>Nossos Produtos</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Mais Informações')}>
      <Text style={styles.buttonText}>Mais Informações</Text>
    </TouchableOpacity>
  </View>
);

// Tela de Produtos com Imagens
const ProdutosScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Lista de Produtos:</Text>
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('Detalhes', { produto: item })}>
          <Image source={{ uri: item.imagem }} style={styles.image} />
          <Text style={styles.productText}>{item.nome} - {item.preco}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

// 📌 Tela de Detalhes do Produto com Imagem
const DetalhesScreen = ({ route }) => {
  const { produto } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{produto.nome}</Text>
      <Image source={{ uri: produto.imagem }} style={styles.imageLarge} />
      <Text style={styles.text}>Preço: {produto.preco}</Text>
      <Text style={styles.text}>Descrição: {produto.descricao}</Text>
    </View>
  );
};

// Tela de Informações
const InformacoesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Sobre o nosso Aplicativo</Text>
    <Text style={styles.text}>Bem-vindo ao VeryMackup, o aplicativo revolucionário que coloca o mundo da maquiagem ao seu alcance! Com uma experiência intuitiva e personalizada, o VeryMackup foi criado para atender a todos os amantes da beleza, desde iniciantes até profissionais.</Text>
  </View>
);

// Configuração da navegação
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Início" component={HomeScreen} />
      <Stack.Screen name="Produtos" component={ProdutosScreen} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      <Stack.Screen name="Mais Informações" component={InformacoesScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

// Estilização do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  productText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  imageLarge: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default App;
