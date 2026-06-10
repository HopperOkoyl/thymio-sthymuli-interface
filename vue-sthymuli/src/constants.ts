
type Color = string
export const HexCodeBlack: Color = '#000000';
export const HexCodeWhite: Color = '#FFFFFF';
export const HexCodeSapphire: Color = '#2B50AA';
export const HexCodeSandyBrown: Color = "#FC955B";
export const HexCodeAshGrey: Color = "#B3CBB9";
export const HexCodeSageGreen: Color = "#86A873";
export const HexCodeLavenderGrey: Color = "#9197AE";
export const HexCodeJungleGreen: Color = "#00A878";
export const HexCodeMintLeaf: Color = "#17B890";
export const HexCodeDustyMauve: Color = "#B287A3";
export const HexCodeAmberGlow: Color = "#FF9F1C";
export const HexCodeBrightFern: Color = "#63C132";
export const HexCodePastelRed: Color = '#FFB3BA';
export const HexCodePastelOrange: Color = '#FFDFBA';
export const HexCodePastelJaune: Color = '#FFFFBA';
export const HexCodePastelGreen: Color = '#BAFFC9';
export const HexCodePastelBlue: Color = '#BAE1FF';
export const HexCodePinkMist: Color = '#D991BA';
export const HexCodeDarkTeal: Color = '#074F57';
// export const HexCodePastelBlue: Color = '#BAE1FF';
// export const HexCodePastelBlue: Color = '#BAE1FF';
// export const HexCodePastelBlue: Color = '#BAE1FF';


// interface Color {
//     name: string;
// }
interface Dictionary<T> {
    [key: string]: T;
}
type ColorDict = Dictionary<Color>

export interface ColorPalette {
    name: Color,
    first: Color,
    second: Color,
    third: Color,
    suppl1?: Color,
    suppl2?: Color,
}

export const COLORS: ColorDict = {
    'HexCodeBlack': HexCodeBlack,
    'HexCodeWhite': HexCodeWhite,
    'HexCodeSapphire': HexCodeSapphire,
    'HexCodeSandyBrown': HexCodeSandyBrown,
    'HexCodeAshGrey': HexCodeAshGrey,
    'HexCodeSageGreen': HexCodeSageGreen,
    'HexCodeLavenderGrey': HexCodeLavenderGrey,
    'HexCodeJungleGreen': HexCodeJungleGreen,
    'HexCodeMintLeaf': HexCodeMintLeaf,
    'HexCodeDustyMauve': HexCodeDustyMauve,
    'HexCodeAmberGlow': HexCodeAmberGlow,
    'HexCodeBrightFern': HexCodeBrightFern,
    'HexCodePastelRed': HexCodePastelRed,
    'HexCodePastelOrange': HexCodePastelOrange,
    'HexCodePastelJaune': HexCodePastelJaune,
    'HexCodePastelGreen': HexCodePastelGreen,
    'HexCodePastelBlue': HexCodePastelBlue,
    'HexCodePinkMist': HexCodePinkMist,
    'HexCodeDarkTeal': HexCodeDarkTeal,
};

export const firstPalette: ColorPalette = {name: "sapphire-sandy-sage", first: HexCodeSapphire, second: HexCodeSandyBrown, third: HexCodeSageGreen, suppl1: HexCodeAshGrey};
export const pastelPalette: ColorPalette = {name: "pastel", first: HexCodePastelOrange, second: HexCodePastelGreen, third: HexCodePastelBlue, suppl1: HexCodePinkMist, suppl2: HexCodeDarkTeal};
export const darkPalette: ColorPalette = {name: "sapphire-sandy-jungle", first: HexCodeSapphire, second: HexCodeSandyBrown, third: HexCodeJungleGreen, suppl1: HexCodeLavenderGrey,};
export const contrastPalette: ColorPalette = {name: "sapphire-mint-mauve", first: HexCodeSapphire, second: HexCodeMintLeaf, third: HexCodeDustyMauve};
export const brightContrastPalette: ColorPalette = {name: "sapphire-amber-fern", first: HexCodeSapphire, second: HexCodeAmberGlow, third: HexCodeBrightFern};

export const colorPalettes: ColorPalette[] = [
    firstPalette,
    pastelPalette,
    darkPalette,
    contrastPalette,
    brightContrastPalette,
]