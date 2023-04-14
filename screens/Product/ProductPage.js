import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import instance from '../../config/ApiManager';
import { useNavigation } from '@react-navigation/native';
import { dummyProducts } from '../../constants/dummyTransaction';

const ProductPage = ({ route }) => {
  const { productSlug } = route.params;
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const goback = () => {
    navigation.goBack();
  }

  function getProduct() {
    const prod = dummyProducts.find(user => user.id === id);
    return prod;
  }

  useEffect(() => {
    const fetchProduct = async () => {
      console.log("Display Product useEffect() fired");
      setIsLoading(true);

      try {
        const prod = dummyProducts.find(product => product.slug === productSlug);
        // const response = await instance.get(`/api/product/${productSlug}`);

        if (prod !== 'success') {
          setProduct(prod);
          // setProduct(response.data.data);
        }

        // if (response.data.status === 'success') {
        //   setProduct(getProduct());
        //   // setProduct(response.data.data);
        // }

      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();

  }, []);

  const { name, description, price, quantity, user } = product;



  // axios.post(`https://api.cloudinary.com/v1_1/${process.env.Cloud_name}/image/upload`, form, { headers: { 'Content-Type': 'multipart/form-data' } })
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={goback} style={styles.back}>
          <FontAwesome style={styles.icon} name="chevron-left" size={22} color="#182430" />
        </TouchableOpacity>
        <Text style={styles.txt1}>Sold by:</Text>
        <Text style={styles.txt2}>{user.name} <FontAwesome style={styles.icon} name="check-circle-o" size={22} color="#000ff" /></Text>
      </View>
      <View style={styles.nikon}>
        <Text style={styles.camera}>{name}</Text>
      </View>
      <View style={styles.img}>
        <Image style={styles.image} source={require('../../assets/camera.png')} />
      </View>
      <View style={styles.description}>
        <Text style={styles.amount1}>A.Q : {quantity} </Text>
        <Text style={styles.amount2}>N {price}</Text>
      </View>
      <View style={styles.des}>
        <Text style={styles.des1}>{description}</Text>
      </View>
      <View style={styles.butin}>
        <TouchableOpacity style={styles.btn} >
          <Text style={{ color: "#FFFFFF" }}> Order this product </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.num}>
        <Text style={styles.like}>10 <FontAwesome style={styles.icon} name="thumbs-up" size={22} color="#182430" /></Text>
        <MaterialIcons style={styles.cicon} name="chat" size={22} color="#182430" />
      </View>
    </View>
  )
}

export default ProductPage

const styles = StyleSheet.create({

  container: {
    margin: 30,
  },

  innerContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  txt1: {
    marginRight: 20,
    fontSize: 16,
  },

  txt2: {
    marginRight: 60,
    fontSize: 16,
  },

  nikon: {
    marginTop: 14,
    alignSelf: 'center',
  },

  camera: {
    fontSize: 24,
  },

  img: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    justifyContent: 'center',
    height: 240,
    width: 240,
  },

  description: {
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  amount1: {
    marginLeft: 29,
    fontSize: 24,
  },

  amount2: {
    marginRight: 29,
    fontSize: 24,
  },

  des: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  des1: {
    fontSize: 14,
  },

  butin: {
    marginTop: 15,
  },

  btn: {
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#182430",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 40,
  },

  num: {
    flexDirection: 'row',
    paddingTop: 120,
    alignItems: 'center',
    justifyContent: 'space-between',

  },

})






