import ImageColors from 'react-native-image-colors'


export const getImageColors = async( uri: string ) => {

    let primary = 'dark' 
    let secondary = 'white'
    
    const result = await ImageColors.getColors(uri, {
      fallback: '#228B22',
      cache: true,
    //   key: 'unique_key',
    })

    switch (result.platform) {

        case 'android':
          // android result properties
          // primary = result.darkVibrant!
          primary = result.lightMuted!
          secondary = result.muted!
          // secondary = result.lightVibrant!
        //   primary = result.dominant!
        //   secondary = result.lightVibrant!
          break
          
        case 'web':
          // web result properties
          // primary = result.dominant!
          primary = result.vibrant!
          secondary = result.lightVibrant!
          break

        case 'ios':
          // iOS result properties
          primary = result.background
          secondary = result.secondary
          break

        default:
          throw new Error('Unexpected platform key')
      }

      return [ primary, secondary ]

  }