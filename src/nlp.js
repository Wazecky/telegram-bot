const responses = {
    greetings: [
      "Hey, how's it going?",
      "Hi, What's good with you?",
      "Hello to you too.",
      "Hey, glad to see you again!",
      "Hi, how can I help you?"
    ],
  };
  
  const firstValue = (obj, key) => {
    const val =
      obj &&
      obj[key] &&
      Array.isArray(obj[key]) &&
      obj[key].length > 0 &&
      obj[key][0].value;
    if (!val) {
      return null;
    }
    return val;
  };
  
  var nlp = {
    handleMessage: async (entities, traits) => {
      console.log({ entities, traits });
      const greetings = firstValue(traits, "wit$greetings");
      if (greetings) {
        const greet = responses["greetings"];
        console.log(greet[Math.floor(Math.random() * greet.length)]);
        return greet[Math.floor(Math.random() * greet.length)];
      } else {
        return "To get our services, please reply with /menu";
      }
    }



    };




  
  
  module.exports = nlp;