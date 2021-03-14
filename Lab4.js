import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Item from './Movie'
const { width, height } = Dimensions.get('window')

export default class Lab4 extends Component {
  constructor() {
    super()
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    }
  }

  componentDidMount() {
    var data = [
      {
        "Title":"Rogue One: A Star Wars Story",
        "Year":"2016",
        "Rated":"PG-13",
        "Released":"16 Dec 2016",
        "Runtime":"133 min",
        "Genre":"Action, Adventure, Sci-Fi",
        "Director":"Gareth Edwards",
        "Writer":"Chris Weitz (screenplay by), Tony Gilroy (screenplay by), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)",
        "Actors":"Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
        "Plot":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the plans for the Death Star.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 2 Oscars. Another 24 wins & 80 nominations.",
        "Poster": require("./Poster_10.jpg"),
        "imdbRating":"7.8",
        "imdbVotes":"540,185",
        "imdbID":"tt3748528",
        "Type":"movie",
        "Production":"Lucasfilm Ltd.",
      },
      {
        "Title":"Star Wars: Episode VIII - The Last Jedi",
        "Year":"2017",
        "Rated":"PG-13",
        "Released":"15 Dec 2017",
        "Runtime":"152 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"Rian Johnson",
        "Writer":"Rian Johnson, George Lucas (based on characters created by)",
        "Actors":"Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley",
        "Plot":"Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 4 Oscars. Another 24 wins & 90 nominations.",
        "Poster": require("./empty.jpg"),
        "imdbRating":"7.0",
        "imdbVotes":"550,181",
        "imdbID":"tt2527336",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      },
      {
        "Title":"Star Wars: Episode VII - The Force Awakens",
        "Year":"2015",
        "Rated":"PG-13",
        "Released":"18 Dec 2015",
        "Runtime":"138 min",
        "Genre":"Action, Adventure, Sci-Fi",
        "Director":"J.J. Abrams",
        "Writer":"Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)",
        "Actors":"Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
        "Plot":"As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
        "Language":"English","Country":"USA","Awards":"Nominated for 5 Oscars. Another 62 wins & 126 nominations.",
        "Poster": require("./empty.jpg"),
        "imdbRating":"7.9",
        "imdbVotes":"847,768",
        "imdbID":"tt2488496",
        "Type":"movie",
        "Production":"Lucasfilm Ltd., Bad Robot"
      },
      {
        "Title":"Star Trek",
        "Year":"2009",
        "Rated":"PG-13",
        "Released":"08 May 2009",
        "Runtime":"127 min",
        "Genre":"Action, Adventure, Sci-Fi",
        "Director":"J.J. Abrams",
        "Writer":"Roberto Orci, Alex Kurtzman, Gene Roddenberry (television series \"Star Trek\")",
        "Actors":"Chris Pine, Zachary Quinto, Leonard Nimoy, Eric Bana",
        "Plot":"The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.",
        "Language":"English",
        "Country":"USA, Germany",
        "Awards":"Won 1 Oscar. Another 24 wins & 93 nominations.",
        "Poster": require("./Poster_08.jpg"),
        "imdbRating":"7.9",
        "imdbVotes":"572,780",
        "imdbID":"tt0796366",
        "Type":"movie",
        "Production":"Bad Robot"
      },
      {
        "Title":"Star Wars: Episode III - Revenge of the Sith",
        "Year":"2005",
        "Rated":"PG-13",
        "Released":"19 May 2005",
        "Runtime":"140 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"George Lucas","Writer":"George Lucas",
        "Actors":"Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid",
        "Plot":"Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 1 Oscar. Another 26 wins & 62 nominations.",
        "Poster": require("./Poster_06.jpg"),
        "imdbRating":"7.5",
        "imdbVotes":"696,697",
        "imdbID":"tt0121766",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      },
      {
        "Title":"Star Wars: Episode II - Attack of the Clones",
        "Year":"2002",
        "Rated":"PG",
        "Released":"16 May 2002",
        "Runtime":"142 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"George Lucas",
        "Writer":"George Lucas (screenplay by), Jonathan Hales (screenplay by), George Lucas (story by)",
        "Actors":"Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee",
        "Plot":"Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 1 Oscar. Another 19 wins & 64 nominations.",
        "Poster": require("./Poster_07.jpg"),
        "imdbRating":"6.5",
        "imdbVotes":"628,069",
        "imdbID":"tt0121765",
        "Type":"movie",
        "Production":"Lucasfilm Ltd., Twentieth Century Fox"
      },
      {
        "Title":"Star Wars: Episode I - The Phantom Menace",
        "Year":"1999",
        "Rated":"PG",
        "Released":"19 May 1999",
        "Runtime":"136 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"George Lucas",
        "Writer":"George Lucas",
        "Actors":"Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd",
        "Plot":"Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 3 Oscars. Another 26 wins & 66 nominations.",
        "Poster": require("./Poster_05.jpg"),
        "imdbRating":"6.5",
        "imdbVotes":"715,539",
        "imdbID":"tt0120915",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      },
      {
        "Title":"Star Wars: Episode VI - Return of the Jedi",
        "Year":"1983",
        "Rated":"PG",
        "Released":"25 May 1983",
        "Runtime":"131 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"Richard Marquand",
        "Writer":"Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)",
        "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        "Plot":"After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 4 Oscars. Another 22 wins & 16 nominations.",
        "Poster": require("./Poster_03.jpg"),
        "imdbRating":"8.3",
        "imdbVotes":"932,430",
        "imdbID":"tt0086190",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      },
      {
        "Title":"Star Wars: Episode V - The Empire Strikes Back",
        "Year":"1980",
        "Rated":"PG",
        "Released":"20 Jun 1980",
        "Runtime":"124 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"Irvin Kershner",
        "Writer":"Leigh Brackett (screenplay by), Lawrence Kasdan (screenplay by), George Lucas (story by)",
        "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        "Plot":"After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Won 1 Oscar. Another 24 wins & 20 nominations.",
        "Poster": require("./Poster_02.jpg"),
        "imdbRating":"8.7",
        "imdbVotes":"1,136,399",
        "imdbID":"tt0080684",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      },
      {
        "Title":"Star Wars: Episode IV - A New Hope",
        "Year":"1977",
        "Rated":"PG",
        "Released":"25 May 1977",
        "Runtime":"121 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"George Lucas",
        "Writer":"George Lucas",
        "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        "Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Won 6 Oscars. Another 52 wins & 29 nominations.",
        "Poster": require("./Poster_01.jpg"),
        "imdbRating":"8.6",
        "imdbVotes":"1,208,256",
        "imdbID":"tt0076759",
        "Type":"movie",
        "Production":"Lucasfilm Ltd."
      }
    ]

    this.setState({
      dataBackup: data,
      dataSource: data,
    })
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text
    this.setState({
      query: query,
    })
    if (query == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      })
    } else {
      var data = this.state.dataBackup
      query = query.toLowerCase()
      data = data.filter((l) => l.Title.toLowerCase().match(query))

      this.setState({
        dataSource: data,
      })
    }
  }

  render() {
    console.disableYellowBox = true
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="grey" />
        <View style={styles.inputField}>
          <TextInput
            placeholder="Find what you are looking for:"
            placeholderTextColor='#fff'
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item, index }) => {
            return (
              <>
                <TouchableOpacity>
                  <Item
                    poster={item.Poster}
                    title={item.Title}
                    plot={item.Plot}
                    year={item.Year}
                    rated={item.Rated}
                    released={item.Released}
                    runtime={item.Runtime}
                    genre={item.Genre}
                    director={item.Director}
                    writer={item.Writer}
                    actors={item.Actors}
                    language={item.Language}
                    country={item.Country}
                    awards={item.Awards}
                    imdbRating={item.imdbRating}
                    imdbVotes={item.imdbVotes}
                    imdbID={item.imdbID}
                    type={item.Type}
                    production={item.Production}

                  />
                </TouchableOpacity>
              </>
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  inputField: {
    height: 80,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff'
  },
  input: {
    height: 45,
    width: '90%',
    backgroundColor: '#000',
    borderColor: '#00B672',
    color: '#fff',
    borderRadius: 7,
    paddingLeft: width/5,
    borderWidth: 2,
    borderColor: 'grey',
  },
  image: {
    height: 150,
    width: 90,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
})