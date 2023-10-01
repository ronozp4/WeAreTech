import { FC, useState } from 'react'
import { View } from 'react-native'
import ColorPicker from 'react-native-wheel-color-picker'
import { COLORS } from '../assets/constansts'

interface ColorSelectProps {
	color: string
	onComplite: (color: string) => void
}

const ColorSelect: FC<ColorSelectProps> = ({ color, onComplite }) => {
	const [currentColor, setCurrentColor] = useState(color || '')
	return (
		<View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
			<ColorPicker
				color={currentColor}
				onColorChange={(color) => setCurrentColor(color)}
				onColorChangeComplete={onComplite}
				thumbSize={20}
				sliderSize={2}
				noSnap
				row
				sliderHidden
				palette={COLORS}

			/>
		</View>
	)
}

export default ColorSelect