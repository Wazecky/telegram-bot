
const responses = {
    pricing_queries: [
        "Our prices are the most affordable in the Country",
        "We sell products at relatively low prices",
        "The costs are affordable by many",
        "For more information on costs, please login to your account an copnfirm the new prices",
        "The costs are cheap!"
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
  
  var nlp1 = {
    handleMessage: async (entities, traits) => {
      console.log({ entities, traits });
      const pricing_queries = firstValue(traits, "wit$pricing_queries");
      if (pricing_queries) {
        const pricing = responses["pricing_queries"];
        console.log(pricing[Math.floor(Math.random() * pricing.length)]);
        return pricing[Math.floor(Math.random() * pricing.length)];
      } else {
        return "I am non-human assistant at Modernman Shopping Mall, I'm here to help you, Please reply with /menu to get the list of what I offer";
      }
    }

  };


  module.exports = {nlp1}

  
  
  



















