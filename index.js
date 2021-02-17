function main() {
  console.log ("Hello world");
  console.log ("Let's see this how this will be integrated");
  const value = true;
  if (value && 1) {
    console.log("Lets try this");
  }

  if (value && 1) {
    console.log("Lets try this");

    if (!value) {
      console.log("Lets try this");
    }
    else if (value) {
      console.log("Lets try this");
      
      if (value && 1) {
        console.log("Lets try this");

        if (!value) {
          console.log("Lets try this");
        }
        else if (value) {
          console.log("Lets try this");
        }

      }
    }

  }
  else if (value) {
    console.log("Complexity 1");
  }
}

main()
