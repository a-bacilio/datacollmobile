# Pasos

- instalamos java sdk y android sdk
- cremos un device en sdk manager
- java:home debe apuntar a sdk no al jre
- https://reactnative.dev/docs/environment-setup

- npx react-native init AwesomeProject
- npm i @types/react-native
- cambiar el jsx a tsx
- npx react-native start -> inicia metro
- npx react-native run-android -> inicia en el emulador


npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier


npx react-native init ReduxToolkitExample --template react-native-template-typescript
npm i react-redux @reduxjs/toolkit
npm i --save-dev @types/react-redux


- ELementos:
- View -> es el div
- se le puede asignar estilos
````
<View style={styles.body}>
    Esto es un div
</View>
````

````
const: styles = StyleSheet.create({
  body: {
    backGroundColor: '#FFFFFF',
    aligntItems: 'center',
  }
})
````

Botones

````
<Button title="Necesita un titulo para que no sea error" onPress={()=>{Linking.openURL("https://www.pagina.com")}}>
````

tailwind

- instalar:npm install tailwind-rn
- npx setup-tailwind-rn
- npm run tailwind-rn
- npm run dev:tailwind --watch

El tailwind se usa con un provider

y dentro de los componentes se dbe usar un hook 
const tailwind = useTailwind();

en los estilos si no usamos tw, 
- flexDirection: row | column
- alignITems: stretch|center|flex-start|space-between|space-around|flex-end
- justifContent: stretch|center|flex-start|space-between|space-around

___

se peude usar useState

____


- se puede usar map y cada item debe tener un key unico

___

- si ell objeto es mu largo o hay muchos objetos, se debe añadir un <ScrollView>objeto<ScrollView>

como contenedor

-un scrollview puede ser horizontal y ordenalos items en fila si se coloca <ScrollView horizontal >objeto<ScrollView> o <ScrollView horizontal ={true}>objeto<ScrollView> en columnas es sin horizontal o <ScrollView horizontal={false}>objeto<ScrollView>

- un  scrollview puede tener un refreshing controll para que muestre un loading cuando se arrastra hacia abajo este se acabara cuando el refreshing cambe a false
- tambien un onRefresh que acepta una funcion para ejecutar
- ycolors cambia el control del spinner
<ScrollView
refreshControl = {
  <RefreshControl
  refreshing={Refreshing}
  onRefresh={}
  colors={{'#FFFFFFF'}}
  />
}


-tambien hay el flatlist que carga elementos que no se ven en la pantalla pococ a poco desde un array

Items = [
  {
    name:"Item 1"
  },
  {
    name: "Item 2"
  }
]


<FlatList
numColumns={2} // solo si horizontal es false o no esta
horizontal //lo muestra en horizontal
keyExtractor = {(item,index)=>index.ToString()} //solo acepta string como keys
data={Items}
renderItem={({item})=>(
  <View style={styles.item}>
    <Text style={styles.text}>{item.name}</Text>
  <View>
)}
refreshControl={
  <RefreshControl
    refreshing={Refreshing}
    onRefresh={onRefresh}
    colors={{"#1231212"}}
  >
}


/>

</ScrollView>

- Tambien SectionList para nested array

DATA=[
  {
    title:'title-1',
    data:['Item-1','ITem 2'],
  },
  {
    title:'title-2',
    data:['Item-3','ITem 4'],
  },
]



<SectionList
keyExtractor={(item,index)=> index.toString()}
sections={DATA}
renderItem={({item})0>(
  <Text>{item}</Text>
)}
renderSectionHeader={({section})=>(
  <View>
    <Text>{section.title}</Text>
  </View>
)

}

/>

- Hay text input

<TextInput
style={}
placeholder="algun texto"
onChangeText={(value)=>SetName(value)}
secureTextEntry//como password
editable={false}//default is true
KeyboardType="numeric"//hay varios tipos de teclados
maxLenght={5}
/>

- hay pressables and buttons

<Button
title={submitted?'Clear':'Submit'}
onPress={onPressHandler}
color="#FFF"

- los touchables son contenedeore que convierte algo en un tocable:
-  TouchableOpacity => opacity, reduce opacity, da esa sensacion de presionar
-  TouchableHighlight => higligh  cambia el color, , da esa sensacion de presionar
-  TouchableWithoutFeedBack  ,  sin FeedBack, se necesita aplicar el estilo al objeto contenido , no se aplica nada al touchabla no da la sensacion de presionar
 

<TouhchableOpacity
  style={stles.button}
  onPress={onPressHandler}
  activeOpacity={0.5}
  underlayColot={'#fff'} //touchableHighlight
