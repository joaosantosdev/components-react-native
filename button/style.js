import {colors} from '../resource';

export let defaultStyle = {
    size:'md',
    type:'block',
    color:'white',
    bg:'primary'
}
export let sizeButton = {
    lg: {
        button: {
            height: 70,
        },
        text: {
            fontSize: 40,
        },
    },
    md: {
        button: {
            height: 50,
        },
        text: {
            fontSize: 25,
        },
    },
    sm: {
        button: {
            height: 30,
        },
        text: {
            fontSize: 18,
        },
    },
};
export let typeButton = {
    outline: {
        button: {
            borderWidth: 1,
            borderColor: colors[defaultStyle.bg],
        }, text: {
            color: colors[defaultStyle.bg],
        },
    },
    block: {
        button: {
            backgroundColor: colors[defaultStyle.bg],
        },
        text: {
            color: colors[defaultStyle.color],
        },
    },
    'outline-round': {
        button: {
            borderWidth: 1,
            borderColor: colors[defaultStyle.bg],
            borderRadius: defaultStyle.radius,
        }, text: {
            color: colors[defaultStyle.bg],
        },
    },
    'block-round': {
        button: {
            backgroundColor: colors[defaultStyle.bg],
            borderRadius: defaultStyle.radius,
        }
        , text: {
            color: colors[defaultStyle.color],
        },
    },
};
export let styleButton = {
    justifyContent: 'center',
    alignItems: 'center',
};
export let styleText = {};
