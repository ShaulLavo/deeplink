import { Image, Linking, Pressable, StyleSheet, Text } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedView } from '@/components/ThemedView'

const call2 = 'phoenixinvest://'

const call =
	'pinfoapp://onelink/sso/phoenixinvest/305513459/d1d94907ecf83b82dff3e216dadb359231fc9433788228e5d5404e798ed050999d2b7430b605cf85c2f8f977abf701392a8064a0d8712d355ff953e5789cb92100470793d1b3e46702c0aa3ce436d48209789041159dc09fd8ae02c8c397568b2ce6f55c9dc03480fc497cbf26d0ed0e1a6ba0754e54701ce67062640fe61f64 f2d806a4145f00f15f34c02b27a271ea4fe9bf0d466622dc8a98e50a1b087d7/1729583670'

export default function HomeScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/partial-react-logo.png')}
					style={styles.reactLogo}
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<Pressable
					onPress={async () => {
						const can = await Linking.canOpenURL(call)
						console.log({ can })
						try {
							await Linking.openURL(call)
						} catch (e) {
							console.log(e)
							try {
								await Linking.openURL(call)
							} catch (e) {
								console.log(e)
							}
						}
					}}
					style={styles.button}
				>
					<Text style={styles.buttonText}>OPEN DEEP LINK</Text>
				</Pressable>
			</ThemedView>
		</ParallaxScrollView>
	)
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute'
	},
	button: {
		backgroundColor: '#007bff',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16
	}
})