>
<Text>{Hola}</Text>
<TouchableOpacity>

- PRessable es como el TouchableWithoutFeedback tiene mas funciones a parte del onPRess, como onPressIn, OnPresOut 500ms onLongPRess ,etc
- Tambie se puede ampliar su are clickeable con HitRect y PressREct, HitSlop  
-tambien en android tiene el android_ripple que pemte crear una onda de colocr en el boron al hacer click

<PRessable
  style={stles.button}
  onPress={onPressHandler}>
  hitSlop={{top:10, bottom:10, right:10, left:10}}
  android_ripple={{color: '00f'}}
<Text>{Hola}</Text>
<PRessable>


- TAmbien se puede colcoar alerts
- pueden tener maximo tres botones, van en el array
- Si cancelable es true, se cancela al vovler atras.

Alert.alert('Warning', "This text will apear in the middle",[
  {
    text:'Button1',
    onPress: () => console.warn('this callback can do anything')
  },
  {
    text:'Button2',
    onPress: () => console.warn('this callback can do anything')
  },
  {
    text:'Button3',
    onPress: () => console.warn('this callback can do anything')
  },
],
{
  cancelable: true,
  onDismiss: () => console.warn("This will be executed when dismissed")
})



- Tambien se puede mostart Toasts

ToastAndroid.show( //se mostrara abajo en la pantalla
  'The name will show x secons depende on LONG,SHORT',
  ToastAndroid.LONG
)
- en el centro

ToastAndroid.showWithGravity(
  'The name mus be longer than 43 characters',
  ToastAndoird.LONG,
  ToastAndroid.CENTER
)

- en otra posicion

ToastAndroid.showWithGravityAndOffSet(
  'The name mus be longer than 43 characters',
  ToastAndoird.LONG,
  ToastAndroid.TOP,
  100,//left
  200,//TOP
)

- Modal es un componente de react Native

````{js}
<Modal
  visible={showWrining}, //para que se abra si la variable es true
  transparent// cambia el color de fondo del modal, es blanco por default. no se puede poner mas estilos al modal pero si al contenido que puede ser un View
  onRequestClose{()=> //la accion qu queremos que suceda al presionar atras
    setShowWarning(false)
  }
  animationType='slide' // animaciones para cuando se cierra el modal
  hardwareAccelerated // Solo en android
>
  <View>
  ....
  </View>
</Modal>
````

-Se puede usar imagenes con

<Image
styles={styles} //los estilos
source={require('./assets/down.png')} //la direccion realtiva del archivo
resizeMode='stretch' // para compartamiento dentro del contenedor
blurRadius={5} //si deseamos que se vea difuminado
/>

<Image
styles={styles}
source={uri: 'https:///......'}
resizeMode='stretch'
blurRadius={5}
/>

Si deseamos que un view tenga un fondo de imagen, usamos 
<ImageBackGround
source={uri: 'https:///......'} //úeden ser tambien imagenes locales
styles={...}
>

</ImageBackGround>

Se puede crear otros componenetes deifniendolos e imporantdo loes eleentos de react native


const Header = ({..props}) => {
  return(
    <View>
    ...
    </View>
  )
}

const styles = Stylesheet.create({
  ...
})

export default Header.

Hay dos formas: 

-REact NAvigatopn

npm install @react-navigation/native

dependeiendo si usas EXPO or CLI necesitamos unas dependencias

CLI:
npm install react-native-reanimated react-native-gesture-handler

tambien neestiamos instalar el navigator

npm install @react-navigation/stack


luego en App

imorptamos el NAvigationContainer y el Stack.navigator y cada pantalla se definiar con el Stack.Screen

````

function App(){
  return (
    <NavigationContainer
      <Stack.Navigator
        screenOption={{
          header: () => null //puede ser otro compoenente , pero null lo elimina
        }}
      >

        <Stack.Screen
        name="ScreenA" // El nombre del componente
        component={ScreenA} //El componente
        options = {{
          header: () => null // si no se coloca en el navigator, se puede colocar en cada pantalla
        }}
        />

        <Stack.Screen
        name="ScreenB" // El nombre del componente
        component={ScreenB} //El componente
        />
        
    >
  )
}

````

En los botones se utiliza la funcion navigation

function ChangeB({navigation}){
  navigation.navigate("ScreenA"); // va a al pagina con el nombre ScreenA
  navigation.goBack(); // retorna a la pagina anterio r
}

OTra opcion es usar tab navigation que son pestañas que aparece ne la parte inferior

se instala con 

npm install @react-navigation/bottom-tabs

tambien seria buene tener los incons

npm install --save react-native-vector-icons


