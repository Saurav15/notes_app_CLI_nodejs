## notes_cli_app

#### With this app you can add,remove,list and read your notes using CLI.
#### The notes that you make will be stored in the JSON file.
  
    
      
       
## How to run this on your machine ?
Step1 - Download this repo to your local storage or clone it.  
Step2 - Then open the app.js file in VS code.  
Step3 - open the terminal and write: 
```
npm install
```
This will install all the dependencies.  
  
    
### To add note   
```
node .\app.js add --title="xyz" --body="sdsd"
```
  
    
      
### To remove note
```
node .\app.js remove --title="xyz"
```


### To list all notes
```
node .\app.js list
```

### To read a particular node
```
node .\app.js read --title="xyz"
```




![image](https://user-images.githubusercontent.com/50983011/113437303-06cfe500-9404-11eb-8dad-6b9b6d8f6344.png)
