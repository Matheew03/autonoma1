import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, QUARTERNARY_COLOR, BACKGROUND_COLOR, TEXT_COLOR, } from "../commons/constants";

export const stylesGLobal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },

  title: {
    color: PRIMARY_COLOR,
    fontSize: 26,
    fontWeight: "bold",
    paddingHorizontal: 30,
    paddingTop: 60,
    textAlign: "center",
  },

  containerBody: {
    backgroundColor: SECONDARY_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 40,
    marginTop: 20,
    flex: 1,
  },

  titleWelcome: {
    fontSize: 18,
    fontWeight: "bold",
    color: TEXT_COLOR,
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    backgroundColor: QUARTERNARY_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 8,
    color: TEXT_COLOR,
  },

  containerInput: {
    marginVertical: 10,
  },

  button: {
    backgroundColor: TERTIARY_COLOR,
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 20,
  },

  buttonText: {
    textAlign: "center",
    color: SECONDARY_COLOR,
    fontSize: 16,
    fontWeight: "bold",
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 20,
  },
});