se tiene que moidifca el archivo android/App/build.gradle 

y se añade  -... antes del import

apply from: "../../node_modules/react_native_vector_icons/fonts.gradle"

luego en el terminarl 

./gradlew clean

luego corremos el app npm run android


se usaria en el App con


const APP = () => {
  return(
          <NavigationContainer>
            <Tab.NAvigator
              screenOption = {({route})=>({
                tabBarIcon: ({focused, size, color}) => {
                  let iconName;
                  if(route.name==="Screen_A") {
                    iconName = 'autoprefixer';
                    size = focused ? 25: 20;
                    color = focused ? "#F4F" : "#555";
                  } else if(route.name === "Screen_B"){
                    iconName = "btc";
                    size: focused=25:20;
                    color = focused ? "#F4F" : "#555";                  
                  }
                  return (
                    <FontAwsome5  // iportamos esto del os icons para que lo muestre como boton para hacer clic en el tab
                      name = {iconName}
                      size={size}
                      color={color}
                    >
                  )
                }
              })}
              tabBarOptions={ //si no deseamos manejar elestilo por elemento , podemos hacerlo en general
                activeTintColor: '#5FF',
                inactiveTintColor: '#555',
                activeBackgroundColor: '#fff'.
                inactiveBackgorundColor: '#999',
                showLabel: true,
                labelStyle: {fontSize:14}
              }

            >
              <Tab.Screen
                name="Screen_A"
                component={ScreenA}
                options={{tabBarBadge:3}}// muestra como notificaciones
              />

              <Tab.Screen
                name="Screen_A"
                component={ScreenA}
              />

          </NavigationContainer>
  )
}


tambien hay materil bottom tabs

npm install @react-navigation/material-bottom-tabs react-native-paper

tambien necesitara los iconos instalados antes

solo tendiramos ahora que iimportar esos y añadir el activeColor, inactiveColor, barStyle={{backgroundColor:'#fff'}} 

const tab = createMAterialBottomTabNAvigator();

const APP = () => {
  return(
          <NavigationContainer>
            <Tab.NAvigator
              screenOption = {({route})=>({
                tabBarIcon: ({focused, size, color}) => {
                  let iconName;
                  if(route.name==="Screen_A") {
                    iconName = 'autoprefixer';
                    size = focused ? 25: 20;
                    color = focused ? "#F4F" : "#555";
                  } else if(route.name === "Screen_B"){
                    iconName = "btc";
                    size: focused=25:20;
                    color = focused ? "#F4F" : "#555";                  
                  }
                  return (
                    <FontAwsome5  // iportamos esto del os icons para que lo muestre como boton para hacer clic en el tab
                      name = {iconName}
                      size={size}
                      color={color}
                    >
                  )
                }
              })}
              tabBarOptions={ //si no deseamos manejar elestilo por elemento , podemos hacerlo en general
                activeTintColor: '#5FF',
                inactiveTintColor: '#555',
                activeBackgroundColor: '#fff'.
                inactiveBackgorundColor: '#999',
                showLabel: true,
                labelStyle: {fontSize:14}
              }
              activeColor='#f0f0f0'
              inactiveColor='#000'
              barStyle={{backgroundColor:'#fff'}}

            >
              <Tab.Screen
                name="Screen_A"
                component={ScreenA}
                options={{tabBarBadge:3}}// muestra como notificaciones
              />

              <Tab.Screen
                name="Screen_A"
                component={ScreenA}
              />

          </NavigationContainer>
  )
}

otro es el MAterialTopTabNavigator

npm install @reaact-navigatopn/material-top-tabs react-native-tab-view

importamos createMAterialTopTabNavigator 

const Tab = createMAterialTopTabNavigator

se debe añadir a tabBarOptions={{
  ..hay lo demas igul que los otros
  showIcon:true // para mostrar iconos, por default no los muestra
}}


otra forma de navegar es con el menu latera o drawer

npm install @react-navigaion/drawer

lo importamos
y lueco 

const drawer = createDrawerNavigator();

luego lo podemos usar como

