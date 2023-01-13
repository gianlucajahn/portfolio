import sampleStore from "../utils/samples/sampleStore";

const reducer = (state = sampleStore, action: any) => {
  switch (action.type) {
    case "language/SET":
      let returnedState: any;
      state.language === "english"
        ? (returnedState = { ...state, language: "german" })
        : (returnedState = { ...state, language: "english" });
      return returnedState;
    case "language/INIT":
      const loadedLang = {
        ...state,
        language: action.payload,
      };
      return loadedLang;
    case "darkmode/TOGGLE":
      const toggledDarkmode = {
        ...state,
        darkmode: !state.darkmode,
      };
      return toggledDarkmode;
    case "darkmode/INIT":
      const loadedDarkmode = {
        ...state,
        darkmode: action.payload,
      };
      return loadedDarkmode;
    case "sounds/TOGGLE":
      const toggledSounds = {
        ...state,
        sounds: !state.sounds,
      };
      return toggledSounds;
    default:
      return state;
  }
};

export default reducer;
