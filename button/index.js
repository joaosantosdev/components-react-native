import React from 'react';
import {TouchableNativeFeedback, Text, View} from 'react-native';
import {colors} from '../resource';
import {sizeButton, styleText, styleButton, typeButton, defaultStyle} from './style';
const button = props => {
    let size = sizeButton[props.size];
    if (size === undefined) {
        size = sizeButton[defaultStyle.size];
    }
    let type = typeButton[props.type];
    if (props.type === undefined) {
        type = typeButton[defaultStyle.type];
    }
    let bg = colors[props.bg] === undefined ? props.bg : colors[props.bg];
    let color = colors[props.color] === undefined ? props.color : colors[props.color];
    let styleBtn = styleButton;
    let styleTxt = styleText;

    if (bg !== undefined) {
        if (props.type === 'outline' || props.type === 'outline-round') {
            styleBtn = {...styleButton, borderColor: bg};
            styleTxt = {...styleText, color: bg};
        } else if (props.type === 'block' || props.type === 'block-round' || props.type == undefined) {
            styleBtn = {...styleButton, backgroundColor: bg};
        }
    }
    if (color !== undefined) {
        styleTxt = {...styleTxt, color: props.color};
    }

    if (props.radius) {
        styleBtn = {...styleBtn, borderRadius: props.radius};
    }

    return (<TouchableNativeFeedback onPress={props.onPress}>
        <View style={[size.button, type.button, styleBtn, props.style]}>
            <Text style={[size.text, type.text, styleTxt, props.styleText]}>{props.title?props.title:props.children}</Text>
        </View>

    </TouchableNativeFeedback>);
};
export default button;