fucntion App(){
  return(
    <NAvigationContainer>
      <Drawer.Navigator
      initialRouteName={"Screen_A"}//ESpecifica el compoenente con el que se inicial
      drwwePOsition='left' puede ser derechoi tambien
      drwawerType="front" que se coloque sobre la vista
      edgWidth={100} largo en izxees de a zona donde empieza a oscurecer la vista
      hideStatusBar={true} para que luego de abrir, se oculte la barre de bateria y hora
      overlayColo= "#fff" El colo que cubrira la vista , al abrirse
      draweStyle={{ //estilos del drawer
        bacgroundColor:'#e6e6e6',
        width:250
      }}
      screenOptions={{
        headerShown: true, // Si queremos que se vea e ltitulo y y se abra el menu con una hamburguer
        swipeEnabled: true , // si queremos que se pueda cerra al abrir con el hamburguer  por medio de arrastre
        gestureEnabled: true, // si queremos que se pueda cerra al abrir con el hamburguer  por medio de arrastre
        headerTitleAlign: 'center' // ealiena el texto del titulo
        headerStyle:{
          backgroundCoolor: '#000' // olor del titulo
        },
        heaertintColor : '#fff',
        headerTitleStyle: { // estilos para el texto del titulo
          fontSize: 25,
          fontWeight: 'bold'
        }

      }}
      
      >
        <DRawer.Screen
        name="Screen_A"
        component={SCreenA}
        options={{
          title: "Screen a title"//se puede cambiar el texto que aparece en el menu
          drwaerICon: ({focused})=>(
            </FontAwesome5
            name="autoprefixer"
            size={focused ? 25: 20}
            color: { focused ? '#fff' : '#000'}
            />
          )
        }}
        >


      <DRawer.Screen
        name="Screen_B"
        component={SCreenB}
        >
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


si deso abrir el navegador en demanda; navigation.openDrawer()//navigation.closeDrawer()//navigation.toggleDrawer()   

SI dese o pasar infomaacion  a otra pantalla, lo envio con el navigate

navigation.navigate('Screen B', {ItemNAme: 'ITem from Scren A', ItemId: 'ITem 112312'})

lo recibo en la vista objetivo como route params 

function ScreenB({nabvigation, route}){

const {itemname, itemId} = route.params

}


En caso lo dejemos asi y se llegue a la vista sin los aprametro, nos dar inn error para solucionarlo definimos en el drawer o en el Tabl

initialPArams={{ITemNam:"",ITemId:11}}


<Drawer.Screen
  name="Screen B"
  comoponent= {ScreenB}
  initialPArams={{ITemNam:"",ITemId:11}}
>

 

 PAra debuggear en vscode


 debemos tener el react native Tootls de Microsoft plugin for vscode instalado

 luego vamoa run and debug

 selesccionamos

 attach to packager

 añadir el laucnh.json en la carpeta vscode

 aca podemos añadir mas configuraciones haciendo click en la esquiina inferior derecha 

 luego damos npm ru android luego en l cmd que se abre con el device emulado , se presiona d para abrir un menu. En es menu hacemo clic en debug y se iniciara el debug en edge o chrome

 luego vamos a vscode y arriba en debug and run hacemos clic en attach to package 

 podemos ver el punto donde esta corriendo el codigo asi como el valor de las variables


en caso se desee debugeear  react native expo, neceistamos  cambiar en settings el puerto de recact native en setting de 8081 a 19001


 ## Usar fuente propia

 creamos una acrpeta assets al nivel de android

 detro creamos una carpeta fonts

 copiamos los ttf ahi

 luego anivel de android creamos un archivo reac-native.config.js

 dentro colocmaos 

 module.exports = {
   assets:['./assets/fonts']
 }

 luego en elterminal en la carpeta de proyecto, ejecutamos

 npx react-native link 

 lo ejecutamos despues de cada cambiao al react-native.config.js

 luego se da el estilo

 fonrFamily: 'nombre del archivo de fuente'


 => en expo projects se utilzia otro codigo

 decargamos

 expo install @expo-google-fonts/nombr-de-la-fuente
expo install @expo-google-fonts/dancing-script

ahora lo instalamos en el producto 

expo install expo-app-loading

luego en el archivo deonde se usara

lo importamos

import {
  DancingScript_400regular,
} from '@expo-google-fonts/dancing-script';

luego importamos useFonts

import {useFonts} from 'expo-font';

importamos AppLoading from 'expo-app-loading'

luego en el componente

let[fontsLoaded, error  ] = useFonts({
  DAncingScript_400regular
});


luego en el objeto a usar la fuente

<View style={styles.container}>
  <Text
    style={{
      fontFamily:'DancingScript_400Regular'
    }}
  >
  Mucho texto
  </Text>

</View>

tambien la otra forma es copiar el archivo a una carpeta e imporarlo con useFonts


let[fontLoade, error] = useFonts({
  'Indie-Flower':requiere('./assets/fonts/IndieFlower-regular.ttf)
})

<View style={styles.container}>
  <Text
    style={{
      fontFamily:'Indie-Flower'
    }}
  >
  Mucho texto
  </Text>

</View>


# Global Style

 creo unu archivo GlobalStyle.js

 luego dentro defino 

 import {StyleSheet} from 'react-native';
 ezport default StyleSheet.create({
   CustomFont:{
     fontFamily:'DancinScript-Regular',
   }

 })

 luego lo import en el archivo a usar


 y luego en el objeto

 <Text style={{
   GlobalStyle.CustomFont,
   backGroundColor:"#fff",
 }}>


 Si deseas hacer lo mismo en Expo projets, no se puede pero puedes crear un componente Boton e imporar ahi la fuente

 # ASync Storage
- sirve para guardar pero no es para guardar cosas seguras 

lo instalamos

npm install @react-native-asyc-storage/asuync-storage

ahora limpieamos el gradlew iniciando un terminal en android

./gradlew clean

luego volvemos a la carpeta del proyecto y corremos de uevo

para guardar un valor o un bojeto

await AsyncStorage.setItem('user',JSON.stringify(user))
await AsyncStorage.setItem('userName',"Antho")

para recuperar

await AsyncStorage.getItem('user').then(value => let setName(JSON.parse(value).name);

await AsyncStorage.getItem('userName')


pra actualizar

var user = {
name: "Antho2"
}

await AsyncStorage.mergeItem('user', JSON.stringify(user));

await AsyncStorage.setItem('userName','Antho2')

para que te transporte a la otra pagina despues de login se puede usar


navigation.navigate('Home')


para eviatr que se acceda  a esta pantalla sin que se haya logueado se puede hacer 

useEffect(()=>{
  getData();
},[]);

const getData = () => {
  try{
    AsyncStorage.getItem('USerName')
    .then(value=>if(!value)=>{navigation.navigate('Login')})
  }
}

si queremos que  si una vez se ha logueado ,no vuelva a login

useEffect(()=>{
  getData();
},[]);

const getData = () => {
  try{
    AsyncStorage.getItem('USerName')
    .then(value=>if(value)=>{navigation.navigate('Home')})
  }
}



## SQLITE

- instalamso sqlite
npm install --save react-native-sqlite-storage

ahora 

importamos sqlite

import SQLite from 'react-nataive-sqlite-storage'

Luego inicializzamos la base de datos

const db = SQLite.openDataBase(
  {
    name: 'MainDB',
    location: 'default'
  },
  ()=>{},
  error => {console.log(error)}
);

esto lo hacemos en el Login

dentro del comoponente Login creamos una tabla

useEffecet((()=>{
createTable()
getData();
}))

const createTable = () => {
  db.transaction((tx)=>{
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS"
      +"Users "
      +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
    )
  })
}


//En el msmo componente login para guardar la infor ¡

const setDAta = async () => {
  if(name.length == 0||age.length==0){
    Alert.alert('Warning', 'PLease write our data')
  }else{
    try{
      await db.transaction(async (tx) => {
        await tx.executeSql(
          "INSERT INTO Users (Name, Age) VALUES (?,?)"
          [name, age]
        );
      })
      navigation.navigate('Home');
    }catch (error){
      console.log(error)
    }
  }
}


en el comoponeten home // donde lo lleva despues de login


const getData = () => {
  try{
    db.transaction((tx)=>{
      tx.executeSql(
        "SELECT Name, Age FROM Users",
        [],
        (tx,results) => {
          var = len = results.row.length;
          if(len>0){
            var userName = results.rows.item(0).Name;
            var userAge = results.rows.item(0).Age;
            setName(userName);
            setAge(userAge);
          }
        }
      )
    })
  }

}


este tambien se puede colocar en el Login para que no se vuelva a loguear y crear una fila adicional pero con la sigueitne funcion


const getData = () => {
  try{
    db.transaction((tx)=>{
      tx.executeSql(
        "SELECT Name, Age FROM Users",
        [],
        (tx,results) => {
          var = len = results.row.length;
          if(len>0){
           navigation.navigate('Home')
          }
        }
      )
    })
  }
}

en caso del update en el HomePAge


const getData = () => {
  try{
    db.transaction((tx)=>{
      tx.executeSql(
        "UPDATE Users SET Name=?",
        [name],
        () => {Aert.alert('Success', 'data actualziada')},
        error = {console.log(error)}
        }
      )
    })
  }
}


tambien en el Home se puede crear un removeData para el logout

const getData = () => {
  try{
    db.transaction((tx)=>{
      tx.executeSql(
       "DELETE Form Users",
        [],
        () => {    navigation.navigate('Login')},
        error = {console.log(error)}
        }
      )
    })
  }
}

Sqlite Browser  nos puede ayudar con los codigos SQL


git branch -M main
git remote add origin https://github.com/a-bacilio/datacollmobile.git
git push -u origin main