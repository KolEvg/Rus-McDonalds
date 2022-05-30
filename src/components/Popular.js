import React, { useState } from "react";
import { View, Text, TouchableHighlight, Image, Pressable, TouchableWithoutFeedback } from "react-native";

import { COLORS, SIZES } from '../../constants';
import { popular } from '../../popular';

function Popular() {
  const [active, setActive] = useState(null);
  return (
    <View style={{ paddingTop: 60 }}>
      <Text style={{ fontSize: SIZES.h1, color: COLORS.white, fontWeight: 'bold' }}>Popular</Text>

      <View style={{
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        {popular.map((product, index) => (
          <View
            key={`popular ${index}`}
            style={{
              width: '30%',
              marginBottom: 20,
              backgroundColor: active === index ? COLORS.secondary : COLORS.gray,
              borderRadius: SIZES.radius,
            }}
          >
            <TouchableWithoutFeedback
              underlayColor={COLORS.secondary}
              onPress={() => setActive(index)}
              style={{
                height: 120,
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                paddingLeft: 5,
                paddingRightL: 5,
                // backgroundColor: COLORS.gray,
              }}
            >
            <View style={{ alignItems: 'center' }}>
              <Image source={{ uri: product.image }}
                style={{ width: 40, height: 40 }}
              />
              <Text
                style={{
                  fontSize: SIZES.h4,
                  color: COLORS.primary,
                  marginTop: 10,
                  textAlign: 'center'
                }}>{product.name}
              </Text>
              <Text
                style={{
                  fontSize: SIZES.h4,
                  color: COLORS.primary,
                  marginTop: 10,
                  textAlign: 'center'
                }}
              >
                {product.price}
              </Text>
            </View>
            </TouchableWithoutFeedback>
          </View>
        ))}
    </View>
    </View >
  );
}

export default Popular;

