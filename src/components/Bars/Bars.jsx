/* eslint-disable react/prop-types */

const Bars = ({item}) => {
    const {text, style, heading, textStyle}= item
    return (
        <div className="container">
            <div className={`cursor-pointer flex flex-col items-center ${style}`}>
                <p className={`font-semibold ${textStyle}`}>{text}</p>
                <h1 className={`text-4xl font-bold p-4`}>{heading}</h1>
            </div>
        </div>
    );
};

export default Bars;