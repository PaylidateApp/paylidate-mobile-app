import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";

const MyNetwork = () => {
  return (
    <View style={styles.screen}>
      <View>
        <View style={{
          flexDirection: "row",
          marginVertical: 12,
          marginHorizontal: 35,
        }}>
          {/* icon */}
          <View style={styles.searchIcon}>
            <Ionicons name="search" size={22} color="black" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter Username or Phone number to search"
          />
        </View>

        {/* title */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Invite friends to my Network</Text>
        </View>
      </View>

      {/* section one */}
      <View style={styles.container}>
        <View style={styles.sectionOne}>
          <View
            style={{
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingVertical: 8,
              }}
            >
              <View>
                <Image
                  style={styles.img}
                  source={require("../assets/myNetwork/cyflex.png")}
                />
              </View>
              <View
                style={{
                  paddingVertical: 6,
                }}
              >
                <View>
                  <Text style={styles.sectionOneUsername}>@Jiji_manager</Text>
                </View>
                <View style={styles.card}>
                  <Text style={styles.sectionOneAddToNetwork}>
                    Add to Network
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingVertical: 8,
              }}
            >
              <View>
                <Image
                  style={styles.img}
                  source={require("../assets/myNetwork/vso.png")}
                />
              </View>
              <View
                style={{
                  paddingVertical: 6,
                }}
              >
                <View>
                  <Text style={styles.sectionOneUsername}>@Ivan_moneyman</Text>
                </View>
                <View style={styles.card}>
                  <Text style={styles.sectionOneAddToNetwork}>
                    Add to Network
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sectionOne}>
          <View
            style={{
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingVertical: 8,
              }}
            >
              <View>
                <Image
                  style={styles.img}
                  source={require("../assets/myNetwork/david.png")}
                />
              </View>
              <View
                style={{
                  paddingVertical: 6,
                }}
              >
                <View>
                  <Text style={styles.sectionOneUsername}>@DavidShegs</Text>
                </View>
                <View style={styles.card}>
                  <Text style={styles.sectionOneAddToNetwork}>
                    Add to Network
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingVertical: 8,
              }}
            >
              <View>
                <Image
                  style={styles.img}
                  source={require("../assets/myNetwork/vso.png")}
                />
              </View>
              <View
                style={{
                  paddingVertical: 6,
                }}
              >
                <View>
                  <Text style={styles.sectionOneUsername}>@MrsVSO</Text>
                </View>
                <View style={styles.card}>
                  <Text style={styles.sectionOneAddToNetwork}>
                    Add to Network
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* section two */}
      <View
        style={{
          paddingTop: 8,
        }}
      >
        {/* section two header */}
        <View
          style={{
            paddingVertical: 5,
          }}
        >
          <Text style={styles.sectionTwoHeader}>My Network Contacts</Text>
        </View>
        {/* section two header ends */}

        {/* section two listItems */}
        <View style={styles.containerTwo}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Image
                style={styles.img}
                source={require("../assets/myNetwork/david.png")}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 7,
                paddingVertical: 11,
              }}
            >
              <View>
                <Text style={styles.sectionOneUsername}>@DavidShegs</Text>
              </View>
              <View
                style={{
                  paddingVertical: 2,
                }}
              >
                <Text style={styles.sectionOneUsername}>Lagos Jiji Guy</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 13,
            }}
          >
            <Image
              style={styles.imgComment}
              source={require("../assets/myNetwork/comment.png")}
            />
          </View>
        </View>
        <View style={styles.containerTwo}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Image
                style={styles.img}
                source={require("../assets/myNetwork/cyflex.png")}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 7,
                paddingVertical: 11,
              }}
            >
              <View>
                <Text style={styles.sectionOneUsername}>@Ivan_moneyman</Text>
              </View>
              <View
                style={{
                  paddingVertical: 2,
                }}
              >
                <Text style={styles.sectionOneUsername}>Ivan Arabome</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 13,
            }}
          >
            <Image
              style={styles.imgComment}
              source={require("../assets/myNetwork/comment.png")}
            />
          </View>
        </View>
        <View style={styles.containerTwo}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Image
                style={styles.img}
                source={require("../assets/myNetwork/vso.png")}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 7,
                paddingVertical: 11,
              }}
            >
              <View>
                <Text style={styles.sectionOneUsername}>@MrsVSO</Text>
              </View>
              <View
                style={{
                  paddingVertical: 2,
                }}
              >
                <Text style={styles.sectionOneUsername}>
                  Victoria Sunny Owolijah
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 13,
            }}
          >
            <Image
              style={styles.imgComment}
              source={require("../assets/myNetwork/comment.png")}
            />
          </View>
        </View>
        <View style={styles.containerTwo}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Image
                style={styles.img}
                source={require("../assets/myNetwork/david.png")}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 7,
                paddingVertical: 11,
              }}
            >
              <View>
                <Text style={styles.sectionOneUsername}>@DavidShegs</Text>
              </View>
              <View
                style={{
                  paddingVertical: 2,
                }}
              >
                <Text style={styles.sectionOneUsername}>Lagos Jiji Guy</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 13,
            }}
          >
            <Image
              style={styles.imgComment}
              source={require("../assets/myNetwork/comment.png")}
            />
          </View>
        </View>
        <View style={styles.containerTwo}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Image
                style={styles.img}
                source={require("../assets/myNetwork/cyflex.png")}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 7,
                paddingVertical: 11,
              }}
            >
              <View>
                <Text style={styles.sectionOneUsername}>@Ivan_moneyman</Text>
              </View>
              <View
                style={{
                  paddingVertical: 2,
                }}
              >
                <Text style={styles.sectionOneUsername}>Ivan Arabome</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 13,
            }}
          >
            <Image
              style={styles.imgComment}
              source={require("../assets/myNetwork/comment.png")}
            />
          </View>
        </View>
        <View style={styles.containerTwo}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Image
                style={styles.img}
                source={require("../assets/myNetwork/vso.png")}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 7,
                paddingVertical: 11,
              }}
            >
              <View>
                <Text style={styles.sectionOneUsername}>@MrsVSO</Text>
              </View>
              <View
                style={{
                  paddingVertical: 2,
                }}
              >
                <Text style={styles.sectionOneUsername}>
                  Victoria Sunny Owolijah
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 13,
            }}
          >
            <Image
              style={styles.imgComment}
              source={require("../assets/myNetwork/comment.png")}
            />
          </View>
        </View>
        {/* section two listItems end */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 35,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "70%",
    height: 45,
    //marginTop: 15,
    marginVertical: 15,
    marginHorizontal: 60,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#182430",
  },
  headerTitle: {
    fontFamily: "Cabin",
    fontSize: 12,
    lineHeight: 15,
    color: "#ffffff",
    paddingVertical: 12,
  },
  input: {
    height: 40,
    // margin: 12,
    // borderWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    color: "#525252",
    fontSize: 10,
    lineHeight: 12,
  },
  searchIcon: {
    width: 40,
    height: 40,
    paddingTop: 8,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  container: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerTwo: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    paddingHorizontal: 12,
    borderWidth: 0.08,
    borderColor: "#000000",
    borderRadius: 1,
    backgroundColor: "rgba(217, 217, 217, 0.1)",
  },
  sectionOne: {
    width: 160,
    height: 160,
    borderRadius: 10,
    backgroundColor: "#E3E3E3",
  },
  sectionOneUsername: {
    fontFamily: "Cabin",
    fontSize: 10,
    lineHeight: 12,
    alignItems: "center",
  },
  sectionOneAddToNetwork: {
    fontFamily: "Cabin",
    fontSize: 7,
    lineHeight: 9,
  },
  sectionTwoHeader: {
    fontFamily: "Cabin",
    fontSize: 20,
    lineHeight: 24,
  },
  img: {
    width: 50,
    height: 50,
  },
  imgComment: {
    width: 25,
    height: 25,
  },
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 18,
    backgroundColor: Colors.accent,
    padding: 5,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 5,
  },
});

export default MyNetwork;
