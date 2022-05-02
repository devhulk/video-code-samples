main :: IO ()

main = do
    putStrLn "Will you subscribe to the devhulk Youtube Channel? (Yes or No)"
    answer <- getLine
    if answer == "Yes"
        then putStrLn ("\nThank you so much!")
    else putStrLn ("\n:(")

