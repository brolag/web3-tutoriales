const connect= async () => {
    try {
      
      const { ethereum } = window;

      if (!ethereum) {
        return {
          error : "Install Metamask"
        };
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      return {
          address: accounts[0]
      }
    } catch (error) {
      return {
        error: error
      };
    }
  };

  export default connect; 