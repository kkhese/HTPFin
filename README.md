# *Beta Version*![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/TitleLogo.png?raw=true)
![enter image description here](https://github.com/kkhese/HTPfin/blob/master/assets/Main.jpg?raw=true)
HTP: House, Tree, Person

## Version Information

This app is Beta Version which includes only short description to help therapists interpret client's drawings:  Please note that this psychoanalysis app is for reference only and may have different interpretations depending on the client's disposition or environment.
- App does not support to save client information.
- App does not generate diagnosis reports.
- Basic background knowledge of HTP is required to fully utilize this application. 
- Built-in tutorial exists in the application explaining briefly how to use this application.

## Table of Contents
- [Configuration Instruction](#configuration-instructions)
    - [TER](#typo3-extension-repository)
    - [Composer](#composer)
- [How to Run](#how-to-run)
- [How to Use](#how-to-use)
- 
## Configuration Instructions
### System/Software Requirement 
 - The application fully operates only at Android device: Version 10.0 or higher version is highly recommended.
 - The application might work on iOS, but not guaranteed.
 - The application works at the web, but the screen composition is not good for wide screen.
 - It is necessary to run at EXPO. 
 ### Intended users
 If users need to use this application for practical HTP diagnosis, it is highly recommended to go through the tutorial at the home screen. Otherwise user can simply navigate the contents of application for obtaining required information about HTP diagnosis.
 - Professionals: Psychoanalyst, Art therapist, 
 - Amateur: Counselor or student learning HTP
 - Third-party: general public with a strong interest in HTP test


## How to Run

This beta version has no extraction file for installation. You should import gitHub files at EXPO and run with QR code .
1. Go to expo homepage https://expo.dev/, and sign up.
2. Log-in to expo.
3. Click 'Snacks' and then '+New Snack' button. See below image![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/HowtoUse1.png?raw=true)
4. New snack will be created with random name and default files
5. Follow the below image instruction to import files for the application. Type in https://github.com/kkhese/HTPFin.git into Git URL textbox.![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/HowtoUse2.png?raw=true)
6. After the files are imported, you should update several times, and add several dependencies. Even after updating and adding everything, there is still module error for gesture handler. This problem can be solved by switching expo version from v42.0.0 to v43.0.0. Follow below image instruction.![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/HowtoUse3.png?raw=true)
7. Now you can see QR code on the right side of your screen as blow image. To launch the application at your mobile phone, you should download Expo Go at Android play store. After the download, if you install and run Expo Go, you can scan QR code. Then, you will see the home screen for HTP diagnosis Aid application.![enter image description here](https://github.com/kkhese/HTPFin/blob/master/Images/HowtoUse4.png?raw=true)
8. Now, All setups are ready to use the application.

## List of Files

- The interpretations for the house pictures are in the house folder, the interpretations for the tree pictures are in the tree folder, and the interpretation for the person pictures are in the person folder.

```
- App.js ---------> Top file for the application showing all navigation pages
- README.md ------> This is the file users should read for installing and using

- assets ---------> Image folder for image files used in the applicatoin
- ./House --------> Folder for Handdrawn images of House category
- ./Peron --------> Folder for Handdrawn images of Person category
- ./Tree  --------> Folder for Handdrawn images of Tree category

- Components -----> Folder for all the sub-files for this application
- -HomeScreen.js -> HomeScreen file
- -House.js ------> Main Category(House) file
- -Items.js ------> TodoItem item manage file used for Tutorial.js
- -Person.js -----> Main Category(Person) file
- -Tree.js -------> Main Category(Tree) file
- -Tutorial.js ---> The file for tutorial of this app
- ./House --------> Folder for 6 files composing House sub-categories and their details
- ./Person -------> Folder for 6 files composing Person sub-categories and their details
- ./Tree ---------> Folder for 6 files composing Tree sub-categories and their details

- Images ---------> Images for README.md file
```
## How to Use

App is purely for navigating HTP diagnosis rules for 

## Feature List

-   Operating instructions

-   Copyright information
-   Contact information
-   Bug list
-   Troubleshooting tips
-   Credits and acknowledgments


-   Project badges

-   Concise project description

-   Features list
-   Links to further reading
-   Change log



You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|



## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D


```

<a href="https://aimeos.org/">
    <img src="https://aimeos.org/fileadmin/template/icons/logo.png" alt="Aimeos logo" title="Aimeos" align="right" height="60" />
</a>

# Aimeos TYPO3 extension

[![Total Downloads](https://poser.pugx.org/aimeos/aimeos-typo3/d/total.svg)](https://packagist.org/packages/aimeos/aimeos-typo3)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/aimeos/aimeos-typo3/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/aimeos/aimeos-typo3/?branch=master)
[![License](https://poser.pugx.org/aimeos/aimeos-typo3/license.svg)](https://packagist.org/packages/aimeos/aimeos-typo3)

:star: Star us on GitHub — it motivates us a lot!

[Aimeos](https://aimeos.org/TYPO3) is THE professional, full-featured and
high performance e-commerce extension for TYPO3!  You can install it in your
existing TYPO3 web site within 5 minutes and can adapt, extend, overwrite
and customize anything to your needs.

[![Aimeos TYPO3 demo](https://aimeos.org/fileadmin/user_upload/typo3-demo.jpg)](http://typo3.demo.aimeos.org/)

## Table of content

- [Installation](#installation)
    - [TER](#typo3-extension-repository)
    - [Composer](#composer)
- [TYPO3 setup](#typo3-setup)
    - [Extension](#extension)
    - [Database](#database)
- [Page setup](#page-setup)
    - [Upload the page tree file](#upload-the-page-tree-file)
    - [Go to the import view](#go-to-the-import-view)
    - [Import the page tree](#import-the-page-tree)
    - [SEO-friendly URLs](#seo-friendly-urls)
- [License](#license)
- [Links](#links)

## Installation

This document is for the latest Aimeos TYPO3 **21.10 release and later**.

- LTS release: 21.10 (TYPO3 10/11 LTS)

### Composer

**Note:** composer 2.1+ is required!

The latest version can be installed via composer too. This is especially useful if you want to create new TYPO3 installations automatically or play with the latest code. You need to install the composer package first if it isn't already available:

`php -r "readfile('https://getcomposer.org/installer');" | php -- --filename=composer`

In order to tell install TYPO3, you have to execute

`composer create-project typo3/cms-base-distribution myshop`

This will install TYPO3 into the `./myshop/` directory.

Then, change to the `./mshop/` directory and install the Aimeos extension for TYPO3 with:

`composer req aimeos/aimeos-typo3:~21.10`

This will install stable TYPO3 version and the latest Aimeos TYPO3 extension. If you want a more or less working installation out of the box for new installations, you should install the Bootstrap package too:

`composer req bk2k/bootstrap-package`

### TER extension

If you want to install Aimeos into your existing TYPO3 installation, the [Aimeos extension from the TER](https://typo3.org/extensions/repository/view/aimeos) is recommended. You can download and install it directly from the Extension Manager of your TYPO3 instance.

For new TYPO3 installations, there's a 1-click [Aimeos distribution](https://typo3.org/extensions/repository/view/aimeos_dist) available too. Choose the Aimeos distribution from the list of available distributions in the Extension Manager and you will get a completely set up shop system including demo data for a quick start.

## TYPO3 setup

Setup TYPO3 as normal by creating a `FIRST_INSTALL` file in the `./public` directory:

```bash
touch public/FIRST_INSTALL
```

Open the URL of your installation in the browser and follow the steps in the TYPO3 setup scripts.

### Database setup

If you use MySQL < 5.7.8, you have to use `utf8` and `utf8_unicode_ci` instead because those MySQL versions can't handle the long indexes created by `utf8mb4` (up to four bytes per character) and you will get errors like

```
1071 Specified key was too long; max key length is 767 bytes
```

To avoid that, change your database settings in your `./typo3conf/LocalConfiguration.php` to:

```
'DB' => [
    'Connections' => [
        'Default' => [
            'tableoptions' => [
                'charset' => 'utf8',
                'collate' => 'utf8_unicode_ci',
            ],
            // ...
        ],
    ],
],
```

### Security

Since **TYPO3 9.5.14+** implements **SameSite cookie handling** and restricts when browsers send cookies to your site. This is a problem when customers are redirected from external payment provider domain. Then, there's no session available on the confirmation page. To circumvent that problem, you need to set the configuration option `cookieSameSite` to `none` in your `./typo3conf/LocalConfiguration.php`:

```
    'FE' => [
        'cookieSameSite' => 'none'
    ]
```

### Composer

#### TYPO3 11

When using TYPO3 11, you have to run these commands from your installation directory:

```bash
php ./vendor/bin/typo3 extension:setup
php ./vendor/bin/typo3 aimeos:setup --option=setup/default/demo:1
```

If you don't want to add the Aimeos demo data, you should remove `--option=setup/default/demo:1` from the Aimeos setup command.

#### TYPO3 10

For TYPO3 10, these commands are required:

```bash
php ./vendor/bin/typo3 extension:activate scheduler
php ./vendor/bin/typo3 extension:activate aimeos
```

### TER Extension

* Log into the TYPO3 back end
* Click on ''Admin Tools::Extension Manager'' in the left navigation
* Click the icon with the little plus sign left from the Aimeos list entry (looks like a lego brick)

![Install Aimeos TYPO3 extension](https://aimeos.org/docs/images/Aimeos-typo3-extmngr-install.png)

Afterwards, you have to execute the update script of the extension to create the required database structure:

![Execute update script](https://aimeos.org/docs/images/Aimeos-typo3-extmngr-update-7.x.png)

## Site setup

TYPO3 10+ requires a site configuration which you have to add in "Site Management" > "Sites" available in the left navigation.

## Page setup

The page setup for an Aimeos web shop is easy if you import the example page tree for TYPO3 10/11:

* [21.10+ page tree](https://aimeos.org/fileadmin/download/Aimeos-pages_21.10.t3d) only

**Note:** The Aimeos layout expects [Bootstrap](https://getbootstrap.com) providing the grid layout!

### Go to the import view

* In Web::Page, root page (the one with the globe)
* Right click on the globe
* Move the cursor to "Branch actions"
* In the sub-menu, click on "Import from .t3d"

![Go to the import view](https://aimeos.org/docs/images/Aimeos-typo3-pages-menu.png)

### Upload the page tree file

* In the page import dialog
* Select the "Upload" tab (2nd one)
* Click on the "Select" dialog
* Choose the file you've downloaded
* Press the "Upload files" button

![Upload the page tree file](https://aimeos.org/docs/images/Aimeos-typo3-pages-upload.png)

### Import the page tree

* In Import / Export view
* Select the uploaded file from the drop-down menu
* Click on the "Preview" button
* The pages that will be imported are shown below
* Click on the "Import" button that has appeared
* Confirm to import the pages

![Import the uploaded page tree file](https://aimeos.org/docs/images/Aimeos-typo3-pages-import.png)

Now you have a new page "Shop" in your page tree including all required sub-pages.

### SEO-friendly URLs

TYPO3 9.5 and later can create SEO friendly URLs if you add the rules to the site config:
[https://aimeos.org/docs/latest/typo3/setup/#seo-urls](https://aimeos.org/docs/latest/typo3/setup/#seo-urls)

## License

The Aimeos TYPO3 extension is licensed under the terms of the GPL Open Source
license and is available for free.

## Links

* [Web site](https://aimeos.org/integrations/typo3-shop-extension/)
* [Documentation](https://aimeos.org/docs/TYPO3)
* [Forum](https://aimeos.org/help/typo3-extension-f16/)
* [Issue tracker](https://github.com/aimeos/aimeos-typo3/issues)
* [Source code](https://github.com/aimeos/aimeos-typo3)
