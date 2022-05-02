package main

import "fmt"

func main() {
	var input string

	fmt.Print("Will you subscribe to the devhulk YouTube channel? (Yes or No) \n")
	fmt.Scan(&input)
	if input == "Yes" {
		fmt.Println("Thank you!")
	} else {
		fmt.Println(":(")
	}
}
