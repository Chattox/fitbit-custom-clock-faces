const HelloWorld = (props) => {
  return (
    <Page>
      <Section title={<Text bold align="center">Background</Text>}>
        <Select 
          label={'Backgrounds'} 
          settingsKey='background' 
          options={[
              {name: 'Bright Rainbow', value:'images/rainbow.png'},
              {name: 'Neon Rainbow', value:'neon'}
            ]}
          onSelection={(selection) => console.log(selection.values[0].value)} 
          />
      </Section>
    </Page>
  )
}

registerSettingsPage(HelloWorld)