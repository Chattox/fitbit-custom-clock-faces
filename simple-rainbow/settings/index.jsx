  const DefaultSettings = {
    background: JSON.stringify("images/rainbow-bright.png")
  }

  function InitialiseSettings(props) {
    for (let setting in DefaultSettings) {
      if (!props.settings[setting]) {
        props.settingsStorage.setItem(setting, DefaultSettings[setting]);
      }
    }
  }

  registerSettingsPage((props) => {
    InitialiseSettings(props);

    return (
    <Page>
      <Section title={<Text bold align="left">Clock face settings</Text>} description={<Text>Set your preferred look</Text>}>
        <Select 
          label={'Background'} 
          settingsKey='background' 
          options={[
              {name: 'Bright', value:'images/rainbow-bright.png'},
              {name: 'Dark', value:'images/rainbow-dark.png'},
              {name: 'Neon', value:'images/rainbow-neon.png'},
              {name: 'Bright Pastel', value: 'images/rainbow-pastel-bright.png'},
              {name: 'Dark Pastel', value: 'images/rainbow-pastel-dark.png'}
            ]}
          />
      </Section>
    </Page>
  )
  })