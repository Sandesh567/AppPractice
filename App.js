import { StyleSheet, Text, View, TextInput, Button, SectionList } from 'react-native';
export default function Flat() {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>BIM Courses</Text>
      <SectionList
        sections={[
          { title: '6th Semester', data: ['Business Environment', 'Finance', 'Software Engineering', 'Summer Project', 'HRM'] },
          { title: '7th Semester', data: ['Artificial Intelligence', 'Management Information System', 'OOAD', 'Business Strategy', 'Organizational Behavior', 'Operation Managemnet'] },
          { title: '8th Semester', data: ['Supply Chain Management', 'Entrepreneur', 'Oprating System', 'Data Mining'] }
        ]}

        renderItem={({ item }) =>
          <Text style={styles.item}>
            {item}
          </Text>
        }

        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>
            {section.title}
          </Text>
        )}

        keyExtractor={item => `BIM Courses- ${item}`}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
  },
  header: {
    padding: 10,
    fontSize: 20,
    height: 44,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  }

});



