import { View, Text, ImageBackground, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import imageback from '../design/Images/background.png'
import goldImg from '../design/Images/gold.png'
import coins01 from '../design/Images/coins.png'
import jsontext from '../data/myjson.json'
import Page from '../design/Page'
import CoinsCredit from '../design/CoinsCredit'
import Random from '../design/RandomIcon'
import * as Progress from 'react-native-progress';
import Random01 from '../design/RandomIcon01'


const Mainpage = () => {
  const level = 3.3
  const progress =  0.1 * level;
  const coins = 14000
  const gems = 15000
  const points = 12
  const spend = jsontext.GlobalJson.Spend +' '+points+' ' + jsontext.GlobalJson.SpendContinue + ' ' + level 
  const n001name = jsontext.GlobalJson.Name+jsontext.GlobalJson.MyName

  const gemIcons = [
    {
      iconPressed: () => {},
      iconName: 'gold',
      iconColor: '#fff',
      Text: coins,
      size: 17
    },
    {
      iconPressed: () => {},
      iconName: 'cards-diamond',
      iconColor: '#fff',
      Text:gems,
      size: 17
    }
  ]

  const walletBank = [
    {
      iconPressed: () => {},
      iconName: 'wallet',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Wallet,
      size: 17
    },
    {
      iconPressed: () => {},
      iconName: 'decagram',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Store,
      size: 18
    }
  ]

  const threeButtons = [
    {
      iconPressed: () => {},
      iconName: 'dice-3',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Welfare,
      size: 17
    },
    {
      iconPressed: () => {},
      iconName: 'dna',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Integral,
      size: 18
    },
    {
      iconPressed: () => {},
      iconName: 'drawing-box',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Mall,
      size: 18
    }
    
  ]
  const Settings = [
    {
      iconPressed: () => {},
      iconName: 'account-settings',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Settings,
      size: 17
    }
  ]

  const threeButtons01 = [
    {
      iconPressed: () => {},
      iconName: 'account-circle',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Version +' '+ level ,
      size: 28
    },
    {
      iconPressed: () => {},
      iconName: 'briefcase-eye',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Version+' '+level,
      size: 28
    },
    {
      iconPressed: () => {},
      iconName: 'book-settings',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Version+' '+level,
      size: 28
    }
  ]

  const bottombtns = [
    {
      iconPressed: () => {},
      iconName: 'account-circle',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Version +' '+ level ,
      size: 28
    },
    {
      iconPressed: () => {},
      iconName: 'briefcase-eye',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Version+' '+level,
      size: 28
    },
    {
      iconPressed: () => {},
      iconName: 'book-settings',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Version+' '+level,
      size: 28
    },
    {
      iconPressed: () => {},
      iconName: 'account-circle',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Version +' '+ level ,
      size: 28
    },
    {
      iconPressed: () => {},
      iconName: 'briefcase-eye',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Version+' '+level,
      size: 28
    },
    {
      iconPressed: () => {},
      iconName: 'book-settings',
      iconColor: '#fff',
      Text: jsontext.GlobalJson.Version+' '+level,
      size: 28
    }
  ]

  const number = 1

  const dataBottom = [
    {id: 1, label: jsontext.GlobalJson.Spend + ' ' +points+ ' '+ jsontext.GlobalJson.no1 +' ' 
    + jsontext.GlobalJson.Points, toIncrease: jsontext.GlobalJson.Increase},
    {id: 2, label: jsontext.GlobalJson.Spend + ' ' +points+ ' '+ jsontext.GlobalJson.no1 +' ' 
    + jsontext.GlobalJson.Points, toIncrease: jsontext.GlobalJson.Increase},
    {id: 3, label: jsontext.GlobalJson.Spend + ' ' +points+ ' '+ jsontext.GlobalJson.no1 +' ' 
    + jsontext.GlobalJson.Points, toIncrease: jsontext.GlobalJson.Increase},
    {id: 4, label: jsontext.GlobalJson.Spend + ' ' +points+ ' '+ jsontext.GlobalJson.no1 +' ' 
    + jsontext.GlobalJson.Points, toIncrease: jsontext.GlobalJson.Increase},
    {id: 5, label: jsontext.GlobalJson.Spend + ' ' +points+ ' '+ jsontext.GlobalJson.no1 +' ' 
    + jsontext.GlobalJson.Points, toIncrease: jsontext.GlobalJson.Increase},
    {id: 6, label: jsontext.GlobalJson.Spend + ' ' +points+ ' '+ jsontext.GlobalJson.no1 +' ' 
    + jsontext.GlobalJson.Points, toIncrease: jsontext.GlobalJson.Increase},
    {id: 7, label: jsontext.GlobalJson.Spend + ' ' +points+ ' '+ jsontext.GlobalJson.no1 +' ' 
    + jsontext.GlobalJson.Points, toIncrease: jsontext.GlobalJson.Increase},
    {id: 8, label: jsontext.GlobalJson.Spend + ' ' +points+ ' '+ jsontext.GlobalJson.no1 +' ' 
    + jsontext.GlobalJson.Points, toIncrease: jsontext.GlobalJson.Increase},
    {id: 9, label: jsontext.GlobalJson.Spend + ' ' +points+ ' '+ jsontext.GlobalJson.no1 +' ' 
    + jsontext.GlobalJson.Points, toIncrease: jsontext.GlobalJson.Increase},
  ]

  return (<>
   <ImageBackground source={imageback}>
    <View>
      <View style={{display: 'flex', flexDirection: 'row', backgroundColor: '#001839'}}>
        <View style={{width: '50%'}}>
          <View style={Page.gemsCoinsIcon}>
            {walletBank.map((item,index)=>(
              <View key={index}>
               <CoinsCredit {...item}/>
              </View>
            ))}
          </View>
        </View>
        <View style={{width: '50%'}}>
          <View style={Page.gemsCoinsIcon01}>
            {gemIcons.map((item,index)=>(
              <View key={index}>
               <CoinsCredit {...item}/>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View>
        <Text style={Page.spend}>{spend}</Text>
      </View>
    
    <View style={Page.imageContainer}>
      <View style={Page.imageR01}>
        <ImageBackground source={goldImg} style={Page.imageRound} />
      </View>
      <View style={{padding: 10}}>
        <Text style={Page.namei}>{n001name}</Text>
        <Text style={Page.namei}>{jsontext.GlobalJson.Current + ' '+ level}</Text>
        <Text style={Page.namei}>{jsontext.GlobalJson.Privilages + ' '+level}</Text>

        <View>
          <View style={Page.progressBarHolder}>
           <Progress.Bar style={{borderRadius: 0}} progress={progress} color='aqua' width={230} />
          </View>
        </View>
      </View>
    </View>
    <View style={Page.threeButtons}>
      {threeButtons.map((item, index)=>(
        <View key={index}>
          <Random {...item}/>
        </View>
      ))}
    </View>
    </View>

   <View style={Page.mid01}>
    <Text style={{color:'white', padding: 10, textAlign: 'center'}}>{jsontext.GlobalJson.no1 +' '+level+' '+jsontext.GlobalJson.Privilages}</Text>
    <View style={Page.threeButtons01}>
      {threeButtons01.map((item, index)=>(
        <View style={{borderBottomWidth: 2, borderBottomColor: 'aqua', margin: 0}} key={index}>
          <Random01 {...item}/>
        </View>
      ))}
    </View>
    <View style={Page.threeButtons}>
      {Settings.map((item, index)=>(
        <View key={index}>
          <Random {...item}/>
        </View>
      ))}
    </View>
   </View>
    
   <View>
    
    <View style={{padding: 5, paddingTop: 10, backgroundColor: '#000'}} >
      <ScrollView style={{height: 420}}>
        {dataBottom.map((item,index)=>(
          <View key={index} style={{margin: 5, display:'flex', flexDirection: 'row', backgroundColor: '#01002a95', padding: 8, borderRadius: 10}}>
            <View>
              <View style={Page.imageR01}>
                <ImageBackground source={goldImg} style={Page.imageRound} />
              </View>
            </View>
            <View style={{marginTop: 0, padding: 15, margin: 0, borderRadius: 10, height: 100, backgroundColor: '#02007aa4', width: '71%'}}>
              <Text style={{color:'white'}}>{item.label}</Text>
              <Text style={{color:'white'}}>{item.toIncrease}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>

    </View>
   </ImageBackground>
  </>)
}

export default Mainpage