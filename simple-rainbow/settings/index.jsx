const Settings = (props) => {
  return (
    <Page>
      <Section>
        <Select 
          label={'Background'} 
          settingsKey='background' 
          options={[
              {name: 'Bright Rainbow', value:'images/rainbow-bright.png'},
              {name: 'Neon Rainbow', value:'images/rainbow-neon.png'}
            ]}
          />
      </Section>
    </Page>
  )
}

registerSettingsPage(Settings)