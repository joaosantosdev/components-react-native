
# COMPONENTS REACT NATIVE
#### Developer <br>
@jovemdeveloper<br>
@joaosantos.dev

##### GIT: https://github.com/joaosantosdev/components-react-native
### Recommendation <br>
We recommend that you create other components, create your own rules and use our components to help
```
import {Button} from "components-react-native";

export const MyButton = props =>{
    return (<Button {...props}/>)
}
```
### Components
- Button <br>
   bg<br>
   size<br>
   type<br>
   color <br>
   onPress <br>
   title <br>
   style <br>
   styleText<br>

### Button
##### Create
```
import {Button} from "components-react-native";

<Button title='Click'/> or <Button>Click</Button>
```
##### Props - type<br>
<img width='200px' src="https://user-images.githubusercontent.com/46445331/72982532-12fef200-3dbe-11ea-9d02-169a98931368.jpeg"/>

```
<Button title='Click' bg='block'/>
<Button title='Click' bg='block-round'/>
<Button title='Click' bg='outline'/>
<Button title='Click' bg='outline-round'/>
```
##### Props - bg<br>
<img width='200px' src="https://user-images.githubusercontent.com/46445331/72982569-214d0e00-3dbe-11ea-92d8-749ccd8aa0cc.jpeg"/>

```
<Button bg='primary'/> or <Button bg='#fff'/>

```

##### Props - size<br>
<img width='200px' src="https://user-images.githubusercontent.com/46445331/72982517-04b0d600-3dbe-11ea-9563-62766d9ca94a.jpeg"/>

```
<Button size='lg'/>
<Button size='md'/>
<Button size='sm'/>
```

##### Props - color<br>
<img width='200px' src="https://user-images.githubusercontent.com/46445331/72982631-43469080-3dbe-11ea-8104-d9c91c1d0b31.jpeg"/>

```
<Button color='red'/>
<Button color='#000'/>
<Button color='primary'/>

```

##### Props - radius<br>
<img width='200px' src="https://user-images.githubusercontent.com/46445331/72982596-2f029380-3dbe-11ea-907a-c1eb8bcb2389.jpeg"/>

```
<Button radius={10}/>

```

##### Props - style & styleText<br>
```
<Button style={{width:200}}/>

<Button styleText={{fontSize:13}}/>
```

### Resource
##### colors
```
import {colors} from "components-react-native/resource";

<Button bg={colors.info}/>
```
