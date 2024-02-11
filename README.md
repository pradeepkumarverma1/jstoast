# jstoast - Toast Notification

This is a simple Toast Notification Written in Javascipt

## Live Preview
https://pradeepkumarverma1.github.io/jstoast/

## Screenshot
![Screenshot (570)](https://github.com/pradeepkumarverma1/jstoast/assets/132253060/185be20e-1165-49d5-8932-d1dcf2701749)


## How to use?

Use the following CDN link to use this Toast Notification

```bash
https://cdn.jsdelivr.net/gh/pradeepkumarverma1/jstoast@v1.0.0/toast.min.js
```
Always use the Latest Version

Current version is 1.0.0

Here's how to link and use within your project:

```html
<html>
    <head>
        <title>Toast Notification</title>
    </head>
    <body>

        <script src="https://cdn.jsdelivr.net/gh/pradeepkumarverma1/jstoast@v1.0.0/toast.min.js"></script>
        <script>
            const btn = document.getElementById('showToast');

            function showJsToast() {
                jsToast({
                    message: 'Data saved successfully'
                })
            }

            btn.addEventListener('click', showJsToast);
        </script>
    </body>
    </html>
```
