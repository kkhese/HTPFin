# *Beta Version*![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/TitleLogo.png?raw=true)
![enter image description here](https://github.com/kkhese/HTPfin/blob/master/assets/Main.jpg?raw=true)
HTP: House, Tree, Person

## Version Information

This application is Beta Version which includes only diagnostic descriptions to help therapists interpret client's drawings:  this psychoanalysis application is for reference only and may need different interpretations depending on the client's disposition or environment.
- App does not support to save client information.
- App does not generate diagnosis reports.
- Basic background knowledge of HTP is required to fully utilize this application. 
- Built-in tutorial exists in the application explaining briefly how to use this application.
- Language: English Only

## Table of Contents

- [Motivation](#motivation)
- [Configuration Instructions](#configuration-instructions)
    - [System and Software Requirement](#system-and-software-requirement)
    - [Composer](#composer)
- [How to Run](#how-to-run)
- [How to Use](#how-to-use)

# Motivation

## Purpose 
HTP(House, Tree, Person) test is non-verbal psychological test which is part of art therapy. It allows in-depth psychological diagnosis since the therapist is able to see client's unconscious world beyond language expression through the picture of his or her house, tree, and person drawings. Because each part of the drawing abstractly depicts the human unconscious, examining and interpreting every part of drawings requires high-level skill and a lot of experience. The HTP-related contents are vast and unsystematic, so counselors cannot easily learn and use them. This app has been developed so that the counselor can easily see the necessary information by dividing the essential HTP related contents into three main categories. 

## Data structure
The contents of art therapy book [1] were summarized with my own expression.
- Main categories: House, Tree, Person
- Sub-categories: six for each main category
	- House	: Chimney, Roof, Stair/Path, Door, Window, Wall
	- Tree		: Title, Crown, Leaf, Branch, Trunk, Roof
	- Person	: Head, Mouth/Nose/Eye, Arm, Face/Neck, ETC, Leg
- Each sub-category has from 2 to 4 detailed categories.
- The details for Diagnosis aid will be displayed once detailed category is selected.

The below is data structure diagram. This diagram was more clearly depicted and explained at [How to Use](#how-to-use) section later.
![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/DataStructure.png?raw=true)

## Intended users
 If users need to use this application for practical HTP diagnosis, it is highly recommended to go through the tutorial at the home screen. Otherwise user can simply navigate the contents of application for obtaining required information about HTP diagnosis.
 - Professionals: Psychoanalyst, Art therapist, 
 - Amateur: Counselor or student learning HTP
 - Third-party: general public with a strong interest in HTP test

# How to Run

## System and Software Requirement
 - The application fully operates only at Android device: Version 10.0 or higher version is highly recommended.
 - The application might work on iOS, but not guaranteed.
 - The application works at the web, but the screen composition is not good for wide screen.
 - It is necessary to run at EXPO. See next section for learning how to run this application

## Ready to Run Guide
This beta version has no extraction file for installation. You should import gitHub files at EXPO and run with QR code .
1. Go to expo homepage https://expo.dev/, and sign up.
2. Log-in to expo.
3. Click 'Snacks' and then '+New Snack' button. See below image![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/HowtoUse1.png?raw=true)
4. New snack will be created with random name and default files
5. Follow the below image instruction to import files for the application. Type in https://github.com/kkhese/HTPFin.git into Git URL textbox.![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/HowtoUse2.png?raw=true)
6. After the files are imported, you should update several times, and add several dependencies. Even after updating and adding everything, there is still module error for gesture handler. This problem can be solved by switching expo version from v42.0.0 to v43.0.0. Follow below image instruction.![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/HowtoUse3.png?raw=true)
7. Now you can see QR code on the right side of your screen as blow image. To launch the application at your mobile phone, you should download Expo Go at Android play store. After the download, if you install and run Expo Go, you can scan QR code. Then, you will see the home screen for HTP diagnosis Aid application.![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/HowtoUse4.png?raw=true)
8. Now, All setups are ready to use the application.

# How to Use

These is a built-in tutorial for user. If you click 'HOW TO USE -|- APP TUTORIAL' button on the top of main page. The application will navigate to tutorial page. This is click-and-destroy tutorial having seven stages. Stages are displayed at the middle of window. If you click the stage, clicked stage will be disappeared and go to the next stage. You can skip the stage but cannot go back one stage back. You can only reset the tutorial stage by clicking 'RESET TUTORIAL' button at the bottom of screen. If you click the last stage, it will show congratulations! page. The details about features and functions were explained at next section,  [Feature List](#feature-list) .
![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/HowtoUse5.png?raw=true)

# Application Features

## List of Files

- The diagnosis interpretations for the house pictures are in the house folder, the interpretations for the tree pictures are in the tree folder, and the interpretation for the person pictures are in the person folder.

```
- App.js ---------> Top file for the application showing all navigation pages
- README.md ------> This is the file users should read for installing and using
-------------------------------------------------------------------------------
- assets ---------> Image folder for image files used in the applicatoin
- ./House --------> Folder for Hand-drawn images of House category
- ./Peron --------> Folder for Hand-drawn images of Person category
- ./Tree  --------> Folder for Hand-drawn images of Tree category
-------------------------------------------------------------------------------
- Components -----> Folder for all the sub-files for this application
- -HomeScreen.js -> The file for main home screen
- -House.js ------> Main Category(House) file
- -Items.js ------> Item manage file for toDolist used in Tutorial.js <= From CS 855 lecture
- -Person.js -----> Main Category(Pers애ㅐㄱon) file
- -Tree.js -------> Main Category(Tree) file
- -Tutorial.js ---> The file for tutorial of this app
- ./House --------> Folder for 6 files composing House sub-categories and their details
- -- {Chimney.js, 	Door.js, 	Roof.js, 	Stair.js, 	Wall.js, 	Window.js}
- ./Person -------> Folder for 6 files composing Person sub-categories and their details
- -- {Arm.js, 		EENM.js, 	ETC.js, 	Face.js, 	Head.js, 	Leg.js}
- ./Tree ---------> Folder for 6 files composing Tree sub-categories and their details
- -- {Branch.js,	Crown.js,	Leaf.js, 	Root.js, 	Title.js	Trunk.js}
--------------------------------------------------------------------------------
- Images ---------> Images for README.md file
```

## File Map
Since the main function of this application is to navigate along the information tree, it is easier for users to understand the file information in the form of a map than in the form of a list. A detailed description of the HTP diagnostics is contained within .js files in the lowest level structure.
![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/FileMap.png?raw=true)


## Feature List

1. Main Page: You can access to the main category (Tree) page or Tutorial.


-   Concise project description
-   Features list
-   Links to further reading
-   Change log

# Copyright Information
There is no copyright for anything.

## Copy Left
This app is fee to copy, edit or distribute.

## Reference

* [1] 신동열, 한상희, *상담심리치료장면에서 쓴 미술심리치료: 이론과 실제.* 양서원, 2016.
Dongyul Shin, Sanghui Han, *Art Therapy: Theory and Application*, Yangseowon, 2016.

## A link for downloaded Images
Illustration images that were not hand-drawn were downloaded here. They are free to use for any purpose.
* [Pixabay](https://www.pixabay.com/)

# Acknowledgement

* Special thanks to counselor 김승현(Seung-Hyun Kim), who helped me a lot in structuring the vast amount of data of HTP test and analysis.
* I am grateful to Dr. Trevor who flogged me to finally make this application as a beta version.
