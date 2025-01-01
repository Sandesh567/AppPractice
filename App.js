import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default function PizzaTranslator() {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput style={styles.container}
        placeholder="Type Here to translate"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

      <Text>
        {text
          .split('')
          .map(word => word && '🍕')
          .join('')}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
  },
  redText: {
    color: 'blue',
    fontSize: 30,
  },
});

/*Props and state*/

// function Cat(props) {
//   const [isHungry, setIsHungry] = useState(true);
//   return (
//     <View>
//       <Text style={styles.container}>
//         I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}
//       </Text>
//       <Button
//         onPress={() => {
//           setIsHungry(false);
//         }}
//         disabled={!isHungry}
//         title={isHungry ? 'Give me some Food' : 'Thank You'}
//       />
//     </View>
//   );
// };

// export default function Cafe() {
//   return (
//     <>
//       <Cat name="milo" />
//       <Cat name="silo" />
//     </>
//   );
// };






