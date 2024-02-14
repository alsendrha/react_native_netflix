import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Genre = ({ genres }) => {
  return (
    <View style={styles.genres}>
      {genres?.map((genre, index) => {
        return (
          <View key={index} style={styles.genre}>
            <Text style={styles.genreText}>{genre.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  genres: {
    flexDirection: "row",
    gap: 7,
  },
  genre: {
    paddingHorizontal: 3,
    paddingVertical: 5,
    borderRadius: 25,
    borderColor: "#F2F2F2F2",
    borderWidth: 1,
    marginBottom: 16,
  },
  genreText: {
    color: "#F2F2F2F2",
  },
});
export default Genre;
