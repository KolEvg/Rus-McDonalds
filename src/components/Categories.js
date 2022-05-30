import React, { useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";

import { COLORS, SIZES } from '../../constants'
import { categories } from '../../categories'

function Categories() {
  const [active, setActive] = useState(null);
  return (
    <View style={{ paddingTop: 20 }}>
      <Text style={{ fontSize: SIZES.h1, color: COLORS.white, fontWeight: 'bold' }}>Hey,</Text>
      <Text style={{ fontSize: SIZES.h1, color: COLORS.white }}>what's up?</Text>

      <View style={{
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        {categories.map((cat, index) => (
          <View
            key={`categories ${index}`}
            style={{
              width: '30%',
              marginBottom: 20,
              backgroundColor: active === index ? COLORS.secondary : COLORS.gray,
              borderRadius: SIZES.radius,
            }}
          >
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              onPress={() => setActive(index)}
              style={{
                height: 100,
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                // backgroundColor: COLORS.gray,
                paddingLeft: 5,
                paddingRightL: 5,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: cat.image }}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={{
                  fontSize: SIZES.h4,
                  color: COLORS.white,
                  marginTop: 10,
                  textAlign: 'center'
                }}>{cat.name}</Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  );
}

export default Categories;
