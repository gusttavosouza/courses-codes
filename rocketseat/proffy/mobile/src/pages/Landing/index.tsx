import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import studyIcon from "../../assets/images/icons/study.png";
import landingImg from "../../assets/images/landing.png";
import api from "../../services/api";
import styles from "./styles";

const Landing: React.FC = () => {
  const navigation = useNavigation();
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    async function loadConnection() {
      const { data } = await api.get("connections");
      setConnections(data.total);
    }
    loadConnection();
  }, [connections]);

  function handleNavigationToGiveClassesPage() {
    navigation.navigate("GiveClasses");
  }

  function handleNavigationToClassesPage() {
    navigation.navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigationToClassesPage}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigationToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {connections} conexões já realizadas{" "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
};

export default Landing;
