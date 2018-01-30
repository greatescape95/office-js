/* Version: 16.0.9010.1000 */
/*
	Copyright (c) Microsoft Corporation.  All rights reserved.
*/

/*
	Your use of this file is governed by the Microsoft Services Agreement http://go.microsoft.com/fwlink/?LinkId=266419.
*/

if (!Office) {
    var Office = new function () {
        this._appContext = 127; // All hosts; see _officeintellisense.js in VS, with binary 1111111
        this._showAll = true;
        this._setContext = {};
    }
}

Office._ExcelMask = 0x1;
Office._WordMask = 0x2;
Office._ProjectMask = 0x4;
Office._OutlookMask = 0x8;
Office._PowerPointMask = 0x10;
Office._OutlookComposeMask = 0x20;
Office._AccessWebAppMask = 0x40;

{
    Office._extractedCallback = function (originalArgs, totalArgsCount, optionalArgsCount) {
        var optionalArgs = Array.prototype.slice.call(originalArgs, totalArgsCount - optionalArgsCount);
        var callback = function(){};
        for (var i = Math.min(optionalArgs.length, optionalArgsCount) - 1; i >= 0; i--) {
            if (typeof optionalArgs[i] == "function") {
                callback = optionalArgs[i];
                break;
            }
        }
        return callback;
    }

    Office._BindingDataChangedEvents = function (eventType) {
        this.binding = new Office._Binding(bindingType);
        this.type = eventType;
        this.startColumn = {};
        this.startRow = {};
    }

    Office._DocumentEventArgs = function (eventType) {
        Office._processContents(this, {
            type: {
                annotate: {
                    /// <field type="Office.EventType"></field>
                    type: undefined
                },
                value: eventType
            }
        });
        if (eventType == "activeViewChanged") {
            Office._processItem(
                this,
                {
                    annotate: {
                        /// <field type="Office.ActiveView"></field>
                        activeView: undefined
                    }
                },
                "activeView"
            );
        }
    }

    Office._DialogEventArgs = function (eventType) {
        Office._processContents(this, {
            type: {
                annotate: {
                    /// <field type="Office.EventType"></field>
                    type: undefined
                },
                value: eventType
            }
        });
        if (eventType == "dialogMessageReceived") {
            Office._processItem(
                this,
                {
                    annotate: {
                        /// <field type="string"></field>
                        message: undefined
                    }
                },
                "message"
            );
        } else if (eventType == "dialogEventReceived") {
            Office._processItem(
                this,
                {
                    annotate: {
                        /// <field type="Integer"></field>
                        error: undefined
                    }
                },
                "error"
            );
        }
    }

    Office._CustomXmlNodeEvents = function (eventType) {
        this.type = eventType;
        this.inUndoRedo = {};

        if (eventType == 'nodeDeleted') {
            this.oldNode = new Office._CustomXmlNode();
            this.oldNextSibling = new Office._CustomXmlNode();
        }

        if (eventType == 'nodeInserted') {
            this.newNode = new Office._CustomXmlNode();


        }
        if (eventType == 'nodeReplaced') {
            this.oldNode = new Office._CustomXmlNode();
            this.newNode = new Office._CustomXmlNode();

        }
    }

    Office._Error = function () {
        this.id = {};
        this.message = {};
        this.name = {};
    }

    Office._CustomXmlNode = function () {
        this.baseName = {};
        this.namespaceUri = {};
        this.nodeType = {};

        this.getNodesAsync = function (xPath, callback) {
            ///<summary> Gets the nodes associated with the xPath expression.  </summary>
            ///<param name="xPath" type="string">The xPath expression</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getNodesAsync");
            callback(result);
        };
        this.getNodeValueAsync = function (callback) {
            ///<summary> Gets the node value.  </summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            var result = new Office._AsyncResult("getNodeValueAsync");
            callback(result);
        };
        this.getXmlAsync = function (callback) {
            ///<summary> Gets the node's XML.  </summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getXmlAsync");
            callback(result);
        };
        this.setNodeValueAsync = function (value, callback) {
            ///<summary> Sets the node value.  </summary>
            ///<param name="value" type="string">The value to be set on the node</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("setNodeValueAsync");
            callback(result);
        };
        this.setXmlAsync = function (xml, callback) {
            ///<summary> Sets the node XML.  </summary>
            ///<param name="xml" type="string">The XML to be set on the node</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("setXmlAsync");
            callback(result);
        };
    }

    Office._context_document_customXmlParts_customXmlPrefixMappings = function () {
        this.addNamespaceAsync = function (prefix, nsUri, callback) {
            ///<summary>Adds a namespace.  </summary>
            //////<param name="prefix" type="string">The namespace prefix</param>
            //////<param name="nsUri" type="string">The namespace URI</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            var result = new Office._AsyncResult("addNamespaceAsync");
            callback(result);
        };
        this.getNamespaceAsync = function (prefix, callback) {
            ///<summary> Gets a namespace  with the specified prefix </summary>
            ///<param name="prefix" type="string">The namespace prefix</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getNamespaceAsync");
            callback(result);
        };
        this.getPrefixAsync = function (nsUri, callback) {
            ///<summary> Gets a prefix  for  the specified URI </summary>
            ///<param name="nsUri" type="string">The namespace URI</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            var result = new Office._AsyncResult("getPrefixAsync");
            callback(result);
        };
    }

    Office._CustomXmlPart = function () {
        this.builtIn = {};
        this.id = {};
        this.namespaceManager = new Office._context_document_customXmlParts_customXmlPrefixMappings();

        this.deleteAsync = function (callback) {
            ///<summary> Deletes the Custom XML Part.  </summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("deleteAsync");
            callback(result);
        };
        this.getNodesAsync = function (xPath, callback) {
            ///<summary> Gets the nodes associated with the xPath expression.  </summary>
            ///<param name="xPath" type="string">The xPath expression</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            var result = new Office._AsyncResult("getNodesAsync");
            callback(result);
        };
        this.getXmlAsync = function (callback) {
            ///<summary> Gets the XML for the Custom XML Part.  </summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getXmlAsync");
            callback(result);
        };

        this.addHandlerAsync = function (eventType, handler, callback) {
            ///<summary> Adds an event handler to the object using the specified event type.  </summary>
            ///<param name="eventType" type="Office.EventType">The event type. For CustomXmlPartNode it can be 'nodeDeleted', 'nodeInserted' or 'nodeReplaced' </param>
            ///<param name="handler" type="function">The name of the handler </param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>


            var events = new Office._CustomXmlNodeEvents(eventType);
            handler(events);

            var result = new Office._AsyncResult("addHandlerAsync");
            callback(result);
        };

        this.removeHandlerAsync = function (eventType, options, callback) {
            ///<summary> Removes an event handler from the object using the specified event type.  </summary>
            ///<param name="eventType" type="Office.EventType">The event type. For CustomXmlPartNode it can be 'nodeDeleted', 'nodeInserted' or 'nodeReplaced' </param>
            ///<param name="options" type="Object" optional="true">
            ///    Syntax example: {handler:eventHandler}
            /// &#10;     handler: Indicates a specific handler to be removed, if not specified all handlers are removed
            /// &#10;     asyncContext: Object keeping state for the callback
            ///</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            ///
            Office._extractedCallback(arguments, 3, 2)(new Office._AsyncResult("removeHandlerAsync"));
        }
    }

    Office._Binding = function (bindingType) {
        ///<field type="String" name="id">Id of the Binding</field>};
        this.id = {};

        this.type = {};
        this.document = {};

        this.setDataAsync = function (data, options, callback) {
            ///<summary> Writes the specified data into the current selection.</summary>
            ///<param name="data" type="Object">The data to be set. Either a string or value, 2d array or TableData object</param>
            ///<param name="options" type="Object" optional="true">
            ///    Syntax example: {coercionType:Office.CoercionType.Matrix} or {coercionType: 'matrix'}
            /// &#10;     coercionType: Explicitly sets the shape of the data object. Use Office.CoercionType or text value. If not supplied is inferred from the data type.
            /// &#10;     startRow: Used in partial set for table/matrix. Indicates the start row.
            /// &#10;     startColumn: Used in partial set for table/matrix. Indicates the start column.

            /// &#10;     asyncContext: Object keeping state for the callback
            ///</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            Office._extractedCallback(arguments, 3, 2)(new Office._AsyncResult("setDataAsync"));
        };

        this.getDataAsync = function (options, callback) {
            ///<summary> Returns the current selection.</summary>
            ///<param name="options" type="Object" optional="true">
            ///    Syntax example: {coercionType: 'matrix,'valueFormat: 'formatted', filterType:'all'}
            /// &#10;     coercionType: The expected shape of the selection. If not specified returns the bindingType shape. Use Office.CoercionType or text value.
            /// &#10;     valueFormat: Get data with or without format. Use Office.ValueFormat or text value.
            /// &#10;     startRow: Used in partial get for table/matrix. Indicates the start row.
            /// &#10;     startColumn: Used in partial get for table/matrix. Indicates the start column.
            /// &#10;     rowCount: Used in partial get for table/matrix. Indicates the number of rows from the start row.
            /// &#10;     columnCount: Used in partial get for table/matrix. Indicates the number of columns from the start column.
            /// &#10;     filterType: Get the visible or all the data. Useful when filtering data. Use Office.FilterType or text value.
            /// &#10;     asyncContext: Object keeping state for the callback
            ///</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            if (arguments.length == 1) {
                callback = options;
            }
            var result = new Office._AsyncResult("getDataAsync", options.coercionType);
            callback(result);
        };

        this.addHandlerAsync = function (eventType, handler, callback) {
            ///<summary> Adds an event handler to the object using the specified event type.  </summary>
            ///<param name="eventType" type="Office.EventType">The event type. For binding it can be 'bindingDataChanged' and 'bindingSelectionChanged' </param>
            ///<param name="handler" type="function">The name of the handler </param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>


            var events = new Office._BindingDataChangedEvents(eventType);
            handler(events);

            var result = new Office._AsyncResult("addHandlerAsync");
            callback(result);
        };

        this.removeHandlerAsync = function (eventType, options, callback) {
            ///<summary> Removes an event handler from the object using the specified event type.  </summary>
            ///<param name="eventType" type="Office.EventType">The event type. For binding can be 'bindingDataChanged' and 'bindingSelectionChanged' </param>
            ///<param name="options" type="Object" optional="true">
            ///    Syntax example: {handler:eventHandler}
            /// &#10;     handler: Indicates a specific handler to be removed, if not specified all handlers are removed
            /// &#10;     asyncContext: Object keeping state for the callback
            ///</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>


            var events = new Office._BindingDataChangedEvents(eventType);
            handler(events);

            Office._extractedCallback(arguments, 3, 2)(new Office._AsyncResult("removeHandlerAsync"));
        };


        if ((bindingType == undefined) || (bindingType == Office.BindingType.Matrix) || (bindingType == Office.BindingType.Table)) {
            this.columnCount = {};
            this.rowCount = {};
        }
        if ((bindingType == undefined) || (bindingType == Office.BindingType.Table)) {
            Office._processContents(this, {
                hasHeaders: {
                    value: {}
                },
                addRowsAsync: {
                    value: function (data, callback) {
                        ///<summary> Adds the specified rows to the table  </summary>
                        ///<param name="data" type="Object"> A 2D array with the rows to add </param>

                        ///<param name="callback" type="function" optional="true">The optional callback method</param>
                    }
                },
                addColumnsAsync: {
                    value: function (tableData, callback) {
                        ///<summary> Adds the specified columns to the table  </summary>
                        ///<param name="tableData" type="Object"> A TableData object with the headers and rows </param>

                        ///<param name="callback" type="function" optional="true">The optional callback method</param>};
                    }
                },
                deleteAllDataValuesAsync: {
                    value: function (callback) {
                        ///<summary> Clears the table</summary>
                        ///<param name="callback" type="function" optional="true">The optional callback method</param>};
                    }
                },
                formattingSpecific: {
                    metaOnly: true,
                    conditions: {
                        hosts: ["excel"],
                    },
                    contents: {
                        clearFormatsAsync: {
                            conditions: {
                                reqs: ["method TableBinding.clearFormatsAsync"]
                            },
                            value: function (options, callback) {
                                ///<summary> Clears formatting on the bound table. </summary>
                                ///<param name="options" type="Object" optional="true">
                                ///    Syntax example: {asyncContext:context}
                                /// &#10;     asyncContext: Object keeping state for the callback
                                ///</param>
                                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                                Office._extractedCallback(arguments, 2, 2)(new Office._AsyncResult("clearFormatsAsync"));
                            }
                        },
                        getFormatsAsync: {
                            conditions: {
                                reqs: ["method TableBinding.getFormatsAsync"]
                            },
                            value: function (cellReference, formats, options, callback) {
                                ///<summary> Gets the formatting on specified items in the table. </summary>
                                ///<param name="cellReference" type="Object" optional="true">An object literal containing name-value pairs that specify the range of cells to get formatting from.</param>
                                ///<param name="formats" type="Array" optional="true">An array specifying the format properties to get.</param>
                                ///<param name="options" type="Object" optional="true">
                                ///    Syntax example: {asyncContext:context}
                                /// &#10;     asyncContext: Object keeping state for the callback
                                ///</param>
                                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                                Office._extractedCallback(arguments, 4, 4)(new Office._AsyncResult("getFormatsAsync"));
                            }
                        },
                        setFormatsAsync: {
                            conditions: {
                                reqs: ["method TableBinding.setFormatsAsync"]
                            },
                            value: function (formatsInfo, options, callback) {
                                ///<summary> Sets formatting on specified items and data in the table. </summary>
                                ///<param name="formatsInfo" type="Array" elementType="Array" optional="true">
                                ///    Array elements are themselves three-element arrays:
                                ///    [target, type, formats]
                                /// &#10;     target: The identifier of the item to format. String.
                                /// &#10;     type: The kind of item to format. String.
                                /// &#10;     formats: An object literal containing a list of property name-value pairs that define the formatting to apply.
                                ///</param>
                                ///<param name="options" type="Object" optional="true">
                                ///    Syntax example: {asyncContext:context}
                                /// &#10;     asyncContext: Object keeping state for the callback
                                ///</param>
                                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                                Office._extractedCallback(arguments, 3, 3)(new Office._AsyncResult("setFormatsAsync"));
                            }
                        },
                        setTableOptionsAsync: {
                            conditions: {
                                reqs: ["method TableBinding.setTableOptionsAsync"]
                            },
                            value: function (tableOptions, options, callback) {
                                ///<summary> Updates table formatting options on the bound table. </summary>
                                ///<param name="tableOptions" type="Object">An object literal containing a list of property name-value pairs that define the table options to apply.</param>
                                ///<param name="options" type="Object" optional="true">
                                ///    Syntax example: {asyncContext:context}
                                /// &#10;     asyncContext: Object keeping state for the callback
                                ///</param>
                                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                                Office._extractedCallback(arguments, 3, 2)(new Office._AsyncResult("setTableOptionsAsync"));
                            }
                        }
                    }
                }
            });
        }
    }

    Office._TableData = function () {
        this.headers = new Array(new Array());
        this.rows = new Array(new Array());
    }

    Office._File = function () {
        this.size = {};
        this.sliceCount = {};
        this.getSliceAsync = function (sliceIndex, callback) {
            ///<summary> Gets the specified slice. </summary>
            ///<param name="sliceIndex" type="Integer">The index of the slice to be retrieved </param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getSliceAsync");
            callback(result);
        };
        this.closeAsync = function (callback) {
            ///<summary> Closes the File. </summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
        };
    }

    Office._Slice = function () {
        this.data = {};
        this.index = {};
        this.size = {};
    }

    Office._Dialog = function () {
        this.data = {};
        this.close = function () {
            ///<summary> Allows the add-in to close its dialog box. </summary>
        };
        this.addEventHandler = function (eventType, handler) {
            ///<summary> Registers an event handler. </summary>
            ///<param name="eventType" type="Office.EventType"> The two supported events are: DialogMessageReceived or DialogEventReceived </param>
            ///<param name="handler" type="function" optional="true"> The name of the handler </param>
            handler(new Office._DialogEventArgs(eventType));
        };
    }

    Office._AsyncResult = function (method, bindingType) {
        this.asyncContext = {};
        this.error = new Office._Error();
        this.status = {};

        if ((method == "addfromSelectionAsync") || (method == "addFromNamedItemAsync") || (method == "getByIdAsync") || (method == "addFromPromptAsync")) {
            this.value = new Office._Binding(bindingType);
        } else if ((method == "getDataAsync") || (method == "getSelectedDataAsync")) {
            if (bindingType == "table")
                this.value = new Office._TableData();
            else if (bindingType == "matrix")
                this.value = new Array(new Array);
            else
                this.value = {};
        } else if (method == "getAllAsync") {
            this.value = new Array(new Office._Binding(bindingType));
        } else if (method == "getByNamespaceAsync") {
            this.value = new Array(new Office._CustomXmlPart());
        } else if (method == "getNodesAsync") {
            this.value = new Array(new Office._CustomXmlNode());
        } else if ((method == "XMLgetByIdAsync") || (method == "addAsync")) {
            this.value = new Office._CustomXmlPart();
        } else if (method == "refreshAsync") {
            this.value = new Office._context_document_settings();
        } else if (method == "getFileAsync") {
            this.value = new Office._File();
        } else if (method == "getSliceAsync") {
            this.value = new Office._Slice();
        } else if (method == "getActiveViewAsync") {
            Office._processItem(this,
                {
                    annotate: {
                        ///<field type="String">The presentation's current view.</field>
                        value: undefined
                    }
                },
                "value"
            );
        } else if (method == "getFilePropertiesAsync") {
            this.value = new Office._FileProperties();
        } else if (method == "displayDialogAsync") {
            this.value = new Office._Dialog();
        }else {
            this.value = {};
        }
    }

    Office._FileProperties = function () {
        ///<field type="String" name="url">File's URL</field>
        this.url = "";
    }

    Office._context_document_settings = function () {
        this.get = function (settingName) {
            ///<summary>Retrieves the setting with the specified name.</summary>
            ///<param name="settingName" type="string">The name of the setting </param>
        };

        this.remove = function (settingName) {
            ///<summary>Removes the setting with the specified name.</summary>
            ///<param name="settingName" type="string">The name of the setting </param>
            ///
        };

        this.saveAsync = function (options, callback) {
            ///<summary>Saves all settings.</summary>
            ///<param name="options" type="Object" optional="true">
            ///    Syntax example: {overwriteIfStale:false}
            /// &#10;     overwriteIfStale: Indicates whether the setting will be replaced if stale.
            /// &#10;     asyncContext: Object keeping state for the callback
            ///</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            ///
            Office._extractedCallback(arguments, 2, 2)(new Office._AsyncResult("saveAsync", coercionType));
        };

        this.set = function (settingName, value) {
            ///<summary>Sets a value for the setting with the specified name.</summary>
            ///<param name="settingName" type="string">The name of the setting</param>
            ///<param name="value" type="object">The value for the setting</param>
        };
    };

    Office._context_document_bindings = function () {
        this.document = {};

        if (Office._AccessWebAppMask & Office._appContext) {
            this.addFromSelectionAsync = function (bindingType, options, callback) {
                ///<summary>Create a binding based on what the user's current selection.</summary>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    addFromSelectionAsyncOptions- e.g. {id: "BindingID"}
                /// &#10;     id: Identifier.
                /// &#10;     asyncContext: Object keeping state for the callback
                /// &#10;     columns: The string[] of the columns involved in the binding
                /// &#10;     sampleData: A TableData that gives sample table in the Dialog.TableData.Headers is [][] of string.
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                if (arguments.length == 2) { callback = options; };
                var result = new Office._AsyncResult("addfromSelectionAsync", bindingType);
                callback(result);
            }
        } else {
            this.addFromSelectionAsync = function (bindingType, options, callback) {
                ///<summary>Create a binding based on what the user's current selection.</summary>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    addFromSelectionAsyncOptions- e.g. {id: "BindingID"}
                /// &#10;     id: Identifier.
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                if (arguments.length == 2) { callback = options; };
                var result = new Office._AsyncResult("addfromSelectionAsync", bindingType);
                callback(result);
            }
        }
        if (Office._AccessWebAppMask & Office._appContext) {
            this.addFromNamedItemAsync = function (itemName, bindingType, options, callback) {
                ///<summary>Creates a binding against a named object in the document</summary>
                ///<param name="itemName" type="String">Name of the bindable object in the document. For Example 'MyExpenses' table in Excel." </param>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {id: "BindingID"}
                /// &#10;     id: Name of the binding, autogenerated if not supplied. 
                /// &#10;     asyncContext: Object keeping state for the callback
                /// &#10;     columns: The string[] of the columns involved in the binding
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>

                if (arguments.length == 3) { callback = options; };
                var result = new Office._AsyncResult("addFromNamedItemAsync", bindingType);
                callback(result);
            }
        } else {
            this.addFromNamedItemAsync = function (itemName, bindingType, options, callback) {
                ///<summary>Creates a binding against a named object in the document</summary>
                ///<param name="itemName" type="String">Name of the bindable object in the document. For Example 'MyExpenses' table in Excel." </param>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {id: "BindingID"}
                /// &#10;     id: Name of the binding, autogenerated if not supplied. 
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>

                if (arguments.length == 3) { callback = options; };
                var result = new Office._AsyncResult("addFromNamedItemAsync", bindingType);
                callback(result);
            }
        }
        this.getByIdAsync = function (id, callback) {
            ///<summary>Retrieves a binding based on its Name</summary>
            ///<param name="id" type="String">The binding id</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            var result = new Office._AsyncResult("getByIdAsync")
            callback(result);
        }
        this.getAllAsync = function (callback) {
            ///<summary>Gets an array with all the binding objects in the document.</summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getAllAsync")
            callback(result);
        };

        this.releaseByIdAsync = function (id, callback) {
            ///<summary>Removes the binding from the document</summary>
            ///<param name="id" type="String">The binding id</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("releaseByIdAsync")
            callback(result);
        };


        if (Office._AccessWebAppMask & Office._appContext) {
            this.addFromPromptAsync = function (bindingType, options, callback) {
                ///<summary>(Access only with sample data) Create a binding by prompting the user to make a selection on the document.</summary>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    addFromPromptAsyncOptions- e.g. {promptText: "Please select data", id: "mySales"}
                /// &#10;     promptText: Greet your users with a friendly word.
                /// &#10;     asyncContext: Object keeping state for the callback
                /// &#10;     id: Identifier.
                /// &#10;     sampleData: A TableData that gives sample table in the Dialog.TableData.Headers is [][] of string.
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>

                if (arguments.length == 2) { callback = options; };
                var result = new Office._AsyncResult("addFromPromptAsync", bindingType)
                callback(result);
            }
        } else if (Office._ExcelMask & Office._appContext) {
            this.addFromPromptAsync = function (bindingType, options, callback) {
                ///<summary>(Excel only) Create a binding by prompting the user to make a selection on the document.</summary>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    addFromPromptAsyncOptions- e.g. {promptText: "Please select data", id: "mySales"}
                /// &#10;     promptText: Greet your users with a friendly word.
                /// &#10;     asyncContext: Object keeping state for the callback
                /// &#10;     id: Identifier.
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>

                if (arguments.length == 2) { callback = options; };
                var result = new Office._AsyncResult("addFromPromptAsync", bindingType)
                callback(result);


            }
        }

    };

    Office._context_ui = {
        displayDialogAsync: {
            value: function (startAddress, options, callback) {
                ///<summary> Displays a dialog box in an Office host. </summary>
                ///<param name="startAddress" type="string"> Accepts the initial HTTPS(TLS) URL that opens in the dialog box. </param>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {width:80} 
                /// &#10;     width: Defines the width of the dialog box as a percentage of the current display.
                /// &#10;     height: Defines the height of the dialog box as a percentage of the current display.
                /// &#10;     displayInIFrame: false (defult): The dialog will be displayed as a new browser window
                ///    &#10;                      true:  The dialog will be displayed as a floating overlay with an IFrame. 
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                ///
                if (arguments.length == 2) { callback = options; };
                var result = new Office._AsyncResult("displayDialogAsync");
                callback(result);
            }
        },
        closeContainer: {
            value: function () {
                ///<summary>
                /// Closes the UI container where the JavaScript is executing.
                /// <br />
                /// <br />
                /// Supported hosts:
                /// <br />
                /// * Outlook. Minimum requirement set: Mailbox 1.5
                /// <br />
                /// <br />
                /// The behavior of this method is specified as follows.  When called from:
                /// <br />
                /// * A UI-less command button: No effect. Any dialogs opened by displayDialogAsync will remain open.
                /// <br />
                /// * A taskpane: The taskpane will close. Any dialogs opened by displayDialogAsync will also close. If the taskpane supports pinning and was pinned by the user, it will be un-pinned.
                /// <br />
                /// * A module extension: No effect.
                /// </summary>
            }
        },
        messageParent: {
            value: function (messageObject) {
                ///<summary> Delivers a message from the dialog box to its parent/opener page. The page calling this API must be on the same domain as the parent.  </summary>
                ///<param name="messageObject" type="string"> Accepts a message from the dialog box to deliver to the add-in.</param>
            }
        }
    }

    Office._context_document = {
        mode: {
            annotate: {
                //Gets the document mode
                mode: undefined
            }
        },
        url: {
            annotate: {
                //Gets the document URL
                url: undefined
            }
        },
        addHandlerAsync: {
            value: function (eventType, handler, callback) {
                ///<summary> Adds an event handler for the specified event type. </summary>
                ///<param name="eventType" type="Office.EventType">The event type. For document can be 'DocumentSelectionChanged' </param>
                ///<param name="handler" type="function">The name of the handler </param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                var result = new Office._AsyncResult("addHandlerAsync");
                callback(result);
                handler(new Office._DocumentEventArgs(eventType));
            }
        },
        removeHandlerAsync: {
            value: function (eventType, handler, callback) {
                ///<summary> Removes an event handler for the specified event type. </summary>
                ///<param name="eventType" type="Office.EventType">The event type. For document can be 'DocumentSelectionChanged' </param>
                ///<param name="handler" type="function" optional="true">The name of the handler. If not specified all handlers are removed </param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                ///
                var result = new Office._AsyncResult("removeHandlerAsync", coercionType);
                callback(result);
            }
        },
        settings: {
            conditions: {
                hosts: ["word", "excel", "ppt", "accesswebapp"],
                reqs: [
                    "set Settings GE 1.1",
                    "method Settings.get",
                    "method Settings.remove",
                    "method Settings.saveAsync",
                    "method Settings.set"
                ]
            },
            value: new Office._context_document_settings()
        },
        refreshableSettings: {
            name: "settings",
            conditions: {
                hosts: ["excel", "ppt", "accesswebapp"],
                reqs: []
            },
            partialConditions: true,
            contents: {
                addHandlerAsync: {
                    conditions: { reqs: ["method Settings.addHandlerAsync"] },
                    value: function (eventType, handler, callback) {
                        ///<summary> Adds an event handler for the object using the specified event type. </summary>
                        ///<param name="eventType" type="Office.EventType">The event type. For settings can be 'settingsChanged' </param>
                        ///<param name="handler" type="function">The name of the handler </param>
                        ///<param name="callback" type="function" optional="true">The optional callback method</param>

                        var result = new Office._AsyncResult("addHandlerAsync", coercionType);
                        callback(result);

                    }
                },
                refreshAsync: {
                    conditions: { reqs: ["method Settings.refreshAsync"] },
                    value: function (callback) {
                        ///<summary>Gets the latest version of the settings object.</summary>
                        ///<param name="callback" type="function" optional="true">The optional callback method</param>
                        var result = new Office._AsyncResult("refreshAsync", coercionType);
                        callback(result);
                    }
                },
                removeHandlerAsync: {
                    conditions: { reqs: ["method Settings.removeHandlerAsync"] },
                    value: function (eventType, handler, callback) {
                        ///<summary> Removes an event handler for the specified event type. </summary>
                        ///<param name="eventType" type="Office.EventType">The event type. For settings can be 'settingsChanged' </param>
                        ///<param name="handler" type="Object" optional="true">
                        ///    Syntax example: {handler:eventHandler}
                        /// &#10;     handler: Indicates a specific handler to be removed, if not specified all handlers are removed
                        /// &#10;     asyncContext: Object keeping state for the callback
                        ///</param>
                        ///<param name="callback" type="function" optional="true">The optional callback method</param>
                        var result = new Office._AsyncResult("removeHandlerAsync", coercionType);
                        callback(result);
                    }
                }
            }
        },
        setSelectedDataAsync: {
            conditions: {
                hosts: ["word", "excel", "ppt"],
                reqs: ["set Selection GE 1.1", "method Document.setSelectedDataAsync"]
            },
            value: function (data, options, callback) {
                ///<summary> Writes the specified data into the current selection.</summary>
                ///<param name="data" type="Object">The data to be set. Either a string or value, 2d array or TableData object</param>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {coercionType:Office.CoercionType.Matrix} or {coercionType: 'matrix'}
                /// &#10;     coercionType: Explicitly sets the shape of the data object. Use Office.CoercionType or text value. If not supplied is inferred from the data type.
                /// &#10;     imageLeft: Used for image. Sets the left position of the image.
                /// &#10;     imageTop: Used for image. Sets the top position of the image.
                /// &#10;     imageWidth: Used for image. Sets the width of the image.
                /// &#10;     imageHeight: Used for image. Sets the height of the image.
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                ///
                if (arguments.length == 2) { callback = options; };
                var result = new Office._AsyncResult("setSelectedDataAsync");
                callback(result);
            }
        },
        bindings: {
            conditions: {
                hosts: ["word", "excel", "accesswebapp"],
                reqs: [
                    "set TextBindings GE 1.1",
                    "set TableBindings GE 1.1",
                    "set MatrixBindings GE 1.1",
                    "method Bindings.addFromPromptAsync",
                    "method Bindings.addFromNamedItemAsync",
                    "method Bindings.addFromSelectionAsync",
                    "method Bindings.getAllAsync",
                    "method Bindings.getByIdAsync",
                    "method Bindings.releaseByIdAsync",
                    "method MatrixBinding.getDataAsync",
                    "method MatrixBinding.setDataAsync",
                    "method TableBinding.clearFormatsAsync",
                    "method TableBinding.setFormatsAsync",
                    "method TableBinding.setTableOptionsAsync",
                    "method TableBinding.addColumnsAsync",
                    "method TableBinding.addRowsAsync",
                    "method TableBinding.deleteAllDataValuesAsync",
                    "method TableBinding.getDataAsync",
                    "method TableBinding.setDataAsync",
                    "method TextBinding.getDataAsync",
                    "method TextBinding.setDataAsync"
                ]
            },
            value: new Office._context_document_bindings()
        },
        getFileAsync: {
            conditions: {
                hosts: ["word", "ppt","excel"],
                reqs: ["set File GE 1.1", "method Document.getFileAsync", "method File.closeAsync", "method File.getSliceAsync"]
            },
            value: function (fileType, options, callback) {
                ///<summary>(Word and PowerPoint only) Gets the entire file in slices of up to 4MB.</summary>
                ///<param name="fileType" type="Office.FileType">The format in which the file will be returned</param>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {sliceSize:1024}
                /// &#10;     sliceSize: Specifies the desired slice size (in bytes) up to 4MB. If not specified a default slice size of 4MB will be used.
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                if (arguments.length == 2) { callback = options; };
                var result = new Office._AsyncResult("getFileAsync");
                callback(result);
            }
        },
        getSelectedDataAsync: {
            conditions: {
                hosts: ["excel", "word", "project", "ppt"],
                reqs: ["set Selection GE 1.1", "method Document.getSelectedDataAsync"]
            },
            value: function (coercionType, options, callback) {
                ///<summary> Returns the current selection.</summary>
                ///<param name="coercionType" type="Office.CoercionType">The expected shape of the selection.</param>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {valueFormat: 'formatted', filterType:'all'}
                /// &#10;     valueFormat: Get data with or without format. Use Office.ValueFormat or text value.
                /// &#10;     filterType: Get the visible or all the data. Useful when filtering data. Use Office.FilterType or text value.
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                ///
                if (arguments.length == 2) { callback = options; };
                var result = new Office._AsyncResult("getSelectedDataAsync", coercionType);
                callback(result);
            }
        },
        customXmlParts: {
            conditions: {
                hosts: ["word"],
                reqs: [
                    "set CustomXmlParts GE 1.1",
                    "method CustomXmlNode.getNodesAsync",
                    "method CustomXmlNode.getNodeValueAsync",
                    "method CustomXmlNode.getXmlAsync",
                    "method CustomXmlNode.setNodeValueAsync",
                    "method CustomXmlNode.setXmlAsync",
                    "method CustomXmlPart.addHandlerAsync",
                    "method CustomXmlPart.deleteAsync",
                    "method CustomXmlPart.getNodesAsync",
                    "method CustomXmlPart.getXmlAsync",
                    "method CustomXmlPart.removeHandlerAsync",
                    "method CustomXmlPrefixMappings.addNamespaceAsync",
                    "method CustomXmlPrefixMappings.getNamespaceAsync",
                    "method CustomXmlPrefixMappings.getPrefixAsync"
                ]
            },
            partialConditions: true,
            contents: {
                addAsync: {
                    conditions: {
                        reqs: ["method CustomXmlParts.addAsync"]
                    },
                    value: function (xml, callback) {
                        ///<summary>(Word Only) Asynchronously adds a new custom XML part to a file.</summary>
                        ///<param name="xml" type="String">The XML to add to the newly created custom XML part.</param>
                        ///<param name="callback" type="function" optional="true">A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.</param>
                        var result = new Office._AsyncResult("addAsync");
                        callback(result);
                    }
                },
                getByIdAsync: {
                    conditions: {
                        reqs: ["method CustomXmlParts.getByIdAsync"]
                    },
                    value: function (id, callback) {
                        ///<summary>(Word Only) Asynchronously gets the specified custom XML part by its id.</summary>
                        ///<param name="id" type="String">The id of the custom XML part.</param>
                        ///<param name="callback" type="function" optional="true">A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.</param>
                        var result = new Office._AsyncResult("XMLgetByIdAsync");
                        callback(result);
                    }
                },
                getByNamespaceAsync: {
                    conditions: {
                        reqs: ["method CustomXmlParts.getByNamespaceAsync"]
                    },
                    value: function (ns, callback) {
                        ///<summary>(Word Only) Asynchronously gets the specified custom XML part(s) by its namespace. </summary>
                        ///<param name="ns" type="String"> The namespace to search.</param>
                        ///<param name="callback" type="function" optional="true">A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.</param>
                        var result = new Office._AsyncResult("getByNamespaceAsync");
                        callback(result);
                    }
                }
            }
        },
        getActiveViewAsync: {
            conditions: {
                hosts: ["ppt"],
                reqs: ["set ActiveView GE 1.1", "method Document.getActiveViewAsync"]
            },
            value: function(options, callback) {
                ///<summary>(PowerPoint only) Returns the current view of the presentation.</summary>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {asyncContext:context}
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                Office._extractedCallback(arguments, 2, 2)(new Office._AsyncResult("getActiveViewAsync"));
            }
        },
        getFilePropertiesAsync: {
            conditions: {
                hosts: ["word", "ppt", "excel"],
                reqs: ["method Document.getFilePropertiesAsync"]
            },
            value: function(options, callback) {
                ///<summary>Gets file properties of the current document.</summary>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {asyncContext:context}
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                Office._extractedCallback(arguments, 2, 2)(new Office._AsyncResult("getFilePropertiesAsync"));
            }
        },
        goToByIdAsync: {
            conditions: {
                hosts: ["excel", "ppt", "word"],
                reqs: ["method Document.goToByIdAsync"]
            },
            value: function(id, goToType, options, callback) {
                ///<summary>Goes to the specified object or location in the document.</summary>
                ///<param name="id" type="String or Number">The identifier of the object or location to go to.</param>
                ///<param name="goToType" type="Office.GoToType">The type of the location to go to.</param>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {asyncContext:context}
                /// &#10;     selectionMode: (Word only) Use Office.SelectionMode or text value.
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                Office._extractedCallback(arguments, 4, 2)(new Office._AsyncResult("goToByIdAsync"));
            }
        }
    }
}

Office._items = {
    context: {
        contents: {
            host: "",
            platform: "",
            diagnostics: {},
            contentLanguage: {},
            displayLanguage: {},
            license: {
                contents: {
                    value: {
                        annotate: {
                            //License summary.
                            value: undefined
                        }
                    }
                }
            },
            document: {
                conditions: {
                    hosts: ["not outlook; not outlookcompose"]
                },
                annotate: {
                    // Office Document
                    document: undefined
                },
                contents: Office._context_document
            },
            officeTheme: {
                conditions: {
                    hosts: ["excel", "outlook", "powerpoint", "project", "word"]
                },
                annotate: {
                    officeTheme: undefined
                },
                contents: {
                    "bodyBackgroundColor": {},
                    "bodyForegroundColor": {},
                    "controlBackgroundColor": {},
                    "controlForegroundColor": {}
                }
            },
            touchEnabled: {},
            commerceAllowed : {},
            requirements: {
                annotate: {
                    // Checks whether a given requirement set is supported by the current host.
                    requirements: undefined
                },
                contents: {
                    isSetSupported: {
                        value: function (name, minVersion) {
                            ///<summary> Check if the specified requirement set is supported by the host Office application </summary>
                            ///<param name="name" type="String"> Set name. e.g.: "MatrixBindings" </param>
                            ///<param name="minVersion" type="Number"> The minimum required version </param>
                        }
                    },
                }
            }, 
            ui: {
                annotate: {
                    // Office UI
                    ui: undefined
                },
                contents: Office._context_ui
            }
        }
    },
    initialize: {
        value: function (reason) {
            ///<summary> This method is called after the Office API was loaded.</summary>
            ///<param name="reason" type="Office.InitializationReason" optional="true"> Indicates how the app was initialized</param>
        }
    },
    useShortNamespace: {
        value: function (useShortNamespace) {
            ///<summary> Indicates if  the large namespace for objects will be used or not.</summary>
            ///<param name="useShortNamespace" type="boolean"> Indicates if 'true' that the short namespace will be used</param>
        }
    },
    select: {
        conditions: {
            hosts: ["not outlook; not outlookcompose"]
        },
        value: function (expression, callback) {
            ///<summary> Returns a promise of an object described in the expression. Callback is invoked only if method fails.</summary>
            ///<param name="expression" type="string">The object to be retrieved. Example "bindings#BindingName", retrieves a binding promise for a binding named 'BindingName'</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            ///
            var result = new Office._AsyncResult("select");
            callback(result);
            return (new Office._Binding());
        }
    },
    TableData: {
        conditions: {
            hosts: ["word", "excel", "accesswebapp"],
            reqs: ["set TableBindings GE 1.1"]
        },
        value: new Office._TableData()
    }
};

/*Infrastructure***************************************************************/
Office._processItem = function (target, item, key, suppressConditionCheck) {
    var conditionsFulfilled = suppressConditionCheck || Office._filterManager._checkCondition(item.conditions);
    if (!(conditionsFulfilled || item.partialConditions)) {
        return false;
    }
    suppressConditionCheck = suppressConditionCheck || conditionsFulfilled && item.partialConditions;

    if (item.setup) {
        item.setup();
    }
    if (item.metaOnly) {
        return Office._processContents(target, item.contents, suppressConditionCheck);
    }

    key = item.name || key;
    var areItemsAdded = false;

    if (item.hasOwnProperty("value")) {
        target[key] = item.value;
        areItemsAdded = true;
    } else if (typeof item.contents == "function") {
        target[key] = item.contents();
        areItemsAdded = true;
    } else {
        target[key] = target[key] || {};
        if (Office._processContents(target[key], item.contents, suppressConditionCheck) || conditionsFulfilled) {
            areItemsAdded = true;
        } else {
            delete target[key];
        }
    }
    if (item.annotate) {
        intellisense.annotate(target, item.annotate);
        areItemsAdded = true;
    }
    return areItemsAdded;
}

Office._processContents = function (target, contents, suppressConditionCheck) {
    if (typeof contents !== "object") {
        return false;
    }

    var areItemsAdded = false;
    for (var item in contents) {
        areItemsAdded = Office._processItem(target, contents[item], item, suppressConditionCheck) || areItemsAdded;
    }
    return areItemsAdded;
}

Office._filterManager = (function () {

    var filters = [];

    return {
        _checkCondition: function (condition) {
            if (!condition)
                return true;

            var answer = true;

            for (var i = 0; i < filters.length; i++) {
                var filter = filters[i];
                var conditionForThisFilter = condition[filter.identifier];
                if (conditionForThisFilter && filter.isEnabled()) {

                    var thisFiltersAnswer = false;

                    for (var j = 0; j < conditionForThisFilter.length; j++) {
                        var productTerm = conditionForThisFilter[j].split(';');

                        var thisTermsAnswer = true;
                        for (var k = 0; k < productTerm.length; k++) {
                            var singleCondition = productTerm[k].toUpperCase().trim();
                            var invert = false;
                            if (singleCondition.indexOf("NOT") != -1) {
                                invert = true;
                                singleCondition = singleCondition.slice(singleCondition.indexOf(" ")).trim();
                            }
                            var result = filter.isConditionTrue(singleCondition, invert);
                            thisTermsAnswer = thisTermsAnswer && result;
                        }

                        thisFiltersAnswer = thisFiltersAnswer || thisTermsAnswer;
                    }

                    answer = answer && thisFiltersAnswer;
                }

                if (!answer)
                    break;
            }

            return answer;
        },

        _pushFilter: function (identifier, filteringDelegate, isEnabledDelegate) {
            filters.push({
                identifier: identifier,
                isConditionTrue: filteringDelegate,
                isEnabled: isEnabledDelegate
            });
        }
    }
})();

Office._filterManager._pushFilter(
    "hosts",
    (function () {
        var nameToMaskMapping = {
            EXCEL: Office._ExcelMask,
            WORD: Office._WordMask,
            PROJECT: Office._ProjectMask,
            OUTLOOK: Office._OutlookMask,
            PPT: Office._PowerPointMask,
            OUTLOOKCOMPOSE: Office._OutlookComposeMask,
            ACCESSWEBAPP: Office._AccessWebAppMask
        }

        return function (condition, invert) {
            var result = false;
            if (nameToMaskMapping[condition] & Office._appContext) {
                result = true;
            }
            return invert ? !result : result;
        }
    })(),
    function () {
        return typeof Office._appContext === "number";
    }
);

Office._filterManager._pushFilter(
    "reqs",
    (function () {

        function checkForMethod(methodName) {
            return Office._methodContext && Office._methodContext[methodName];
        }

        function checkForSet(setDescriptor) {
            setDescriptor = setDescriptor.split(" ");
            var setName = setDescriptor[0].trim(),
                setEntry = Office._setContext && setName in Office._setContext && (Office._setContext[setName] || "1.1");

            if (!setEntry) {
                return false;
            }

            if (setDescriptor.length === 1) {
                return true;
            } else {
                var comparisonOperator = setDescriptor[1].trim(),
                    setVersion = setDescriptor[2].split("."),
                    setEntryVersion = setEntry.split("."),
                    difference = 0,
                    maxComponentCount = Math.max(setEntryVersion.length, setVersion.length);

                for (var i = 0; i < maxComponentCount; i++) {
                    var leftInt = parseInt(setEntryVersion[i], 10) || 0,
                        rightInt = parseInt(setVersion[i], 10) || 0;
                    if (leftInt === rightInt) {
                        continue;
                    }
                    difference = leftInt - rightInt;
                    break;
                }

                switch (comparisonOperator) {
                    case "EQ":
                        return difference === 0;
                    case "GT":
                        return difference > 0;
                    case "LT":
                        return difference < 0;
                    case "GE":
                        return difference >= 0;
                    case "LE":
                        return difference <= 0;
                    default:
                        return false;
                }
            }
            return false;
        }

        return function (condition, invert) {
            var result = true;
            var typeAgnosticCond = condition.slice(condition.indexOf(" ")).trim();
            if (condition.indexOf("SET") === 0) {
                result = checkForSet(typeAgnosticCond);
            } else if (condition.indexOf("METHOD") === 0) {
                result = checkForMethod(typeAgnosticCond);
            }
            return invert ? !result : result;
        }
    })(),
    function () {
        if (Office._showAll === false) {
            return true;
        }
        return false;
    }
)

Office._addEnumOnObject = function (enumName, enumObj, targetObj, conditions) {
    Office._processItem(
        targetObj,
        {
            conditions: conditions,
            value: enumObj
        },
        enumName
    );
}
/******************************************************************************/

// Setup Project
Office._processItem(Office, {
    metaOnly: true,
    conditions: {
        hosts: ["project"]
    },
    contents: {
        ProjectProjectFields: {
            value: {
                ///<field type="Number">CurrencySymbol</field>
                CurrencySymbol: 1,
                ///<field type="Number">CurrencySymbolPosition</field>
                CurrencySymbolPosition: 2,
                ///<field type="Number">DurationUnits</field>
                DurationUnits: 3,
                ///<field type="Number">GUID</field>
                GUID: 4,
                ///<field type="Number">Finish</field>
                Finish: 5,
                ///<field type="Number">Start</field>
                Start: 6,
                ///<field type="Number">ReadOnly</field>
                ReadOnly: 7,
                ///<field type="Number">VERSION</field>
                VERSION: 8,
                ///<field type="Number">WorkUnits</field>
                WorkUnits: 9,
                ///<field type="Number">ProjectServerUrl</field>
                ProjectServerUrl: 10,
                ///<field type="Number">WSSUrl</field>
                WSSUrl: 11,
                ///<field type="Number">WSSList</field>
                WSSList: 12
            }
        },
        ProjectViewTypes: {
            value: {
                ///<field type="Number">Gantt</field>
                Gantt: 1,
                ///<field type="Number">NetworkDiagram</field>
                NetworkDiagram: 2,
                ///<field type="Number">TaskDiagram</field>
                TaskDiagram: 3,
                ///<field type="Number">TaskForm</field>
                TaskForm: 4,
                ///<field type="Number">TaskSheet</field>
                TaskSheet: 5,
                ///<field type="Number">ResourceForm</field>
                ResourceForm: 6,
                ///<field type="Number">ResourceSheet</field>
                ResourceSheet: 7,
                ///<field type="Number">ResourceGraph</field>
                ResourceGraph: 8,
                ///<field type="Number">TeamPlanner</field>
                TeamPlanner: 9,
                ///<field type="Number">TaskDetails</field>
                TaskDetails: 10,
                ///<field type="Number">TaskNameForm</field>
                TaskNameForm: 11,
                ///<field type="Number">ResourceNames</field>
                ResourceNames: 12,
                ///<field type="Number">Calendar</field>
                Calendar: 13,
                ///<field type="Number">TaskUsage</field>
                TaskUsage: 14,
                ///<field type="Number">ResourceUsage</field>
                ResourceUsage: 15,
                ///<field type="Number">Timeline</field>
                Timeline: 16,
                ///<field type="Number">Drawing</field>
                Drawing: 18,
                ///<field type="Number">Resource Plan</field>
                ResourcePlan: 19
            }
        },
        ProjectTaskFields: {
            value: {
                    ///<field type="Number">ActualCost</field>
                    ActualCost: 0,
                    ///<field type="Number">ActualDuration</field>
                    ActualDuration: 1,
                    ///<field type="Number">ActualFinish</field>
                    ActualFinish: 2,
                    ///<field type="Number">ActualOvertimeCost</field>
                    ActualOvertimeCost: 3,
                    ///<field type="Number">ActualOvertimeWork</field>
                    ActualOvertimeWork: 4,
                    ///<field type="Number">ActualStart</field>
                    ActualStart: 5,
                    ///<field type="Number">ActualWork</field>
                    ActualWork: 6,
                    ///<field type="Number">Text1</field>
                    Text1: 7,
                    ///<field type="Number">Text10</field>
                    Text10: 8,
                    ///<field type="Number">Finish10</field>
                    Finish10: 9,
                    ///<field type="Number">Start10</field>
                    Start10: 10,
                    ///<field type="Number">Text11</field>
                    Text11: 11,
                    ///<field type="Number">Text12</field>
                    Text12: 12,
                    ///<field type="Number">Text13</field>
                    Text13: 13,
                    ///<field type="Number">Text14</field>
                    Text14: 14,
                    ///<field type="Number">Text15</field>
                    Text15: 15,
                    ///<field type="Number">Text16</field>
                    Text16: 16,
                    ///<field type="Number">Text17</field>
                    Text17: 17,
                    ///<field type="Number">Text18</field>
                    Text18: 18,
                    ///<field type="Number">Text19</field>
                    Text19: 19,
                    ///<field type="Number">Finish1</field>
                    Finish1: 20,
                    ///<field type="Number">Start1</field>
                    Start1: 21,
                    ///<field type="Number">Text2</field>
                    Text2: 22,
                    ///<field type="Number">Text20</field>
                    Text20: 23,
                    ///<field type="Number">Text21</field>
                    Text21: 24,
                    ///<field type="Number">Text22</field>
                    Text22: 25,
                    ///<field type="Number">Text23</field>
                    Text23: 26,
                    ///<field type="Number">Text24</field>
                    Text24: 27,
                    ///<field type="Number">Text25</field>
                    Text25: 28,
                    ///<field type="Number">Text26</field>
                    Text26: 29,
                    ///<field type="Number">Text27</field>
                    Text27: 30,
                    ///<field type="Number">Text28</field>
                    Text28: 31,
                    ///<field type="Number">Text29</field>
                    Text29: 32,
                    ///<field type="Number">Finish2</field>
                    Finish2: 33,
                    ///<field type="Number">Start2</field>
                    Start2: 34,
                    ///<field type="Number">Text3</field>
                    Text3: 35,
                    ///<field type="Number">Text30</field>
                    Text30: 36,
                    ///<field type="Number">Finish3</field>
                    Finish3: 37,
                    ///<field type="Number">Start3</field>
                    Start3: 38,
                    ///<field type="Number">Text4</field>
                    Text4: 39,
                    ///<field type="Number">Finish4</field>
                    Finish4: 40,
                    ///<field type="Number">Start4</field>
                    Start4: 41,
                    ///<field type="Number">Text5</field>
                    Text5: 42,
                    ///<field type="Number">Finish5</field>
                    Finish5: 43,
                    ///<field type="Number">Start5</field>
                    Start5: 44,
                    ///<field type="Number">Text6</field>
                    Text6: 45,
                    ///<field type="Number">Finish6</field>
                    Finish6: 46,
                    ///<field type="Number">Start6</field>
                    Start6: 47,
                    ///<field type="Number">Text7</field>
                    Text7: 48,
                    ///<field type="Number">Finish7</field>
                    Finish7: 49,
                    ///<field type="Number">Start7</field>
                    Start7: 50,
                    ///<field type="Number">Text8</field>
                    Text8: 51,
                    ///<field type="Number">Finish8</field>
                    Finish8: 52,
                    ///<field type="Number">Start8</field>
                    Start8: 53,
                    ///<field type="Number">Text9</field>
                    Text9: 54,
                    ///<field type="Number">Finish9</field>
                    Finish9: 55,
                    ///<field type="Number">Start9</field>
                    Start9: 56,
                    ///<field type="Number">Baseline10BudgetCost</field>
                    Baseline10BudgetCost: 57,
                    ///<field type="Number">Baseline10BudgetWork</field>
                    Baseline10BudgetWork: 58,
                    ///<field type="Number">Baseline10Cost</field>
                    Baseline10Cost: 59,
                    ///<field type="Number">Baseline10Duration</field>
                    Baseline10Duration: 60,
                    ///<field type="Number">Baseline10Finish</field>
                    Baseline10Finish: 61,
                    ///<field type="Number">Baseline10FixedCost</field>
                    Baseline10FixedCost: 62,
                    ///<field type="Number">Baseline10FixedCostAccrual</field>
                    Baseline10FixedCostAccrual: 63,
                    ///<field type="Number">Baseline10Start</field>
                    Baseline10Start: 64,
                    ///<field type="Number">Baseline10Work</field>
                    Baseline10Work: 65,
                    ///<field type="Number">Baseline1BudgetCost</field>
                    Baseline1BudgetCost: 66,
                    ///<field type="Number">Baseline1BudgetWork</field>
                    Baseline1BudgetWork: 67,
                    ///<field type="Number">Baseline1Cost</field>
                    Baseline1Cost: 68,
                    ///<field type="Number">Baseline1Duration</field>
                    Baseline1Duration: 69,
                    ///<field type="Number">Baseline1Finish</field>
                    Baseline1Finish: 70,
                    ///<field type="Number">Baseline1FixedCost</field>
                    Baseline1FixedCost: 71,
                    ///<field type="Number">Baseline1FixedCostAccrual</field>
                    Baseline1FixedCostAccrual: 72,
                    ///<field type="Number">Baseline1Start</field>
                    Baseline1Start: 73,
                    ///<field type="Number">Baseline1Work</field>
                    Baseline1Work: 74,
                    ///<field type="Number">Baseline2BudgetCost</field>
                    Baseline2BudgetCost: 75,
                    ///<field type="Number">Baseline2BudgetWork</field>
                    Baseline2BudgetWork: 76,
                    ///<field type="Number">Baseline2Cost</field>
                    Baseline2Cost: 77,
                    ///<field type="Number">Baseline2Duration</field>
                    Baseline2Duration: 78,
                    ///<field type="Number">Baseline2Finish</field>
                    Baseline2Finish: 79,
                    ///<field type="Number">Baseline2FixedCost</field>
                    Baseline2FixedCost: 80,
                    ///<field type="Number">Baseline2FixedCostAccrual</field>
                    Baseline2FixedCostAccrual: 81,
                    ///<field type="Number">Baseline2Start</field>
                    Baseline2Start: 82,
                    ///<field type="Number">Baseline2Work</field>
                    Baseline2Work: 83,
                    ///<field type="Number">Baseline3BudgetCost</field>
                    Baseline3BudgetCost: 84,
                    ///<field type="Number">Baseline3BudgetWork</field>
                    Baseline3BudgetWork: 85,
                    ///<field type="Number">Baseline3Cost</field>
                    Baseline3Cost: 86,
                    ///<field type="Number">Baseline3Duration</field>
                    Baseline3Duration: 87,
                    ///<field type="Number">Baseline3Finish</field>
                    Baseline3Finish: 88,
                    ///<field type="Number">Baseline3FixedCost</field>
                    Baseline3FixedCost: 89,
                    ///<field type="Number">Baseline3FixedCostAccrual</field>
                    Baseline3FixedCostAccrual: 90,
                    ///<field type="Number">Basline3Start</field>
                    Basline3Start: 91,
                    ///<field type="Number">Baseline3Work</field>
                    Baseline3Work: 92,
                    ///<field type="Number">Baseline4BudgetCost</field>
                    Baseline4BudgetCost: 93,
                    ///<field type="Number">Baseline4BudgetWork</field>
                    Baseline4BudgetWork: 94,
                    ///<field type="Number">Baseline4Cost</field>
                    Baseline4Cost: 95,
                    ///<field type="Number">Baseline4Duration</field>
                    Baseline4Duration: 96,
                    ///<field type="Number">Baseline4Finish</field>
                    Baseline4Finish: 97,
                    ///<field type="Number">Baseline4FixedCost</field>
                    Baseline4FixedCost: 98,
                    ///<field type="Number">Baseline4FixedCostAccrual</field>
                    Baseline4FixedCostAccrual: 99,
                    ///<field type="Number">Baseline4Start</field>
                    Baseline4Start: 100,
                    ///<field type="Number">Baseline4Work</field>
                    Baseline4Work: 101,
                    ///<field type="Number">Baseline5BudgetCost</field>
                    Baseline5BudgetCost: 102,
                    ///<field type="Number">Baseline5BudgetWork</field>
                    Baseline5BudgetWork: 103,
                    ///<field type="Number">Baseline5Cost</field>
                    Baseline5Cost: 104,
                    ///<field type="Number">Baseline5Duration</field>
                    Baseline5Duration: 105,
                    ///<field type="Number">Baseline5Finish</field>
                    Baseline5Finish: 106,
                    ///<field type="Number">Baseline5FixedCost</field>
                    Baseline5FixedCost: 107,
                    ///<field type="Number">Baseline5FixedCostAccrual</field>
                    Baseline5FixedCostAccrual: 108,
                    ///<field type="Number">Baseline5Start</field>
                    Baseline5Start: 109,
                    ///<field type="Number">Baseline5Work</field>
                    Baseline5Work: 110,
                    ///<field type="Number">Baseline6BudgetCost</field>
                    Baseline6BudgetCost: 111,
                    ///<field type="Number">Baseline6BudgetWork</field>
                    Baseline6BudgetWork: 112,
                    ///<field type="Number">Baseline6Cost</field>
                    Baseline6Cost: 113,
                    ///<field type="Number">Baseline6Duration</field>
                    Baseline6Duration: 114,
                    ///<field type="Number">Baseline6Finish</field>
                    Baseline6Finish: 115,
                    ///<field type="Number">Baseline6FixedCost</field>
                    Baseline6FixedCost: 116,
                    ///<field type="Number">Baseline6FixedCostAccrual</field>
                    Baseline6FixedCostAccrual: 117,
                    ///<field type="Number">Baseline6Start</field>
                    Baseline6Start: 118,
                    ///<field type="Number">Baseline6Work</field>
                    Baseline6Work: 119,
                    ///<field type="Number">Baseline7BudgetCost</field>
                    Baseline7BudgetCost: 120,
                    ///<field type="Number">Baseline7BudgetWork</field>
                    Baseline7BudgetWork: 121,
                    ///<field type="Number">Baseline7Cost</field>
                    Baseline7Cost: 122,
                    ///<field type="Number">Baseline7Duration</field>
                    Baseline7Duration: 123,
                    ///<field type="Number">Baseline7Finish</field>
                    Baseline7Finish: 124,
                    ///<field type="Number">Baseline7FixedCost</field>
                    Baseline7FixedCost: 125,
                    ///<field type="Number">Baseline7FixedCostAccrual</field>
                    Baseline7FixedCostAccrual: 126,
                    ///<field type="Number">Baseline7Start</field>
                    Baseline7Start: 127,
                    ///<field type="Number">Baseline7Work</field>
                    Baseline7Work: 128,
                    ///<field type="Number">Baseline8BudgetCost</field>
                    Baseline8BudgetCost: 129,
                    ///<field type="Number">Baseline8BudgetWork</field>
                    Baseline8BudgetWork: 130,
                    ///<field type="Number">Baseline8Cost</field>
                    Baseline8Cost: 131,
                    ///<field type="Number">Baseline8Duration</field>
                    Baseline8Duration: 132,
                    ///<field type="Number">Baseline8Finish</field>
                    Baseline8Finish: 133,
                    ///<field type="Number">Baseline8FixedCost</field>
                    Baseline8FixedCost: 134,
                    ///<field type="Number">Baseline8FixedCostAccrual</field>
                    Baseline8FixedCostAccrual: 135,
                    ///<field type="Number">Baseline8Start</field>
                    Baseline8Start: 136,
                    ///<field type="Number">Baseline8Work</field>
                    Baseline8Work: 137,
                    ///<field type="Number">Baseline9BudgetCost</field>
                    Baseline9BudgetCost: 138,
                    ///<field type="Number">Baseline9BudgetWork</field>
                    Baseline9BudgetWork: 139,
                    ///<field type="Number">Baseline9Cost</field>
                    Baseline9Cost: 140,
                    ///<field type="Number">Baseline9Duration</field>
                    Baseline9Duration: 141,
                    ///<field type="Number">Baseline9Finish</field>
                    Baseline9Finish: 142,
                    ///<field type="Number">Baseline9FixedCost</field>
                    Baseline9FixedCost: 143,
                    ///<field type="Number">Baseline9FixedCostAccrual</field>
                    Baseline9FixedCostAccrual: 144,
                    ///<field type="Number">Baseline9Start</field>
                    Baseline9Start: 145,
                    ///<field type="Number">Baseline9Work</field>
                    Baseline9Work: 146,
                    ///<field type="Number">BaselineBudgetCost</field>
                    BaselineBudgetCost: 147,
                    ///<field type="Number">BaselineBudgetWork</field>
                    BaselineBudgetWork: 148,
                    ///<field type="Number">BaselineCost</field>
                    BaselineCost: 149,
                    ///<field type="Number">BaselineDuration</field>
                    BaselineDuration: 150,
                    ///<field type="Number">BaselineFinish</field>
                    BaselineFinish: 151,
                    ///<field type="Number">BaselineFixedCost</field>
                    BaselineFixedCost: 152,
                    ///<field type="Number">BaselineFixedCostAccrual</field>
                    BaselineFixedCostAccrual: 153,
                    ///<field type="Number">BaselineStart</field>
                    BaselineStart: 154,
                    ///<field type="Number">BaselineWork</field>
                    BaselineWork: 155,
                    ///<field type="Number">BudgetCost</field>
                    BudgetCost: 156,
                    ///<field type="Number">BudgetFixedCost</field>
                    BudgetFixedCost: 157,
                    ///<field type="Number">BudgetFixedWork</field>
                    BudgetFixedWork: 158,
                    ///<field type="Number">BudgetWork</field>
                    BudgetWork: 159,
                    ///<field type="Number">TaskCalendarGUID</field>
                    TaskCalendarGUID: 160,
                    ///<field type="Number">ConstraintDate</field>
                    ConstraintDate: 161,
                    ///<field type="Number">ConstraintType</field>
                    ConstraintType: 162,
                    ///<field type="Number">Cost1</field>
                    Cost1: 163,
                    ///<field type="Number">Cost10</field>
                    Cost10: 164,
                    ///<field type="Number">Cost2</field>
                    Cost2: 165,
                    ///<field type="Number">Cost3</field>
                    Cost3: 166,
                    ///<field type="Number">Cost4</field>
                    Cost4: 167,
                    ///<field type="Number">Cost5</field>
                    Cost5: 168,
                    ///<field type="Number">Cost6</field>
                    Cost6: 169,
                    ///<field type="Number">Cost7</field>
                    Cost7: 170,
                    ///<field type="Number">Cost8</field>
                    Cost8: 171,
                    ///<field type="Number">Cost9</field>
                    Cost9: 172,
                    ///<field type="Number">Date1</field>
                    Date1: 173,
                    ///<field type="Number">Date10</field>
                    Date10: 174,
                    ///<field type="Number">Date2</field>
                    Date2: 175,
                    ///<field type="Number">Date3</field>
                    Date3: 176,
                    ///<field type="Number">Date4</field>
                    Date4: 177,
                    ///<field type="Number">Date5</field>
                    Date5: 178,
                    ///<field type="Number">Date6</field>
                    Date6: 179,
                    ///<field type="Number">Date7</field>
                    Date7: 180,
                    ///<field type="Number">Date8</field>
                    Date8: 181,
                    ///<field type="Number">Date9</field>
                    Date9: 182,
                    ///<field type="Number">Deadline</field>
                    Deadline: 183,
                    ///<field type="Number">Duration1</field>
                    Duration1: 184,
                    ///<field type="Number">Duration10</field>
                    Duration10: 185,
                    ///<field type="Number">Duration2</field>
                    Duration2: 186,
                    ///<field type="Number">Duration3</field>
                    Duration3: 187,
                    ///<field type="Number">Duration4</field>
                    Duration4: 188,
                    ///<field type="Number">Duration5</field>
                    Duration5: 189,
                    ///<field type="Number">Duration6</field>
                    Duration6: 190,
                    ///<field type="Number">Duration7</field>
                    Duration7: 191,
                    ///<field type="Number">Duration8</field>
                    Duration8: 192,
                    ///<field type="Number">Duration9</field>
                    Duration9: 193,
                    ///<field type="Number">Duration</field>
                    Duration: 194,
                    ///<field type="Number">EarnedValueMethod</field>
                    EarnedValueMethod: 195,
                    ///<field type="Number">FinishSlack</field>
                    FinishSlack: 196,
                    ///<field type="Number">FixedCost</field>
                    FixedCost: 197,
                    ///<field type="Number">FixedCostAccrual</field>
                    FixedCostAccrual: 198,
                    ///<field type="Number">Flag10</field>
                    Flag10: 199,
                    ///<field type="Number">Flag1</field>
                    Flag1: 200,
                    ///<field type="Number">Flag11</field>
                    Flag11: 201,
                    ///<field type="Number">Flag12</field>
                    Flag12: 202,
                    ///<field type="Number">Flag13</field>
                    Flag13: 203,
                    ///<field type="Number">Flag14</field>
                    Flag14: 204,
                    ///<field type="Number">Flag15</field>
                    Flag15: 205,
                    ///<field type="Number">Flag16</field>
                    Flag16: 206,
                    ///<field type="Number">Flag17</field>
                    Flag17: 207,
                    ///<field type="Number">Flag18</field>
                    Flag18: 208,
                    ///<field type="Number">Flag19</field>
                    Flag19: 209,
                    ///<field type="Number">Flag2</field>
                    Flag2: 210,
                    ///<field type="Number">Flag20</field>
                    Flag20: 211,
                    ///<field type="Number">Flag3</field>
                    Flag3: 212,
                    ///<field type="Number">Flag4</field>
                    Flag4: 213,
                    ///<field type="Number">Flag5</field>
                    Flag5: 214,
                    ///<field type="Number">Flag6</field>
                    Flag6: 215,
                    ///<field type="Number">Flag7</field>
                    Flag7: 216,
                    ///<field type="Number">Flag8</field>
                    Flag8: 217,
                    ///<field type="Number">Flag9</field>
                    Flag9: 218,
                    ///<field type="Number">FreeSlack</field>
                    FreeSlack: 219,
                    ///<field type="Number">HasRollupSubTasks</field>
                    HasRollupSubTasks: 220,
                    ///<field type="Number">ID</field>
                    ID: 221,
                    ///<field type="Number">Name</field>
                    Name: 222,
                    ///<field type="Number">Notes</field>
                    Notes: 223,
                    ///<field type="Number">Number1</field>
                    Number1: 224,
                    ///<field type="Number">Number10</field>
                    Number10: 225,
                    ///<field type="Number">Number11</field>
                    Number11: 226,
                    ///<field type="Number">Number12</field>
                    Number12: 227,
                    ///<field type="Number">Number13</field>
                    Number13: 228,
                    ///<field type="Number">Number14</field>
                    Number14: 229,
                    ///<field type="Number">Number15</field>
                    Number15: 230,
                    ///<field type="Number">Number16</field>
                    Number16: 231,
                    ///<field type="Number">Number17</field>
                    Number17: 232,
                    ///<field type="Number">Number18</field>
                    Number18: 233,
                    ///<field type="Number">Number19</field>
                    Number19: 234,
                    ///<field type="Number">Number2</field>
                    Number2: 235,
                    ///<field type="Number">Number20</field>
                    Number20: 236,
                    ///<field type="Number">Number3</field>
                    Number3: 237,
                    ///<field type="Number">Number4</field>
                    Number4: 238,
                    ///<field type="Number">Number5</field>
                    Number5: 239,
                    ///<field type="Number">Number6</field>
                    Number6: 240,
                    ///<field type="Number">Number7</field>
                    Number7: 241,
                    ///<field type="Number">Number8</field>
                    Number8: 242,
                    ///<field type="Number">Number9</field>
                    Number9: 243,
                    ///<field type="Number">ScheduledDuration</field>
                    ScheduledDuration: 244,
                    ///<field type="Number">ScheduledFinish</field>
                    ScheduledFinish: 245,
                    ///<field type="Number">ScheduledStart</field>
                    ScheduledStart: 246,
                    ///<field type="Number">OutlineLevel</field>
                    OutlineLevel: 247,
                    ///<field type="Number">OvertimeCost</field>
                    OvertimeCost: 248,
                    ///<field type="Number">OvertimeWork</field>
                    OvertimeWork: 249,
                    ///<field type="Number">PercentComplete</field>
                    PercentComplete: 250,
                    ///<field type="Number">PercentWorkComplete</field>
                    PercentWorkComplete: 251,
                    ///<field type="Number">Predecessors</field>
                    Predecessors: 252,
                    ///<field type="Number">PreleveledFinish</field>
                    PreleveledFinish: 253,
                    ///<field type="Number">PreleveledStart</field>
                    PreleveledStart: 254,
                    ///<field type="Number">Priority</field>
                    Priority: 255,
                    ///<field type="Number">Active</field>
                    Active: 256,
                    ///<field type="Number">Critical</field>
                    Critical: 257,
                    ///<field type="Number">Milestone</field>
                    Milestone: 258,
                    ///<field type="Number">Overallocated</field>
                    Overallocated: 259,
                    ///<field type="Number">IsRollup</field>
                    IsRollup: 260,
                    ///<field type="Number">Summary</field>
                    Summary: 261,
                    ///<field type="Number">RegularWork</field>
                    RegularWork: 262,
                    ///<field type="Number">RemainingCost</field>
                    RemainingCost: 263,
                    ///<field type="Number">RemainingDuration</field>
                    RemainingDuration: 264,
                    ///<field type="Number">RemainingOvertimeCost</field>
                    RemainingOvertimeCost: 265,
                    ///<field type="Number">RemainingWork</field>
                    RemainingWork: 266,
                    ///<field type="Number">ResourceNames</field>
                    ResourceNames: 267,
                    ///<field type="Number">ResourceNames</field>
                    ResourceNames: 268,
                    ///<field type="Number">Cost</field>
                    Cost: 269,
                    ///<field type="Number">Finish</field>
                    Finish: 270,
                    ///<field type="Number">Start</field>
                    Start: 271,
                    ///<field type="Number">Work</field>
                    Work: 272,
                    ///<field type="Number">StartSlack</field>
                    StartSlack: 273,
                    ///<field type="Number">Status</field>
                    Status: 274,
                    ///<field type="Number">Successors</field>
                    Successors: 275,
                    ///<field type="Number">StatusManager</field>
                    StatusManager: 276,
                    ///<field type="Number">TotalSlack</field>
                    TotalSlack: 277,
                    ///<field type="Number">TaskGUID</field>
                    TaskGUID: 278,
                    ///<field type="Number">Type</field>
                    Type: 279,
                    ///<field type="Number">WBS</field>
                    WBS: 280,
                    ///<field type="Number">WBSPREDECESSORS</field>
                    WBSPREDECESSORS: 281,
                    ///<field type="Number">WBSSUCCESSORS</field>
                    WBSSUCCESSORS: 282,
                    ///<field type="Number">WSSID</field>
                    WSSID: 283
            }
        },
        ProjectResourceFields: {
            value: {
                    ///<field type="Number">Accrual</field>
                    Accrual: 0,
                    ///<field type="Number">ActualCost</field>
                    ActualCost: 1,
                    ///<field type="Number">ActualOvertimeCost</field>
                    ActualOvertimeCost: 2,
                    ///<field type="Number">ActualOvertimeWork</field>
                    ActualOvertimeWork: 3,
                    ///<field type="Number">ActualOvertimeWorkProtected</field>
                    ActualOvertimeWorkProtected: 4,
                    ///<field type="Number">ActualWork</field>
                    ActualWork: 5,
                    ///<field type="Number">ActualWorkProtected</field>
                    ActualWorkProtected: 6,
                    ///<field type="Number">BaseCalendar</field>
                    BaseCalendar: 7,
                    ///<field type="Number">Baseline10BudgetCost</field>
                    Baseline10BudgetCost: 8,
                    ///<field type="Number">Baseline10BudgetWork</field>
                    Baseline10BudgetWork: 9,
                    ///<field type="Number">Baseline10Cost</field>
                    Baseline10Cost: 10,
                    ///<field type="Number">Baseline10Work</field>
                    Baseline10Work: 11,
                    ///<field type="Number">Baseline1BudgetCost</field>
                    Baseline1BudgetCost: 12,
                    ///<field type="Number">Baseline1BudgetWork</field>
                    Baseline1BudgetWork: 13,
                    ///<field type="Number">Baseline1Cost</field>
                    Baseline1Cost: 14,
                    ///<field type="Number">Baseline1Work</field>
                    Baseline1Work: 15,
                    ///<field type="Number">Baseline2BudgetCost</field>
                    Baseline2BudgetCost: 16,
                    ///<field type="Number">Baseline2BudgetWork</field>
                    Baseline2BudgetWork: 17,
                    ///<field type="Number">Baseline2Cost</field>
                    Baseline2Cost: 18,
                    ///<field type="Number">Baseline2Work</field>
                    Baseline2Work: 19,
                    ///<field type="Number">Baseline3BudgetCost</field>
                    Baseline3BudgetCost: 20,
                    ///<field type="Number">Baseline3BudgetWork</field>
                    Baseline3BudgetWork: 21,
                    ///<field type="Number">Baseline3Cost</field>
                    Baseline3Cost: 22,
                    ///<field type="Number">Baseline3Work</field>
                    Baseline3Work: 23,
                    ///<field type="Number">Baseline4BudgetCost</field>
                    Baseline4BudgetCost: 24,
                    ///<field type="Number">Baseline4BudgetWork</field>
                    Baseline4BudgetWork: 25,
                    ///<field type="Number">Baseline4Cost</field>
                    Baseline4Cost: 26,
                    ///<field type="Number">Baseline4Work</field>
                    Baseline4Work: 27,
                    ///<field type="Number">Baseline5BudgetCost</field>
                    Baseline5BudgetCost: 28,
                    ///<field type="Number">Baseline5BudgetWork</field>
                    Baseline5BudgetWork: 29,
                    ///<field type="Number">Baseline5Cost</field>
                    Baseline5Cost: 30,
                    ///<field type="Number">Baseline5Work</field>
                    Baseline5Work: 31,
                    ///<field type="Number">Baseline6BudgetCost</field>
                    Baseline6BudgetCost: 32,
                    ///<field type="Number">Baseline6BudgetWork</field>
                    Baseline6BudgetWork: 33,
                    ///<field type="Number">Baseline6Cost</field>
                    Baseline6Cost: 34,
                    ///<field type="Number">Baseline6Work</field>
                    Baseline6Work: 35,
                    ///<field type="Number">Baseline7BudgetCost</field>
                    Baseline7BudgetCost: 36,
                    ///<field type="Number">Baseline7BudgetWork</field>
                    Baseline7BudgetWork: 37,
                    ///<field type="Number">Baseline7Cost</field>
                    Baseline7Cost: 38,
                    ///<field type="Number">Baseline7Work</field>
                    Baseline7Work: 39,
                    ///<field type="Number">Baseline8BudgetCost</field>
                    Baseline8BudgetCost: 40,
                    ///<field type="Number">Baseline8BudgetWork</field>
                    Baseline8BudgetWork: 41,
                    ///<field type="Number">Baseline8Cost</field>
                    Baseline8Cost: 42,
                    ///<field type="Number">Baseline8Work</field>
                    Baseline8Work: 43,
                    ///<field type="Number">Baseline9BudgetCost</field>
                    Baseline9BudgetCost: 44,
                    ///<field type="Number">Baseline9BudgetWork</field>
                    Baseline9BudgetWork: 45,
                    ///<field type="Number">Baseline9Cost</field>
                    Baseline9Cost: 46,
                    ///<field type="Number">Baseline9Work</field>
                    Baseline9Work: 47,
                    ///<field type="Number">BaselineBudgetCost</field>
                    BaselineBudgetCost: 48,
                    ///<field type="Number">BaselineBudgetWork</field>
                    BaselineBudgetWork: 49,
                    ///<field type="Number">BaselineCost</field>
                    BaselineCost: 50,
                    ///<field type="Number">BaselineWork</field>
                    BaselineWork: 51,
                    ///<field type="Number">BudgetCost</field>
                    BudgetCost: 52,
                    ///<field type="Number">BudgetWork</field>
                    BudgetWork: 53,
                    ///<field type="Number">ResourceCalendarGUID</field>
                    ResourceCalendarGUID: 54,
                    ///<field type="Number">Code</field>
                    Code: 55,
                    ///<field type="Number">Cost1</field>
                    Cost1: 56,
                    ///<field type="Number">Cost10</field>
                    Cost10: 57,
                    ///<field type="Number">Cost2</field>
                    Cost2: 58,
                    ///<field type="Number">Cost3</field>
                    Cost3: 59,
                    ///<field type="Number">Cost4</field>
                    Cost4: 60,
                    ///<field type="Number">Cost5</field>
                    Cost5: 61,
                    ///<field type="Number">Cost6</field>
                    Cost6: 62,
                    ///<field type="Number">Cost7</field>
                    Cost7: 63,
                    ///<field type="Number">Cost8</field>
                    Cost8: 64,
                    ///<field type="Number">Cost9</field>
                    Cost9: 65,
                    ///<field type="Number">ResourceCreationDate</field>
                    ResourceCreationDate: 66,
                    ///<field type="Number">Date1</field>
                    Date1: 67,
                    ///<field type="Number">Date10</field>
                    Date10: 68,
                    ///<field type="Number">Date2</field>
                    Date2: 69,
                    ///<field type="Number">Date3</field>
                    Date3: 70,
                    ///<field type="Number">Date4</field>
                    Date4: 71,
                    ///<field type="Number">Date5</field>
                    Date5: 72,
                    ///<field type="Number">Date6</field>
                    Date6: 73,
                    ///<field type="Number">Date7</field>
                    Date7: 74,
                    ///<field type="Number">Date8</field>
                    Date8: 75,
                    ///<field type="Number">Date9</field>
                    Date9: 76,
                    ///<field type="Number">Duration1</field>
                    Duration1: 77,
                    ///<field type="Number">Duration10</field>
                    Duration10: 78,
                    ///<field type="Number">Duration2</field>
                    Duration2: 79,
                    ///<field type="Number">Duration3</field>
                    Duration3: 80,
                    ///<field type="Number">Duration4</field>
                    Duration4: 81,
                    ///<field type="Number">Duration5</field>
                    Duration5: 82,
                    ///<field type="Number">Duration6</field>
                    Duration6: 83,
                    ///<field type="Number">Duration7</field>
                    Duration7: 84,
                    ///<field type="Number">Duration8</field>
                    Duration8: 85,
                    ///<field type="Number">Duration9</field>
                    Duration9: 86,
                    ///<field type="Number">Email</field>
                    Email: 87,
                    ///<field type="Number">End</field>
                    End: 88,
                    ///<field type="Number">Finish1</field>
                    Finish1: 89,
                    ///<field type="Number">Finish10</field>
                    Finish10: 90,
                    ///<field type="Number">Finish2</field>
                    Finish2: 91,
                    ///<field type="Number">Finish3</field>
                    Finish3: 92,
                    ///<field type="Number">Finish4</field>
                    Finish4: 93,
                    ///<field type="Number">Finish5</field>
                    Finish5: 94,
                    ///<field type="Number">Finish6</field>
                    Finish6: 95,
                    ///<field type="Number">Finish7</field>
                    Finish7: 96,
                    ///<field type="Number">Finish8</field>
                    Finish8: 97,
                    ///<field type="Number">Finish9</field>
                    Finish9: 98,
                    ///<field type="Number">Flag10</field>
                    Flag10: 99,
                    ///<field type="Number">Flag1</field>
                    Flag1: 100,
                    ///<field type="Number">Flag11</field>
                    Flag11: 101,
                    ///<field type="Number">Flag12</field>
                    Flag12: 102,
                    ///<field type="Number">Flag13</field>
                    Flag13: 103,
                    ///<field type="Number">Flag14</field>
                    Flag14: 104,
                    ///<field type="Number">Flag15</field>
                    Flag15: 105,
                    ///<field type="Number">Flag16</field>
                    Flag16: 106,
                    ///<field type="Number">Flag17</field>
                    Flag17: 107,
                    ///<field type="Number">Flag18</field>
                    Flag18: 108,
                    ///<field type="Number">Flag19</field>
                    Flag19: 109,
                    ///<field type="Number">Flag2</field>
                    Flag2: 110,
                    ///<field type="Number">Flag20</field>
                    Flag20: 111,
                    ///<field type="Number">Flag3</field>
                    Flag3: 112,
                    ///<field type="Number">Flag4</field>
                    Flag4: 113,
                    ///<field type="Number">Flag5</field>
                    Flag5: 114,
                    ///<field type="Number">Flag6</field>
                    Flag6: 115,
                    ///<field type="Number">Flag7</field>
                    Flag7: 116,
                    ///<field type="Number">Flag8</field>
                    Flag8: 117,
                    ///<field type="Number">Flag9</field>
                    Flag9: 118,
                    ///<field type="Number">Group</field>
                    Group: 119,
                    ///<field type="Number">Units</field>
                    Units: 120,
                    ///<field type="Number">Name</field>
                    Name: 121,
                    ///<field type="Number">Notes</field>
                    Notes: 122,
                    ///<field type="Number">Number1</field>
                    Number1: 123,
                    ///<field type="Number">Number10</field>
                    Number10: 124,
                    ///<field type="Number">Number11</field>
                    Number11: 125,
                    ///<field type="Number">Number12</field>
                    Number12: 126,
                    ///<field type="Number">Number13</field>
                    Number13: 127,
                    ///<field type="Number">Number14</field>
                    Number14: 128,
                    ///<field type="Number">Number15</field>
                    Number15: 129,
                    ///<field type="Number">Number16</field>
                    Number16: 130,
                    ///<field type="Number">Number17</field>
                    Number17: 131,
                    ///<field type="Number">Number18</field>
                    Number18: 132,
                    ///<field type="Number">Number19</field>
                    Number19: 133,
                    ///<field type="Number">Number2</field>
                    Number2: 134,
                    ///<field type="Number">Number20</field>
                    Number20: 135,
                    ///<field type="Number">Number3</field>
                    Number3: 136,
                    ///<field type="Number">Number4</field>
                    Number4: 137,
                    ///<field type="Number">Number5</field>
                    Number5: 138,
                    ///<field type="Number">Number6</field>
                    Number6: 139,
                    ///<field type="Number">Number7</field>
                    Number7: 140,
                    ///<field type="Number">Number8</field>
                    Number8: 141,
                    ///<field type="Number">Number9</field>
                    Number9: 142,
                    ///<field type="Number">OvertimeCost</field>
                    OvertimeCost: 143,
                    ///<field type="Number">OvertimeRate</field>
                    OvertimeRate: 144,
                    ///<field type="Number">OvertimeWork</field>
                    OvertimeWork: 145,
                    ///<field type="Number">PercentWorkComplete</field>
                    PercentWorkComplete: 146,
                    ///<field type="Number">CostPerUse</field>
                    CostPerUse: 147,
                    ///<field type="Number">Generic</field>
                    Generic: 148,
                    ///<field type="Number">OverAllocated</field>
                    OverAllocated: 149,
                    ///<field type="Number">RegularWork</field>
                    RegularWork: 150,
                    ///<field type="Number">RemainingCost</field>
                    RemainingCost: 151,
                    ///<field type="Number">RemainingOvertimeCost</field>
                    RemainingOvertimeCost: 152,
                    ///<field type="Number">RemainingOvertimeWork</field>
                    RemainingOvertimeWork: 153,
                    ///<field type="Number">RemainingWork</field>
                    RemainingWork: 154,
                    ///<field type="Number">ResourceGUID</field>
                    ResourceGUID: 155,
                    ///<field type="Number">Cost</field>
                    Cost: 156,
                    ///<field type="Number">Work</field>
                    Work: 157,
                    ///<field type="Number">Start</field>
                    Start: 158,
                    ///<field type="Number">Start1</field>
                    Start1: 159,
                    ///<field type="Number">Start10</field>
                    Start10: 160,
                    ///<field type="Number">Start2</field>
                    Start2: 161,
                    ///<field type="Number">Start3</field>
                    Start3: 162,
                    ///<field type="Number">Start4</field>
                    Start4: 163,
                    ///<field type="Number">Start5</field>
                    Start5: 164,
                    ///<field type="Number">Start6</field>
                    Start6: 165,
                    ///<field type="Number">Start7</field>
                    Start7: 166,
                    ///<field type="Number">Start8</field>
                    Start8: 167,
                    ///<field type="Number">Start9</field>
                    Start9: 168,
                    ///<field type="Number">StandardRate</field>
                    StandardRate: 169,
                    ///<field type="Number">Text1</field>
                    Text1: 170,
                    ///<field type="Number">Text10</field>
                    Text10: 171,
                    ///<field type="Number">Text11</field>
                    Text11: 172,
                    ///<field type="Number">Text12</field>
                    Text12: 173,
                    ///<field type="Number">Text13</field>
                    Text13: 174,
                    ///<field type="Number">Text14</field>
                    Text14: 175,
                    ///<field type="Number">Text15</field>
                    Text15: 176,
                    ///<field type="Number">Text16</field>
                    Text16: 177,
                    ///<field type="Number">Text17</field>
                    Text17: 178,
                    ///<field type="Number">Text18</field>
                    Text18: 179,
                    ///<field type="Number">Text19</field>
                    Text19: 180,
                    ///<field type="Number">Text2</field>
                    Text2: 181,
                    ///<field type="Number">Text20</field>
                    Text20: 182,
                    ///<field type="Number">Text21</field>
                    Text21: 183,
                    ///<field type="Number">Text22</field>
                    Text22: 184,
                    ///<field type="Number">Text23</field>
                    Text23: 185,
                    ///<field type="Number">Text24</field>
                    Text24: 186,
                    ///<field type="Number">Text25</field>
                    Text25: 187,
                    ///<field type="Number">Text26</field>
                    Text26: 188,
                    ///<field type="Number">Text27</field>
                    Text27: 189,
                    ///<field type="Number">Text28</field>
                    Text28: 190,
                    ///<field type="Number">Text29</field>
                    Text29: 191,
                    ///<field type="Number">Text3</field>
                    Text3: 192,
                    ///<field type="Number">Text30</field>
                    Text30: 193,
                    ///<field type="Number">Text4</field>
                    Text4: 194,
                    ///<field type="Number">Text5</field>
                    Text5: 195,
                    ///<field type="Number">Text6</field>
                    Text6: 196,
                    ///<field type="Number">Text7</field>
                    Text7: 197,
                    ///<field type="Number">Text8</field>
                    Text8: 198,
                    ///<field type="Number">Text9</field>
                    Text9: 199
            }
        },
        context: {
            contents: {
                document: {
                    contents: {
                        getSelectedTaskAsync: {
                            conditions: { reqs: ["method Document.getSelectedTaskAsync"] },
                            value: function (callback) {
                                    ///<summary> (Project only) Get the current selected Task's Id.</summary>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getTaskByIndexAsync: {
                            conditions: { reqs: ["method Document.getTaskByIndexAsync"] },
                            value: function (taskIndex, callback) {
                                    ///<summary> (Project only) Get the Task's Id for provided task index.</summary>
                                    ///<param name="taskIndex" type="Object">Task index in task container</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getTaskAsync: {
                            conditions: { reqs: ["method Document.getTaskAsync"] },
                            value: function (taskId, callback) {
                                    ///<summary> (Project only) Get the Task Name, WSS Task Id, and ResourceNames for given taskId .</summary>
                                    ///<param name="taskId" type="Object">Either a string or value of the Task Id.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getTaskFieldAsync: {
                            conditions: { reqs: ["method Document.getTaskFieldAsync"] },
                            value: function (taskId, taskField, callback) {
                                    ///<summary> (Project only) Get task field for provided task Id. (Ex. StartDate).</summary>
                                    ///<param name="taskId" type="Object">Either a string or value of the Task Id.</param>
                                    ///<param name="taskField" type="Office.ProjectTaskFields">Task Fields.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>

                            }
                        },
                        getSelectedResourceAsync: {
                            conditions: { reqs: ["method Document.getSelectedResourceAsync"] },
                            value: function (callback) {
                                    ///<summary> (Project only) Get the current selected Resource's Id.</summary>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getResourceByIndexAsync: {
                            conditions: { reqs: ["method Document.getResourceByIndexAsync"] },
                            value: function (resourceIndex, callback) {
                                    ///<summary> (Project only) Get the Resource's Id for provided resource index.</summary>
                                    ///<param name="resourceIndex" type="Object">Resource index in resource container</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getResourceFieldAsync: {
                            conditions: { reqs: ["method Document.getResourceFieldAsync"] },
                            value: function (resourceId, resourceField, callback) {
                                    ///<summary> (Project only) Get resource field for provided resource Id. (Ex.ResourceName)</summary>
                                    ///<param name="resourceId" type="Object">Either a string or value of the Resource Id.</param>
                                    ///<param name="resourceField" type="Office.ProjectResourceFields">Resource Fields.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getProjectFieldAsync: {
                            conditions: { reqs: ["method Document.getProjectFieldAsync"] },
                            value: function (projectField, callback) {
                                    ///<summary> (Project only) Get Project field (Ex. ProjectWebAccessURL).</summary>
                                    ///<param name="projectField" type="Office.ProjectProjectFields">Project level fields.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getSelectedViewAsync: {
                            conditions: { reqs: ["method Document.getSelectedViewAsync"] },
                            value: function (callback) {
                                    ///<summary> (Project only) Get the current selected View Type (Ex. Gantt) and View Name.</summary>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getWSSURLAsync: {
                            conditions: { reqs: ["method Document.getWSSURLAsync"] },
                            value: function (callback) {
                                    ///<summary> (Project only) Get the WSS Url and list name for the Tasks List, the MPP is synced too.</summary>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        setTaskFieldAsync: {
                            conditions: { reqs: ["method Document.setTaskFieldAsync"] },
                            value: function (taskId, fieldId, fieldValue, callback) {
                                    ///<summary> (Project only) Set Taskfield (Ex. TaskName).</summary>
                                    ///<param name="taskId" type="Object">Either a string or value of the Task Id.</param>
                                    ///<param name="taskField" type="Office.ProjectTaskFields">Task Field.</param>
                                    ///<param name="fieldValue" type="Object">Either a string, number boolean or object for the data that you want to set.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        setResourceFieldAsync: {
                            conditions: { reqs: ["method Document.setResourceFieldAsync"] },
                            value: function (resourceId, fieldId, fieldValue, callback) {
                                    ///<summary> (Project only) Set Resource field (Ex. ResourceName).</summary>
                                    ///<param name="resourceId" type="Object">Either a string or value of the Resource Id.</param>
                                    ///<param name="resourceField" type="Office.ProjectResourceFields">Resource Field.</param>
                                    ///<param name="fieldValue" type="Object">Either a string, number boolean or object for the data that you want to set.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        }
                    }
                }
            }
        }
    }
});

// Setup outlook
Office._processItem(Office, {
    metaOnly: true,
    conditions: {
        hosts: ["outlook", "outlookcompose"],
        reqs: ["set Mailbox GE 1.1"]
    },
    contents: {
        MailboxEnums: {
            value: new Office._MailboxEnums()
        },
        context: {
            contents: {
                mailbox: {
                    value: new Office._context_mailbox()
                },
                roamingSettings: {
                    value: new Office._settings()
                }
            }
        },
        cast: {
            value: {
                item: new Office._cast_item()
            }
        }
    }
})

// Setup CustomXMLParts
Office._addEnumOnObject("CustomXmlNodeType",
    {
        ///<field type="String">Element</field>
        Element: "element",
        ///<field type="String">Attribute</field>
        Attribute: "attribute",
        ///<field type="String">String/field>
        Text: "text",
        ///<field type="String">CData</field>
        Cdata: "cdata",
        ///<field type="String">ProcessingInstruction</field>
        ProcessingInstruction: "processingInstruction",
        ///<field type="String">NodeComment</field>
        NodeComment: "nodeComment",
        ///<field type="String">NodeDocument</field>
        NodeDocument: "nodeDocument"
    },
    Office,
    {
        hosts: ["word"]
    }
);

// Other enumerations on Office
Office._addEnumOnObject("AsyncResultStatus",
    {
        ///<field type="String">Operation failed, check error object</field>
        Failed: "failed",
        ///<field type="String">Operation succeeded</field>
        Succeeded: "succeeded"

    },
    Office,
    {
        hosts: ["not outlook; not outlookcompose"]
    }
);

Office._processItem(Office,
    {
        contents: {
            Text: {
                conditions: {
                    hosts: ["excel", "word"],
                    reqs: ["set TextBindings GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Text based Binding</field>
                    Text: undefined
                },
                value: "text"
            },
            Matrix: {
                conditions: {
                    hosts: ["excel", "word"],
                    reqs: ["set MatrixBindings GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Matrix based Binding</field>
                    Matrix: undefined
                },
                value: "matrix"
            },
            Table: {
                conditions: {
                    hosts: ["excel", "word", "accesswebapp"],
                    reqs: ["set TableBindings GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Table based Binding</field>
                    Table: undefined
                },
                value: "table"
            }
        }
    },
    "BindingType"
);

Office._processItem(Office,
    {
        contents: {
            Table: {
                conditions: {
                    hosts: ["word", "excel", "accesswebapp"],
                    reqs: ["set TableCoercion GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Coerce as Table</field>
                    Table: undefined
                },
                value: "table"
            },
            Text: {
                conditions: {
                    hosts: ["excel", "ppt", "project", "word"],
                    reqs: ["set TextCoercion GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Coerce as Text</field>
                    Text: undefined
                },
                value: "text"
            },
            Matrix: {
                conditions: {
                    hosts: ["excel", "word"],
                    reqs: ["set MatrixCoercion GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Coerce as Matrix</field>
                    Matrix: undefined
                },
                value: "matrix"
            },
            Html: {
                conditions: {
                    hosts: ["word"],
                    reqs: ["set HtmlCoercion GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Coerce as HTML</field>
                    Html: undefined
                },
                value: "html"
            },
            Ooxml: {
                conditions: {
                    hosts: ["word"],
                    reqs: ["set OoxmlCoercion GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Coerce as Office Open XML</field>
                    Ooxml: undefined
                },
                value: "ooxml"
            },
            SlideRange: {
                conditions: {
                    hosts: ["ppt"]
                },
                annotate: {
                    ///<field type="String">Coerce as JSON object containing an array of the ids, titles, and indexes of the selected slides.</field>
                    SlideRange: undefined
                },
                value: "slideRange"
            }
        }
    },
    "CoercionType"
);

Office._addEnumOnObject("DocumentMode",
    {
        ///<field type="String">Document in Read Only Mode</field>
        ReadOnly: "readOnly",
        ///<field type="String">Document in Read/Write Mode</field>
        ReadWrite: "readWrite"
    },
    Office,
    {
        hosts: ["word", "excel", "accesswebapp"]
    }
);

Office._addEnumOnObject("EventType",
    {
        ///<field type="String">Triggers when a document level selection happens</field>
        DocumentSelectionChanged: "documentSelectionChanged",
        ///<field type="String"> Triggers when a binding level selection happens</field>
        BindingSelectionChanged: "bindingSelectionChanged",
        ///<field type="String">Triggers when a binding level data change happens</field>
        BindingDataChanged: "bindingDataChanged",
        ///<field type="String">Triggers when settings change in a co-Auth session.</field>
        SettingsChanged: "settingsChanged",
        ///<field type="String">Triggers when a customXmlPart node was deleted</field>
        DataNodeDeleted: "nodeDeleted",
        ///<field type="String">Triggers when a customXmlPart node was inserted</field>
        DataNodeInserted: "nodeInserted",
        ///<field type="String">Triggers when a customXmlPart node was replaced</field>
        DataNodeReplaced: "nodeReplaced",
        ///<field type="String">Triggers when a Task selection happens in Project.</field>
        TaskSelectionChanged: "taskSelectionChanged",
        ///<field type="String"> Triggers when a Resource selection happens in Project.</field>
        ResourceSelectionChanged: "resourceSelectionChanged",
        ///<field type="String">Triggers when a View selection happens in Project.</field>
        ViewSelectionChanged: "viewSelectionChanged"
    },
    Office,
    {
        hosts: ["not outlook; not outlookcompose"]
    }
);
// EventType augmentations
Office._processContents(Office.EventType, {
    ActiveViewChanged: {
        conditions: {
            hosts: ["ppt"]
        },
        annotate: {
            ///<field type="String">Occurs when the user changes the current view of the document.</field>
            ActiveViewChanged: undefined
        },
        value: "activeViewChanged"
    }
});

Office._processItem(Office,
    {
        conditions: { hosts: ["not outlook; not outlookcompose; not accesswebapp"] },
        contents: {
            Compressed: {
                conditions: {
                    hosts: ["ppt", "word"],
                    reqs: ["set CompressedFile GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Returns the file as a byte array </field>
                    Compressed: undefined
                },
                value: "compressed"
            },
            Pdf: {
                conditions: {
                    hosts: ["ppt", "word"],
                    reqs: ["set PdfFile GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Returns the file in PDF format as a byte array</field>
                    Pdf: undefined
                },
                value: "pdf"
            },
            Text: {
                conditions: {
                    hosts: ["word"],
                    reqs: ["set TextFile GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Returns the file as plain text</field>
                    Text: undefined
                },
                value: "text"
            }
        }
    },
    "FileType"
);

Office._addEnumOnObject("FilterType",
    {
        ///<field type="String">Returns all items</field>
        All: "all",
        ///<field type="String">Returns only visible items</field>
        OnlyVisible: "onlyVisible"
    },
    Office,
    {
        hosts: ["not outlook; not outlookcompose; not accesswebapp"]
    }
);

Office._addEnumOnObject("InitializationReason",
    {
        ///<field type="String">Indicates the app was just inserted in the document /field>
        Inserted: "inserted",
        ///<field type="String">Indicated if the extension already existed in the document</field>
        DocumentOpened: "documentOpened"
    },
    Office,
    {
        hosts: ["not outlook; not outlookcompose"]
    }
);

Office._addEnumOnObject("ValueFormat",
    {
        ///<field type="String">Returns items with format</field>
        Formatted: "formatted",
        ///<field type="String">Returns items without format</field>
        Unformatted: "unformatted"
    },
    Office,
    {
        hosts: ["not outlook; not outlookcompose"]
    }
);

Office._processContents(Office, {
    GoToType: {
        contents: {
            Binding: {
                conditions: {
                    hosts: ["excel", "word"]
                },
                annotate: {
                    ///<field type="String">Goes to a binding object using the specified binding id.</field>
                    Binding: undefined
                },
                value: "binding"
            },
            NamedItem: {
                conditions: {
                    hosts: ["excel"]
                },
                annotate: {
                    /// <field type="String">
                    /// Goes to a named item using that item's name.
                    /// &#10; In Excel, you can use any structured reference for a named range or table: "Worksheet2!Table1"
                    /// </field>
                    NamedItem: undefined
                },
                value: "namedItem"
            },
            Slide: {
                conditions: {
                    hosts: ["ppt"]
                },
                annotate: {
                    ///<field type="String">Goes to a slide using the specified id.</field>
                    Slide: undefined
                },
                value: "slide"
            },
            Index: {
                conditions: {
                    hosts: ["ppt"]
                },
                annotate: {
                    ///<field type="String">Goes to the specified index by slide number or enum Office.Index</field>
                    Index: undefined
                },
                value: "index"
            }
        }
    }
});

Office._addEnumOnObject("Index",
    {
        First: "first",
        Last: "last",
        Next: "next",
        Previous: "previous"
    },
    Office,
    {
        hosts: ["ppt"]
    }
);

Office._addEnumOnObject("SelectionMode",
    {
        Default: "default",
        Selected: "selected",
        None: "none"
    },
    Office,
    {
        hosts: ["word"]
    }
);

Office.context.diagnostics = {
    __proto__: null,
    host: "",
    platform: "",
    version: ""
};

if (!!intellisense) {
    intellisense.addEventListener('statementcompletion', function (event) {
        if (event.targetName === "this" || event.target === undefined || event.target === window) return;
        event.items = event.items.filter(function (item) {
            return !(item.name && item.name.charAt(0) === "_");
        });
    });
}

Office._processContents(Office, Office._items);

document.addEventListener("DOMContentLoaded", function () {
    Office.initialize();
});



var __extends = this.__extends || function (d, b) {
	for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	function __() { this.constructor = d; }
	__.prototype = b.prototype;
	d.prototype = new __();
};

var OfficeExtension;
(function (OfficeExtension) {
	var ClientObject = (function () {
		function ClientObject() {
			/// <field name="isNullObject" type="Boolean">Returns a boolean value for whether the corresponding object is a null object. You must call "context.sync()" before reading the isNullObject property.</field>
		}
		return ClientObject;
	})();
	OfficeExtension.ClientObject = ClientObject;
})(OfficeExtension || (OfficeExtension = {__proto__: null}));

var OfficeExtension;
(function (OfficeExtension) {
	var ClientRequestContext = (function () {
		function ClientRequestContext(url) {
			/// <summary>
			/// An abstract RequestContext object that facilitates requests to the host Office application. The "Excel.run" and "Word.run" methods provide a request context.
			/// </summary>
			/// <field name="trackedObjects" type="OfficeExtension.TrackedObjects"> Collection of objects that are tracked for automatic adjustments based on surrounding changes in the document. </field>
			/// <field name="requestHeaders" type="Object">Request headers.</field>
			this.requestHeaders = {
				__proto__: null,
			};
		}
		ClientRequestContext.prototype.load = function (object, option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="object" type="OfficeExtension.ClientObject" />
			/// <param name="option" type="string|string[]|{select?, expand?, top?, skip?}" />
		};
		ClientRequestContext.prototype.loadRecursive = function (object, options, maxDepth) {
			/// <summary>
			/// Queues up a command to recursively load the specified properties of the object and its navigation properties. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="object" type="OfficeExtension.ClientObject">The object to be loaded.</param>
			/// <param name="option" type="string|string[]|{select?, expand?, top?, skip?}">
			///     The key-value pairing of load options for the types, such as { "Workbook": "worksheets,tables",  "Worksheet": "tables",  "Tables": "name" }
			/// </param>
			/// <param name="maxDepth" type="Number" optional="true">The maximum recursive depth.</param>
		};
		ClientRequestContext.prototype.trace = function (message) {
			/// <summary>
			/// Adds a trace message to the queue. If the promise returned by "context.sync()" is rejected due to an error, this adds a ".traceMessages" array to the OfficeExtension.Error object, containing all trace messages that were executed. These messages can help you monitor the program execution sequence and detect the cause of the error.
			/// </summary>
			/// <param name="message" type="String" />
		};
		ClientRequestContext.prototype.sync = function (passThroughValue) {
			/// <summary>
			/// Synchronizes the state between JavaScript proxy objects and the Office document, by executing instructions queued on the request context and retrieving properties of loaded Office objects for use in your code.�This method returns a promise, which is resolved when the synchronization is complete.
			/// </summary>
			/// <param name="passThroughValue" optional="true" />
			return new OfficeExtension.Promise();
		};
		ClientRequestContext.prototype.__proto__ = null;
		return ClientRequestContext;
	})();
	OfficeExtension.ClientRequestContext = ClientRequestContext;
})(OfficeExtension || (OfficeExtension = {__proto__: null}));

var OfficeExtension;
(function (OfficeExtension) {
	var ClientResult = (function () {
		function ClientResult() {
			/// <summary>
			/// Contains the result for methods that return primitive types. The object's value property is retrieved from the document after "context.sync()" is invoked.
			/// </summary>
			/// <field name="value">
			/// The value of the result that is retrieved from the document after "context.sync()" is invoked.
			/// </field>
		}
		ClientResult.prototype.__proto__ = null;
		return ClientResult;
	})();
	OfficeExtension.ClientResult = ClientResult;
})(OfficeExtension || (OfficeExtension = {__proto__: null}));

var OfficeExtension;
(function (OfficeExtension) {
	var DebugInfo = (function () {
		function DebugInfo() {
			/// <summary>
			/// Debug info (useful for detailed logging of the error, i.e., via JSON.stringify(...)).
			/// </summary>
			/// <field name="code" type="String">
			/// Error code string, such as "InvalidArgument".
			/// </field>
			/// <field name="message" type="String">
			/// The error message passed through from the host Office application.
			/// </field>
			/// <field name="innerError" type="DebugInfo|String">
			/// Inner error, if applicable.
			/// </field>

			/// <field name="errorLocation" type="String">
			/// The object type and property or method name (or similar information), if available.
			/// </field>
		}
		DebugInfo.prototype.__proto__ = null;
		return DebugInfo;
	})();
	OfficeExtension.DebugInfo = DebugInfo;

	var Error = (function () {
		function Error() {
			/// <summary>
			/// The error object returned by "context.sync()", if a promise is rejected due to an error while processing the request.
			/// </summary>
			/// <field name="name" type="String">
			/// Error name: "OfficeExtension.Error"
			/// </field>
			/// <field name="message" type="String">
			/// The error message passed through from the host Office application.
			/// </field>
			/// <field name="stack" type="String">
			/// Stack trace, if applicable.
			/// </field>
			/// <field name="code" type="String">
			/// Error code string, such as "InvalidArgument".
			/// </field>
			/// <field name="traceMessages" type="Array" elementType="string">
			/// Trace messages (if any) that were added via a "context.trace()" invocation before calling "context.sync()". If there was an error, this contains all trace messages that were executed before the error occurred. These messages can help you monitor the program execution sequence and detect the case of the error.
			/// </field>
			/// <field name="debugInfo" type="OfficeExtension.DebugInfo">
			/// Debug info (useful for detailed logging of the error, i.e., via JSON.stringify(...)).
			/// </field>
			/// <field name="innerError" type="Error">
			/// Inner error, if applicable.
			/// </field>
		}
		Error.prototype.__proto__ = null;
		return Error;
	})();
	OfficeExtension.Error = Error;
})(OfficeExtension || (OfficeExtension = {__proto__: null}));

var OfficeExtension;
(function (OfficeExtension) {
	var ErrorCodes = (function () {
		function ErrorCodes() {
		}
		ErrorCodes.__proto__ = null;
		ErrorCodes.accessDenied = "";
		ErrorCodes.generalException = "";
		ErrorCodes.activityLimitReached = "";
		ErrorCodes.invalidObjectPath = "";
		ErrorCodes.propertyNotLoaded = "";
		ErrorCodes.valueNotLoaded = "";
		ErrorCodes.invalidRequestContext = "";
		ErrorCodes.invalidArgument = "";
		ErrorCodes.runMustReturnPromise = "";
		ErrorCodes.cannotRegisterEvent = "";
		ErrorCodes.apiNotFound = "";
		ErrorCodes.connectionFailure = "";
		return ErrorCodes;
	})();
	OfficeExtension.ErrorCodes = ErrorCodes;
})(OfficeExtension || (OfficeExtension = {__proto__: null}));

var OfficeExtension;
(function (OfficeExtension) {
	var Promise = (function () {
		/// <summary>
		/// Creates a promise that resolves when all of the child promises resolve.
		/// </summary>
		Promise.all = function (promises) { return [new OfficeExtension.Promise()]; };
		/// <summary>
		/// Creates a promise that is resolved.
		/// </summary>
		Promise.resolve = function (value) { return new OfficeExtension.Promise(); };
		/// <summary>
		/// Creates a promise that is rejected.
		/// </summary>
		Promise.reject = function (error) { return new OfficeExtension.Promise(); };
		/// <summary>
		/// A Promise object that represents a deferred interaction with the host Office application. The publically-consumable OfficeExtension.Promise is available starting in ExcelApi 1.2 and WordApi 1.2. Promises can be chained via ".then", and errors can be caught via ".catch". Remember to always use a ".catch" on the outer promise, and to return intermediary promises so as not to break the promise chain. When a "native" Promise implementation is available, OfficeExtension.Promise will switch to use the native Promise instead.
		/// </summary>
		Promise.prototype.then = function (onFulfilled, onRejected) {
			/// <summary>
			/// This method will be called once the previous promise has been resolved.
			/// Both the onFulfilled on onRejected callbacks are optional.
			/// If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.
			/// Returns a new promise for the value or error that was returned from onFulfilled/onRejected.
			/// </summary>
			/// <param name="onFulfilled" type="Function" optional="true"></param>
			/// <param name="onRejected" type="Function" optional="true"></param>
			/// <returns type="OfficeExtension.Promise"></returns>
			onRejected(new Error());
		}
		Promise.prototype.catch = function (onRejected) {
			/// <summary>
			/// Catches failures or exceptions from actions within the promise, or from an unhandled exception earlier in the call stack.
			/// </summary>
			/// <param name="onRejected" type="Function" optional="true">function to be called if or when the promise rejects.</param>
			/// <returns type="OfficeExtension.Promise"></returns>
			onRejected(new Error());
		}
		Promise.prototype.__proto__ = null;
	})
	OfficeExtension.Promise = Promise;
})(OfficeExtension || (OfficeExtension = {__proto__: null}));

var OfficeExtension;
(function (OfficeExtension) {
	var TrackedObjects = (function () {
		function TrackedObjects() {
			/// <summary>
			/// Collection of tracked objects, contained within a request context. See "context.trackedObjects" for more information.
			/// </summary>
		}
		TrackedObjects.prototype.add = function (object) {
			/// <summary>
			/// Track a new object for automatic adjustment based on surrounding changes in the document. Only some object types require this. If you are using an object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <param name="object" type="OfficeExtension.ClientObject|OfficeExtension.ClientObject[]"></param>
		};
		TrackedObjects.prototype.remove = function (object) {
			/// <summary>
			/// Release the memory associated with an object that was previously added to this collection. Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <param name="object" type="OfficeExtension.ClientObject|OfficeExtension.ClientObject[]"></param>
		};
		TrackedObjects.prototype.__proto__ = null;
		return TrackedObjects;
	})();
	OfficeExtension.TrackedObjects = TrackedObjects;
})(OfficeExtension || (OfficeExtension = {__proto__: null}));

(function (OfficeExtension) {
	var EventHandlers = (function () {
		function EventHandlers() { }
		EventHandlers.prototype.add = function (handler) {
			return new EventHandlerResult(null, null, handler);
		};
		EventHandlers.prototype.remove = function (handler) { };
		EventHandlers.prototype.__proto__ = null;
		return EventHandlers;
	}());
	OfficeExtension.EventHandlers = EventHandlers;

	var EventHandlerResult = (function () {
		function EventHandlerResult() { }
		EventHandlerResult.prototype.remove = function () { };
		EventHandlerResult.prototype.__proto__ = null;
		return EventHandlerResult;
	}());
	OfficeExtension.EventHandlerResult = EventHandlerResult;
})(OfficeExtension || (OfficeExtension = {__proto__: null}));

OfficeExtension.__proto__ = null;



var OfficeCore;
(function (OfficeCore) {
	var RequestContext = (function (_super) {
		__extends(RequestContext, _super);
		function RequestContext() {
			/// <summary>
			/// The RequestContext object facilitates requests to the OfficeCore application. Since the Office add-in and the OfficeCore application run in two different processes, the request context is required to get access to the OfficeCore object model from the add-in.
			/// </summary>
			_super.call(this, null);
		}
		return RequestContext;
	})(OfficeExtension.ClientRequestContext);
	OfficeCore.RequestContext = RequestContext;

	OfficeCore.run = function (batch) {
		/// <signature>
		/// <summary>
		/// Executes a batch script that performs actions on the OfficeCore object model, using a new RequestContext. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
		/// </summary>
		/// <param name="batch" type="function(context) { ... }">
		/// A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()").
		/// <br />
		/// The context parameter facilitates requests to the OfficeCore application. Since the Office add-in and the OfficeCore application run in two different processes, the RequestContext is required to get access to the OfficeCore object model from the add-in.
		/// </param>
		/// </signature>
		/// <signature>
		/// <summary>
		/// Executes a batch script that performs actions on the OfficeCore object model, using the RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
		/// </summary>
		/// <param name="object" type="OfficeExtension.ClientObject">
		/// A previously-created API object. The batch will use the same RequestContext as the passed-in object, which means that any changes applied to the object will be picked up by "context.sync()".
		/// </param>
		/// <param name="batch" type="function(context) { ... }">
		/// A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()").
		/// <br />
		/// The context parameter facilitates requests to the OfficeCore application. Since the Office add-in and the OfficeCore application run in two different processes, the RequestContext is required to get access to the OfficeCore object model from the add-in.
		/// </param>
		/// </signature>
		/// <signature>
		/// <summary>
		/// Executes a batch script that performs actions on the OfficeCore object model, using the RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
		/// </summary>
		/// <param name="objects" type="Array&lt;OfficeExtension.ClientObject&gt;">
		/// An array of previously-created API objects. The array will be validated to make sure that all of the objects share the same context. The batch will use this shared RequestContext, which means that any changes applied to these objects will be picked up by "context.sync()".
		/// </param>
		/// <param name="batch" type="function(context) { ... }">
		/// A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()").
		/// <br />
		/// The context parameter facilitates requests to the OfficeCore application. Since the Office add-in and the OfficeCore application run in two different processes, the RequestContext is required to get access to the OfficeCore object model from the add-in.
		/// </param>
		/// </signature>
		arguments[arguments.length - 1](new OfficeCore.RequestContext());
		return new OfficeExtension.Promise();
	}
})(OfficeCore || (OfficeCore = {__proto__: null}));
OfficeCore.__proto__ = null;



var Excel;
(function (Excel) {
	var Application = (function(_super) {
		__extends(Application, _super);
		function Application() {
			/// <summary> Represents the Excel application that manages the workbook. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="calculationMode" type="String">Returns the calculation mode used in the workbook. See Excel.CalculationMode for details. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		Application.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.Application"/>
		}
		Application.prototype.calculate = function(calculationType) {
			/// <summary>
			/// Recalculate all currently opened workbooks in Excel. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="calculationType" type="String">Specifies the calculation type to use. See Excel.CalculationType for details.</param>
			/// <returns ></returns>
		}
		Application.prototype.suspendApiCalculationUntilNextSync = function() {
			/// <summary>
			/// Suspends calculation until the next &quot;context.sync()&quot; is called. Once set, it is the developer&apos;s responsibility to re-calc the workbook, to ensure that any dependencies are propagated. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <returns ></returns>
		}

		return Application;
	})(OfficeExtension.ClientObject);
	Excel.Application = Application;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Binding = (function(_super) {
		__extends(Binding, _super);
		function Binding() {
			/// <summary> Represents an Office.js binding that is defined in the workbook. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="id" type="String">Represents binding identifier. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="type" type="String">Returns the type of the binding. See Excel.BindingType for details. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="onDataChanged" type="OfficeExtension.EventHandlers">Occurs when data or formatting within the binding is changed. [Api set: ExcelApi 1.2]</field>
			/// <field name="onSelectionChanged" type="OfficeExtension.EventHandlers">Occurs when the selection is changed within the binding. [Api set: ExcelApi 1.2]</field>
		}

		Binding.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.Binding"/>
		}
		Binding.prototype.delete = function() {
			/// <summary>
			/// Deletes the binding. [Api set: ExcelApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		Binding.prototype.getRange = function() {
			/// <summary>
			/// Returns the range represented by the binding. Will throw an error if binding is not of the correct type. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Binding.prototype.getTable = function() {
			/// <summary>
			/// Returns the table represented by the binding. Will throw an error if binding is not of the correct type. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Table"></returns>
		}
		Binding.prototype.getText = function() {
			/// <summary>
			/// Returns the text represented by the binding. Will throw an error if binding is not of the correct type. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		Binding.prototype.onDataChanged = {
			__proto__: null,
			add: function (handler) {
				/// <param name="handler" type="function(eventArgs: Excel.Interfaces.BindingDataChangedEventArgs)">Handler for the event. EventArgs: Provides information about the binding that raised the DataChanged event. </param>
				/// <returns type="OfficeExtension.EventHandlerResult"></returns>
				var eventInfo = new Excel.Interfaces.BindingDataChangedEventArgs();
				eventInfo.__proto__ = null;
				handler(eventInfo);
			},
			remove: function (handler) {
				/// <param name="handler" type="function(eventArgs: Excel.Interfaces.BindingDataChangedEventArgs)">Handler for the event.</param>
				return;
			}
		};
		Binding.prototype.onSelectionChanged = {
			__proto__: null,
			add: function (handler) {
				/// <param name="handler" type="function(eventArgs: Excel.Interfaces.BindingSelectionChangedEventArgs)">Handler for the event. EventArgs: Provides information about the binding that raised the SelectionChanged event. </param>
				/// <returns type="OfficeExtension.EventHandlerResult"></returns>
				var eventInfo = new Excel.Interfaces.BindingSelectionChangedEventArgs();
				eventInfo.__proto__ = null;
				handler(eventInfo);
			},
			remove: function (handler) {
				/// <param name="handler" type="function(eventArgs: Excel.Interfaces.BindingSelectionChangedEventArgs)">Handler for the event.</param>
				return;
			}
		};

		return Binding;
	})(OfficeExtension.ClientObject);
	Excel.Binding = Binding;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var BindingCollection = (function(_super) {
		__extends(BindingCollection, _super);
		function BindingCollection() {
			/// <summary> Represents the collection of all the binding objects that are part of the workbook. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="count" type="Number">Returns the number of bindings in the collection. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="items" type="Array" elementType="Excel.Binding">Gets the loaded child items in this collection.</field>
		}

		BindingCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.BindingCollection"/>
		}
		BindingCollection.prototype.add = function(range, bindingType, id) {
			/// <summary>
			/// Add a new binding to a particular Range. [Api set: ExcelApi 1.3]
			/// </summary>
			/// <param name="range" >Range to bind the binding to. May be an Excel Range object, or a string. If string, must contain the full address, including the sheet name</param>
			/// <param name="bindingType" type="String">Type of binding. See Excel.BindingType.</param>
			/// <param name="id" type="String">Name of binding.</param>
			/// <returns type="Excel.Binding"></returns>
		}
		BindingCollection.prototype.addFromNamedItem = function(name, bindingType, id) {
			/// <summary>
			/// Add a new binding based on a named item in the workbook. [Api set: ExcelApi 1.3]
			/// </summary>
			/// <param name="name" type="String">Name from which to create binding.</param>
			/// <param name="bindingType" type="String">Type of binding. See Excel.BindingType.</param>
			/// <param name="id" type="String">Name of binding.</param>
			/// <returns type="Excel.Binding"></returns>
		}
		BindingCollection.prototype.addFromSelection = function(bindingType, id) {
			/// <summary>
			/// Add a new binding based on the current selection. [Api set: ExcelApi 1.3]
			/// </summary>
			/// <param name="bindingType" type="String">Type of binding. See Excel.BindingType.</param>
			/// <param name="id" type="String">Name of binding.</param>
			/// <returns type="Excel.Binding"></returns>
		}
		BindingCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the number of bindings in the collection. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		BindingCollection.prototype.getItem = function(id) {
			/// <summary>
			/// Gets a binding object by ID. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="id" type="String">Id of the binding object to be retrieved.</param>
			/// <returns type="Excel.Binding"></returns>
		}
		BindingCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Gets a binding object based on its position in the items array. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="index" type="Number">Index value of the object to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.Binding"></returns>
		}
		BindingCollection.prototype.getItemOrNullObject = function(id) {
			/// <summary>
			/// Gets a binding object by ID. If the binding object does not exist, will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="id" type="String">Id of the binding object to be retrieved.</param>
			/// <returns type="Excel.Binding"></returns>
		}

		return BindingCollection;
	})(OfficeExtension.ClientObject);
	Excel.BindingCollection = BindingCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var BindingDataChangedEventArgs = (function() {
			function BindingDataChangedEventArgs() {
				/// <summary> Provides information about the binding that raised the DataChanged event. [Api set: ExcelApi 1.2] </summary>
				/// <field name="binding" type="Excel.Binding">Gets the Binding object that represents the binding that raised the DataChanged event. [Api set: ExcelApi 1.2]</field>
			}
			return BindingDataChangedEventArgs;
		})();
		Interfaces.BindingDataChangedEventArgs.__proto__ = null;
		Interfaces.BindingDataChangedEventArgs = BindingDataChangedEventArgs;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var BindingSelectionChangedEventArgs = (function() {
			function BindingSelectionChangedEventArgs() {
				/// <summary> Provides information about the binding that raised the SelectionChanged event. [Api set: ExcelApi 1.2] </summary>
				/// <field name="binding" type="Excel.Binding">Gets the Binding object that represents the binding that raised the SelectionChanged event. [Api set: ExcelApi 1.2]</field>
				/// <field name="columnCount" type="Number">Gets the number of columns selected. [Api set: ExcelApi 1.2]</field>
				/// <field name="rowCount" type="Number">Gets the number of rows selected. [Api set: ExcelApi 1.2]</field>
				/// <field name="startColumn" type="Number">Gets the index of the first column of the selection (zero-based). [Api set: ExcelApi 1.2]</field>
				/// <field name="startRow" type="Number">Gets the index of the first row of the selection (zero-based). [Api set: ExcelApi 1.2]</field>
			}
			return BindingSelectionChangedEventArgs;
		})();
		Interfaces.BindingSelectionChangedEventArgs.__proto__ = null;
		Interfaces.BindingSelectionChangedEventArgs = BindingSelectionChangedEventArgs;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var BindingType = {
		__proto__: null,
		"range": "range",
		"table": "table",
		"text": "text",
	}
	Excel.BindingType = BindingType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var BorderIndex = {
		__proto__: null,
		"edgeTop": "edgeTop",
		"edgeBottom": "edgeBottom",
		"edgeLeft": "edgeLeft",
		"edgeRight": "edgeRight",
		"insideVertical": "insideVertical",
		"insideHorizontal": "insideHorizontal",
		"diagonalDown": "diagonalDown",
		"diagonalUp": "diagonalUp",
	}
	Excel.BorderIndex = BorderIndex;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var BorderLineStyle = {
		__proto__: null,
		"none": "none",
		"continuous": "continuous",
		"dash": "dash",
		"dashDot": "dashDot",
		"dashDotDot": "dashDotDot",
		"dot": "dot",
		"double": "double",
		"slantDashDot": "slantDashDot",
	}
	Excel.BorderLineStyle = BorderLineStyle;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var BorderWeight = {
		__proto__: null,
		"hairline": "hairline",
		"thin": "thin",
		"medium": "medium",
		"thick": "thick",
	}
	Excel.BorderWeight = BorderWeight;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var CalculationMode = {
		__proto__: null,
		"automatic": "automatic",
		"automaticExceptTables": "automaticExceptTables",
		"manual": "manual",
	}
	Excel.CalculationMode = CalculationMode;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var CalculationType = {
		__proto__: null,
		"recalculate": "recalculate",
		"full": "full",
		"fullRebuild": "fullRebuild",
	}
	Excel.CalculationType = CalculationType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var CellValueConditionalFormat = (function(_super) {
		__extends(CellValueConditionalFormat, _super);
		function CellValueConditionalFormat() {
			/// <summary> Represents a cell value conditional format. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ConditionalRangeFormat">Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="rule" type="Excel.Interfaces.ConditionalCellValueRule">Represents the Rule object on this conditional format. [Api set: ExcelApi 1.6]</field>
		}

		CellValueConditionalFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.CellValueConditionalFormat"/>
		}

		CellValueConditionalFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.CellValueConditionalFormatUpdateData">Properties described by the Excel.Interfaces.CellValueConditionalFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="CellValueConditionalFormat">An existing CellValueConditionalFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return CellValueConditionalFormat;
	})(OfficeExtension.ClientObject);
	Excel.CellValueConditionalFormat = CellValueConditionalFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Chart = (function(_super) {
		__extends(Chart, _super);
		function Chart() {
			/// <summary> Represents a chart object in a workbook. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="axes" type="Excel.ChartAxes">Represents chart axes. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="dataLabels" type="Excel.ChartDataLabels">Represents the datalabels on the chart. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="format" type="Excel.ChartAreaFormat">Encapsulates the format properties for the chart area. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="height" type="Number">Represents the height, in points, of the chart object. [Api set: ExcelApi 1.1]</field>
			/// <field name="left" type="Number">The distance, in points, from the left side of the chart to the worksheet origin. [Api set: ExcelApi 1.1]</field>
			/// <field name="legend" type="Excel.ChartLegend">Represents the legend for the chart. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="name" type="String">Represents the name of a chart object. [Api set: ExcelApi 1.1]</field>
			/// <field name="series" type="Excel.ChartSeriesCollection">Represents either a single series or collection of series in the chart. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="title" type="Excel.ChartTitle">Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="top" type="Number">Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart). [Api set: ExcelApi 1.1]</field>
			/// <field name="width" type="Number">Represents the width, in points, of the chart object. [Api set: ExcelApi 1.1]</field>
			/// <field name="worksheet" type="Excel.Worksheet">The worksheet containing the current chart. Read-only. [Api set: ExcelApi 1.2]</field>
		}

		Chart.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.Chart"/>
		}

		Chart.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartUpdateData">Properties described by the Excel.Interfaces.ChartUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Chart">An existing Chart object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Chart.prototype.delete = function() {
			/// <summary>
			/// Deletes the chart object. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		Chart.prototype.getImage = function(width, height, fittingMode) {
			/// <summary>
			/// Renders the chart as a base64-encoded image by scaling the chart to fit the specified dimensions.              The aspect ratio is preserved as part of the resizing. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="height" type="Number" optional="true">(Optional) The desired height of the resulting image.</param>
			/// <param name="width" type="Number" optional="true">(Optional) The desired width of the resulting image.</param>
			/// <param name="fittingMode" type="String" optional="true">(Optional) The method used to scale the chart to the specified to the specified dimensions (if both height and width are set).&quot;</param>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		Chart.prototype.setData = function(sourceData, seriesBy) {
			/// <summary>
			/// Resets the source data for the chart. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="sourceData" >The Range object corresponding to the source data.</param>
			/// <param name="seriesBy" type="String" optional="true">Specifies the way columns or rows are used as data series on the chart. Can be one of the following: Auto (default), Rows, Columns. See Excel.ChartSeriesBy for details.</param>
			/// <returns ></returns>
		}
		Chart.prototype.setPosition = function(startCell, endCell) {
			/// <summary>
			/// Positions the chart relative to cells on the worksheet. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="startCell" >The start cell. This is where the chart will be moved to. The start cell is the top-left or top-right cell, depending on the user&apos;s right-to-left display settings.</param>
			/// <param name="endCell"  optional="true">(Optional) The end cell. If specified, the chart&apos;s width and height will be set to fully cover up this cell/range.</param>
			/// <returns ></returns>
		}

		return Chart;
	})(OfficeExtension.ClientObject);
	Excel.Chart = Chart;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartAreaFormat = (function(_super) {
		__extends(ChartAreaFormat, _super);
		function ChartAreaFormat() {
			/// <summary> Encapsulates the format properties for the overall chart area. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="fill" type="Excel.ChartFill">Represents the fill format of an object, which includes background formatting information. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="font" type="Excel.ChartFont">Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartAreaFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartAreaFormat"/>
		}

		ChartAreaFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartAreaFormatUpdateData">Properties described by the Excel.Interfaces.ChartAreaFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartAreaFormat">An existing ChartAreaFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartAreaFormat;
	})(OfficeExtension.ClientObject);
	Excel.ChartAreaFormat = ChartAreaFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartAxes = (function(_super) {
		__extends(ChartAxes, _super);
		function ChartAxes() {
			/// <summary> Represents the chart axes. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="categoryAxis" type="Excel.ChartAxis">Represents the category axis in a chart. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="seriesAxis" type="Excel.ChartAxis">Represents the series axis of a 3-dimensional chart. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="valueAxis" type="Excel.ChartAxis">Represents the value axis in an axis. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartAxes.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartAxes"/>
		}

		ChartAxes.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartAxesUpdateData">Properties described by the Excel.Interfaces.ChartAxesUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartAxes">An existing ChartAxes object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartAxes;
	})(OfficeExtension.ClientObject);
	Excel.ChartAxes = ChartAxes;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartAxis = (function(_super) {
		__extends(ChartAxis, _super);
		function ChartAxis() {
			/// <summary> Represents a single axis in a chart. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ChartAxisFormat">Represents the formatting of a chart object, which includes line and font formatting. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="majorGridlines" type="Excel.ChartGridlines">Returns a gridlines object that represents the major gridlines for the specified axis. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="majorUnit" >Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number. [Api set: ExcelApi 1.1]</field>
			/// <field name="maximum" >Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number. [Api set: ExcelApi 1.1]</field>
			/// <field name="minimum" >Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number. [Api set: ExcelApi 1.1]</field>
			/// <field name="minorGridlines" type="Excel.ChartGridlines">Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="minorUnit" >Represents the interval between two minor tick marks. &quot;Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number. [Api set: ExcelApi 1.1]</field>
			/// <field name="title" type="Excel.ChartAxisTitle">Represents the axis title. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartAxis.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartAxis"/>
		}

		ChartAxis.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartAxisUpdateData">Properties described by the Excel.Interfaces.ChartAxisUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartAxis">An existing ChartAxis object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartAxis;
	})(OfficeExtension.ClientObject);
	Excel.ChartAxis = ChartAxis;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartAxisFormat = (function(_super) {
		__extends(ChartAxisFormat, _super);
		function ChartAxisFormat() {
			/// <summary> Encapsulates the format properties for the chart axis. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="font" type="Excel.ChartFont">Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="line" type="Excel.ChartLineFormat">Represents chart line formatting. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartAxisFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartAxisFormat"/>
		}

		ChartAxisFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartAxisFormatUpdateData">Properties described by the Excel.Interfaces.ChartAxisFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartAxisFormat">An existing ChartAxisFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartAxisFormat;
	})(OfficeExtension.ClientObject);
	Excel.ChartAxisFormat = ChartAxisFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartAxisTitle = (function(_super) {
		__extends(ChartAxisTitle, _super);
		function ChartAxisTitle() {
			/// <summary> Represents the title of a chart axis. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ChartAxisTitleFormat">Represents the formatting of chart axis title. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="text" type="String">Represents the axis title. [Api set: ExcelApi 1.1]</field>
			/// <field name="visible" type="Boolean">A boolean that specifies the visibility of an axis title. [Api set: ExcelApi 1.1]</field>
		}

		ChartAxisTitle.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartAxisTitle"/>
		}

		ChartAxisTitle.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartAxisTitleUpdateData">Properties described by the Excel.Interfaces.ChartAxisTitleUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartAxisTitle">An existing ChartAxisTitle object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartAxisTitle;
	})(OfficeExtension.ClientObject);
	Excel.ChartAxisTitle = ChartAxisTitle;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartAxisTitleFormat = (function(_super) {
		__extends(ChartAxisTitleFormat, _super);
		function ChartAxisTitleFormat() {
			/// <summary> Represents the chart axis title formatting. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="font" type="Excel.ChartFont">Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartAxisTitleFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartAxisTitleFormat"/>
		}

		ChartAxisTitleFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartAxisTitleFormatUpdateData">Properties described by the Excel.Interfaces.ChartAxisTitleFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartAxisTitleFormat">An existing ChartAxisTitleFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartAxisTitleFormat;
	})(OfficeExtension.ClientObject);
	Excel.ChartAxisTitleFormat = ChartAxisTitleFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartCollection = (function(_super) {
		__extends(ChartCollection, _super);
		function ChartCollection() {
			/// <summary> A collection of all the chart objects on a worksheet. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="count" type="Number">Returns the number of charts in the worksheet. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="items" type="Array" elementType="Excel.Chart">Gets the loaded child items in this collection.</field>
		}

		ChartCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartCollection"/>
		}
		ChartCollection.prototype.add = function(type, sourceData, seriesBy) {
			/// <summary>
			/// Creates a new chart. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="type" type="String">Represents the type of a chart. See Excel.ChartType for details.</param>
			/// <param name="sourceData" >The Range object corresponding to the source data.</param>
			/// <param name="seriesBy" type="String" optional="true">Specifies the way columns or rows are used as data series on the chart. See Excel.ChartSeriesBy for details.</param>
			/// <returns type="Excel.Chart"></returns>
		}
		ChartCollection.prototype.getCount = function() {
			/// <summary>
			/// Returns the number of charts in the worksheet. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		ChartCollection.prototype.getItem = function(name) {
			/// <summary>
			/// Gets a chart using its name. If there are multiple charts with the same name, the first one will be returned. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="name" type="String">Name of the chart to be retrieved.</param>
			/// <returns type="Excel.Chart"></returns>
		}
		ChartCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Gets a chart based on its position in the collection. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="index" type="Number">Index value of the object to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.Chart"></returns>
		}
		ChartCollection.prototype.getItemOrNullObject = function(name) {
			/// <summary>
			/// Gets a chart using its name. If there are multiple charts with the same name, the first one will be returned.              If the chart does not exist, will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="name" type="String">Name of the chart to be retrieved.</param>
			/// <returns type="Excel.Chart"></returns>
		}

		return ChartCollection;
	})(OfficeExtension.ClientObject);
	Excel.ChartCollection = ChartCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartDataLabelFormat = (function(_super) {
		__extends(ChartDataLabelFormat, _super);
		function ChartDataLabelFormat() {
			/// <summary> Encapsulates the format properties for the chart data labels. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="fill" type="Excel.ChartFill">Represents the fill format of the current chart data label. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="font" type="Excel.ChartFont">Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartDataLabelFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartDataLabelFormat"/>
		}

		ChartDataLabelFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartDataLabelFormatUpdateData">Properties described by the Excel.Interfaces.ChartDataLabelFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartDataLabelFormat">An existing ChartDataLabelFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartDataLabelFormat;
	})(OfficeExtension.ClientObject);
	Excel.ChartDataLabelFormat = ChartDataLabelFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var ChartDataLabelPosition = {
		__proto__: null,
		"invalid": "invalid",
		"none": "none",
		"center": "center",
		"insideEnd": "insideEnd",
		"insideBase": "insideBase",
		"outsideEnd": "outsideEnd",
		"left": "left",
		"right": "right",
		"top": "top",
		"bottom": "bottom",
		"bestFit": "bestFit",
		"callout": "callout",
	}
	Excel.ChartDataLabelPosition = ChartDataLabelPosition;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartDataLabels = (function(_super) {
		__extends(ChartDataLabels, _super);
		function ChartDataLabels() {
			/// <summary> Represents a collection of all the data labels on a chart point. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ChartDataLabelFormat">Represents the format of chart data labels, which includes fill and font formatting. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="position" type="String">DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details. [Api set: ExcelApi 1.1]</field>
			/// <field name="separator" type="String">String representing the separator used for the data labels on a chart. [Api set: ExcelApi 1.1]</field>
			/// <field name="showBubbleSize" type="Boolean">Boolean value representing if the data label bubble size is visible or not. [Api set: ExcelApi 1.1]</field>
			/// <field name="showCategoryName" type="Boolean">Boolean value representing if the data label category name is visible or not. [Api set: ExcelApi 1.1]</field>
			/// <field name="showLegendKey" type="Boolean">Boolean value representing if the data label legend key is visible or not. [Api set: ExcelApi 1.1]</field>
			/// <field name="showPercentage" type="Boolean">Boolean value representing if the data label percentage is visible or not. [Api set: ExcelApi 1.1]</field>
			/// <field name="showSeriesName" type="Boolean">Boolean value representing if the data label series name is visible or not. [Api set: ExcelApi 1.1]</field>
			/// <field name="showValue" type="Boolean">Boolean value representing if the data label value is visible or not. [Api set: ExcelApi 1.1]</field>
		}

		ChartDataLabels.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartDataLabels"/>
		}

		ChartDataLabels.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartDataLabelsUpdateData">Properties described by the Excel.Interfaces.ChartDataLabelsUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartDataLabels">An existing ChartDataLabels object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartDataLabels;
	})(OfficeExtension.ClientObject);
	Excel.ChartDataLabels = ChartDataLabels;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartFill = (function(_super) {
		__extends(ChartFill, _super);
		function ChartFill() {
			/// <summary> Represents the fill formatting for a chart element. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
		}

		ChartFill.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartFill"/>
		}
		ChartFill.prototype.clear = function() {
			/// <summary>
			/// Clear the fill color of a chart element. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		ChartFill.prototype.setSolidColor = function(color) {
			/// <summary>
			/// Sets the fill formatting of a chart element to a uniform color. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="color" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;).</param>
			/// <returns ></returns>
		}

		return ChartFill;
	})(OfficeExtension.ClientObject);
	Excel.ChartFill = ChartFill;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartFont = (function(_super) {
		__extends(ChartFont, _super);
		function ChartFont() {
			/// <summary> This object represents the font attributes (font name, font size, color, etc.) for a chart object. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="bold" type="Boolean">Represents the bold status of font. [Api set: ExcelApi 1.1]</field>
			/// <field name="color" type="String">HTML color code representation of the text color. E.g. #FF0000 represents Red. [Api set: ExcelApi 1.1]</field>
			/// <field name="italic" type="Boolean">Represents the italic status of the font. [Api set: ExcelApi 1.1]</field>
			/// <field name="name" type="String">Font name (e.g. &quot;Calibri&quot;) [Api set: ExcelApi 1.1]</field>
			/// <field name="size" type="Number">Size of the font (e.g. 11) [Api set: ExcelApi 1.1]</field>
			/// <field name="underline" type="String">Type of underline applied to the font. See Excel.ChartUnderlineStyle for details. [Api set: ExcelApi 1.1]</field>
		}

		ChartFont.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartFont"/>
		}

		ChartFont.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartFontUpdateData">Properties described by the Excel.Interfaces.ChartFontUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartFont">An existing ChartFont object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartFont;
	})(OfficeExtension.ClientObject);
	Excel.ChartFont = ChartFont;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartGridlines = (function(_super) {
		__extends(ChartGridlines, _super);
		function ChartGridlines() {
			/// <summary> Represents major or minor gridlines on a chart axis. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ChartGridlinesFormat">Represents the formatting of chart gridlines. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="visible" type="Boolean">Boolean value representing if the axis gridlines are visible or not. [Api set: ExcelApi 1.1]</field>
		}

		ChartGridlines.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartGridlines"/>
		}

		ChartGridlines.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartGridlinesUpdateData">Properties described by the Excel.Interfaces.ChartGridlinesUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartGridlines">An existing ChartGridlines object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartGridlines;
	})(OfficeExtension.ClientObject);
	Excel.ChartGridlines = ChartGridlines;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartGridlinesFormat = (function(_super) {
		__extends(ChartGridlinesFormat, _super);
		function ChartGridlinesFormat() {
			/// <summary> Encapsulates the format properties for chart gridlines. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="line" type="Excel.ChartLineFormat">Represents chart line formatting. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartGridlinesFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartGridlinesFormat"/>
		}

		ChartGridlinesFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartGridlinesFormatUpdateData">Properties described by the Excel.Interfaces.ChartGridlinesFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartGridlinesFormat">An existing ChartGridlinesFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartGridlinesFormat;
	})(OfficeExtension.ClientObject);
	Excel.ChartGridlinesFormat = ChartGridlinesFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartLegend = (function(_super) {
		__extends(ChartLegend, _super);
		function ChartLegend() {
			/// <summary> Represents the legend in a chart. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ChartLegendFormat">Represents the formatting of a chart legend, which includes fill and font formatting. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="overlay" type="Boolean">Boolean value for whether the chart legend should overlap with the main body of the chart. [Api set: ExcelApi 1.1]</field>
			/// <field name="position" type="String">Represents the position of the legend on the chart. See Excel.ChartLegendPosition for details. [Api set: ExcelApi 1.1]</field>
			/// <field name="visible" type="Boolean">A boolean value the represents the visibility of a ChartLegend object. [Api set: ExcelApi 1.1]</field>
		}

		ChartLegend.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartLegend"/>
		}

		ChartLegend.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartLegendUpdateData">Properties described by the Excel.Interfaces.ChartLegendUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartLegend">An existing ChartLegend object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartLegend;
	})(OfficeExtension.ClientObject);
	Excel.ChartLegend = ChartLegend;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartLegendFormat = (function(_super) {
		__extends(ChartLegendFormat, _super);
		function ChartLegendFormat() {
			/// <summary> Encapsulates the format properties of a chart legend. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="fill" type="Excel.ChartFill">Represents the fill format of an object, which includes background formating information. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="font" type="Excel.ChartFont">Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartLegendFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartLegendFormat"/>
		}

		ChartLegendFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartLegendFormatUpdateData">Properties described by the Excel.Interfaces.ChartLegendFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartLegendFormat">An existing ChartLegendFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartLegendFormat;
	})(OfficeExtension.ClientObject);
	Excel.ChartLegendFormat = ChartLegendFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var ChartLegendPosition = {
		__proto__: null,
		"invalid": "invalid",
		"top": "top",
		"bottom": "bottom",
		"left": "left",
		"right": "right",
		"corner": "corner",
		"custom": "custom",
	}
	Excel.ChartLegendPosition = ChartLegendPosition;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartLineFormat = (function(_super) {
		__extends(ChartLineFormat, _super);
		function ChartLineFormat() {
			/// <summary> Enapsulates the formatting options for line elements. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="color" type="String">HTML color code representing the color of lines in the chart. [Api set: ExcelApi 1.1]</field>
		}

		ChartLineFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartLineFormat"/>
		}

		ChartLineFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartLineFormatUpdateData">Properties described by the Excel.Interfaces.ChartLineFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartLineFormat">An existing ChartLineFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		ChartLineFormat.prototype.clear = function() {
			/// <summary>
			/// Clear the line format of a chart element. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}

		return ChartLineFormat;
	})(OfficeExtension.ClientObject);
	Excel.ChartLineFormat = ChartLineFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartPoint = (function(_super) {
		__extends(ChartPoint, _super);
		function ChartPoint() {
			/// <summary> Represents a point of a series in a chart. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ChartPointFormat">Encapsulates the format properties chart point. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="value" >Returns the value of a chart point. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartPoint.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartPoint"/>
		}

		return ChartPoint;
	})(OfficeExtension.ClientObject);
	Excel.ChartPoint = ChartPoint;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartPointFormat = (function(_super) {
		__extends(ChartPointFormat, _super);
		function ChartPointFormat() {
			/// <summary> Represents formatting object for chart points. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="fill" type="Excel.ChartFill">Represents the fill format of a chart, which includes background formating information. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartPointFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartPointFormat"/>
		}

		return ChartPointFormat;
	})(OfficeExtension.ClientObject);
	Excel.ChartPointFormat = ChartPointFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartPointsCollection = (function(_super) {
		__extends(ChartPointsCollection, _super);
		function ChartPointsCollection() {
			/// <summary> A collection of all the chart points within a series inside a chart. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="count" type="Number">Returns the number of chart points in the series. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="items" type="Array" elementType="Excel.ChartPoint">Gets the loaded child items in this collection.</field>
		}

		ChartPointsCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartPointsCollection"/>
		}
		ChartPointsCollection.prototype.getCount = function() {
			/// <summary>
			/// Returns the number of chart points in the series. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		ChartPointsCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Retrieve a point based on its position within the series. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="index" type="Number">Index value of the object to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.ChartPoint"></returns>
		}

		return ChartPointsCollection;
	})(OfficeExtension.ClientObject);
	Excel.ChartPointsCollection = ChartPointsCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartSeries = (function(_super) {
		__extends(ChartSeries, _super);
		function ChartSeries() {
			/// <summary> Represents a series in a chart. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ChartSeriesFormat">Represents the formatting of a chart series, which includes fill and line formatting. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="name" type="String">Represents the name of a series in a chart. [Api set: ExcelApi 1.1]</field>
			/// <field name="points" type="Excel.ChartPointsCollection">Represents a collection of all points in the series. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartSeries.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartSeries"/>
		}

		ChartSeries.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartSeriesUpdateData">Properties described by the Excel.Interfaces.ChartSeriesUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartSeries">An existing ChartSeries object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartSeries;
	})(OfficeExtension.ClientObject);
	Excel.ChartSeries = ChartSeries;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Specifies whether the series are by rows or by columns. On Desktop, the &quot;auto&quot; option will inspect the source data shape to automatically guess whether the data is by rows or columns; on Excel Online, &quot;auto&quot; will simply default to &quot;columns&quot;. [Api set: ExcelApi 1.1] </summary>
	var ChartSeriesBy = {
		__proto__: null,
		"auto": "auto",
		"columns": "columns",
		"rows": "rows",
	}
	Excel.ChartSeriesBy = ChartSeriesBy;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartSeriesCollection = (function(_super) {
		__extends(ChartSeriesCollection, _super);
		function ChartSeriesCollection() {
			/// <summary> Represents a collection of chart series. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="count" type="Number">Returns the number of series in the collection. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="items" type="Array" elementType="Excel.ChartSeries">Gets the loaded child items in this collection.</field>
		}

		ChartSeriesCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartSeriesCollection"/>
		}
		ChartSeriesCollection.prototype.getCount = function() {
			/// <summary>
			/// Returns the number of series in the collection. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		ChartSeriesCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Retrieves a series based on its position in the collection. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="index" type="Number">Index value of the object to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.ChartSeries"></returns>
		}

		return ChartSeriesCollection;
	})(OfficeExtension.ClientObject);
	Excel.ChartSeriesCollection = ChartSeriesCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartSeriesFormat = (function(_super) {
		__extends(ChartSeriesFormat, _super);
		function ChartSeriesFormat() {
			/// <summary> encapsulates the format properties for the chart series [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="fill" type="Excel.ChartFill">Represents the fill format of a chart series, which includes background formating information. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="line" type="Excel.ChartLineFormat">Represents line formatting. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartSeriesFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartSeriesFormat"/>
		}

		ChartSeriesFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartSeriesFormatUpdateData">Properties described by the Excel.Interfaces.ChartSeriesFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartSeriesFormat">An existing ChartSeriesFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartSeriesFormat;
	})(OfficeExtension.ClientObject);
	Excel.ChartSeriesFormat = ChartSeriesFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartTitle = (function(_super) {
		__extends(ChartTitle, _super);
		function ChartTitle() {
			/// <summary> Represents a chart title object of a chart. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ChartTitleFormat">Represents the formatting of a chart title, which includes fill and font formatting. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="overlay" type="Boolean">Boolean value representing if the chart title will overlay the chart or not. [Api set: ExcelApi 1.1]</field>
			/// <field name="text" type="String">Represents the title text of a chart. [Api set: ExcelApi 1.1]</field>
			/// <field name="visible" type="Boolean">A boolean value the represents the visibility of a chart title object. [Api set: ExcelApi 1.1]</field>
		}

		ChartTitle.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartTitle"/>
		}

		ChartTitle.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartTitleUpdateData">Properties described by the Excel.Interfaces.ChartTitleUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartTitle">An existing ChartTitle object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartTitle;
	})(OfficeExtension.ClientObject);
	Excel.ChartTitle = ChartTitle;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ChartTitleFormat = (function(_super) {
		__extends(ChartTitleFormat, _super);
		function ChartTitleFormat() {
			/// <summary> Provides access to the office art formatting for chart title. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="fill" type="Excel.ChartFill">Represents the fill format of an object, which includes background formating information. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="font" type="Excel.ChartFont">Represents the font attributes (font name, font size, color, etc.) for an object. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		ChartTitleFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ChartTitleFormat"/>
		}

		ChartTitleFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ChartTitleFormatUpdateData">Properties described by the Excel.Interfaces.ChartTitleFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ChartTitleFormat">An existing ChartTitleFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ChartTitleFormat;
	})(OfficeExtension.ClientObject);
	Excel.ChartTitleFormat = ChartTitleFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var ChartType = {
		__proto__: null,
		"invalid": "invalid",
		"columnClustered": "columnClustered",
		"columnStacked": "columnStacked",
		"columnStacked100": "columnStacked100",
		"_3DColumnClustered": "_3DColumnClustered",
		"_3DColumnStacked": "_3DColumnStacked",
		"_3DColumnStacked100": "_3DColumnStacked100",
		"barClustered": "barClustered",
		"barStacked": "barStacked",
		"barStacked100": "barStacked100",
		"_3DBarClustered": "_3DBarClustered",
		"_3DBarStacked": "_3DBarStacked",
		"_3DBarStacked100": "_3DBarStacked100",
		"lineStacked": "lineStacked",
		"lineStacked100": "lineStacked100",
		"lineMarkers": "lineMarkers",
		"lineMarkersStacked": "lineMarkersStacked",
		"lineMarkersStacked100": "lineMarkersStacked100",
		"pieOfPie": "pieOfPie",
		"pieExploded": "pieExploded",
		"_3DPieExploded": "_3DPieExploded",
		"barOfPie": "barOfPie",
		"xyscatterSmooth": "xyscatterSmooth",
		"xyscatterSmoothNoMarkers": "xyscatterSmoothNoMarkers",
		"xyscatterLines": "xyscatterLines",
		"xyscatterLinesNoMarkers": "xyscatterLinesNoMarkers",
		"areaStacked": "areaStacked",
		"areaStacked100": "areaStacked100",
		"_3DAreaStacked": "_3DAreaStacked",
		"_3DAreaStacked100": "_3DAreaStacked100",
		"doughnutExploded": "doughnutExploded",
		"radarMarkers": "radarMarkers",
		"radarFilled": "radarFilled",
		"surface": "surface",
		"surfaceWireframe": "surfaceWireframe",
		"surfaceTopView": "surfaceTopView",
		"surfaceTopViewWireframe": "surfaceTopViewWireframe",
		"bubble": "bubble",
		"bubble3DEffect": "bubble3DEffect",
		"stockHLC": "stockHLC",
		"stockOHLC": "stockOHLC",
		"stockVHLC": "stockVHLC",
		"stockVOHLC": "stockVOHLC",
		"cylinderColClustered": "cylinderColClustered",
		"cylinderColStacked": "cylinderColStacked",
		"cylinderColStacked100": "cylinderColStacked100",
		"cylinderBarClustered": "cylinderBarClustered",
		"cylinderBarStacked": "cylinderBarStacked",
		"cylinderBarStacked100": "cylinderBarStacked100",
		"cylinderCol": "cylinderCol",
		"coneColClustered": "coneColClustered",
		"coneColStacked": "coneColStacked",
		"coneColStacked100": "coneColStacked100",
		"coneBarClustered": "coneBarClustered",
		"coneBarStacked": "coneBarStacked",
		"coneBarStacked100": "coneBarStacked100",
		"coneCol": "coneCol",
		"pyramidColClustered": "pyramidColClustered",
		"pyramidColStacked": "pyramidColStacked",
		"pyramidColStacked100": "pyramidColStacked100",
		"pyramidBarClustered": "pyramidBarClustered",
		"pyramidBarStacked": "pyramidBarStacked",
		"pyramidBarStacked100": "pyramidBarStacked100",
		"pyramidCol": "pyramidCol",
		"_3DColumn": "_3DColumn",
		"line": "line",
		"_3DLine": "_3DLine",
		"_3DPie": "_3DPie",
		"pie": "pie",
		"xyscatter": "xyscatter",
		"_3DArea": "_3DArea",
		"area": "area",
		"doughnut": "doughnut",
		"radar": "radar",
	}
	Excel.ChartType = ChartType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var ChartUnderlineStyle = {
		__proto__: null,
		"none": "none",
		"single": "single",
	}
	Excel.ChartUnderlineStyle = ChartUnderlineStyle;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1 for All/Formats/Contents, 1.7 for Hyperlinks & HyperlinksAndFormats.] </summary>
	var ClearApplyTo = {
		__proto__: null,
		"all": "all",
		"formats": "formats",
		"contents": "contents",
		"hyperlinks": "hyperlinks",
		"removeHyperlinks": "removeHyperlinks",
	}
	Excel.ClearApplyTo = ClearApplyTo;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ColorScaleConditionalFormat = (function(_super) {
		__extends(ColorScaleConditionalFormat, _super);
		function ColorScaleConditionalFormat() {
			/// <summary> Represents an IconSet criteria for conditional formatting. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="criteria" type="Excel.Interfaces.ConditionalColorScaleCriteria">The criteria of the color scale. Midpoint is optional when using a two point color scale. [Api set: ExcelApi 1.6]</field>
			/// <field name="threeColorScale" type="Boolean">If true the color scale will have three points (minimum, midpoint, maximum), otherwise it will have two (minimum, maximum). [Api set: ExcelApi 1.6]</field>
		}

		ColorScaleConditionalFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ColorScaleConditionalFormat"/>
		}

		ColorScaleConditionalFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ColorScaleConditionalFormatUpdateData">Properties described by the Excel.Interfaces.ColorScaleConditionalFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ColorScaleConditionalFormat">An existing ColorScaleConditionalFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ColorScaleConditionalFormat;
	})(OfficeExtension.ClientObject);
	Excel.ColorScaleConditionalFormat = ColorScaleConditionalFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the operator of the text conditional format type. [Api set: ExcelApi 1.6] </summary>
	var ConditionalCellValueOperator = {
		__proto__: null,
		"invalid": "invalid",
		"between": "between",
		"notBetween": "notBetween",
		"equalTo": "equalTo",
		"notEqualTo": "notEqualTo",
		"greaterThan": "greaterThan",
		"lessThan": "lessThan",
		"greaterThanOrEqual": "greaterThanOrEqual",
		"lessThanOrEqual": "lessThanOrEqual",
	}
	Excel.ConditionalCellValueOperator = ConditionalCellValueOperator;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalCellValueRule = (function() {
			function ConditionalCellValueRule() {
				/// <summary> Represents a Cell Value Conditional Format Rule [Api set: ExcelApi 1.6] </summary>
				/// <field name="formula1" >The formula, if required, to evaluate the conditional format rule on. [Api set: ExcelApi 1.6]</field>
				/// <field name="formula2" >The formula, if required, to evaluate the conditional format rule on. [Api set: ExcelApi 1.6]</field>
				/// <field name="operator" type="String">The operator of the text conditional format. [Api set: ExcelApi 1.6]</field>
			}
			return ConditionalCellValueRule;
		})();
		Interfaces.ConditionalCellValueRule.__proto__ = null;
		Interfaces.ConditionalCellValueRule = ConditionalCellValueRule;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalColorScaleCriteria = (function() {
			function ConditionalColorScaleCriteria() {
				/// <summary> Represents the criteria of the color scale. [Api set: ExcelApi 1.6] </summary>
				/// <field name="maximum" type="Excel.Interfaces.ConditionalColorScaleCriterion">The maximum point Color Scale Criterion. [Api set: ExcelApi 1.6]</field>
				/// <field name="midpoint" type="Excel.Interfaces.ConditionalColorScaleCriterion">The midpoint Color Scale Criterion if the color scale is a 3-color scale. [Api set: ExcelApi 1.6]</field>
				/// <field name="minimum" type="Excel.Interfaces.ConditionalColorScaleCriterion">The minimum point Color Scale Criterion. [Api set: ExcelApi 1.6]</field>
			}
			return ConditionalColorScaleCriteria;
		})();
		Interfaces.ConditionalColorScaleCriteria.__proto__ = null;
		Interfaces.ConditionalColorScaleCriteria = ConditionalColorScaleCriteria;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalColorScaleCriterion = (function() {
			function ConditionalColorScaleCriterion() {
				/// <summary> Represents a Color Scale Criterion which contains a type, value and a color. [Api set: ExcelApi 1.6] </summary>
				/// <field name="color" type="String">HTML color code representation of the color scale color. E.g. #FF0000 represents Red. [Api set: ExcelApi 1.6]</field>
				/// <field name="formula" >A number, a formula, or null (if Type is LowestValue). [Api set: ExcelApi 1.6]</field>
				/// <field name="type" type="String">What the icon conditional formula should be based on. [Api set: ExcelApi 1.6]</field>
			}
			return ConditionalColorScaleCriterion;
		})();
		Interfaces.ConditionalColorScaleCriterion.__proto__ = null;
		Interfaces.ConditionalColorScaleCriterion = ConditionalColorScaleCriterion;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the format options for a Data Bar Axis. [Api set: ExcelApi 1.6] </summary>
	var ConditionalDataBarAxisFormat = {
		__proto__: null,
		"automatic": "automatic",
		"none": "none",
		"cellMidPoint": "cellMidPoint",
	}
	Excel.ConditionalDataBarAxisFormat = ConditionalDataBarAxisFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the Data Bar direction within a cell. [Api set: ExcelApi 1.6] </summary>
	var ConditionalDataBarDirection = {
		__proto__: null,
		"context": "context",
		"leftToRight": "leftToRight",
		"rightToLeft": "rightToLeft",
	}
	Excel.ConditionalDataBarDirection = ConditionalDataBarDirection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ConditionalDataBarNegativeFormat = (function(_super) {
		__extends(ConditionalDataBarNegativeFormat, _super);
		function ConditionalDataBarNegativeFormat() {
			/// <summary> Represents a conditional format DataBar Format for the negative side of the data bar. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="borderColor" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;).              &quot;Empty String&quot; if no border is present or set. [Api set: ExcelApi 1.6]</field>
			/// <field name="fillColor" type="String">HTML color code representing the fill color, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;). [Api set: ExcelApi 1.6]</field>
			/// <field name="matchPositiveBorderColor" type="Boolean">Boolean representation of whether or not the negative DataBar has the same border color as the positive DataBar. [Api set: ExcelApi 1.6]</field>
			/// <field name="matchPositiveFillColor" type="Boolean">Boolean representation of whether or not the negative DataBar has the same fill color as the positive DataBar. [Api set: ExcelApi 1.6]</field>
		}

		ConditionalDataBarNegativeFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ConditionalDataBarNegativeFormat"/>
		}

		ConditionalDataBarNegativeFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ConditionalDataBarNegativeFormatUpdateData">Properties described by the Excel.Interfaces.ConditionalDataBarNegativeFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ConditionalDataBarNegativeFormat">An existing ConditionalDataBarNegativeFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ConditionalDataBarNegativeFormat;
	})(OfficeExtension.ClientObject);
	Excel.ConditionalDataBarNegativeFormat = ConditionalDataBarNegativeFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ConditionalDataBarPositiveFormat = (function(_super) {
		__extends(ConditionalDataBarPositiveFormat, _super);
		function ConditionalDataBarPositiveFormat() {
			/// <summary> Represents a conditional format DataBar Format for the positive side of the data bar. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="borderColor" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;).              &quot;&quot; (empty string) if no border is present or set. [Api set: ExcelApi 1.6]</field>
			/// <field name="fillColor" type="String">HTML color code representing the fill color, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;). [Api set: ExcelApi 1.6]</field>
			/// <field name="gradientFill" type="Boolean">Boolean representation of whether or not the DataBar has a gradient. [Api set: ExcelApi 1.6]</field>
		}

		ConditionalDataBarPositiveFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ConditionalDataBarPositiveFormat"/>
		}

		ConditionalDataBarPositiveFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ConditionalDataBarPositiveFormatUpdateData">Properties described by the Excel.Interfaces.ConditionalDataBarPositiveFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ConditionalDataBarPositiveFormat">An existing ConditionalDataBarPositiveFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ConditionalDataBarPositiveFormat;
	})(OfficeExtension.ClientObject);
	Excel.ConditionalDataBarPositiveFormat = ConditionalDataBarPositiveFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalDataBarRule = (function() {
			function ConditionalDataBarRule() {
				/// <summary> Represents a rule-type for a Data Bar. [Api set: ExcelApi 1.6] </summary>
				/// <field name="formula" >The formula, if required, to evaluate the databar rule on. [Api set: ExcelApi 1.6]</field>
				/// <field name="type" type="String">The type of rule for the databar. [Api set: ExcelApi 1.6]</field>
			}
			return ConditionalDataBarRule;
		})();
		Interfaces.ConditionalDataBarRule.__proto__ = null;
		Interfaces.ConditionalDataBarRule = ConditionalDataBarRule;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ConditionalFormat = (function(_super) {
		__extends(ConditionalFormat, _super);
		function ConditionalFormat() {
			/// <summary> An object encapsulating a conditional format&apos;s range, format, rule, and other properties. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="cellValue" type="Excel.CellValueConditionalFormat">Returns the cell value conditional format properties if the current conditional format is a CellValue type.              For example to format all cells between 5 and 10. [Api set: ExcelApi 1.6]</field>
			/// <field name="cellValueOrNullObject" type="Excel.CellValueConditionalFormat">Returns the cell value conditional format properties if the current conditional format is a CellValue type.              For example to format all cells between 5 and 10. [Api set: ExcelApi 1.6]</field>
			/// <field name="colorScale" type="Excel.ColorScaleConditionalFormat">Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type. [Api set: ExcelApi 1.6]</field>
			/// <field name="colorScaleOrNullObject" type="Excel.ColorScaleConditionalFormat">Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type. [Api set: ExcelApi 1.6]</field>
			/// <field name="custom" type="Excel.CustomConditionalFormat">Returns the custom conditional format properties if the current conditional format is a custom type. [Api set: ExcelApi 1.6]</field>
			/// <field name="customOrNullObject" type="Excel.CustomConditionalFormat">Returns the custom conditional format properties if the current conditional format is a custom type. [Api set: ExcelApi 1.6]</field>
			/// <field name="dataBar" type="Excel.DataBarConditionalFormat">Returns the data bar properties if the current conditional format is a data bar. [Api set: ExcelApi 1.6]</field>
			/// <field name="dataBarOrNullObject" type="Excel.DataBarConditionalFormat">Returns the data bar properties if the current conditional format is a data bar. [Api set: ExcelApi 1.6]</field>
			/// <field name="iconSet" type="Excel.IconSetConditionalFormat">Returns the IconSet conditional format properties if the current conditional format is an IconSet type. [Api set: ExcelApi 1.6]</field>
			/// <field name="iconSetOrNullObject" type="Excel.IconSetConditionalFormat">Returns the IconSet conditional format properties if the current conditional format is an IconSet type. [Api set: ExcelApi 1.6]</field>
			/// <field name="id" type="String">The Priority of the Conditional Format within the current ConditionalFormatCollection. [Api set: ExcelApi 1.6]</field>
			/// <field name="preset" type="Excel.PresetCriteriaConditionalFormat">Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties. [Api set: ExcelApi 1.6]</field>
			/// <field name="presetOrNullObject" type="Excel.PresetCriteriaConditionalFormat">Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties. [Api set: ExcelApi 1.6]</field>
			/// <field name="priority" type="Number">The priority (or index) within the conditional format collection that this conditional format currently exists in. Changing this also               changes other conditional formats&apos; priorities, to allow for a contiguous priority order.              Use a negative priority to begin from the back.              Priorities greater than than bounds will get and set to the maximum (or minimum if negative) priority.              Also note that if you change the priority, you have to re-fetch a new copy of the object at that new priority location if you want to make further changes to it. [Api set: ExcelApi 1.6]</field>
			/// <field name="stopIfTrue" type="Boolean">If the conditions of this conditional format are met, no lower-priority formats shall take effect on that cell.              Null on databars, icon sets, and colorscales as there&apos;s no concept of StopIfTrue for these [Api set: ExcelApi 1.6]</field>
			/// <field name="textComparison" type="Excel.TextConditionalFormat">Returns the specific text conditional format properties if the current conditional format is a text type.              For example to format cells matching the word &quot;Text&quot;. [Api set: ExcelApi 1.6]</field>
			/// <field name="textComparisonOrNullObject" type="Excel.TextConditionalFormat">Returns the specific text conditional format properties if the current conditional format is a text type.              For example to format cells matching the word &quot;Text&quot;. [Api set: ExcelApi 1.6]</field>
			/// <field name="topBottom" type="Excel.TopBottomConditionalFormat">Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.              For example to format the top 10% or bottom 10 items. [Api set: ExcelApi 1.6]</field>
			/// <field name="topBottomOrNullObject" type="Excel.TopBottomConditionalFormat">Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.              For example to format the top 10% or bottom 10 items. [Api set: ExcelApi 1.6]</field>
			/// <field name="type" type="String">A type of conditional format. Only one can be set at a time. Read-Only. [Api set: ExcelApi 1.6]</field>
		}

		ConditionalFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ConditionalFormat"/>
		}

		ConditionalFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ConditionalFormatUpdateData">Properties described by the Excel.Interfaces.ConditionalFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ConditionalFormat">An existing ConditionalFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		ConditionalFormat.prototype.delete = function() {
			/// <summary>
			/// Deletes this conditional format. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <returns ></returns>
		}
		ConditionalFormat.prototype.getRange = function() {
			/// <summary>
			/// Returns the range the conditonal format is applied to or a null object if the range is discontiguous. Read-only. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		ConditionalFormat.prototype.getRangeOrNullObject = function() {
			/// <summary>
			/// Returns the range the conditonal format is applied to or a null object if the range is discontiguous. Read-only. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}

		return ConditionalFormat;
	})(OfficeExtension.ClientObject);
	Excel.ConditionalFormat = ConditionalFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ConditionalFormatCollection = (function(_super) {
		__extends(ConditionalFormatCollection, _super);
		function ConditionalFormatCollection() {
			/// <summary> Represents a collection of all the conditional formats that are overlap the range. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Excel.ConditionalFormat">Gets the loaded child items in this collection.</field>
		}

		ConditionalFormatCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ConditionalFormatCollection"/>
		}
		ConditionalFormatCollection.prototype.add = function(type) {
			/// <summary>
			/// Adds a new conditional format to the collection at the first/top priority. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <param name="type" type="String">The type of conditional format being added. See Excel.ConditionalFormatType for details.</param>
			/// <returns type="Excel.ConditionalFormat"></returns>
		}
		ConditionalFormatCollection.prototype.clearAll = function() {
			/// <summary>
			/// Clears all conditional formats active on the current specified range. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <returns ></returns>
		}
		ConditionalFormatCollection.prototype.getCount = function() {
			/// <summary>
			/// Returns the number of conditional formats in the workbook. Read-only. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		ConditionalFormatCollection.prototype.getItem = function(id) {
			/// <summary>
			/// Returns a conditional format for the given ID. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <param name="id" type="String">The id of the conditional format.</param>
			/// <returns type="Excel.ConditionalFormat">Conditional Format object.</returns>
		}
		ConditionalFormatCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Returns a conditional format at the given index. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <param name="index" type="Number">Index of the conditional formats to be retrieved.</param>
			/// <returns type="Excel.ConditionalFormat"></returns>
		}

		return ConditionalFormatCollection;
	})(OfficeExtension.ClientObject);
	Excel.ConditionalFormatCollection = ConditionalFormatCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the types of conditional format values. [Api set: ExcelApi 1.6] </summary>
	var ConditionalFormatColorCriterionType = {
		__proto__: null,
		"invalid": "invalid",
		"lowestValue": "lowestValue",
		"highestValue": "highestValue",
		"number": "number",
		"percent": "percent",
		"formula": "formula",
		"percentile": "percentile",
	}
	Excel.ConditionalFormatColorCriterionType = ConditionalFormatColorCriterionType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the direction for a selection. [Api set: ExcelApi 1.6] </summary>
	var ConditionalFormatDirection = {
		__proto__: null,
		"top": "top",
		"bottom": "bottom",
	}
	Excel.ConditionalFormatDirection = ConditionalFormatDirection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the types of conditional format values. [Api set: ExcelApi 1.6] </summary>
	var ConditionalFormatIconRuleType = {
		__proto__: null,
		"invalid": "invalid",
		"number": "number",
		"percent": "percent",
		"formula": "formula",
		"percentile": "percentile",
	}
	Excel.ConditionalFormatIconRuleType = ConditionalFormatIconRuleType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the criteria for the Preset Criteria conditional format type. [Api set: ExcelApi 1.6] </summary>
	var ConditionalFormatPresetCriterion = {
		__proto__: null,
		"invalid": "invalid",
		"blanks": "blanks",
		"nonBlanks": "nonBlanks",
		"errors": "errors",
		"nonErrors": "nonErrors",
		"yesterday": "yesterday",
		"today": "today",
		"tomorrow": "tomorrow",
		"lastSevenDays": "lastSevenDays",
		"lastWeek": "lastWeek",
		"thisWeek": "thisWeek",
		"nextWeek": "nextWeek",
		"lastMonth": "lastMonth",
		"thisMonth": "thisMonth",
		"nextMonth": "nextMonth",
		"aboveAverage": "aboveAverage",
		"belowAverage": "belowAverage",
		"equalOrAboveAverage": "equalOrAboveAverage",
		"equalOrBelowAverage": "equalOrBelowAverage",
		"oneStdDevAboveAverage": "oneStdDevAboveAverage",
		"oneStdDevBelowAverage": "oneStdDevBelowAverage",
		"twoStdDevAboveAverage": "twoStdDevAboveAverage",
		"twoStdDevBelowAverage": "twoStdDevBelowAverage",
		"threeStdDevAboveAverage": "threeStdDevAboveAverage",
		"threeStdDevBelowAverage": "threeStdDevBelowAverage",
		"uniqueValues": "uniqueValues",
		"duplicateValues": "duplicateValues",
	}
	Excel.ConditionalFormatPresetCriterion = ConditionalFormatPresetCriterion;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ConditionalFormatRule = (function(_super) {
		__extends(ConditionalFormatRule, _super);
		function ConditionalFormatRule() {
			/// <summary> Represents a rule, for all traditional rule/format pairings. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="formula" >The formula, if required, to evaluate the conditional format rule on. [Api set: ExcelApi 1.6]</field>
			/// <field name="formulaLocal" >The formula, if required, to evaluate the conditional format rule on in the user&apos;s language. [Api set: ExcelApi 1.6]</field>
			/// <field name="formulaR1C1" >The formula, if required, to evaluate the conditional format rule on in R1C1-style notation. [Api set: ExcelApi 1.6]</field>
		}

		ConditionalFormatRule.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ConditionalFormatRule"/>
		}

		ConditionalFormatRule.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ConditionalFormatRuleUpdateData">Properties described by the Excel.Interfaces.ConditionalFormatRuleUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ConditionalFormatRule">An existing ConditionalFormatRule object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ConditionalFormatRule;
	})(OfficeExtension.ClientObject);
	Excel.ConditionalFormatRule = ConditionalFormatRule;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the types of conditional format values. [Api set: ExcelApi 1.6] </summary>
	var ConditionalFormatRuleType = {
		__proto__: null,
		"invalid": "invalid",
		"automatic": "automatic",
		"lowestValue": "lowestValue",
		"highestValue": "highestValue",
		"number": "number",
		"percent": "percent",
		"formula": "formula",
		"percentile": "percentile",
	}
	Excel.ConditionalFormatRuleType = ConditionalFormatRuleType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.6] </summary>
	var ConditionalFormatType = {
		__proto__: null,
		"custom": "custom",
		"dataBar": "dataBar",
		"colorScale": "colorScale",
		"iconSet": "iconSet",
		"topBottom": "topBottom",
		"presetCriteria": "presetCriteria",
		"containsText": "containsText",
		"cellValue": "cellValue",
	}
	Excel.ConditionalFormatType = ConditionalFormatType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalIconCriterion = (function() {
			function ConditionalIconCriterion() {
				/// <summary> Represents an Icon Criterion which contains a type, value, an Operator, and an optional custom icon, if not using an iconset. [Api set: ExcelApi 1.6] </summary>
				/// <field name="customIcon" type="Excel.Interfaces.Icon">The custom icon for the current criterion if different from the default IconSet, else null will be returned. [Api set: ExcelApi 1.6]</field>
				/// <field name="formula" >A number or a formula depending on the type. [Api set: ExcelApi 1.6]</field>
				/// <field name="operator" type="String">GreaterThan or GreaterThanOrEqual for each of the rule type for the Icon conditional format. [Api set: ExcelApi 1.6]</field>
				/// <field name="type" type="String">What the icon conditional formula should be based on. [Api set: ExcelApi 1.6]</field>
			}
			return ConditionalIconCriterion;
		})();
		Interfaces.ConditionalIconCriterion.__proto__ = null;
		Interfaces.ConditionalIconCriterion = ConditionalIconCriterion;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the operator for each icon criteria. [Api set: ExcelApi 1.6] </summary>
	var ConditionalIconCriterionOperator = {
		__proto__: null,
		"invalid": "invalid",
		"greaterThan": "greaterThan",
		"greaterThanOrEqual": "greaterThanOrEqual",
	}
	Excel.ConditionalIconCriterionOperator = ConditionalIconCriterionOperator;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalPresetCriteriaRule = (function() {
			function ConditionalPresetCriteriaRule() {
				/// <summary> Represents the Preset Criteria Conditional Format Rule [Api set: ExcelApi 1.6] </summary>
				/// <field name="criterion" type="String">The criterion of the conditional format. [Api set: ExcelApi 1.6]</field>
			}
			return ConditionalPresetCriteriaRule;
		})();
		Interfaces.ConditionalPresetCriteriaRule.__proto__ = null;
		Interfaces.ConditionalPresetCriteriaRule = ConditionalPresetCriteriaRule;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ConditionalRangeBorder = (function(_super) {
		__extends(ConditionalRangeBorder, _super);
		function ConditionalRangeBorder() {
			/// <summary> Represents the border of an object. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="color" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;). [Api set: ExcelApi 1.6]</field>
			/// <field name="sideIndex" type="String">Constant value that indicates the specific side of the border. See Excel.ConditionalRangeBorderIndex for details. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="style" type="String">One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details. [Api set: ExcelApi 1.6]</field>
		}

		ConditionalRangeBorder.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ConditionalRangeBorder"/>
		}

		ConditionalRangeBorder.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ConditionalRangeBorderUpdateData">Properties described by the Excel.Interfaces.ConditionalRangeBorderUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ConditionalRangeBorder">An existing ConditionalRangeBorder object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ConditionalRangeBorder;
	})(OfficeExtension.ClientObject);
	Excel.ConditionalRangeBorder = ConditionalRangeBorder;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ConditionalRangeBorderCollection = (function(_super) {
		__extends(ConditionalRangeBorderCollection, _super);
		function ConditionalRangeBorderCollection() {
			/// <summary> Represents the border objects that make up range border. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="bottom" type="Excel.ConditionalRangeBorder">Gets the top border [Api set: ExcelApi 1.6]</field>
			/// <field name="count" type="Number">Number of border objects in the collection. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="left" type="Excel.ConditionalRangeBorder">Gets the top border [Api set: ExcelApi 1.6]</field>
			/// <field name="right" type="Excel.ConditionalRangeBorder">Gets the top border [Api set: ExcelApi 1.6]</field>
			/// <field name="top" type="Excel.ConditionalRangeBorder">Gets the top border [Api set: ExcelApi 1.6]</field>
			/// <field name="items" type="Array" elementType="Excel.ConditionalRangeBorder">Gets the loaded child items in this collection.</field>
		}

		ConditionalRangeBorderCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ConditionalRangeBorderCollection"/>
		}

		ConditionalRangeBorderCollection.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ConditionalRangeBorderCollectionUpdateData">Properties described by the Excel.Interfaces.ConditionalRangeBorderCollectionUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ConditionalRangeBorderCollection">An existing ConditionalRangeBorderCollection object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		ConditionalRangeBorderCollection.prototype.getItem = function(index) {
			/// <summary>
			/// Gets a border object using its name [Api set: ExcelApi 1.6]
			/// </summary>
			/// <param name="index" type="String">Index value of the border object to be retrieved. See Excel.ConditionalRangeBorderIndex for details.</param>
			/// <returns type="Excel.ConditionalRangeBorder"></returns>
		}
		ConditionalRangeBorderCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Gets a border object using its index [Api set: ExcelApi 1.6]
			/// </summary>
			/// <param name="index" type="Number">Index value of the object to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.ConditionalRangeBorder"></returns>
		}

		return ConditionalRangeBorderCollection;
	})(OfficeExtension.ClientObject);
	Excel.ConditionalRangeBorderCollection = ConditionalRangeBorderCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.6] </summary>
	var ConditionalRangeBorderIndex = {
		__proto__: null,
		"edgeTop": "edgeTop",
		"edgeBottom": "edgeBottom",
		"edgeLeft": "edgeLeft",
		"edgeRight": "edgeRight",
	}
	Excel.ConditionalRangeBorderIndex = ConditionalRangeBorderIndex;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.6] </summary>
	var ConditionalRangeBorderLineStyle = {
		__proto__: null,
		"none": "none",
		"continuous": "continuous",
		"dash": "dash",
		"dashDot": "dashDot",
		"dashDotDot": "dashDotDot",
		"dot": "dot",
	}
	Excel.ConditionalRangeBorderLineStyle = ConditionalRangeBorderLineStyle;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ConditionalRangeFill = (function(_super) {
		__extends(ConditionalRangeFill, _super);
		function ConditionalRangeFill() {
			/// <summary> Represents the background of a conditional range object. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="color" type="String">HTML color code representing the color of the fill, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;). [Api set: ExcelApi 1.6]</field>
		}

		ConditionalRangeFill.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ConditionalRangeFill"/>
		}

		ConditionalRangeFill.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ConditionalRangeFillUpdateData">Properties described by the Excel.Interfaces.ConditionalRangeFillUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ConditionalRangeFill">An existing ConditionalRangeFill object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		ConditionalRangeFill.prototype.clear = function() {
			/// <summary>
			/// Resets the fill. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <returns ></returns>
		}

		return ConditionalRangeFill;
	})(OfficeExtension.ClientObject);
	Excel.ConditionalRangeFill = ConditionalRangeFill;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ConditionalRangeFont = (function(_super) {
		__extends(ConditionalRangeFont, _super);
		function ConditionalRangeFont() {
			/// <summary> This object represents the font attributes (font style,, color, etc.) for an object. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="bold" type="Boolean">Represents the bold status of font. [Api set: ExcelApi 1.6]</field>
			/// <field name="color" type="String">HTML color code representation of the text color. E.g. #FF0000 represents Red. [Api set: ExcelApi 1.6]</field>
			/// <field name="italic" type="Boolean">Represents the italic status of the font. [Api set: ExcelApi 1.6]</field>
			/// <field name="strikethrough" type="Boolean">Represents the strikethrough status of the font. [Api set: ExcelApi 1.6]</field>
			/// <field name="underline" type="String">Type of underline applied to the font. See Excel.ConditionalRangeFontUnderlineStyle for details. [Api set: ExcelApi 1.6]</field>
		}

		ConditionalRangeFont.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ConditionalRangeFont"/>
		}

		ConditionalRangeFont.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ConditionalRangeFontUpdateData">Properties described by the Excel.Interfaces.ConditionalRangeFontUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ConditionalRangeFont">An existing ConditionalRangeFont object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		ConditionalRangeFont.prototype.clear = function() {
			/// <summary>
			/// Resets the font formats. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <returns ></returns>
		}

		return ConditionalRangeFont;
	})(OfficeExtension.ClientObject);
	Excel.ConditionalRangeFont = ConditionalRangeFont;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.6] </summary>
	var ConditionalRangeFontUnderlineStyle = {
		__proto__: null,
		"none": "none",
		"single": "single",
		"double": "double",
	}
	Excel.ConditionalRangeFontUnderlineStyle = ConditionalRangeFontUnderlineStyle;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var ConditionalRangeFormat = (function(_super) {
		__extends(ConditionalRangeFormat, _super);
		function ConditionalRangeFormat() {
			/// <summary> A format object encapsulating the conditional formats range&apos;s font, fill, borders, and other properties. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="borders" type="Excel.ConditionalRangeBorderCollection">Collection of border objects that apply to the overall conditional format range. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="fill" type="Excel.ConditionalRangeFill">Returns the fill object defined on the overall conditional format range. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="font" type="Excel.ConditionalRangeFont">Returns the font object defined on the overall conditional format range. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="numberFormat" >Represents Excel&apos;s number format code for the given range. Cleared if null is passed in. [Api set: ExcelApi 1.6]</field>
		}

		ConditionalRangeFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.ConditionalRangeFormat"/>
		}

		ConditionalRangeFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.ConditionalRangeFormatUpdateData">Properties described by the Excel.Interfaces.ConditionalRangeFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ConditionalRangeFormat">An existing ConditionalRangeFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return ConditionalRangeFormat;
	})(OfficeExtension.ClientObject);
	Excel.ConditionalRangeFormat = ConditionalRangeFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalTextComparisonRule = (function() {
			function ConditionalTextComparisonRule() {
				/// <summary> Represents a Cell Value Conditional Format Rule [Api set: ExcelApi 1.6] </summary>
				/// <field name="operator" type="String">The operator of the text conditional format. [Api set: ExcelApi 1.6]</field>
				/// <field name="text" type="String">The Text value of conditional format. [Api set: ExcelApi 1.6]</field>
			}
			return ConditionalTextComparisonRule;
		})();
		Interfaces.ConditionalTextComparisonRule.__proto__ = null;
		Interfaces.ConditionalTextComparisonRule = ConditionalTextComparisonRule;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the operator of the text conditional format type. [Api set: ExcelApi 1.6] </summary>
	var ConditionalTextOperator = {
		__proto__: null,
		"invalid": "invalid",
		"contains": "contains",
		"notContains": "notContains",
		"beginsWith": "beginsWith",
		"endsWith": "endsWith",
	}
	Excel.ConditionalTextOperator = ConditionalTextOperator;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> Represents the criteria for the above/below average conditional format type. [Api set: ExcelApi 1.6] </summary>
	var ConditionalTopBottomCriterionType = {
		__proto__: null,
		"invalid": "invalid",
		"topItems": "topItems",
		"topPercent": "topPercent",
		"bottomItems": "bottomItems",
		"bottomPercent": "bottomPercent",
	}
	Excel.ConditionalTopBottomCriterionType = ConditionalTopBottomCriterionType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalTopBottomRule = (function() {
			function ConditionalTopBottomRule() {
				/// <summary> Represents the rule of the top/bottom conditional format. [Api set: ExcelApi 1.6] </summary>
				/// <field name="rank" type="Number">The rank between 1 and 1000 for numeric ranks or 1 and 100 for percent ranks. [Api set: ExcelApi 1.6]</field>
				/// <field name="type" type="String">Format values based on the top or bottom rank. [Api set: ExcelApi 1.6]</field>
			}
			return ConditionalTopBottomRule;
		})();
		Interfaces.ConditionalTopBottomRule.__proto__ = null;
		Interfaces.ConditionalTopBottomRule = ConditionalTopBottomRule;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var CustomConditionalFormat = (function(_super) {
		__extends(CustomConditionalFormat, _super);
		function CustomConditionalFormat() {
			/// <summary> Represents a custom conditional format type. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ConditionalRangeFormat">Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="rule" type="Excel.ConditionalFormatRule">Represents the Rule object on this conditional format. [Api set: ExcelApi 1.6]</field>
		}

		CustomConditionalFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.CustomConditionalFormat"/>
		}

		CustomConditionalFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.CustomConditionalFormatUpdateData">Properties described by the Excel.Interfaces.CustomConditionalFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="CustomConditionalFormat">An existing CustomConditionalFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return CustomConditionalFormat;
	})(OfficeExtension.ClientObject);
	Excel.CustomConditionalFormat = CustomConditionalFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var CustomXmlPart = (function(_super) {
		__extends(CustomXmlPart, _super);
		function CustomXmlPart() {
			/// <summary> Represents a custom XML part object in a workbook. [Api set: ExcelApi 1.5] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="id" type="String">The custom XML part&apos;s ID. Read-only. [Api set: ExcelApi 1.5]</field>
			/// <field name="namespaceUri" type="String">The custom XML part&apos;s namespace URI. Read-only. [Api set: ExcelApi 1.5]</field>
		}

		CustomXmlPart.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.CustomXmlPart"/>
		}
		CustomXmlPart.prototype.delete = function() {
			/// <summary>
			/// Deletes the custom XML part. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <returns ></returns>
		}
		CustomXmlPart.prototype.getXml = function() {
			/// <summary>
			/// Gets the custom XML part&apos;s full XML content. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		CustomXmlPart.prototype.setXml = function(xml) {
			/// <summary>
			/// Sets the custom XML part&apos;s full XML content. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="xml" type="String">XML content for the part.</param>
			/// <returns ></returns>
		}

		return CustomXmlPart;
	})(OfficeExtension.ClientObject);
	Excel.CustomXmlPart = CustomXmlPart;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var CustomXmlPartCollection = (function(_super) {
		__extends(CustomXmlPartCollection, _super);
		function CustomXmlPartCollection() {
			/// <summary> A collection of custom XML parts. [Api set: ExcelApi 1.5] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Excel.CustomXmlPart">Gets the loaded child items in this collection.</field>
		}

		CustomXmlPartCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.CustomXmlPartCollection"/>
		}
		CustomXmlPartCollection.prototype.add = function(xml) {
			/// <summary>
			/// Adds a new custom XML part to the workbook. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="xml" type="String">XML content. Must be a valid XML fragment.</param>
			/// <returns type="Excel.CustomXmlPart"></returns>
		}
		CustomXmlPartCollection.prototype.getByNamespace = function(namespaceUri) {
			/// <summary>
			/// Gets a new scoped collection of custom XML parts whose namespaces match the given namespace. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="namespaceUri" type="String"></param>
			/// <returns type="Excel.CustomXmlPartScopedCollection"></returns>
		}
		CustomXmlPartCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the number of CustomXml parts in the collection. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		CustomXmlPartCollection.prototype.getItem = function(id) {
			/// <summary>
			/// Gets a custom XML part based on its ID. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="id" type="String">ID of the object to be retrieved.</param>
			/// <returns type="Excel.CustomXmlPart"></returns>
		}
		CustomXmlPartCollection.prototype.getItemOrNullObject = function(id) {
			/// <summary>
			/// Gets a custom XML part based on its ID.              If the CustomXmlPart does not exist, the return object&apos;s isNull property will be true. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="id" type="String">ID of the object to be retrieved.</param>
			/// <returns type="Excel.CustomXmlPart"></returns>
		}

		return CustomXmlPartCollection;
	})(OfficeExtension.ClientObject);
	Excel.CustomXmlPartCollection = CustomXmlPartCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var CustomXmlPartScopedCollection = (function(_super) {
		__extends(CustomXmlPartScopedCollection, _super);
		function CustomXmlPartScopedCollection() {
			/// <summary> A scoped collection of custom XML parts.              A scoped collection is the result of some operation, e.g. filtering by namespace.              A scoped collection cannot be scoped any further. [Api set: ExcelApi 1.5] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Excel.CustomXmlPart">Gets the loaded child items in this collection.</field>
		}

		CustomXmlPartScopedCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.CustomXmlPartScopedCollection"/>
		}
		CustomXmlPartScopedCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the number of CustomXML parts in this collection. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		CustomXmlPartScopedCollection.prototype.getItem = function(id) {
			/// <summary>
			/// Gets a custom XML part based on its ID. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="id" type="String">ID of the object to be retrieved.</param>
			/// <returns type="Excel.CustomXmlPart"></returns>
		}
		CustomXmlPartScopedCollection.prototype.getItemOrNullObject = function(id) {
			/// <summary>
			/// Gets a custom XML part based on its ID.              If the CustomXmlPart does not exist, the return object&apos;s isNull property will be true. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="id" type="String">ID of the object to be retrieved.</param>
			/// <returns type="Excel.CustomXmlPart"></returns>
		}
		CustomXmlPartScopedCollection.prototype.getOnlyItem = function() {
			/// <summary>
			/// If the collection contains exactly one item, this method returns it.              Otherwise, this method produces an error. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <returns type="Excel.CustomXmlPart"></returns>
		}
		CustomXmlPartScopedCollection.prototype.getOnlyItemOrNullObject = function() {
			/// <summary>
			/// If the collection contains exactly one item, this method returns it.              Otherwise, this method returns Null. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <returns type="Excel.CustomXmlPart"></returns>
		}

		return CustomXmlPartScopedCollection;
	})(OfficeExtension.ClientObject);
	Excel.CustomXmlPartScopedCollection = CustomXmlPartScopedCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var DataBarConditionalFormat = (function(_super) {
		__extends(DataBarConditionalFormat, _super);
		function DataBarConditionalFormat() {
			/// <summary> Represents an Excel Conditional Data Bar Type. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="axisColor" type="String">HTML color code representing the color of the Axis line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;).              &quot;&quot; (empty string) if no axis is present or set. [Api set: ExcelApi 1.6]</field>
			/// <field name="axisFormat" type="String">Representation of how the axis is determined for an Excel data bar. [Api set: ExcelApi 1.6]</field>
			/// <field name="barDirection" type="String">Represents the direction that the data bar graphic should be based on. [Api set: ExcelApi 1.6]</field>
			/// <field name="lowerBoundRule" type="Excel.Interfaces.ConditionalDataBarRule">The rule for what consistutes the lower bound (and how to calculate it, if applicable) for a data bar. [Api set: ExcelApi 1.6]</field>
			/// <field name="negativeFormat" type="Excel.ConditionalDataBarNegativeFormat">Representation of all values to the left of the axis in an Excel data bar. [Api set: ExcelApi 1.6]</field>
			/// <field name="positiveFormat" type="Excel.ConditionalDataBarPositiveFormat">Representation of all values to the right of the axis in an Excel data bar. [Api set: ExcelApi 1.6]</field>
			/// <field name="showDataBarOnly" type="Boolean">If true, hides the values from the cells where the data bar is applied. [Api set: ExcelApi 1.6]</field>
			/// <field name="upperBoundRule" type="Excel.Interfaces.ConditionalDataBarRule">The rule for what constitutes the upper bound (and how to calculate it, if applicable) for a data bar. [Api set: ExcelApi 1.6]</field>
		}

		DataBarConditionalFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.DataBarConditionalFormat"/>
		}

		DataBarConditionalFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.DataBarConditionalFormatUpdateData">Properties described by the Excel.Interfaces.DataBarConditionalFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="DataBarConditionalFormat">An existing DataBarConditionalFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return DataBarConditionalFormat;
	})(OfficeExtension.ClientObject);
	Excel.DataBarConditionalFormat = DataBarConditionalFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var DeleteShiftDirection = {
		__proto__: null,
		"up": "up",
		"left": "left",
	}
	Excel.DeleteShiftDirection = DeleteShiftDirection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.2] </summary>
	var DynamicFilterCriteria = {
		__proto__: null,
		"unknown": "unknown",
		"aboveAverage": "aboveAverage",
		"allDatesInPeriodApril": "allDatesInPeriodApril",
		"allDatesInPeriodAugust": "allDatesInPeriodAugust",
		"allDatesInPeriodDecember": "allDatesInPeriodDecember",
		"allDatesInPeriodFebruray": "allDatesInPeriodFebruray",
		"allDatesInPeriodJanuary": "allDatesInPeriodJanuary",
		"allDatesInPeriodJuly": "allDatesInPeriodJuly",
		"allDatesInPeriodJune": "allDatesInPeriodJune",
		"allDatesInPeriodMarch": "allDatesInPeriodMarch",
		"allDatesInPeriodMay": "allDatesInPeriodMay",
		"allDatesInPeriodNovember": "allDatesInPeriodNovember",
		"allDatesInPeriodOctober": "allDatesInPeriodOctober",
		"allDatesInPeriodQuarter1": "allDatesInPeriodQuarter1",
		"allDatesInPeriodQuarter2": "allDatesInPeriodQuarter2",
		"allDatesInPeriodQuarter3": "allDatesInPeriodQuarter3",
		"allDatesInPeriodQuarter4": "allDatesInPeriodQuarter4",
		"allDatesInPeriodSeptember": "allDatesInPeriodSeptember",
		"belowAverage": "belowAverage",
		"lastMonth": "lastMonth",
		"lastQuarter": "lastQuarter",
		"lastWeek": "lastWeek",
		"lastYear": "lastYear",
		"nextMonth": "nextMonth",
		"nextQuarter": "nextQuarter",
		"nextWeek": "nextWeek",
		"nextYear": "nextYear",
		"thisMonth": "thisMonth",
		"thisQuarter": "thisQuarter",
		"thisWeek": "thisWeek",
		"thisYear": "thisYear",
		"today": "today",
		"tomorrow": "tomorrow",
		"yearToDate": "yearToDate",
		"yesterday": "yesterday",
	}
	Excel.DynamicFilterCriteria = DynamicFilterCriteria;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Filter = (function(_super) {
		__extends(Filter, _super);
		function Filter() {
			/// <summary> Manages the filtering of a table&apos;s column. [Api set: ExcelApi 1.2] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="criteria" type="Excel.Interfaces.FilterCriteria">The currently applied filter on the given column. [Api set: ExcelApi 1.2]</field>
		}

		Filter.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.Filter"/>
		}
		Filter.prototype.apply = function(criteria) {
			/// <summary>
			/// Apply the given filter criteria on the given column. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="criteria" type="Excel.Interfaces.FilterCriteria">The criteria to apply.</param>
			/// <returns ></returns>
		}
		Filter.prototype.applyBottomItemsFilter = function(count) {
			/// <summary>
			/// Apply a &quot;Bottom Item&quot; filter to the column for the given number of elements. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="count" type="Number">The number of elements from the bottom to show.</param>
			/// <returns ></returns>
		}
		Filter.prototype.applyBottomPercentFilter = function(percent) {
			/// <summary>
			/// Apply a &quot;Bottom Percent&quot; filter to the column for the given percentage of elements. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="percent" type="Number">The percentage of elements from the bottom to show.</param>
			/// <returns ></returns>
		}
		Filter.prototype.applyCellColorFilter = function(color) {
			/// <summary>
			/// Apply a &quot;Cell Color&quot; filter to the column for the given color. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="color" type="String">The background color of the cells to show.</param>
			/// <returns ></returns>
		}
		Filter.prototype.applyCustomFilter = function(criteria1, criteria2, oper) {
			/// <summary>
			/// Apply a &quot;Icon&quot; filter to the column for the given criteria strings. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="criteria1" type="String">The first criteria string.</param>
			/// <param name="criteria2" type="String" optional="true">The second criteria string.</param>
			/// <param name="oper" type="String" optional="true">The operator that describes how the two criteria are joined.</param>
			/// <returns ></returns>
		}
		Filter.prototype.applyDynamicFilter = function(criteria) {
			/// <summary>
			/// Apply a &quot;Dynamic&quot; filter to the column. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="criteria" type="String">The dynamic criteria to apply.</param>
			/// <returns ></returns>
		}
		Filter.prototype.applyFontColorFilter = function(color) {
			/// <summary>
			/// Apply a &quot;Font Color&quot; filter to the column for the given color. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="color" type="String">The font color of the cells to show.</param>
			/// <returns ></returns>
		}
		Filter.prototype.applyIconFilter = function(icon) {
			/// <summary>
			/// Apply a &quot;Icon&quot; filter to the column for the given icon. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="icon" type="Excel.Interfaces.Icon">The icons of the cells to show.</param>
			/// <returns ></returns>
		}
		Filter.prototype.applyTopItemsFilter = function(count) {
			/// <summary>
			/// Apply a &quot;Top Item&quot; filter to the column for the given number of elements. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="count" type="Number">The number of elements from the top to show.</param>
			/// <returns ></returns>
		}
		Filter.prototype.applyTopPercentFilter = function(percent) {
			/// <summary>
			/// Apply a &quot;Top Percent&quot; filter to the column for the given percentage of elements. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="percent" type="Number">The percentage of elements from the top to show.</param>
			/// <returns ></returns>
		}
		Filter.prototype.applyValuesFilter = function(values) {
			/// <summary>
			/// Apply a &quot;Values&quot; filter to the column for the given values. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >The list of values to show.</param>
			/// <returns ></returns>
		}
		Filter.prototype.clear = function() {
			/// <summary>
			/// Clear the filter on the given column. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns ></returns>
		}

		return Filter;
	})(OfficeExtension.ClientObject);
	Excel.Filter = Filter;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var FilterCriteria = (function() {
			function FilterCriteria() {
				/// <summary> Represents the filtering criteria applied to a column. [Api set: ExcelApi 1.2] </summary>
				/// <field name="color" type="String">The HTML color string used to filter cells. Used with &quot;cellColor&quot; and &quot;fontColor&quot; filtering. [Api set: ExcelApi 1.2]</field>
				/// <field name="criterion1" type="String">The first criterion used to filter data. Used as an operator in the case of &quot;custom&quot; filtering.               For example &quot;&gt;50&quot; for number greater than 50 or &quot;=*s&quot; for values ending in &quot;s&quot;.                             Used as a number in the case of top/bottom items/percents. E.g. &quot;5&quot; for the top 5 items if filterOn is set to &quot;topItems&quot; [Api set: ExcelApi 1.2]</field>
				/// <field name="criterion2" type="String">The second criterion used to filter data. Only used as an operator in the case of &quot;custom&quot; filtering. [Api set: ExcelApi 1.2]</field>
				/// <field name="dynamicCriteria" type="String">The dynamic criteria from the Excel.DynamicFilterCriteria set to apply on this column. Used with &quot;dynamic&quot; filtering. [Api set: ExcelApi 1.2]</field>
				/// <field name="filterOn" type="String">The property used by the filter to determine whether the values should stay visible. [Api set: ExcelApi 1.2]</field>
				/// <field name="icon" type="Excel.Interfaces.Icon">The icon used to filter cells. Used with &quot;icon&quot; filtering. [Api set: ExcelApi 1.2]</field>
				/// <field name="operator" type="String">The operator used to combine criterion 1 and 2 when using &quot;custom&quot; filtering. [Api set: ExcelApi 1.2]</field>
				/// <field name="values" type="Array" >The set of values to be used as part of &quot;values&quot; filtering. [Api set: ExcelApi 1.2]</field>
			}
			return FilterCriteria;
		})();
		Interfaces.FilterCriteria.__proto__ = null;
		Interfaces.FilterCriteria = FilterCriteria;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var FilterDatetime = (function() {
			function FilterDatetime() {
				/// <summary> Represents how to filter a date when filtering on values. [Api set: ExcelApi 1.2] </summary>
				/// <field name="date" type="String">The date in ISO8601 format used to filter data. [Api set: ExcelApi 1.2]</field>
				/// <field name="specificity" type="String">How specific the date should be used to keep data. For example, if the date is 2005-04-02 and the specifity is set to &quot;month&quot;, the filter operation will keep all rows with a date in the month of april 2009. [Api set: ExcelApi 1.2]</field>
			}
			return FilterDatetime;
		})();
		Interfaces.FilterDatetime.__proto__ = null;
		Interfaces.FilterDatetime = FilterDatetime;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.2] </summary>
	var FilterDatetimeSpecificity = {
		__proto__: null,
		"year": "year",
		"month": "month",
		"day": "day",
		"hour": "hour",
		"minute": "minute",
		"second": "second",
	}
	Excel.FilterDatetimeSpecificity = FilterDatetimeSpecificity;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.2] </summary>
	var FilterOn = {
		__proto__: null,
		"bottomItems": "bottomItems",
		"bottomPercent": "bottomPercent",
		"cellColor": "cellColor",
		"dynamic": "dynamic",
		"fontColor": "fontColor",
		"values": "values",
		"topItems": "topItems",
		"topPercent": "topPercent",
		"icon": "icon",
		"custom": "custom",
	}
	Excel.FilterOn = FilterOn;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.2] </summary>
	var FilterOperator = {
		__proto__: null,
		"and": "and",
		"or": "or",
	}
	Excel.FilterOperator = FilterOperator;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var FormatProtection = (function(_super) {
		__extends(FormatProtection, _super);
		function FormatProtection() {
			/// <summary> Represents the format protection of a range object. [Api set: ExcelApi 1.2] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="formulaHidden" type="Boolean">Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn&apos;t have uniform formula hidden setting. [Api set: ExcelApi 1.2]</field>
			/// <field name="locked" type="Boolean">Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn&apos;t have uniform lock setting. [Api set: ExcelApi 1.2]</field>
		}

		FormatProtection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.FormatProtection"/>
		}

		FormatProtection.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.FormatProtectionUpdateData">Properties described by the Excel.Interfaces.FormatProtectionUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="FormatProtection">An existing FormatProtection object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return FormatProtection;
	})(OfficeExtension.ClientObject);
	Excel.FormatProtection = FormatProtection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var FunctionResult = (function(_super) {
		__extends(FunctionResult, _super);
		function FunctionResult() {
			/// <summary> An object containing the result of a function-evaluation operation [Api set: ExcelApi 1.2] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="error" type="String">Error value (such as &quot;#DIV/0&quot;) representing the error. If the error string is not set, then the function succeeded, and its result is written to the Value field. The error is always in the English locale. [Api set: ExcelApi 1.2]</field>
			/// <field name="value" >The value of function evaluation. The value field will be populated only if no error has occurred (i.e., the Error property is not set). [Api set: ExcelApi 1.2]</field>
		}

		FunctionResult.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.FunctionResult"/>
		}

		return FunctionResult;
	})(OfficeExtension.ClientObject);
	Excel.FunctionResult = FunctionResult;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Functions = (function(_super) {
		__extends(Functions, _super);
		function Functions() {
			/// <summary> An object for evaluating Excel functions. [Api set: ExcelApi 1.2] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
		}

		Functions.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.Functions"/>
		}
		Functions.prototype.abs = function(number) {
			/// <summary>
			/// Returns the absolute value of a number, a number without its sign. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the real number for which you want the absolute value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.accrInt = function(issue, firstInterest, settlement, rate, par, frequency, basis, calcMethod) {
			/// <summary>
			/// Returns the accrued interest for a security that pays periodic interest. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="issue" >Is the security&apos;s issue date, expressed as a serial date number.</param>
			/// <param name="firstInterest" >Is the security&apos;s first interest date, expressed as a serial date number.</param>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="rate" >Is the security&apos;s annual coupon rate.</param>
			/// <param name="par" >Is the security&apos;s par value.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <param name="calcMethod"  optional="true">Is a logical value: to accrued interest from issue date = TRUE or omitted; to calculate from last coupon payment date = FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.accrIntM = function(issue, settlement, rate, par, basis) {
			/// <summary>
			/// Returns the accrued interest for a security that pays interest at maturity. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="issue" >Is the security&apos;s issue date, expressed as a serial date number.</param>
			/// <param name="settlement" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="rate" >Is the security&apos;s annual coupon rate.</param>
			/// <param name="par" >Is the security&apos;s par value.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.acos = function(number) {
			/// <summary>
			/// Returns the arccosine of a number, in radians in the range 0 to Pi. The arccosine is the angle whose cosine is Number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the cosine of the angle you want and must be from -1 to 1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.acosh = function(number) {
			/// <summary>
			/// Returns the inverse hyperbolic cosine of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is any real number equal to or greater than 1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.acot = function(number) {
			/// <summary>
			/// Returns the arccotangent of a number, in radians in the range 0 to Pi. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the cotangent of the angle you want.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.acoth = function(number) {
			/// <summary>
			/// Returns the inverse hyperbolic cotangent of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the hyperbolic cotangent of the angle that you want.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.amorDegrc = function(cost, datePurchased, firstPeriod, salvage, period, rate, basis) {
			/// <summary>
			/// Returns the prorated linear depreciation of an asset for each accounting period. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="cost" >Is the cost of the asset.</param>
			/// <param name="datePurchased" >Is the date the asset is purchased.</param>
			/// <param name="firstPeriod" >Is the date of the end of the first period.</param>
			/// <param name="salvage" >Is the salvage value at the end of life of the asset.</param>
			/// <param name="period" >Is the period.</param>
			/// <param name="rate" >Is the rate of depreciation.</param>
			/// <param name="basis"  optional="true">Year_basis : 0 for year of 360 days, 1 for actual, 3 for year of 365 days.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.amorLinc = function(cost, datePurchased, firstPeriod, salvage, period, rate, basis) {
			/// <summary>
			/// Returns the prorated linear depreciation of an asset for each accounting period. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="cost" >Is the cost of the asset.</param>
			/// <param name="datePurchased" >Is the date the asset is purchased.</param>
			/// <param name="firstPeriod" >Is the date of the end of the first period.</param>
			/// <param name="salvage" >Is the salvage value at the end of life of the asset.</param>
			/// <param name="period" >Is the period.</param>
			/// <param name="rate" >Is the rate of depreciation.</param>
			/// <param name="basis"  optional="true">Year_basis : 0 for year of 360 days, 1 for actual, 3 for year of 365 days.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.and = function(values) {
			/// <summary>
			/// Checks whether all arguments are TRUE, and returns TRUE if all arguments are TRUE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 conditions you want to test that can be either TRUE or FALSE and can be logical values, arrays, or references.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.arabic = function(text) {
			/// <summary>
			/// Converts a Roman numeral to Arabic. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the Roman numeral you want to convert.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.areas = function(reference) {
			/// <summary>
			/// Returns the number of areas in a reference. An area is a range of contiguous cells or a single cell. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="reference" >Is a reference to a cell or range of cells and can refer to multiple areas.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.asc = function(text) {
			/// <summary>
			/// Changes full-width (double-byte) characters to half-width (single-byte) characters. Use with double-byte character sets (DBCS). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is a text, or a reference to a cell containing a text.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.asin = function(number) {
			/// <summary>
			/// Returns the arcsine of a number in radians, in the range -Pi/2 to Pi/2. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the sine of the angle you want and must be from -1 to 1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.asinh = function(number) {
			/// <summary>
			/// Returns the inverse hyperbolic sine of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is any real number equal to or greater than 1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.atan = function(number) {
			/// <summary>
			/// Returns the arctangent of a number in radians, in the range -Pi/2 to Pi/2. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the tangent of the angle you want.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.atan2 = function(xNum, yNum) {
			/// <summary>
			/// Returns the arctangent of the specified x- and y- coordinates, in radians between -Pi and Pi, excluding -Pi. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="xNum" >Is the x-coordinate of the point.</param>
			/// <param name="yNum" >Is the y-coordinate of the point.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.atanh = function(number) {
			/// <summary>
			/// Returns the inverse hyperbolic tangent of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is any real number between -1 and 1 excluding -1 and 1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.aveDev = function(values) {
			/// <summary>
			/// Returns the average of the absolute deviations of data points from their mean. Arguments can be numbers or names, arrays, or references that contain numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 arguments for which you want the average of the absolute deviations.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.average = function(values) {
			/// <summary>
			/// Returns the average (arithmetic mean) of its arguments, which can be numbers or names, arrays, or references that contain numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numeric arguments for which you want the average.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.averageA = function(values) {
			/// <summary>
			/// Returns the average (arithmetic mean) of its arguments, evaluating text and FALSE in arguments as 0; TRUE evaluates as 1. Arguments can be numbers, names, arrays, or references. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 arguments for which you want the average.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.averageIf = function(range, criteria, averageRange) {
			/// <summary>
			/// Finds average(arithmetic mean) for the cells specified by a given condition or criteria. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="range" >Is the range of cells you want evaluated.</param>
			/// <param name="criteria" >Is the condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average.</param>
			/// <param name="averageRange"  optional="true">Are the actual cells to be used to find the average. If omitted, the cells in range are used.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.averageIfs = function(averageRange, values) {
			/// <summary>
			/// Finds average(arithmetic mean) for the cells specified by a given set of conditions or criteria. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="averageRange" >Are the actual cells to be used to find the average.</param>
			/// <param name="values" type="Array" >List of parameters, where the first element of each pair is the Is the range of cells you want evaluated for the particular condition , and the second element is is the condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.bahtText = function(number) {
			/// <summary>
			/// Converts a number to text (baht). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is a number that you want to convert.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.base = function(number, radix, minLength) {
			/// <summary>
			/// Converts a number into a text representation with the given radix (base). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the number that you want to convert.</param>
			/// <param name="radix" >Is the base Radix that you want to convert the number into.</param>
			/// <param name="minLength"  optional="true">Is the minimum length of the returned string.  If omitted leading zeros are not added.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.besselI = function(x, n) {
			/// <summary>
			/// Returns the modified Bessel function In(x). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which to evaluate the function.</param>
			/// <param name="n" >Is the order of the Bessel function.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.besselJ = function(x, n) {
			/// <summary>
			/// Returns the Bessel function Jn(x). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which to evaluate the function.</param>
			/// <param name="n" >Is the order of the Bessel function.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.besselK = function(x, n) {
			/// <summary>
			/// Returns the modified Bessel function Kn(x). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which to evaluate the function.</param>
			/// <param name="n" >Is the order of the function.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.besselY = function(x, n) {
			/// <summary>
			/// Returns the Bessel function Yn(x). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which to evaluate the function.</param>
			/// <param name="n" >Is the order of the function.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.beta_Dist = function(x, alpha, beta, cumulative, A, B) {
			/// <summary>
			/// Returns the beta probability distribution function. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value between A and B at which to evaluate the function.</param>
			/// <param name="alpha" >Is a parameter to the distribution and must be greater than 0.</param>
			/// <param name="beta" >Is a parameter to the distribution and must be greater than 0.</param>
			/// <param name="cumulative" >Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.</param>
			/// <param name="A"  optional="true">Is an optional lower bound to the interval of x. If omitted, A = 0.</param>
			/// <param name="B"  optional="true">Is an optional upper bound to the interval of x. If omitted, B = 1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.beta_Inv = function(probability, alpha, beta, A, B) {
			/// <summary>
			/// Returns the inverse of the cumulative beta probability density function (BETA.DIST). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is a probability associated with the beta distribution.</param>
			/// <param name="alpha" >Is a parameter to the distribution and must be greater than 0.</param>
			/// <param name="beta" >Is a parameter to the distribution and must be greater than 0.</param>
			/// <param name="A"  optional="true">Is an optional lower bound to the interval of x. If omitted, A = 0.</param>
			/// <param name="B"  optional="true">Is an optional upper bound to the interval of x. If omitted, B = 1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.bin2Dec = function(number) {
			/// <summary>
			/// Converts a binary number to decimal. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the binary number you want to convert.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.bin2Hex = function(number, places) {
			/// <summary>
			/// Converts a binary number to hexadecimal. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the binary number you want to convert.</param>
			/// <param name="places"  optional="true">Is the number of characters to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.bin2Oct = function(number, places) {
			/// <summary>
			/// Converts a binary number to octal. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the binary number you want to convert.</param>
			/// <param name="places"  optional="true">Is the number of characters to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.binom_Dist = function(numberS, trials, probabilityS, cumulative) {
			/// <summary>
			/// Returns the individual term binomial distribution probability. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="numberS" >Is the number of successes in trials.</param>
			/// <param name="trials" >Is the number of independent trials.</param>
			/// <param name="probabilityS" >Is the probability of success on each trial.</param>
			/// <param name="cumulative" >Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.binom_Dist_Range = function(trials, probabilityS, numberS, numberS2) {
			/// <summary>
			/// Returns the probability of a trial result using a binomial distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="trials" >Is the number of independent trials.</param>
			/// <param name="probabilityS" >Is the probability of success on each trial.</param>
			/// <param name="numberS" >Is the number of successes in trials.</param>
			/// <param name="numberS2"  optional="true">If provided this function returns the probability that the number of successful trials shall lie between numberS and numberS2.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.binom_Inv = function(trials, probabilityS, alpha) {
			/// <summary>
			/// Returns the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="trials" >Is the number of Bernoulli trials.</param>
			/// <param name="probabilityS" >Is the probability of success on each trial, a number between 0 and 1 inclusive.</param>
			/// <param name="alpha" >Is the criterion value, a number between 0 and 1 inclusive.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.bitand = function(number1, number2) {
			/// <summary>
			/// Returns a bitwise &apos;And&apos; of two numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number1" >Is the decimal representation of the binary number you want to evaluate.</param>
			/// <param name="number2" >Is the decimal representation of the binary number you want to evaluate.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.bitlshift = function(number, shiftAmount) {
			/// <summary>
			/// Returns a number shifted left by shift_amount bits. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the decimal representation of the binary number you want to evaluate.</param>
			/// <param name="shiftAmount" >Is the number of bits that you want to shift Number left by.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.bitor = function(number1, number2) {
			/// <summary>
			/// Returns a bitwise &apos;Or&apos; of two numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number1" >Is the decimal representation of the binary number you want to evaluate.</param>
			/// <param name="number2" >Is the decimal representation of the binary number you want to evaluate.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.bitrshift = function(number, shiftAmount) {
			/// <summary>
			/// Returns a number shifted right by shift_amount bits. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the decimal representation of the binary number you want to evaluate.</param>
			/// <param name="shiftAmount" >Is the number of bits that you want to shift Number right by.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.bitxor = function(number1, number2) {
			/// <summary>
			/// Returns a bitwise &apos;Exclusive Or&apos; of two numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number1" >Is the decimal representation of the binary number you want to evaluate.</param>
			/// <param name="number2" >Is the decimal representation of the binary number you want to evaluate.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.ceiling_Math = function(number, significance, mode) {
			/// <summary>
			/// Rounds a number up, to the nearest integer or to the nearest multiple of significance. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value you want to round.</param>
			/// <param name="significance"  optional="true">Is the multiple to which you want to round.</param>
			/// <param name="mode"  optional="true">When given and nonzero this function will round away from zero.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.ceiling_Precise = function(number, significance) {
			/// <summary>
			/// Rounds a number up, to the nearest integer or to the nearest multiple of significance. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value you want to round.</param>
			/// <param name="significance"  optional="true">Is the multiple to which you want to round.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.char = function(number) {
			/// <summary>
			/// Returns the character specified by the code number from the character set for your computer. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is a number between 1 and 255 specifying which character you want.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.chiSq_Dist = function(x, degFreedom, cumulative) {
			/// <summary>
			/// Returns the left-tailed probability of the chi-squared distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which you want to evaluate the distribution, a nonnegative number.</param>
			/// <param name="degFreedom" >Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <param name="cumulative" >Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.chiSq_Dist_RT = function(x, degFreedom) {
			/// <summary>
			/// Returns the right-tailed probability of the chi-squared distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which you want to evaluate the distribution, a nonnegative number.</param>
			/// <param name="degFreedom" >Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.chiSq_Inv = function(probability, degFreedom) {
			/// <summary>
			/// Returns the inverse of the left-tailed probability of the chi-squared distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive.</param>
			/// <param name="degFreedom" >Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.chiSq_Inv_RT = function(probability, degFreedom) {
			/// <summary>
			/// Returns the inverse of the right-tailed probability of the chi-squared distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive.</param>
			/// <param name="degFreedom" >Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.choose = function(indexNum, values) {
			/// <summary>
			/// Chooses a value or action to perform from a list of values, based on an index number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="indexNum" >Specifies which value argument is selected. indexNum must be between 1 and 254, or a formula or a reference to a number between 1 and 254.</param>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 254 numbers, cell references, defined names, formulas, functions, or text arguments from which CHOOSE selects.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.clean = function(text) {
			/// <summary>
			/// Removes all nonprintable characters from text. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is any worksheet information from which you want to remove nonprintable characters.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.code = function(text) {
			/// <summary>
			/// Returns a numeric code for the first character in a text string, in the character set used by your computer. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text for which you want the code of the first character.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.columns = function(array) {
			/// <summary>
			/// Returns the number of columns in an array or reference. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is an array or array formula, or a reference to a range of cells for which you want the number of columns.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.combin = function(number, numberChosen) {
			/// <summary>
			/// Returns the number of combinations for a given number of items. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the total number of items.</param>
			/// <param name="numberChosen" >Is the number of items in each combination.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.combina = function(number, numberChosen) {
			/// <summary>
			/// Returns the number of combinations with repetitions for a given number of items. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the total number of items.</param>
			/// <param name="numberChosen" >Is the number of items in each combination.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.complex = function(realNum, iNum, suffix) {
			/// <summary>
			/// Converts real and imaginary coefficients into a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="realNum" >Is the real coefficient of the complex number.</param>
			/// <param name="iNum" >Is the imaginary coefficient of the complex number.</param>
			/// <param name="suffix"  optional="true">Is the suffix for the imaginary component of the complex number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.concatenate = function(values) {
			/// <summary>
			/// Joins several text strings into one text string. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 text strings to be joined into a single text string and can be text strings, numbers, or single-cell references.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.confidence_Norm = function(alpha, standardDev, size) {
			/// <summary>
			/// Returns the confidence interval for a population mean, using a normal distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="alpha" >Is the significance level used to compute the confidence level, a number greater than 0 and less than 1.</param>
			/// <param name="standardDev" >Is the population standard deviation for the data range and is assumed to be known. standardDev must be greater than 0.</param>
			/// <param name="size" >Is the sample size.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.confidence_T = function(alpha, standardDev, size) {
			/// <summary>
			/// Returns the confidence interval for a population mean, using a Student&apos;s T distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="alpha" >Is the significance level used to compute the confidence level, a number greater than 0 and less than 1.</param>
			/// <param name="standardDev" >Is the population standard deviation for the data range and is assumed to be known. standardDev must be greater than 0.</param>
			/// <param name="size" >Is the sample size.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.convert = function(number, fromUnit, toUnit) {
			/// <summary>
			/// Converts a number from one measurement system to another. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value in from_units to convert.</param>
			/// <param name="fromUnit" >Is the units for number.</param>
			/// <param name="toUnit" >Is the units for the result.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.cos = function(number) {
			/// <summary>
			/// Returns the cosine of an angle. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the angle in radians for which you want the cosine.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.cosh = function(number) {
			/// <summary>
			/// Returns the hyperbolic cosine of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is any real number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.cot = function(number) {
			/// <summary>
			/// Returns the cotangent of an angle. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the angle in radians for which you want the cotangent.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.coth = function(number) {
			/// <summary>
			/// Returns the hyperbolic cotangent of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the angle in radians for which you want the hyperbolic cotangent.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.count = function(values) {
			/// <summary>
			/// Counts the number of cells in a range that contain numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 arguments that can contain or refer to a variety of different types of data, but only numbers are counted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.countA = function(values) {
			/// <summary>
			/// Counts the number of cells in a range that are not empty. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 arguments representing the values and cells you want to count. Values can be any type of information.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.countBlank = function(range) {
			/// <summary>
			/// Counts the number of empty cells in a specified range of cells. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="range" >Is the range from which you want to count the empty cells.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.countIf = function(range, criteria) {
			/// <summary>
			/// Counts the number of cells within a range that meet the given condition. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="range" >Is the range of cells from which you want to count nonblank cells.</param>
			/// <param name="criteria" >Is the condition in the form of a number, expression, or text that defines which cells will be counted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.countIfs = function(values) {
			/// <summary>
			/// Counts the number of cells specified by a given set of conditions or criteria. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, where the first element of each pair is the Is the range of cells you want evaluated for the particular condition , and the second element is is the condition in the form of a number, expression, or text that defines which cells will be counted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.coupDayBs = function(settlement, maturity, frequency, basis) {
			/// <summary>
			/// Returns the number of days from the beginning of the coupon period to the settlement date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.coupDays = function(settlement, maturity, frequency, basis) {
			/// <summary>
			/// Returns the number of days in the coupon period that contains the settlement date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.coupDaysNc = function(settlement, maturity, frequency, basis) {
			/// <summary>
			/// Returns the number of days from the settlement date to the next coupon date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.coupNcd = function(settlement, maturity, frequency, basis) {
			/// <summary>
			/// Returns the next coupon date after the settlement date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.coupNum = function(settlement, maturity, frequency, basis) {
			/// <summary>
			/// Returns the number of coupons payable between the settlement date and maturity date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.coupPcd = function(settlement, maturity, frequency, basis) {
			/// <summary>
			/// Returns the previous coupon date before the settlement date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.csc = function(number) {
			/// <summary>
			/// Returns the cosecant of an angle. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the angle in radians for which you want the cosecant.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.csch = function(number) {
			/// <summary>
			/// Returns the hyperbolic cosecant of an angle. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the angle in radians for which you want the hyperbolic cosecant.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.cumIPmt = function(rate, nper, pv, startPeriod, endPeriod, type) {
			/// <summary>
			/// Returns the cumulative interest paid between two periods. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the interest rate.</param>
			/// <param name="nper" >Is the total number of payment periods.</param>
			/// <param name="pv" >Is the present value.</param>
			/// <param name="startPeriod" >Is the first period in the calculation.</param>
			/// <param name="endPeriod" >Is the last period in the calculation.</param>
			/// <param name="type" >Is the timing of the payment.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.cumPrinc = function(rate, nper, pv, startPeriod, endPeriod, type) {
			/// <summary>
			/// Returns the cumulative principal paid on a loan between two periods. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the interest rate.</param>
			/// <param name="nper" >Is the total number of payment periods.</param>
			/// <param name="pv" >Is the present value.</param>
			/// <param name="startPeriod" >Is the first period in the calculation.</param>
			/// <param name="endPeriod" >Is the last period in the calculation.</param>
			/// <param name="type" >Is the timing of the payment.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.daverage = function(database, field, criteria) {
			/// <summary>
			/// Averages the values in a column in a list or database that match conditions you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dcount = function(database, field, criteria) {
			/// <summary>
			/// Counts the cells containing numbers in the field (column) of records in the database that match the conditions you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dcountA = function(database, field, criteria) {
			/// <summary>
			/// Counts nonblank cells in the field (column) of records in the database that match the conditions you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dget = function(database, field, criteria) {
			/// <summary>
			/// Extracts from a database a single record that matches the conditions you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dmax = function(database, field, criteria) {
			/// <summary>
			/// Returns the largest number in the field (column) of records in the database that match the conditions you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dmin = function(database, field, criteria) {
			/// <summary>
			/// Returns the smallest number in the field (column) of records in the database that match the conditions you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dproduct = function(database, field, criteria) {
			/// <summary>
			/// Multiplies the values in the field (column) of records in the database that match the conditions you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dstDev = function(database, field, criteria) {
			/// <summary>
			/// Estimates the standard deviation based on a sample from selected database entries. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dstDevP = function(database, field, criteria) {
			/// <summary>
			/// Calculates the standard deviation based on the entire population of selected database entries. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dsum = function(database, field, criteria) {
			/// <summary>
			/// Adds the numbers in the field (column) of records in the database that match the conditions you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dvar = function(database, field, criteria) {
			/// <summary>
			/// Estimates variance based on a sample from selected database entries. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dvarP = function(database, field, criteria) {
			/// <summary>
			/// Calculates variance based on the entire population of selected database entries. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="database" >Is the range of cells that makes up the list or database. A database is a list of related data.</param>
			/// <param name="field" >Is either the label of the column in double quotation marks or a number that represents the column&apos;s position in the list.</param>
			/// <param name="criteria" >Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.date = function(year, month, day) {
			/// <summary>
			/// Returns the number that represents the date in Microsoft Excel date-time code. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="year" >Is a number from 1900 or 1904 (depending on the workbook&apos;s date system) to 9999.</param>
			/// <param name="month" >Is a number from 1 to 12 representing the month of the year.</param>
			/// <param name="day" >Is a number from 1 to 31 representing the day of the month.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.datevalue = function(dateText) {
			/// <summary>
			/// Converts a date in the form of text to a number that represents the date in Microsoft Excel date-time code. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="dateText" >Is text that represents a date in a Microsoft Excel date format, between 1/1/1900 or 1/1/1904 (depending on the workbook&apos;s date system) and 12/31/9999.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.day = function(serialNumber) {
			/// <summary>
			/// Returns the day of the month, a number from 1 to 31. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="serialNumber" >Is a number in the date-time code used by Microsoft Excel.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.days = function(endDate, startDate) {
			/// <summary>
			/// Returns the number of days between the two dates. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="endDate" >startDate and endDate are the two dates between which you want to know the number of days.</param>
			/// <param name="startDate" >startDate and endDate are the two dates between which you want to know the number of days.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.days360 = function(startDate, endDate, method) {
			/// <summary>
			/// Returns the number of days between two dates based on a 360-day year (twelve 30-day months). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="startDate" >startDate and endDate are the two dates between which you want to know the number of days.</param>
			/// <param name="endDate" >startDate and endDate are the two dates between which you want to know the number of days.</param>
			/// <param name="method"  optional="true">Is a logical value specifying the calculation method: U.S. (NASD) = FALSE or omitted; European = TRUE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.db = function(cost, salvage, life, period, month) {
			/// <summary>
			/// Returns the depreciation of an asset for a specified period using the fixed-declining balance method. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="cost" >Is the initial cost of the asset.</param>
			/// <param name="salvage" >Is the salvage value at the end of the life of the asset.</param>
			/// <param name="life" >Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).</param>
			/// <param name="period" >Is the period for which you want to calculate the depreciation. Period must use the same units as Life.</param>
			/// <param name="month"  optional="true">Is the number of months in the first year. If month is omitted, it is assumed to be 12.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dbcs = function(text) {
			/// <summary>
			/// Changes half-width (single-byte) characters within a character string to full-width (double-byte) characters. Use with double-byte character sets (DBCS). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is a text, or a reference to a cell containing a text.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.ddb = function(cost, salvage, life, period, factor) {
			/// <summary>
			/// Returns the depreciation of an asset for a specified period using the double-declining balance method or some other method you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="cost" >Is the initial cost of the asset.</param>
			/// <param name="salvage" >Is the salvage value at the end of the life of the asset.</param>
			/// <param name="life" >Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).</param>
			/// <param name="period" >Is the period for which you want to calculate the depreciation. Period must use the same units as Life.</param>
			/// <param name="factor"  optional="true">Is the rate at which the balance declines. If Factor is omitted, it is assumed to be 2 (the double-declining balance method).</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dec2Bin = function(number, places) {
			/// <summary>
			/// Converts a decimal number to binary. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the decimal integer you want to convert.</param>
			/// <param name="places"  optional="true">Is the number of characters to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dec2Hex = function(number, places) {
			/// <summary>
			/// Converts a decimal number to hexadecimal. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the decimal integer you want to convert.</param>
			/// <param name="places"  optional="true">Is the number of characters to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dec2Oct = function(number, places) {
			/// <summary>
			/// Converts a decimal number to octal. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the decimal integer you want to convert.</param>
			/// <param name="places"  optional="true">Is the number of characters to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.decimal = function(number, radix) {
			/// <summary>
			/// Converts a text representation of a number in a given base into a decimal number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the number that you want to convert.</param>
			/// <param name="radix" >Is the base Radix of the number you are converting.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.degrees = function(angle) {
			/// <summary>
			/// Converts radians to degrees. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="angle" >Is the angle in radians that you want to convert.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.delta = function(number1, number2) {
			/// <summary>
			/// Tests whether two numbers are equal. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number1" >Is the first number.</param>
			/// <param name="number2"  optional="true">Is the second number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.devSq = function(values) {
			/// <summary>
			/// Returns the sum of squares of deviations of data points from their sample mean. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 arguments, or an array or array reference, on which you want DEVSQ to calculate.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.disc = function(settlement, maturity, pr, redemption, basis) {
			/// <summary>
			/// Returns the discount rate for a security. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="pr" >Is the security&apos;s price per $100 face value.</param>
			/// <param name="redemption" >Is the security&apos;s redemption value per $100 face value.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dollar = function(number, decimals) {
			/// <summary>
			/// Converts a number to text, using currency format. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is a number, a reference to a cell containing a number, or a formula that evaluates to a number.</param>
			/// <param name="decimals"  optional="true">Is the number of digits to the right of the decimal point. The number is rounded as necessary; if omitted, Decimals = 2.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dollarDe = function(fractionalDollar, fraction) {
			/// <summary>
			/// Converts a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="fractionalDollar" >Is a number expressed as a fraction.</param>
			/// <param name="fraction" >Is the integer to use in the denominator of the fraction.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.dollarFr = function(decimalDollar, fraction) {
			/// <summary>
			/// Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="decimalDollar" >Is a decimal number.</param>
			/// <param name="fraction" >Is the integer to use in the denominator of a fraction.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.duration = function(settlement, maturity, coupon, yld, frequency, basis) {
			/// <summary>
			/// Returns the annual duration of a security with periodic interest payments. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="coupon" >Is the security&apos;s annual coupon rate.</param>
			/// <param name="yld" >Is the security&apos;s annual yield.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.ecma_Ceiling = function(number, significance) {
			/// <summary>
			/// Rounds a number up, to the nearest integer or to the nearest multiple of significance. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value you want to round.</param>
			/// <param name="significance" >Is the multiple to which you want to round.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.edate = function(startDate, months) {
			/// <summary>
			/// Returns the serial number of the date that is the indicated number of months before or after the start date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="startDate" >Is a serial date number that represents the start date.</param>
			/// <param name="months" >Is the number of months before or after startDate.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.effect = function(nominalRate, npery) {
			/// <summary>
			/// Returns the effective annual interest rate. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="nominalRate" >Is the nominal interest rate.</param>
			/// <param name="npery" >Is the number of compounding periods per year.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.eoMonth = function(startDate, months) {
			/// <summary>
			/// Returns the serial number of the last day of the month before or after a specified number of months. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="startDate" >Is a serial date number that represents the start date.</param>
			/// <param name="months" >Is the number of months before or after the startDate.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.erf = function(lowerLimit, upperLimit) {
			/// <summary>
			/// Returns the error function. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="lowerLimit" >Is the lower bound for integrating ERF.</param>
			/// <param name="upperLimit"  optional="true">Is the upper bound for integrating ERF.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.erfC = function(x) {
			/// <summary>
			/// Returns the complementary error function. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the lower bound for integrating ERF.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.erfC_Precise = function(X) {
			/// <summary>
			/// Returns the complementary error function. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="X" >Is the lower bound for integrating ERFC.PRECISE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.erf_Precise = function(X) {
			/// <summary>
			/// Returns the error function. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="X" >Is the lower bound for integrating ERF.PRECISE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.error_Type = function(errorVal) {
			/// <summary>
			/// Returns a number matching an error value. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="errorVal" >Is the error value for which you want the identifying number, and can be an actual error value or a reference to a cell containing an error value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.even = function(number) {
			/// <summary>
			/// Rounds a positive number up and negative number down to the nearest even integer. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value to round.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.exact = function(text1, text2) {
			/// <summary>
			/// Checks whether two text strings are exactly the same, and returns TRUE or FALSE. EXACT is case-sensitive. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text1" >Is the first text string.</param>
			/// <param name="text2" >Is the second text string.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.exp = function(number) {
			/// <summary>
			/// Returns e raised to the power of a given number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the exponent applied to the base e. The constant e equals 2.71828182845904, the base of the natural logarithm.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.expon_Dist = function(x, lambda, cumulative) {
			/// <summary>
			/// Returns the exponential distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value of the function, a nonnegative number.</param>
			/// <param name="lambda" >Is the parameter value, a positive number.</param>
			/// <param name="cumulative" >Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.fvschedule = function(principal, schedule) {
			/// <summary>
			/// Returns the future value of an initial principal after applying a series of compound interest rates. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="principal" >Is the present value.</param>
			/// <param name="schedule" >Is an array of interest rates to apply.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.f_Dist = function(x, degFreedom1, degFreedom2, cumulative) {
			/// <summary>
			/// Returns the (left-tailed) F probability distribution (degree of diversity) for two data sets. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which to evaluate the function, a nonnegative number.</param>
			/// <param name="degFreedom1" >Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <param name="degFreedom2" >Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <param name="cumulative" >Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.f_Dist_RT = function(x, degFreedom1, degFreedom2) {
			/// <summary>
			/// Returns the (right-tailed) F probability distribution (degree of diversity) for two data sets. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which to evaluate the function, a nonnegative number.</param>
			/// <param name="degFreedom1" >Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <param name="degFreedom2" >Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.f_Inv = function(probability, degFreedom1, degFreedom2) {
			/// <summary>
			/// Returns the inverse of the (left-tailed) F probability distribution: if p = F.DIST(x,...), then F.INV(p,...) = x. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive.</param>
			/// <param name="degFreedom1" >Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <param name="degFreedom2" >Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.f_Inv_RT = function(probability, degFreedom1, degFreedom2) {
			/// <summary>
			/// Returns the inverse of the (right-tailed) F probability distribution: if p = F.DIST.RT(x,...), then F.INV.RT(p,...) = x. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive.</param>
			/// <param name="degFreedom1" >Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <param name="degFreedom2" >Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.fact = function(number) {
			/// <summary>
			/// Returns the factorial of a number, equal to 1*2*3*...* Number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the nonnegative number you want the factorial of.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.factDouble = function(number) {
			/// <summary>
			/// Returns the double factorial of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value for which to return the double factorial.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.false = function() {
			/// <summary>
			/// Returns the logical value FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.find = function(findText, withinText, startNum) {
			/// <summary>
			/// Returns the starting position of one text string within another text string. FIND is case-sensitive. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="findText" >Is the text you want to find. Use double quotes (empty text) to match the first character in withinText; wildcard characters not allowed.</param>
			/// <param name="withinText" >Is the text containing the text you want to find.</param>
			/// <param name="startNum"  optional="true">Specifies the character at which to start the search. The first character in withinText is character number 1. If omitted, startNum = 1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.findB = function(findText, withinText, startNum) {
			/// <summary>
			/// Finds the starting position of one text string within another text string. FINDB is case-sensitive. Use with double-byte character sets (DBCS). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="findText" >Is the text you want to find.</param>
			/// <param name="withinText" >Is the text containing the text you want to find.</param>
			/// <param name="startNum"  optional="true">Specifies the character at which to start the search.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.fisher = function(x) {
			/// <summary>
			/// Returns the Fisher transformation. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value for which you want the transformation, a number between -1 and 1, excluding -1 and 1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.fisherInv = function(y) {
			/// <summary>
			/// Returns the inverse of the Fisher transformation: if y = FISHER(x), then FISHERINV(y) = x. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="y" >Is the value for which you want to perform the inverse of the transformation.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.fixed = function(number, decimals, noCommas) {
			/// <summary>
			/// Rounds a number to the specified number of decimals and returns the result as text with or without commas. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the number you want to round and convert to text.</param>
			/// <param name="decimals"  optional="true">Is the number of digits to the right of the decimal point. If omitted, Decimals = 2.</param>
			/// <param name="noCommas"  optional="true">Is a logical value: do not display commas in the returned text = TRUE; do display commas in the returned text = FALSE or omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.floor_Math = function(number, significance, mode) {
			/// <summary>
			/// Rounds a number down, to the nearest integer or to the nearest multiple of significance. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value you want to round.</param>
			/// <param name="significance"  optional="true">Is the multiple to which you want to round.</param>
			/// <param name="mode"  optional="true">When given and nonzero this function will round towards zero.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.floor_Precise = function(number, significance) {
			/// <summary>
			/// Rounds a number down, to the nearest integer or to the nearest multiple of significance. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the numeric value you want to round.</param>
			/// <param name="significance"  optional="true">Is the multiple to which you want to round.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.fv = function(rate, nper, pmt, pv, type) {
			/// <summary>
			/// Returns the future value of an investment based on periodic, constant payments and a constant interest rate. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.</param>
			/// <param name="nper" >Is the total number of payment periods in the investment.</param>
			/// <param name="pmt" >Is the payment made each period; it cannot change over the life of the investment.</param>
			/// <param name="pv"  optional="true">Is the present value, or the lump-sum amount that a series of future payments is worth now. If omitted, Pv = 0.</param>
			/// <param name="type"  optional="true">Is a value representing the timing of payment: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.gamma = function(x) {
			/// <summary>
			/// Returns the Gamma function value. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value for which you want to calculate Gamma.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.gammaLn = function(x) {
			/// <summary>
			/// Returns the natural logarithm of the gamma function. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value for which you want to calculate GAMMALN, a positive number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.gammaLn_Precise = function(x) {
			/// <summary>
			/// Returns the natural logarithm of the gamma function. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value for which you want to calculate GAMMALN.PRECISE, a positive number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.gamma_Dist = function(x, alpha, beta, cumulative) {
			/// <summary>
			/// Returns the gamma distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which you want to evaluate the distribution, a nonnegative number.</param>
			/// <param name="alpha" >Is a parameter to the distribution, a positive number.</param>
			/// <param name="beta" >Is a parameter to the distribution, a positive number. If beta = 1, GAMMA.DIST returns the standard gamma distribution.</param>
			/// <param name="cumulative" >Is a logical value: return the cumulative distribution function = TRUE; return the probability mass function = FALSE or omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.gamma_Inv = function(probability, alpha, beta) {
			/// <summary>
			/// Returns the inverse of the gamma cumulative distribution: if p = GAMMA.DIST(x,...), then GAMMA.INV(p,...) = x. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is the probability associated with the gamma distribution, a number between 0 and 1, inclusive.</param>
			/// <param name="alpha" >Is a parameter to the distribution, a positive number.</param>
			/// <param name="beta" >Is a parameter to the distribution, a positive number. If beta = 1, GAMMA.INV returns the inverse of the standard gamma distribution.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.gauss = function(x) {
			/// <summary>
			/// Returns 0.5 less than the standard normal cumulative distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value for which you want the distribution.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.gcd = function(values) {
			/// <summary>
			/// Returns the greatest common divisor. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 values.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.geStep = function(number, step) {
			/// <summary>
			/// Tests whether a number is greater than a threshold value. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value to test against step.</param>
			/// <param name="step"  optional="true">Is the threshold value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.geoMean = function(values) {
			/// <summary>
			/// Returns the geometric mean of an array or range of positive numeric data. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the mean.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.hlookup = function(lookupValue, tableArray, rowIndexNum, rangeLookup) {
			/// <summary>
			/// Looks for a value in the top row of a table or array of values and returns the value in the same column from a row you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="lookupValue" >Is the value to be found in the first row of the table and can be a value, a reference, or a text string.</param>
			/// <param name="tableArray" >Is a table of text, numbers, or logical values in which data is looked up. tableArray can be a reference to a range or a range name.</param>
			/// <param name="rowIndexNum" >Is the row number in tableArray from which the matching value should be returned. The first row of values in the table is row 1.</param>
			/// <param name="rangeLookup"  optional="true">Is a logical value: to find the closest match in the top row (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.harMean = function(values) {
			/// <summary>
			/// Returns the harmonic mean of a data set of positive numbers: the reciprocal of the arithmetic mean of reciprocals. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the harmonic mean.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.hex2Bin = function(number, places) {
			/// <summary>
			/// Converts a Hexadecimal number to binary. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the hexadecimal number you want to convert.</param>
			/// <param name="places"  optional="true">Is the number of characters to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.hex2Dec = function(number) {
			/// <summary>
			/// Converts a hexadecimal number to decimal. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the hexadecimal number you want to convert.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.hex2Oct = function(number, places) {
			/// <summary>
			/// Converts a hexadecimal number to octal. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the hexadecimal number you want to convert.</param>
			/// <param name="places"  optional="true">Is the number of characters to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.hour = function(serialNumber) {
			/// <summary>
			/// Returns the hour as a number from 0 (12:00 A.M.) to 23 (11:00 P.M.). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="serialNumber" >Is a number in the date-time code used by Microsoft Excel, or text in time format, such as 16:48:00 or 4:48:00 PM.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.hypGeom_Dist = function(sampleS, numberSample, populationS, numberPop, cumulative) {
			/// <summary>
			/// Returns the hypergeometric distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="sampleS" >Is the number of successes in the sample.</param>
			/// <param name="numberSample" >Is the size of the sample.</param>
			/// <param name="populationS" >Is the number of successes in the population.</param>
			/// <param name="numberPop" >Is the population size.</param>
			/// <param name="cumulative" >Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.hyperlink = function(linkLocation, friendlyName) {
			/// <summary>
			/// Creates a shortcut or jump that opens a document stored on your hard drive, a network server, or on the Internet. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="linkLocation" >Is the text giving the path and file name to the document to be opened, a hard drive location, UNC address, or URL path.</param>
			/// <param name="friendlyName"  optional="true">Is text or a number that is displayed in the cell. If omitted, the cell displays the linkLocation text.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.iso_Ceiling = function(number, significance) {
			/// <summary>
			/// Rounds a number up, to the nearest integer or to the nearest multiple of significance. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value you want to round.</param>
			/// <param name="significance"  optional="true">Is the optional multiple to which you want to round.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.if = function(logicalTest, valueIfTrue, valueIfFalse) {
			/// <summary>
			/// Checks whether a condition is met, and returns one value if TRUE, and another value if FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="logicalTest" >Is any value or expression that can be evaluated to TRUE or FALSE.</param>
			/// <param name="valueIfTrue"  optional="true">Is the value that is returned if logicalTest is TRUE. If omitted, TRUE is returned. You can nest up to seven IF functions.</param>
			/// <param name="valueIfFalse"  optional="true">Is the value that is returned if logicalTest is FALSE. If omitted, FALSE is returned.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imAbs = function(inumber) {
			/// <summary>
			/// Returns the absolute value (modulus) of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the absolute value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imArgument = function(inumber) {
			/// <summary>
			/// Returns the argument q, an angle expressed in radians. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the argument.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imConjugate = function(inumber) {
			/// <summary>
			/// Returns the complex conjugate of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the conjugate.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imCos = function(inumber) {
			/// <summary>
			/// Returns the cosine of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the cosine.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imCosh = function(inumber) {
			/// <summary>
			/// Returns the hyperbolic cosine of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the hyperbolic cosine.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imCot = function(inumber) {
			/// <summary>
			/// Returns the cotangent of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the cotangent.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imCsc = function(inumber) {
			/// <summary>
			/// Returns the cosecant of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the cosecant.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imCsch = function(inumber) {
			/// <summary>
			/// Returns the hyperbolic cosecant of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the hyperbolic cosecant.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imDiv = function(inumber1, inumber2) {
			/// <summary>
			/// Returns the quotient of two complex numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber1" >Is the complex numerator or dividend.</param>
			/// <param name="inumber2" >Is the complex denominator or divisor.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imExp = function(inumber) {
			/// <summary>
			/// Returns the exponential of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the exponential.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imLn = function(inumber) {
			/// <summary>
			/// Returns the natural logarithm of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the natural logarithm.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imLog10 = function(inumber) {
			/// <summary>
			/// Returns the base-10 logarithm of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the common logarithm.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imLog2 = function(inumber) {
			/// <summary>
			/// Returns the base-2 logarithm of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the base-2 logarithm.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imPower = function(inumber, number) {
			/// <summary>
			/// Returns a complex number raised to an integer power. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number you want to raise to a power.</param>
			/// <param name="number" >Is the power to which you want to raise the complex number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imProduct = function(values) {
			/// <summary>
			/// Returns the product of 1 to 255 complex numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >Inumber1, Inumber2,... are from 1 to 255 complex numbers to multiply.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imReal = function(inumber) {
			/// <summary>
			/// Returns the real coefficient of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the real coefficient.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imSec = function(inumber) {
			/// <summary>
			/// Returns the secant of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the secant.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imSech = function(inumber) {
			/// <summary>
			/// Returns the hyperbolic secant of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the hyperbolic secant.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imSin = function(inumber) {
			/// <summary>
			/// Returns the sine of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the sine.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imSinh = function(inumber) {
			/// <summary>
			/// Returns the hyperbolic sine of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the hyperbolic sine.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imSqrt = function(inumber) {
			/// <summary>
			/// Returns the square root of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the square root.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imSub = function(inumber1, inumber2) {
			/// <summary>
			/// Returns the difference of two complex numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber1" >Is the complex number from which to subtract inumber2.</param>
			/// <param name="inumber2" >Is the complex number to subtract from inumber1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imSum = function(values) {
			/// <summary>
			/// Returns the sum of complex numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are from 1 to 255 complex numbers to add.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imTan = function(inumber) {
			/// <summary>
			/// Returns the tangent of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the tangent.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.imaginary = function(inumber) {
			/// <summary>
			/// Returns the imaginary coefficient of a complex number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="inumber" >Is a complex number for which you want the imaginary coefficient.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.int = function(number) {
			/// <summary>
			/// Rounds a number down to the nearest integer. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the real number you want to round down to an integer.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.intRate = function(settlement, maturity, investment, redemption, basis) {
			/// <summary>
			/// Returns the interest rate for a fully invested security. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="investment" >Is the amount invested in the security.</param>
			/// <param name="redemption" >Is the amount to be received at maturity.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.ipmt = function(rate, per, nper, pv, fv, type) {
			/// <summary>
			/// Returns the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.</param>
			/// <param name="per" >Is the period for which you want to find the interest and must be in the range 1 to Nper.</param>
			/// <param name="nper" >Is the total number of payment periods in an investment.</param>
			/// <param name="pv" >Is the present value, or the lump-sum amount that a series of future payments is worth now.</param>
			/// <param name="fv"  optional="true">Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, Fv = 0.</param>
			/// <param name="type"  optional="true">Is a logical value representing the timing of payment: at the end of the period = 0 or omitted, at the beginning of the period = 1.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.irr = function(values, guess) {
			/// <summary>
			/// Returns the internal rate of return for a series of cash flows. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" >Is an array or a reference to cells that contain numbers for which you want to calculate the internal rate of return.</param>
			/// <param name="guess"  optional="true">Is a number that you guess is close to the result of IRR; 0.1 (10 percent) if omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isErr = function(value) {
			/// <summary>
			/// Checks whether a value is an error (#VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, or #NULL!) excluding #N/A, and returns TRUE or FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isError = function(value) {
			/// <summary>
			/// Checks whether a value is an error (#N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, or #NULL!), and returns TRUE or FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isEven = function(number) {
			/// <summary>
			/// Returns TRUE if the number is even. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value to test.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isFormula = function(reference) {
			/// <summary>
			/// Checks whether a reference is to a cell containing a formula, and returns TRUE or FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="reference" >Is a reference to the cell you want to test.  Reference can be a cell reference, a formula, or name that refers to a cell.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isLogical = function(value) {
			/// <summary>
			/// Checks whether a value is a logical value (TRUE or FALSE), and returns TRUE or FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isNA = function(value) {
			/// <summary>
			/// Checks whether a value is #N/A, and returns TRUE or FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isNonText = function(value) {
			/// <summary>
			/// Checks whether a value is not text (blank cells are not text), and returns TRUE or FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is the value you want tested: a cell; a formula; or a name referring to a cell, formula, or value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isNumber = function(value) {
			/// <summary>
			/// Checks whether a value is a number, and returns TRUE or FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isOdd = function(number) {
			/// <summary>
			/// Returns TRUE if the number is odd. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value to test.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isText = function(value) {
			/// <summary>
			/// Checks whether a value is text, and returns TRUE or FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isoWeekNum = function(date) {
			/// <summary>
			/// Returns the ISO week number in the year for a given date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="date" >Is the date-time code used by Microsoft Excel for date and time calculation.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.ispmt = function(rate, per, nper, pv) {
			/// <summary>
			/// Returns the interest paid during a specific period of an investment. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.</param>
			/// <param name="per" >Period for which you want to find the interest.</param>
			/// <param name="nper" >Number of payment periods in an investment.</param>
			/// <param name="pv" >Lump sum amount that a series of future payments is right now.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.isref = function(value) {
			/// <summary>
			/// Checks whether a value is a reference, and returns TRUE or FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.kurt = function(values) {
			/// <summary>
			/// Returns the kurtosis of a data set. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the kurtosis.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.large = function(array, k) {
			/// <summary>
			/// Returns the k-th largest value in a data set. For example, the fifth largest number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is the array or range of data for which you want to determine the k-th largest value.</param>
			/// <param name="k" >Is the position (from the largest) in the array or cell range of the value to return.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.lcm = function(values) {
			/// <summary>
			/// Returns the least common multiple. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 values for which you want the least common multiple.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.left = function(text, numChars) {
			/// <summary>
			/// Returns the specified number of characters from the start of a text string. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text string containing the characters you want to extract.</param>
			/// <param name="numChars"  optional="true">Specifies how many characters you want LEFT to extract; 1 if omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.leftb = function(text, numBytes) {
			/// <summary>
			/// Returns the specified number of characters from the start of a text string. Use with double-byte character sets (DBCS). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text string containing the characters you want to extract.</param>
			/// <param name="numBytes"  optional="true">Specifies how many characters you want LEFT to return.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.len = function(text) {
			/// <summary>
			/// Returns the number of characters in a text string. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text whose length you want to find. Spaces count as characters.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.lenb = function(text) {
			/// <summary>
			/// Returns the number of characters in a text string. Use with double-byte character sets (DBCS). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text whose length you want to find.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.ln = function(number) {
			/// <summary>
			/// Returns the natural logarithm of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the positive real number for which you want the natural logarithm.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.log = function(number, base) {
			/// <summary>
			/// Returns the logarithm of a number to the base you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the positive real number for which you want the logarithm.</param>
			/// <param name="base"  optional="true">Is the base of the logarithm; 10 if omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.log10 = function(number) {
			/// <summary>
			/// Returns the base-10 logarithm of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the positive real number for which you want the base-10 logarithm.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.logNorm_Dist = function(x, mean, standardDev, cumulative) {
			/// <summary>
			/// Returns the lognormal distribution of x, where ln(x) is normally distributed with parameters Mean and Standard_dev. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which to evaluate the function, a positive number.</param>
			/// <param name="mean" >Is the mean of ln(x).</param>
			/// <param name="standardDev" >Is the standard deviation of ln(x), a positive number.</param>
			/// <param name="cumulative" >Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.logNorm_Inv = function(probability, mean, standardDev) {
			/// <summary>
			/// Returns the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with parameters Mean and Standard_dev. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is a probability associated with the lognormal distribution, a number between 0 and 1, inclusive.</param>
			/// <param name="mean" >Is the mean of ln(x).</param>
			/// <param name="standardDev" >Is the standard deviation of ln(x), a positive number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.lookup = function(lookupValue, lookupVector, resultVector) {
			/// <summary>
			/// Looks up a value either from a one-row or one-column range or from an array. Provided for backward compatibility. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="lookupValue" >Is a value that LOOKUP searches for in lookupVector and can be a number, text, a logical value, or a name or reference to a value.</param>
			/// <param name="lookupVector" >Is a range that contains only one row or one column of text, numbers, or logical values, placed in ascending order.</param>
			/// <param name="resultVector"  optional="true">Is a range that contains only one row or column, the same size as lookupVector.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.lower = function(text) {
			/// <summary>
			/// Converts all letters in a text string to lowercase. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text you want to convert to lowercase. Characters in Text that are not letters are not changed.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.mduration = function(settlement, maturity, coupon, yld, frequency, basis) {
			/// <summary>
			/// Returns the Macauley modified duration for a security with an assumed par value of $100. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="coupon" >Is the security&apos;s annual coupon rate.</param>
			/// <param name="yld" >Is the security&apos;s annual yield.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.mirr = function(values, financeRate, reinvestRate) {
			/// <summary>
			/// Returns the internal rate of return for a series of periodic cash flows, considering both cost of investment and interest on reinvestment of cash. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" >Is an array or a reference to cells that contain numbers that represent a series of payments (negative) and income (positive) at regular periods.</param>
			/// <param name="financeRate" >Is the interest rate you pay on the money used in the cash flows.</param>
			/// <param name="reinvestRate" >Is the interest rate you receive on the cash flows as you reinvest them.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.mround = function(number, multiple) {
			/// <summary>
			/// Returns a number rounded to the desired multiple. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value to round.</param>
			/// <param name="multiple" >Is the multiple to which you want to round number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.match = function(lookupValue, lookupArray, matchType) {
			/// <summary>
			/// Returns the relative position of an item in an array that matches a specified value in a specified order. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="lookupValue" >Is the value you use to find the value you want in the array, a number, text, or logical value, or a reference to one of these.</param>
			/// <param name="lookupArray" >Is a contiguous range of cells containing possible lookup values, an array of values, or a reference to an array.</param>
			/// <param name="matchType"  optional="true">Is a number 1, 0, or -1 indicating which value to return.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.max = function(values) {
			/// <summary>
			/// Returns the largest value in a set of values. Ignores logical values and text. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the maximum.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.maxA = function(values) {
			/// <summary>
			/// Returns the largest value in a set of values. Does not ignore logical values and text. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the maximum.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.median = function(values) {
			/// <summary>
			/// Returns the median, or the number in the middle of the set of given numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the median.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.mid = function(text, startNum, numChars) {
			/// <summary>
			/// Returns the characters from the middle of a text string, given a starting position and length. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text string from which you want to extract the characters.</param>
			/// <param name="startNum" >Is the position of the first character you want to extract. The first character in Text is 1.</param>
			/// <param name="numChars" >Specifies how many characters to return from Text.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.midb = function(text, startNum, numBytes) {
			/// <summary>
			/// Returns characters from the middle of a text string, given a starting position and length. Use with double-byte character sets (DBCS). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text string containing the characters you want to extract.</param>
			/// <param name="startNum" >Is the position of the first character you want to extract in text.</param>
			/// <param name="numBytes" >Specifies how many characters to return from text.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.min = function(values) {
			/// <summary>
			/// Returns the smallest number in a set of values. Ignores logical values and text. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the minimum.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.minA = function(values) {
			/// <summary>
			/// Returns the smallest value in a set of values. Does not ignore logical values and text. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the minimum.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.minute = function(serialNumber) {
			/// <summary>
			/// Returns the minute, a number from 0 to 59. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="serialNumber" >Is a number in the date-time code used by Microsoft Excel or text in time format, such as 16:48:00 or 4:48:00 PM.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.mod = function(number, divisor) {
			/// <summary>
			/// Returns the remainder after a number is divided by a divisor. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the number for which you want to find the remainder after the division is performed.</param>
			/// <param name="divisor" >Is the number by which you want to divide Number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.month = function(serialNumber) {
			/// <summary>
			/// Returns the month, a number from 1 (January) to 12 (December). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="serialNumber" >Is a number in the date-time code used by Microsoft Excel.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.multiNomial = function(values) {
			/// <summary>
			/// Returns the multinomial of a set of numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 values for which you want the multinomial.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.n = function(value) {
			/// <summary>
			/// Converts non-number value to a number, dates to serial numbers, TRUE to 1, anything else to 0 (zero). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is the value you want converted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.nper = function(rate, pmt, pv, fv, type) {
			/// <summary>
			/// Returns the number of periods for an investment based on periodic, constant payments and a constant interest rate. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.</param>
			/// <param name="pmt" >Is the payment made each period; it cannot change over the life of the investment.</param>
			/// <param name="pv" >Is the present value, or the lump-sum amount that a series of future payments is worth now.</param>
			/// <param name="fv"  optional="true">Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, zero is used.</param>
			/// <param name="type"  optional="true">Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.na = function() {
			/// <summary>
			/// Returns the error value #N/A (value not available). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.negBinom_Dist = function(numberF, numberS, probabilityS, cumulative) {
			/// <summary>
			/// Returns the negative binomial distribution, the probability that there will be Number_f failures before the Number_s-th success, with Probability_s probability of a success. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="numberF" >Is the number of failures.</param>
			/// <param name="numberS" >Is the threshold number of successes.</param>
			/// <param name="probabilityS" >Is the probability of a success; a number between 0 and 1.</param>
			/// <param name="cumulative" >Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.networkDays = function(startDate, endDate, holidays) {
			/// <summary>
			/// Returns the number of whole workdays between two dates. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="startDate" >Is a serial date number that represents the start date.</param>
			/// <param name="endDate" >Is a serial date number that represents the end date.</param>
			/// <param name="holidays"  optional="true">Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.networkDays_Intl = function(startDate, endDate, weekend, holidays) {
			/// <summary>
			/// Returns the number of whole workdays between two dates with custom weekend parameters. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="startDate" >Is a serial date number that represents the start date.</param>
			/// <param name="endDate" >Is a serial date number that represents the end date.</param>
			/// <param name="weekend"  optional="true">Is a number or string specifying when weekends occur.</param>
			/// <param name="holidays"  optional="true">Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.nominal = function(effectRate, npery) {
			/// <summary>
			/// Returns the annual nominal interest rate. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="effectRate" >Is the effective interest rate.</param>
			/// <param name="npery" >Is the number of compounding periods per year.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.norm_Dist = function(x, mean, standardDev, cumulative) {
			/// <summary>
			/// Returns the normal distribution for the specified mean and standard deviation. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value for which you want the distribution.</param>
			/// <param name="mean" >Is the arithmetic mean of the distribution.</param>
			/// <param name="standardDev" >Is the standard deviation of the distribution, a positive number.</param>
			/// <param name="cumulative" >Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.norm_Inv = function(probability, mean, standardDev) {
			/// <summary>
			/// Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive.</param>
			/// <param name="mean" >Is the arithmetic mean of the distribution.</param>
			/// <param name="standardDev" >Is the standard deviation of the distribution, a positive number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.norm_S_Dist = function(z, cumulative) {
			/// <summary>
			/// Returns the standard normal distribution (has a mean of zero and a standard deviation of one). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="z" >Is the value for which you want the distribution.</param>
			/// <param name="cumulative" >Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.norm_S_Inv = function(probability) {
			/// <summary>
			/// Returns the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.not = function(logical) {
			/// <summary>
			/// Changes FALSE to TRUE, or TRUE to FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="logical" >Is a value or expression that can be evaluated to TRUE or FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.now = function() {
			/// <summary>
			/// Returns the current date and time formatted as a date and time. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.npv = function(rate, values) {
			/// <summary>
			/// Returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the rate of discount over the length of one period.</param>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 254 payments and income, equally spaced in time and occurring at the end of each period.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.numberValue = function(text, decimalSeparator, groupSeparator) {
			/// <summary>
			/// Converts text to number in a locale-independent manner. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the string representing the number you want to convert.</param>
			/// <param name="decimalSeparator"  optional="true">Is the character used as the decimal separator in the string.</param>
			/// <param name="groupSeparator"  optional="true">Is the character used as the group separator in the string.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.oct2Bin = function(number, places) {
			/// <summary>
			/// Converts an octal number to binary. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the octal number you want to convert.</param>
			/// <param name="places"  optional="true">Is the number of characters to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.oct2Dec = function(number) {
			/// <summary>
			/// Converts an octal number to decimal. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the octal number you want to convert.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.oct2Hex = function(number, places) {
			/// <summary>
			/// Converts an octal number to hexadecimal. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the octal number you want to convert.</param>
			/// <param name="places"  optional="true">Is the number of characters to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.odd = function(number) {
			/// <summary>
			/// Rounds a positive number up and negative number down to the nearest odd integer. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the value to round.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.oddFPrice = function(settlement, maturity, issue, firstCoupon, rate, yld, redemption, frequency, basis) {
			/// <summary>
			/// Returns the price per $100 face value of a security with an odd first period. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="issue" >Is the security&apos;s issue date, expressed as a serial date number.</param>
			/// <param name="firstCoupon" >Is the security&apos;s first coupon date, expressed as a serial date number.</param>
			/// <param name="rate" >Is the security&apos;s interest rate.</param>
			/// <param name="yld" >Is the security&apos;s annual yield.</param>
			/// <param name="redemption" >Is the security&apos;s redemption value per $100 face value.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.oddFYield = function(settlement, maturity, issue, firstCoupon, rate, pr, redemption, frequency, basis) {
			/// <summary>
			/// Returns the yield of a security with an odd first period. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="issue" >Is the security&apos;s issue date, expressed as a serial date number.</param>
			/// <param name="firstCoupon" >Is the security&apos;s first coupon date, expressed as a serial date number.</param>
			/// <param name="rate" >Is the security&apos;s interest rate.</param>
			/// <param name="pr" >Is the security&apos;s price.</param>
			/// <param name="redemption" >Is the security&apos;s redemption value per $100 face value.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.oddLPrice = function(settlement, maturity, lastInterest, rate, yld, redemption, frequency, basis) {
			/// <summary>
			/// Returns the price per $100 face value of a security with an odd last period. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="lastInterest" >Is the security&apos;s last coupon date, expressed as a serial date number.</param>
			/// <param name="rate" >Is the security&apos;s interest rate.</param>
			/// <param name="yld" >Is the security&apos;s annual yield.</param>
			/// <param name="redemption" >Is the security&apos;s redemption value per $100 face value.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.oddLYield = function(settlement, maturity, lastInterest, rate, pr, redemption, frequency, basis) {
			/// <summary>
			/// Returns the yield of a security with an odd last period. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="lastInterest" >Is the security&apos;s last coupon date, expressed as a serial date number.</param>
			/// <param name="rate" >Is the security&apos;s interest rate.</param>
			/// <param name="pr" >Is the security&apos;s price.</param>
			/// <param name="redemption" >Is the security&apos;s redemption value per $100 face value.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.or = function(values) {
			/// <summary>
			/// Checks whether any of the arguments are TRUE, and returns TRUE or FALSE. Returns FALSE only if all arguments are FALSE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 conditions that you want to test that can be either TRUE or FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.pduration = function(rate, pv, fv) {
			/// <summary>
			/// Returns the number of periods required by an investment to reach a specified value. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the interest rate per period.</param>
			/// <param name="pv" >Is the present value of the investment.</param>
			/// <param name="fv" >Is the desired future value of the investment.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.percentRank_Exc = function(array, x, significance) {
			/// <summary>
			/// Returns the rank of a value in a data set as a percentage of the data set as a percentage (0..1, exclusive) of the data set. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is the array or range of data with numeric values that defines relative standing.</param>
			/// <param name="x" >Is the value for which you want to know the rank.</param>
			/// <param name="significance"  optional="true">Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%).</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.percentRank_Inc = function(array, x, significance) {
			/// <summary>
			/// Returns the rank of a value in a data set as a percentage of the data set as a percentage (0..1, inclusive) of the data set. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is the array or range of data with numeric values that defines relative standing.</param>
			/// <param name="x" >Is the value for which you want to know the rank.</param>
			/// <param name="significance"  optional="true">Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%).</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.percentile_Exc = function(array, k) {
			/// <summary>
			/// Returns the k-th percentile of values in a range, where k is in the range 0..1, exclusive. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is the array or range of data that defines relative standing.</param>
			/// <param name="k" >Is the percentile value that is between 0 through 1, inclusive.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.percentile_Inc = function(array, k) {
			/// <summary>
			/// Returns the k-th percentile of values in a range, where k is in the range 0..1, inclusive. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is the array or range of data that defines relative standing.</param>
			/// <param name="k" >Is the percentile value that is between 0 through 1, inclusive.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.permut = function(number, numberChosen) {
			/// <summary>
			/// Returns the number of permutations for a given number of objects that can be selected from the total objects. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the total number of objects.</param>
			/// <param name="numberChosen" >Is the number of objects in each permutation.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.permutationa = function(number, numberChosen) {
			/// <summary>
			/// Returns the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the total number of objects.</param>
			/// <param name="numberChosen" >Is the number of objects in each permutation.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.phi = function(x) {
			/// <summary>
			/// Returns the value of the density function for a standard normal distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the number for which you want the density of the standard normal distribution.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.pi = function() {
			/// <summary>
			/// Returns the value of Pi, 3.14159265358979, accurate to 15 digits. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.pmt = function(rate, nper, pv, fv, type) {
			/// <summary>
			/// Calculates the payment for a loan based on constant payments and a constant interest rate. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the interest rate per period for the loan. For example, use 6%/4 for quarterly payments at 6% APR.</param>
			/// <param name="nper" >Is the total number of payments for the loan.</param>
			/// <param name="pv" >Is the present value: the total amount that a series of future payments is worth now.</param>
			/// <param name="fv"  optional="true">Is the future value, or a cash balance you want to attain after the last payment is made, 0 (zero) if omitted.</param>
			/// <param name="type"  optional="true">Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.poisson_Dist = function(x, mean, cumulative) {
			/// <summary>
			/// Returns the Poisson distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the number of events.</param>
			/// <param name="mean" >Is the expected numeric value, a positive number.</param>
			/// <param name="cumulative" >Is a logical value: for the cumulative Poisson probability, use TRUE; for the Poisson probability mass function, use FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.power = function(number, power) {
			/// <summary>
			/// Returns the result of a number raised to a power. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the base number, any real number.</param>
			/// <param name="power" >Is the exponent, to which the base number is raised.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.ppmt = function(rate, per, nper, pv, fv, type) {
			/// <summary>
			/// Returns the payment on the principal for a given investment based on periodic, constant payments and a constant interest rate. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.</param>
			/// <param name="per" >Specifies the period and must be in the range 1 to nper.</param>
			/// <param name="nper" >Is the total number of payment periods in an investment.</param>
			/// <param name="pv" >Is the present value: the total amount that a series of future payments is worth now.</param>
			/// <param name="fv"  optional="true">Is the future value, or cash balance you want to attain after the last payment is made.</param>
			/// <param name="type"  optional="true">Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.price = function(settlement, maturity, rate, yld, redemption, frequency, basis) {
			/// <summary>
			/// Returns the price per $100 face value of a security that pays periodic interest. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="rate" >Is the security&apos;s annual coupon rate.</param>
			/// <param name="yld" >Is the security&apos;s annual yield.</param>
			/// <param name="redemption" >Is the security&apos;s redemption value per $100 face value.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.priceDisc = function(settlement, maturity, discount, redemption, basis) {
			/// <summary>
			/// Returns the price per $100 face value of a discounted security. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="discount" >Is the security&apos;s discount rate.</param>
			/// <param name="redemption" >Is the security&apos;s redemption value per $100 face value.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.priceMat = function(settlement, maturity, issue, rate, yld, basis) {
			/// <summary>
			/// Returns the price per $100 face value of a security that pays interest at maturity. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="issue" >Is the security&apos;s issue date, expressed as a serial date number.</param>
			/// <param name="rate" >Is the security&apos;s interest rate at date of issue.</param>
			/// <param name="yld" >Is the security&apos;s annual yield.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.product = function(values) {
			/// <summary>
			/// Multiplies all the numbers given as arguments. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers, logical values, or text representations of numbers that you want to multiply.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.proper = function(text) {
			/// <summary>
			/// Converts a text string to proper case; the first letter in each word to uppercase, and all other letters to lowercase. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is text enclosed in quotation marks, a formula that returns text, or a reference to a cell containing text to partially capitalize.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.pv = function(rate, nper, pmt, fv, type) {
			/// <summary>
			/// Returns the present value of an investment: the total amount that a series of future payments is worth now. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.</param>
			/// <param name="nper" >Is the total number of payment periods in an investment.</param>
			/// <param name="pmt" >Is the payment made each period and cannot change over the life of the investment.</param>
			/// <param name="fv"  optional="true">Is the future value, or a cash balance you want to attain after the last payment is made.</param>
			/// <param name="type"  optional="true">Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.quartile_Exc = function(array, quart) {
			/// <summary>
			/// Returns the quartile of a data set, based on percentile values from 0..1, exclusive. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is the array or cell range of numeric values for which you want the quartile value.</param>
			/// <param name="quart" >Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.quartile_Inc = function(array, quart) {
			/// <summary>
			/// Returns the quartile of a data set, based on percentile values from 0..1, inclusive. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is the array or cell range of numeric values for which you want the quartile value.</param>
			/// <param name="quart" >Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.quotient = function(numerator, denominator) {
			/// <summary>
			/// Returns the integer portion of a division. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="numerator" >Is the dividend.</param>
			/// <param name="denominator" >Is the divisor.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.radians = function(angle) {
			/// <summary>
			/// Converts degrees to radians. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="angle" >Is an angle in degrees that you want to convert.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.rand = function() {
			/// <summary>
			/// Returns a random number greater than or equal to 0 and less than 1, evenly distributed (changes on recalculation). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.randBetween = function(bottom, top) {
			/// <summary>
			/// Returns a random number between the numbers you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="bottom" >Is the smallest integer RANDBETWEEN will return.</param>
			/// <param name="top" >Is the largest integer RANDBETWEEN will return.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.rank_Avg = function(number, ref, order) {
			/// <summary>
			/// Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the average rank is returned. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the number for which you want to find the rank.</param>
			/// <param name="ref" >Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored.</param>
			/// <param name="order"  optional="true">Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.rank_Eq = function(number, ref, order) {
			/// <summary>
			/// Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the top rank of that set of values is returned. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the number for which you want to find the rank.</param>
			/// <param name="ref" >Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored.</param>
			/// <param name="order"  optional="true">Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.rate = function(nper, pmt, pv, fv, type, guess) {
			/// <summary>
			/// Returns the interest rate per period of a loan or an investment. For example, use 6%/4 for quarterly payments at 6% APR. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="nper" >Is the total number of payment periods for the loan or investment.</param>
			/// <param name="pmt" >Is the payment made each period and cannot change over the life of the loan or investment.</param>
			/// <param name="pv" >Is the present value: the total amount that a series of future payments is worth now.</param>
			/// <param name="fv"  optional="true">Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, uses Fv = 0.</param>
			/// <param name="type"  optional="true">Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.</param>
			/// <param name="guess"  optional="true">Is your guess for what the rate will be; if omitted, Guess = 0.1 (10 percent).</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.received = function(settlement, maturity, investment, discount, basis) {
			/// <summary>
			/// Returns the amount received at maturity for a fully invested security. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="investment" >Is the amount invested in the security.</param>
			/// <param name="discount" >Is the security&apos;s discount rate.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.replace = function(oldText, startNum, numChars, newText) {
			/// <summary>
			/// Replaces part of a text string with a different text string. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="oldText" >Is text in which you want to replace some characters.</param>
			/// <param name="startNum" >Is the position of the character in oldText that you want to replace with newText.</param>
			/// <param name="numChars" >Is the number of characters in oldText that you want to replace.</param>
			/// <param name="newText" >Is the text that will replace characters in oldText.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.replaceB = function(oldText, startNum, numBytes, newText) {
			/// <summary>
			/// Replaces part of a text string with a different text string. Use with double-byte character sets (DBCS). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="oldText" >Is text in which you want to replace some characters.</param>
			/// <param name="startNum" >Is the position of the character in oldText that you want to replace with newText.</param>
			/// <param name="numBytes" >Is the number of characters in oldText that you want to replace with newText.</param>
			/// <param name="newText" >Is the text that will replace characters in oldText.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.rept = function(text, numberTimes) {
			/// <summary>
			/// Repeats text a given number of times. Use REPT to fill a cell with a number of instances of a text string. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text you want to repeat.</param>
			/// <param name="numberTimes" >Is a positive number specifying the number of times to repeat text.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.right = function(text, numChars) {
			/// <summary>
			/// Returns the specified number of characters from the end of a text string. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text string that contains the characters you want to extract.</param>
			/// <param name="numChars"  optional="true">Specifies how many characters you want to extract, 1 if omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.rightb = function(text, numBytes) {
			/// <summary>
			/// Returns the specified number of characters from the end of a text string. Use with double-byte character sets (DBCS). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text string containing the characters you want to extract.</param>
			/// <param name="numBytes"  optional="true">Specifies how many characters you want to extract.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.roman = function(number, form) {
			/// <summary>
			/// Converts an Arabic numeral to Roman, as text. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the Arabic numeral you want to convert.</param>
			/// <param name="form"  optional="true">Is the number specifying the type of Roman numeral you want.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.round = function(number, numDigits) {
			/// <summary>
			/// Rounds a number to a specified number of digits. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the number you want to round.</param>
			/// <param name="numDigits" >Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero to the nearest integer.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.roundDown = function(number, numDigits) {
			/// <summary>
			/// Rounds a number down, toward zero. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is any real number that you want rounded down.</param>
			/// <param name="numDigits" >Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero or omitted, to the nearest integer.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.roundUp = function(number, numDigits) {
			/// <summary>
			/// Rounds a number up, away from zero. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is any real number that you want rounded up.</param>
			/// <param name="numDigits" >Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero or omitted, to the nearest integer.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.rows = function(array) {
			/// <summary>
			/// Returns the number of rows in a reference or array. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is an array, an array formula, or a reference to a range of cells for which you want the number of rows.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.rri = function(nper, pv, fv) {
			/// <summary>
			/// Returns an equivalent interest rate for the growth of an investment. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="nper" >Is the number of periods for the investment.</param>
			/// <param name="pv" >Is the present value of the investment.</param>
			/// <param name="fv" >Is the future value of the investment.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sec = function(number) {
			/// <summary>
			/// Returns the secant of an angle. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the angle in radians for which you want the secant.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sech = function(number) {
			/// <summary>
			/// Returns the hyperbolic secant of an angle. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the angle in radians for which you want the hyperbolic secant.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.second = function(serialNumber) {
			/// <summary>
			/// Returns the second, a number from 0 to 59. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="serialNumber" >Is a number in the date-time code used by Microsoft Excel or text in time format, such as 16:48:23 or 4:48:47 PM.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.seriesSum = function(x, n, m, coefficients) {
			/// <summary>
			/// Returns the sum of a power series based on the formula. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the input value to the power series.</param>
			/// <param name="n" >Is the initial power to which you want to raise x.</param>
			/// <param name="m" >Is the step by which to increase n for each term in the series.</param>
			/// <param name="coefficients" >Is a set of coefficients by which each successive power of x is multiplied.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sheet = function(value) {
			/// <summary>
			/// Returns the sheet number of the referenced sheet. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value"  optional="true">Is the name of a sheet or a reference that you want the sheet number of.  If omitted the number of the sheet containing the function is returned.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sheets = function(reference) {
			/// <summary>
			/// Returns the number of sheets in a reference. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="reference"  optional="true">Is a reference for which you want to know the number of sheets it contains.  If omitted the number of sheets in the workbook containing the function is returned.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sign = function(number) {
			/// <summary>
			/// Returns the sign of a number: 1 if the number is positive, zero if the number is zero, or -1 if the number is negative. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is any real number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sin = function(number) {
			/// <summary>
			/// Returns the sine of an angle. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the angle in radians for which you want the sine. Degrees * PI()/180 = radians.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sinh = function(number) {
			/// <summary>
			/// Returns the hyperbolic sine of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is any real number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.skew = function(values) {
			/// <summary>
			/// Returns the skewness of a distribution: a characterization of the degree of asymmetry of a distribution around its mean. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the skewness.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.skew_p = function(values) {
			/// <summary>
			/// Returns the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 254 numbers or names, arrays, or references that contain numbers for which you want the population skewness.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sln = function(cost, salvage, life) {
			/// <summary>
			/// Returns the straight-line depreciation of an asset for one period. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="cost" >Is the initial cost of the asset.</param>
			/// <param name="salvage" >Is the salvage value at the end of the life of the asset.</param>
			/// <param name="life" >Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.small = function(array, k) {
			/// <summary>
			/// Returns the k-th smallest value in a data set. For example, the fifth smallest number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is an array or range of numerical data for which you want to determine the k-th smallest value.</param>
			/// <param name="k" >Is the position (from the smallest) in the array or range of the value to return.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sqrt = function(number) {
			/// <summary>
			/// Returns the square root of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the number for which you want the square root.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sqrtPi = function(number) {
			/// <summary>
			/// Returns the square root of (number * Pi). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the number by which p is multiplied.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.stDevA = function(values) {
			/// <summary>
			/// Estimates standard deviation based on a sample, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 values corresponding to a sample of a population and can be values or names or references to values.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.stDevPA = function(values) {
			/// <summary>
			/// Calculates standard deviation based on an entire population, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 values corresponding to a population and can be values, names, arrays, or references that contain values.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.stDev_P = function(values) {
			/// <summary>
			/// Calculates standard deviation based on the entire population given as arguments (ignores logical values and text). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers corresponding to a population and can be numbers or references that contain numbers.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.stDev_S = function(values) {
			/// <summary>
			/// Estimates standard deviation based on a sample (ignores logical values and text in the sample). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers corresponding to a sample of a population and can be numbers or references that contain numbers.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.standardize = function(x, mean, standardDev) {
			/// <summary>
			/// Returns a normalized value from a distribution characterized by a mean and standard deviation. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value you want to normalize.</param>
			/// <param name="mean" >Is the arithmetic mean of the distribution.</param>
			/// <param name="standardDev" >Is the standard deviation of the distribution, a positive number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.substitute = function(text, oldText, newText, instanceNum) {
			/// <summary>
			/// Replaces existing text with new text in a text string. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text or the reference to a cell containing text in which you want to substitute characters.</param>
			/// <param name="oldText" >Is the existing text you want to replace. If the case of oldText does not match the case of text, SUBSTITUTE will not replace the text.</param>
			/// <param name="newText" >Is the text you want to replace oldText with.</param>
			/// <param name="instanceNum"  optional="true">Specifies which occurrence of oldText you want to replace. If omitted, every instance of oldText is replaced.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.subtotal = function(functionNum, values) {
			/// <summary>
			/// Returns a subtotal in a list or database. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="functionNum" >Is the number 1 to 11 that specifies the summary function for the subtotal.</param>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 254 ranges or references for which you want the subtotal.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sum = function(values) {
			/// <summary>
			/// Adds all the numbers in a range of cells. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers to sum. Logical values and text are ignored in cells, included if typed as arguments.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sumIf = function(range, criteria, sumRange) {
			/// <summary>
			/// Adds the cells specified by a given condition or criteria. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="range" >Is the range of cells you want evaluated.</param>
			/// <param name="criteria" >Is the condition or criteria in the form of a number, expression, or text that defines which cells will be added.</param>
			/// <param name="sumRange"  optional="true">Are the actual cells to sum. If omitted, the cells in range are used.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sumIfs = function(sumRange, values) {
			/// <summary>
			/// Adds the cells specified by a given set of conditions or criteria. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="sumRange" >Are the actual cells to sum.</param>
			/// <param name="values" type="Array" >List of parameters, where the first element of each pair is the Is the range of cells you want evaluated for the particular condition , and the second element is is the condition or criteria in the form of a number, expression, or text that defines which cells will be added.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.sumSq = function(values) {
			/// <summary>
			/// Returns the sum of the squares of the arguments. The arguments can be numbers, arrays, names, or references to cells that contain numbers. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numbers, arrays, names, or references to arrays for which you want the sum of the squares.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.syd = function(cost, salvage, life, per) {
			/// <summary>
			/// Returns the sum-of-years&apos; digits depreciation of an asset for a specified period. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="cost" >Is the initial cost of the asset.</param>
			/// <param name="salvage" >Is the salvage value at the end of the life of the asset.</param>
			/// <param name="life" >Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).</param>
			/// <param name="per" >Is the period and must use the same units as Life.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.t = function(value) {
			/// <summary>
			/// Checks whether a value is text, and returns the text if it is, or returns double quotes (empty text) if it is not. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is the value to test.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.tbillEq = function(settlement, maturity, discount) {
			/// <summary>
			/// Returns the bond-equivalent yield for a treasury bill. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the Treasury bill&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the Treasury bill&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="discount" >Is the Treasury bill&apos;s discount rate.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.tbillPrice = function(settlement, maturity, discount) {
			/// <summary>
			/// Returns the price per $100 face value for a treasury bill. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the Treasury bill&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the Treasury bill&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="discount" >Is the Treasury bill&apos;s discount rate.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.tbillYield = function(settlement, maturity, pr) {
			/// <summary>
			/// Returns the yield for a treasury bill. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the Treasury bill&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the Treasury bill&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="pr" >Is the Treasury Bill&apos;s price per $100 face value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.t_Dist = function(x, degFreedom, cumulative) {
			/// <summary>
			/// Returns the left-tailed Student&apos;s t-distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the numeric value at which to evaluate the distribution.</param>
			/// <param name="degFreedom" >Is an integer indicating the number of degrees of freedom that characterize the distribution.</param>
			/// <param name="cumulative" >Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.t_Dist_2T = function(x, degFreedom) {
			/// <summary>
			/// Returns the two-tailed Student&apos;s t-distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the numeric value at which to evaluate the distribution.</param>
			/// <param name="degFreedom" >Is an integer indicating the number of degrees of freedom that characterize the distribution.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.t_Dist_RT = function(x, degFreedom) {
			/// <summary>
			/// Returns the right-tailed Student&apos;s t-distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the numeric value at which to evaluate the distribution.</param>
			/// <param name="degFreedom" >Is an integer indicating the number of degrees of freedom that characterize the distribution.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.t_Inv = function(probability, degFreedom) {
			/// <summary>
			/// Returns the left-tailed inverse of the Student&apos;s t-distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is the probability associated with the two-tailed Student&apos;s t-distribution, a number between 0 and 1 inclusive.</param>
			/// <param name="degFreedom" >Is a positive integer indicating the number of degrees of freedom to characterize the distribution.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.t_Inv_2T = function(probability, degFreedom) {
			/// <summary>
			/// Returns the two-tailed inverse of the Student&apos;s t-distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="probability" >Is the probability associated with the two-tailed Student&apos;s t-distribution, a number between 0 and 1 inclusive.</param>
			/// <param name="degFreedom" >Is a positive integer indicating the number of degrees of freedom to characterize the distribution.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.tan = function(number) {
			/// <summary>
			/// Returns the tangent of an angle. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the angle in radians for which you want the tangent. Degrees * PI()/180 = radians.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.tanh = function(number) {
			/// <summary>
			/// Returns the hyperbolic tangent of a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is any real number.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.text = function(value, formatText) {
			/// <summary>
			/// Converts a value to text in a specific number format. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Is a number, a formula that evaluates to a numeric value, or a reference to a cell containing a numeric value.</param>
			/// <param name="formatText" >Is a number format in text form from the Category box on the Number tab in the Format Cells dialog box (not General).</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.time = function(hour, minute, second) {
			/// <summary>
			/// Converts hours, minutes, and seconds given as numbers to an Excel serial number, formatted with a time format. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="hour" >Is a number from 0 to 23 representing the hour.</param>
			/// <param name="minute" >Is a number from 0 to 59 representing the minute.</param>
			/// <param name="second" >Is a number from 0 to 59 representing the second.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.timevalue = function(timeText) {
			/// <summary>
			/// Converts a text time to an Excel serial number for a time, a number from 0 (12:00:00 AM) to 0.999988426 (11:59:59 PM). Format the number with a time format after entering the formula. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="timeText" >Is a text string that gives a time in any one of the Microsoft Excel time formats (date information in the string is ignored).</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.today = function() {
			/// <summary>
			/// Returns the current date formatted as a date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.trim = function(text) {
			/// <summary>
			/// Removes all spaces from a text string except for single spaces between words. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text from which you want spaces removed.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.trimMean = function(array, percent) {
			/// <summary>
			/// Returns the mean of the interior portion of a set of data values. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is the range or array of values to trim and average.</param>
			/// <param name="percent" >Is the fractional number of data points to exclude from the top and bottom of the data set.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.true = function() {
			/// <summary>
			/// Returns the logical value TRUE. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.trunc = function(number, numDigits) {
			/// <summary>
			/// Truncates a number to an integer by removing the decimal, or fractional, part of the number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the number you want to truncate.</param>
			/// <param name="numDigits"  optional="true">Is a number specifying the precision of the truncation, 0 (zero) if omitted.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.type = function(value) {
			/// <summary>
			/// Returns an integer representing the data type of a value: number = 1; text = 2; logical value = 4; error value = 16; array = 64. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="value" >Can be any value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.usdollar = function(number, decimals) {
			/// <summary>
			/// Converts a number to text, using currency format. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is a number, a reference to a cell containing a number, or a formula that evaluates to a number.</param>
			/// <param name="decimals"  optional="true">Is the number of digits to the right of the decimal point.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.unichar = function(number) {
			/// <summary>
			/// Returns the Unicode character referenced by the given numeric value. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="number" >Is the Unicode number representing a character.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.unicode = function(text) {
			/// <summary>
			/// Returns the number (code point) corresponding to the first character of the text. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the character that you want the Unicode value of.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.upper = function(text) {
			/// <summary>
			/// Converts a text string to all uppercase letters. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text you want converted to uppercase, a reference or a text string.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.vlookup = function(lookupValue, tableArray, colIndexNum, rangeLookup) {
			/// <summary>
			/// Looks for a value in the leftmost column of a table, and then returns a value in the same row from a column you specify. By default, the table must be sorted in an ascending order. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="lookupValue" >Is the value to be found in the first column of the table, and can be a value, a reference, or a text string.</param>
			/// <param name="tableArray" >Is a table of text, numbers, or logical values, in which data is retrieved. tableArray can be a reference to a range or a range name.</param>
			/// <param name="colIndexNum" >Is the column number in tableArray from which the matching value should be returned. The first column of values in the table is column 1.</param>
			/// <param name="rangeLookup"  optional="true">Is a logical value: to find the closest match in the first column (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.value = function(text) {
			/// <summary>
			/// Converts a text string that represents a number to a number. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="text" >Is the text enclosed in quotation marks or a reference to a cell containing the text you want to convert.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.varA = function(values) {
			/// <summary>
			/// Estimates variance based on a sample, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 value arguments corresponding to a sample of a population.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.varPA = function(values) {
			/// <summary>
			/// Calculates variance based on the entire population, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 value arguments corresponding to a population.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.var_P = function(values) {
			/// <summary>
			/// Calculates variance based on the entire population (ignores logical values and text in the population). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numeric arguments corresponding to a population.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.var_S = function(values) {
			/// <summary>
			/// Estimates variance based on a sample (ignores logical values and text in the sample). [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 255 numeric arguments corresponding to a sample of a population.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.vdb = function(cost, salvage, life, startPeriod, endPeriod, factor, noSwitch) {
			/// <summary>
			/// Returns the depreciation of an asset for any period you specify, including partial periods, using the double-declining balance method or some other method you specify. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="cost" >Is the initial cost of the asset.</param>
			/// <param name="salvage" >Is the salvage value at the end of the life of the asset.</param>
			/// <param name="life" >Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).</param>
			/// <param name="startPeriod" >Is the starting period for which you want to calculate the depreciation, in the same units as Life.</param>
			/// <param name="endPeriod" >Is the ending period for which you want to calculate the depreciation, in the same units as Life.</param>
			/// <param name="factor"  optional="true">Is the rate at which the balance declines, 2 (double-declining balance) if omitted.</param>
			/// <param name="noSwitch"  optional="true">Switch to straight-line depreciation when depreciation is greater than the declining balance = FALSE or omitted; do not switch = TRUE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.weekNum = function(serialNumber, returnType) {
			/// <summary>
			/// Returns the week number in the year. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="serialNumber" >Is the date-time code used by Microsoft Excel for date and time calculation.</param>
			/// <param name="returnType"  optional="true">Is a number (1 or 2) that determines the type of the return value.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.weekday = function(serialNumber, returnType) {
			/// <summary>
			/// Returns a number from 1 to 7 identifying the day of the week of a date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="serialNumber" >Is a number that represents a date.</param>
			/// <param name="returnType"  optional="true">Is a number: for Sunday=1 through Saturday=7, use 1; for Monday=1 through Sunday=7, use 2; for Monday=0 through Sunday=6, use 3.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.weibull_Dist = function(x, alpha, beta, cumulative) {
			/// <summary>
			/// Returns the Weibull distribution. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="x" >Is the value at which to evaluate the function, a nonnegative number.</param>
			/// <param name="alpha" >Is a parameter to the distribution, a positive number.</param>
			/// <param name="beta" >Is a parameter to the distribution, a positive number.</param>
			/// <param name="cumulative" >Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.workDay = function(startDate, days, holidays) {
			/// <summary>
			/// Returns the serial number of the date before or after a specified number of workdays. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="startDate" >Is a serial date number that represents the start date.</param>
			/// <param name="days" >Is the number of nonweekend and non-holiday days before or after startDate.</param>
			/// <param name="holidays"  optional="true">Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.workDay_Intl = function(startDate, days, weekend, holidays) {
			/// <summary>
			/// Returns the serial number of the date before or after a specified number of workdays with custom weekend parameters. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="startDate" >Is a serial date number that represents the start date.</param>
			/// <param name="days" >Is the number of nonweekend and non-holiday days before or after startDate.</param>
			/// <param name="weekend"  optional="true">Is a number or string specifying when weekends occur.</param>
			/// <param name="holidays"  optional="true">Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.xirr = function(values, dates, guess) {
			/// <summary>
			/// Returns the internal rate of return for a schedule of cash flows. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" >Is a series of cash flows that correspond to a schedule of payments in dates.</param>
			/// <param name="dates" >Is a schedule of payment dates that corresponds to the cash flow payments.</param>
			/// <param name="guess"  optional="true">Is a number that you guess is close to the result of XIRR.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.xnpv = function(rate, values, dates) {
			/// <summary>
			/// Returns the net present value for a schedule of cash flows. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="rate" >Is the discount rate to apply to the cash flows.</param>
			/// <param name="values" >Is a series of cash flows that correspond to a schedule of payments in dates.</param>
			/// <param name="dates" >Is a schedule of payment dates that corresponds to the cash flow payments.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.xor = function(values) {
			/// <summary>
			/// Returns a logical &apos;Exclusive Or&apos; of all arguments. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="values" type="Array" >List of parameters, whose elements are 1 to 254 conditions you want to test that can be either TRUE or FALSE and can be logical values, arrays, or references.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.year = function(serialNumber) {
			/// <summary>
			/// Returns the year of a date, an integer in the range 1900 - 9999. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="serialNumber" >Is a number in the date-time code used by Microsoft Excel.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.yearFrac = function(startDate, endDate, basis) {
			/// <summary>
			/// Returns the year fraction representing the number of whole days between start_date and end_date. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="startDate" >Is a serial date number that represents the start date.</param>
			/// <param name="endDate" >Is a serial date number that represents the end date.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.yield = function(settlement, maturity, rate, pr, redemption, frequency, basis) {
			/// <summary>
			/// Returns the yield on a security that pays periodic interest. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="rate" >Is the security&apos;s annual coupon rate.</param>
			/// <param name="pr" >Is the security&apos;s price per $100 face value.</param>
			/// <param name="redemption" >Is the security&apos;s redemption value per $100 face value.</param>
			/// <param name="frequency" >Is the number of coupon payments per year.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.yieldDisc = function(settlement, maturity, pr, redemption, basis) {
			/// <summary>
			/// Returns the annual yield for a discounted security. For example, a treasury bill. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="pr" >Is the security&apos;s price per $100 face value.</param>
			/// <param name="redemption" >Is the security&apos;s redemption value per $100 face value.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.yieldMat = function(settlement, maturity, issue, rate, pr, basis) {
			/// <summary>
			/// Returns the annual yield of a security that pays interest at maturity. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="settlement" >Is the security&apos;s settlement date, expressed as a serial date number.</param>
			/// <param name="maturity" >Is the security&apos;s maturity date, expressed as a serial date number.</param>
			/// <param name="issue" >Is the security&apos;s issue date, expressed as a serial date number.</param>
			/// <param name="rate" >Is the security&apos;s interest rate at date of issue.</param>
			/// <param name="pr" >Is the security&apos;s price per $100 face value.</param>
			/// <param name="basis"  optional="true">Is the type of day count basis to use.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}
		Functions.prototype.z_Test = function(array, x, sigma) {
			/// <summary>
			/// Returns the one-tailed P-value of a z-test. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="array" >Is the array or range of data against which to test X.</param>
			/// <param name="x" >Is the value to test.</param>
			/// <param name="sigma"  optional="true">Is the population (known) standard deviation. If omitted, the sample standard deviation is used.</param>
			/// <returns type="Excel.FunctionResult"></returns>
		}

		return Functions;
	})(OfficeExtension.ClientObject);
	Excel.Functions = Functions;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var HorizontalAlignment = {
		__proto__: null,
		"general": "general",
		"left": "left",
		"center": "center",
		"right": "right",
		"fill": "fill",
		"justify": "justify",
		"centerAcrossSelection": "centerAcrossSelection",
		"distributed": "distributed",
	}
	Excel.HorizontalAlignment = HorizontalAlignment;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var Icon = (function() {
			function Icon() {
				/// <summary> Represents a cell icon. [Api set: ExcelApi 1.2] </summary>
				/// <field name="index" type="Number">Represents the index of the icon in the given set. [Api set: ExcelApi 1.2]</field>
				/// <field name="set" type="String">Represents the set that the icon is part of. [Api set: ExcelApi 1.2]</field>
			}
			return Icon;
		})();
		Interfaces.Icon.__proto__ = null;
		Interfaces.Icon = Icon;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.2] </summary>
	var IconSet = {
		__proto__: null,
		"invalid": "invalid",
		"threeArrows": "threeArrows",
		"threeArrowsGray": "threeArrowsGray",
		"threeFlags": "threeFlags",
		"threeTrafficLights1": "threeTrafficLights1",
		"threeTrafficLights2": "threeTrafficLights2",
		"threeSigns": "threeSigns",
		"threeSymbols": "threeSymbols",
		"threeSymbols2": "threeSymbols2",
		"fourArrows": "fourArrows",
		"fourArrowsGray": "fourArrowsGray",
		"fourRedToBlack": "fourRedToBlack",
		"fourRating": "fourRating",
		"fourTrafficLights": "fourTrafficLights",
		"fiveArrows": "fiveArrows",
		"fiveArrowsGray": "fiveArrowsGray",
		"fiveRating": "fiveRating",
		"fiveQuarters": "fiveQuarters",
		"threeStars": "threeStars",
		"threeTriangles": "threeTriangles",
		"fiveBoxes": "fiveBoxes",
	}
	Excel.IconSet = IconSet;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var IconSetConditionalFormat = (function(_super) {
		__extends(IconSetConditionalFormat, _super);
		function IconSetConditionalFormat() {
			/// <summary> Represents an IconSet criteria for conditional formatting. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="criteria" type="Array" elementType="Excel.Interfaces.ConditionalIconCriterion">An array of Criteria and IconSets for the rules and potential custom icons for conditional icons. Note that for the first criterion only the custom icon can be modified, while type, formula and operator will be ignored when set. [Api set: ExcelApi 1.6]</field>
			/// <field name="reverseIconOrder" type="Boolean">If true, reverses the icon orders for the IconSet. Note that this cannot be set if custom icons are used. [Api set: ExcelApi 1.6]</field>
			/// <field name="showIconOnly" type="Boolean">If true, hides the values and only shows icons. [Api set: ExcelApi 1.6]</field>
			/// <field name="style" type="String">If set, displays the IconSet option for the conditional format. [Api set: ExcelApi 1.6]</field>
		}

		IconSetConditionalFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.IconSetConditionalFormat"/>
		}

		IconSetConditionalFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.IconSetConditionalFormatUpdateData">Properties described by the Excel.Interfaces.IconSetConditionalFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="IconSetConditionalFormat">An existing IconSetConditionalFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return IconSetConditionalFormat;
	})(OfficeExtension.ClientObject);
	Excel.IconSetConditionalFormat = IconSetConditionalFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.2] </summary>
	var ImageFittingMode = {
		__proto__: null,
		"fit": "fit",
		"fitAndCenter": "fitAndCenter",
		"fill": "fill",
	}
	Excel.ImageFittingMode = ImageFittingMode;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var InsertShiftDirection = {
		__proto__: null,
		"down": "down",
		"right": "right",
	}
	Excel.InsertShiftDirection = InsertShiftDirection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var NamedItem = (function(_super) {
		__extends(NamedItem, _super);
		function NamedItem() {
			/// <summary> Represents a defined name for a range of cells or value. Names can be primitive named objects (as seen in the type below), range object, reference to a range. This object can be used to obtain range object associated with names. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="comment" type="String">Represents the comment associated with this name. [Api set: ExcelApi 1.4]</field>
			/// <field name="name" type="String">The name of the object. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="scope" type="String">Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only. [Api set: ExcelApi 1.4]</field>
			/// <field name="type" type="String">Indicates the type of the value returned by the name&apos;s formula. See Excel.NamedItemType for details. Read-only. [Api set: ExcelApi 1.1 for String,Integer,Double,Boolean,Range,Error; 1.7 for Array]</field>
			/// <field name="value" >Represents the value computed by the name&apos;s formula. For a named range, will return the range address. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="visible" type="Boolean">Specifies whether the object is visible or not. [Api set: ExcelApi 1.1]</field>
			/// <field name="worksheet" type="Excel.Worksheet">Returns the worksheet on which the named item is scoped to. Throws an error if the items is scoped to the workbook instead. [Api set: ExcelApi 1.4]</field>
			/// <field name="worksheetOrNullObject" type="Excel.Worksheet">Returns the worksheet on which the named item is scoped to. Returns a null object if the item is scoped to the workbook instead. [Api set: ExcelApi 1.4]</field>
		}

		NamedItem.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.NamedItem"/>
		}

		NamedItem.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.NamedItemUpdateData">Properties described by the Excel.Interfaces.NamedItemUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="NamedItem">An existing NamedItem object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		NamedItem.prototype.delete = function() {
			/// <summary>
			/// Deletes the given name. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns ></returns>
		}
		NamedItem.prototype.getRange = function() {
			/// <summary>
			/// Returns the range object that is associated with the name. Throws an error if the named item&apos;s type is not a range. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		NamedItem.prototype.getRangeOrNullObject = function() {
			/// <summary>
			/// Returns the range object that is associated with the name. Returns a null object if the named item&apos;s type is not a range. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}

		return NamedItem;
	})(OfficeExtension.ClientObject);
	Excel.NamedItem = NamedItem;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var NamedItemCollection = (function(_super) {
		__extends(NamedItemCollection, _super);
		function NamedItemCollection() {
			/// <summary> A collection of all the nameditem objects that are part of the workbook or worksheet, depending on how it was reached. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Excel.NamedItem">Gets the loaded child items in this collection.</field>
		}

		NamedItemCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.NamedItemCollection"/>
		}
		NamedItemCollection.prototype.add = function(name, reference, comment) {
			/// <summary>
			/// Adds a new name to the collection of the given scope. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="name" type="String">The name of the named item.</param>
			/// <param name="reference" >The formula or the range that the name will refer to.</param>
			/// <param name="comment" type="String" optional="true">The comment associated with the named item</param>
			/// <returns type="Excel.NamedItem"></returns>
		}
		NamedItemCollection.prototype.addFormulaLocal = function(name, formula, comment) {
			/// <summary>
			/// Adds a new name to the collection of the given scope using the user&apos;s locale for the formula. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="name" type="String">The &quot;name&quot; of the named item.</param>
			/// <param name="formula" type="String">The formula in the user&apos;s locale that the name will refer to.</param>
			/// <param name="comment" type="String" optional="true">The comment associated with the named item</param>
			/// <returns type="Excel.NamedItem"></returns>
		}
		NamedItemCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the number of named items in the collection. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		NamedItemCollection.prototype.getItem = function(name) {
			/// <summary>
			/// Gets a nameditem object using its name [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="name" type="String">nameditem name.</param>
			/// <returns type="Excel.NamedItem"></returns>
		}
		NamedItemCollection.prototype.getItemOrNullObject = function(name) {
			/// <summary>
			/// Gets a nameditem object using its name. If the nameditem object does not exist, will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="name" type="String">nameditem name.</param>
			/// <returns type="Excel.NamedItem"></returns>
		}

		return NamedItemCollection;
	})(OfficeExtension.ClientObject);
	Excel.NamedItemCollection = NamedItemCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.4] </summary>
	var NamedItemScope = {
		__proto__: null,
		"worksheet": "worksheet",
		"workbook": "workbook",
	}
	Excel.NamedItemScope = NamedItemScope;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1 for String,Integer,Double,Boolean,Range,Error; 1.7 for Array] </summary>
	var NamedItemType = {
		__proto__: null,
		"string": "string",
		"integer": "integer",
		"double": "double",
		"boolean": "boolean",
		"range": "range",
		"error": "error",
		"array": "array",
	}
	Excel.NamedItemType = NamedItemType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var PivotTable = (function(_super) {
		__extends(PivotTable, _super);
		function PivotTable() {
			/// <summary> Represents an Excel PivotTable. [Api set: ExcelApi 1.3] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="id" type="String">Id of the PivotTable. [Api set: ExcelApi 1.5]</field>
			/// <field name="name" type="String">Name of the PivotTable. [Api set: ExcelApi 1.3]</field>
			/// <field name="worksheet" type="Excel.Worksheet">The worksheet containing the current PivotTable. Read-only. [Api set: ExcelApi 1.3]</field>
		}

		PivotTable.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.PivotTable"/>
		}

		PivotTable.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.PivotTableUpdateData">Properties described by the Excel.Interfaces.PivotTableUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="PivotTable">An existing PivotTable object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		PivotTable.prototype.refresh = function() {
			/// <summary>
			/// Refreshes the PivotTable. [Api set: ExcelApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}

		return PivotTable;
	})(OfficeExtension.ClientObject);
	Excel.PivotTable = PivotTable;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var PivotTableCollection = (function(_super) {
		__extends(PivotTableCollection, _super);
		function PivotTableCollection() {
			/// <summary> Represents a collection of all the PivotTables that are part of the workbook or worksheet. [Api set: ExcelApi 1.3] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Excel.PivotTable">Gets the loaded child items in this collection.</field>
		}

		PivotTableCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.PivotTableCollection"/>
		}
		PivotTableCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the number of pivot tables in the collection. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		PivotTableCollection.prototype.getItem = function(name) {
			/// <summary>
			/// Gets a PivotTable by name. [Api set: ExcelApi 1.3]
			/// </summary>
			/// <param name="name" type="String">Name of the PivotTable to be retrieved.</param>
			/// <returns type="Excel.PivotTable"></returns>
		}
		PivotTableCollection.prototype.getItemOrNullObject = function(name) {
			/// <summary>
			/// Gets a PivotTable by name. If the PivotTable does not exist, will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="name" type="String">Name of the PivotTable to be retrieved.</param>
			/// <returns type="Excel.PivotTable"></returns>
		}
		PivotTableCollection.prototype.refreshAll = function() {
			/// <summary>
			/// Refreshes all the pivot tables in the collection. [Api set: ExcelApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}

		return PivotTableCollection;
	})(OfficeExtension.ClientObject);
	Excel.PivotTableCollection = PivotTableCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var PresetCriteriaConditionalFormat = (function(_super) {
		__extends(PresetCriteriaConditionalFormat, _super);
		function PresetCriteriaConditionalFormat() {
			/// <summary> Represents the the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ConditionalRangeFormat">Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="rule" type="Excel.Interfaces.ConditionalPresetCriteriaRule">The rule of the conditional format. [Api set: ExcelApi 1.6]</field>
		}

		PresetCriteriaConditionalFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.PresetCriteriaConditionalFormat"/>
		}

		PresetCriteriaConditionalFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.PresetCriteriaConditionalFormatUpdateData">Properties described by the Excel.Interfaces.PresetCriteriaConditionalFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="PresetCriteriaConditionalFormat">An existing PresetCriteriaConditionalFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return PresetCriteriaConditionalFormat;
	})(OfficeExtension.ClientObject);
	Excel.PresetCriteriaConditionalFormat = PresetCriteriaConditionalFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Range = (function(_super) {
		__extends(Range, _super);
		function Range() {
			/// <summary> Range represents a set of one or more contiguous cells such as a cell, a row, a column, block of cells, etc. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="address" type="String">Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="addressLocal" type="String">Represents range reference for the specified range in the language of the user. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="cellCount" type="Number">Number of cells in the range. This API will return -1 if the cell count exceeds 2^31-1 (2,147,483,647). Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="columnCount" type="Number">Represents the total number of columns in the range. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="columnHidden" type="Boolean">Represents if all columns of the current range are hidden. [Api set: ExcelApi 1.2]</field>
			/// <field name="columnIndex" type="Number">Represents the column number of the first cell in the range. Zero-indexed. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="conditionalFormats" type="Excel.ConditionalFormatCollection">Collection of ConditionalFormats that intersect the range. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="format" type="Excel.RangeFormat">Returns a format object, encapsulating the range&apos;s font, fill, borders, alignment, and other properties. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="formulas" type="Array" elementType="Array">Represents the formula in A1-style notation. [Api set: ExcelApi 1.1]</field>
			/// <field name="formulasLocal" type="Array" elementType="Array">Represents the formula in A1-style notation, in the user&apos;s language and number-formatting locale.  For example, the English &quot;=SUM(A1, 1.5)&quot; formula would become &quot;=SUMME(A1; 1,5)&quot; in German. [Api set: ExcelApi 1.1]</field>
			/// <field name="formulasR1C1" type="Array" elementType="Array">Represents the formula in R1C1-style notation. [Api set: ExcelApi 1.2]</field>
			/// <field name="hidden" type="Boolean">Represents if all cells of the current range are hidden. [Api set: ExcelApi 1.2]</field>
			/// <field name="numberFormat" type="Array" elementType="Array">Represents Excel&apos;s number format code for the given cell. [Api set: ExcelApi 1.1]</field>
			/// <field name="rowCount" type="Number">Returns the total number of rows in the range. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="rowHidden" type="Boolean">Represents if all rows of the current range are hidden. [Api set: ExcelApi 1.2]</field>
			/// <field name="rowIndex" type="Number">Returns the row number of the first cell in the range. Zero-indexed. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="sort" type="Excel.RangeSort">Represents the range sort of the current range. [Api set: ExcelApi 1.2]</field>
			/// <field name="text" type="Array" elementType="Array">Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="valueTypes" type="Array" elementType="Array">Represents the type of data of each cell. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="values" type="Array" elementType="Array">Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. [Api set: ExcelApi 1.1]</field>
			/// <field name="worksheet" type="Excel.Worksheet">The worksheet containing the current range. Read-only. [Api set: ExcelApi 1.1]</field>
		}

		Range.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.Range"/>
		}

		Range.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.RangeUpdateData">Properties described by the Excel.Interfaces.RangeUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Range">An existing Range object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Range.prototype.calculate = function() {
			/// <summary>
			/// Calculates a range of cells on a worksheet. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <returns ></returns>
		}
		Range.prototype.clear = function(applyTo) {
			/// <summary>
			/// Clear range values, format, fill, border, etc. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="applyTo" type="String" optional="true">Determines the type of clear action. See Excel.ClearApplyTo for details.</param>
			/// <returns ></returns>
		}
		Range.prototype.delete = function(shift) {
			/// <summary>
			/// Deletes the cells associated with the range. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="shift" type="String">Specifies which way to shift the cells. See Excel.DeleteShiftDirection for details.</param>
			/// <returns ></returns>
		}
		Range.prototype.getBoundingRect = function(anotherRange) {
			/// <summary>
			/// Gets the smallest range object that encompasses the given ranges. For example, the GetBoundingRect of &quot;B2:C5&quot; and &quot;D10:E15&quot; is &quot;B2:E16&quot;. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="anotherRange" >The range object or address or range name.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getCell = function(row, column) {
			/// <summary>
			/// Gets the range object containing the single cell based on row and column numbers. The cell can be outside the bounds of its parent range, so long as it&apos;s stays within the worksheet grid. The returned cell is located relative to the top left cell of the range. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="row" type="Number">Row number of the cell to be retrieved. Zero-indexed.</param>
			/// <param name="column" type="Number">Column number of the cell to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getColumn = function(column) {
			/// <summary>
			/// Gets a column contained in the range. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="column" type="Number">Column number of the range to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getColumnsAfter = function(count) {
			/// <summary>
			/// Gets a certain number of columns to the right of the current Range object. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="count" type="Number" optional="true">The number of columns to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getColumnsBefore = function(count) {
			/// <summary>
			/// Gets a certain number of columns to the left of the current Range object. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="count" type="Number" optional="true">The number of columns to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getEntireColumn = function() {
			/// <summary>
			/// Gets an object that represents the entire column of the range (for example, if the current range represents cells &quot;B4:E11&quot;, it&apos;s `getEntireColumn` is a range that represents columns &quot;B:E&quot;). [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getEntireRow = function() {
			/// <summary>
			/// Gets an object that represents the entire row of the range (for example, if the current range represents cells &quot;B4:E11&quot;, it&apos;s `GetEntireRow` is a range that represents rows &quot;4:11&quot;). [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getIntersection = function(anotherRange) {
			/// <summary>
			/// Gets the range object that represents the rectangular intersection of the given ranges. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="anotherRange" >The range object or range address that will be used to determine the intersection of ranges.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getIntersectionOrNullObject = function(anotherRange) {
			/// <summary>
			/// Gets the range object that represents the rectangular intersection of the given ranges. If no intersection is found, will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="anotherRange" >The range object or range address that will be used to determine the intersection of ranges.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getLastCell = function() {
			/// <summary>
			/// Gets the last cell within the range. For example, the last cell of &quot;B2:D5&quot; is &quot;D5&quot;. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getLastColumn = function() {
			/// <summary>
			/// Gets the last column within the range. For example, the last column of &quot;B2:D5&quot; is &quot;D2:D5&quot;. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getLastRow = function() {
			/// <summary>
			/// Gets the last row within the range. For example, the last row of &quot;B2:D5&quot; is &quot;B5:D5&quot;. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getOffsetRange = function(rowOffset, columnOffset) {
			/// <summary>
			/// Gets an object which represents a range that&apos;s offset from the specified range. The dimension of the returned range will match this range. If the resulting range is forced outside the bounds of the worksheet grid, an error will be thrown. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="rowOffset" type="Number">The number of rows (positive, negative, or 0) by which the range is to be offset. Positive values are offset downward, and negative values are offset upward.</param>
			/// <param name="columnOffset" type="Number">The number of columns (positive, negative, or 0) by which the range is to be offset. Positive values are offset to the right, and negative values are offset to the left.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getResizedRange = function(deltaRows, deltaColumns) {
			/// <summary>
			/// Gets a Range object similar to the current Range object, but with its bottom-right corner expanded (or contracted) by some number of rows and columns. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="deltaRows" type="Number">The number of rows by which to expand the bottom-right corner, relative to the current range. Use a positive number to expand the range, or a negative number to decrease it.</param>
			/// <param name="deltaColumns" type="Number">The number of columnsby which to expand the bottom-right corner, relative to the current range. Use a positive number to expand the range, or a negative number to decrease it.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getRow = function(row) {
			/// <summary>
			/// Gets a row contained in the range. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="row" type="Number">Row number of the range to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getRowsAbove = function(count) {
			/// <summary>
			/// Gets a certain number of rows above the current Range object. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="count" type="Number" optional="true">The number of rows to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getRowsBelow = function(count) {
			/// <summary>
			/// Gets a certain number of rows below the current Range object. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="count" type="Number" optional="true">The number of rows to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getUsedRange = function(valuesOnly) {
			/// <summary>
			/// Returns the used range of the given range object. If there are no used cells within the range, this function will throw an ItemNotFound error. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="valuesOnly" type="Boolean" optional="true">Considers only cells with values as used cells. [Api set: ExcelApi 1.2]</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getUsedRangeOrNullObject = function(valuesOnly) {
			/// <summary>
			/// Returns the used range of the given range object. If there are no used cells within the range, this function will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="valuesOnly" type="Boolean" optional="true">Considers only cells with values as used cells.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.getVisibleView = function() {
			/// <summary>
			/// Represents the visible rows of the current range. [Api set: ExcelApi 1.3]
			/// </summary>
			/// <returns type="Excel.RangeView"></returns>
		}
		Range.prototype.insert = function(shift) {
			/// <summary>
			/// Inserts a cell or a range of cells into the worksheet in place of this range, and shifts the other cells to make space. Returns a new Range object at the now blank space. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="shift" type="String">Specifies which way to shift the cells. See Excel.InsertShiftDirection for details.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Range.prototype.merge = function(across) {
			/// <summary>
			/// Merge the range cells into one region in the worksheet. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="across" type="Boolean" optional="true">Set true to merge cells in each row of the specified range as separate merged cells. The default value is false.</param>
			/// <returns ></returns>
		}
		Range.prototype.select = function() {
			/// <summary>
			/// Selects the specified range in the Excel UI. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		Range.prototype.unmerge = function() {
			/// <summary>
			/// Unmerge the range cells into separate cells. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns ></returns>
		}

		Range.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Excel.Range"/>
		}

		Range.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Excel.Range"/>
		}

		return Range;
	})(OfficeExtension.ClientObject);
	Excel.Range = Range;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var RangeBorder = (function(_super) {
		__extends(RangeBorder, _super);
		function RangeBorder() {
			/// <summary> Represents the border of an object. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="color" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;). [Api set: ExcelApi 1.1]</field>
			/// <field name="sideIndex" type="String">Constant value that indicates the specific side of the border. See Excel.BorderIndex for details. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="style" type="String">One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details. [Api set: ExcelApi 1.1]</field>
			/// <field name="weight" type="String">Specifies the weight of the border around a range. See Excel.BorderWeight for details. [Api set: ExcelApi 1.1]</field>
		}

		RangeBorder.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.RangeBorder"/>
		}

		RangeBorder.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.RangeBorderUpdateData">Properties described by the Excel.Interfaces.RangeBorderUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="RangeBorder">An existing RangeBorder object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return RangeBorder;
	})(OfficeExtension.ClientObject);
	Excel.RangeBorder = RangeBorder;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var RangeBorderCollection = (function(_super) {
		__extends(RangeBorderCollection, _super);
		function RangeBorderCollection() {
			/// <summary> Represents the border objects that make up the range border. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="count" type="Number">Number of border objects in the collection. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="items" type="Array" elementType="Excel.RangeBorder">Gets the loaded child items in this collection.</field>
		}

		RangeBorderCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.RangeBorderCollection"/>
		}
		RangeBorderCollection.prototype.getItem = function(index) {
			/// <summary>
			/// Gets a border object using its name [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="index" type="String">Index value of the border object to be retrieved. See Excel.BorderIndex for details.</param>
			/// <returns type="Excel.RangeBorder"></returns>
		}
		RangeBorderCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Gets a border object using its index [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="index" type="Number">Index value of the object to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.RangeBorder"></returns>
		}

		return RangeBorderCollection;
	})(OfficeExtension.ClientObject);
	Excel.RangeBorderCollection = RangeBorderCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var RangeFill = (function(_super) {
		__extends(RangeFill, _super);
		function RangeFill() {
			/// <summary> Represents the background of a range object. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="color" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;) [Api set: ExcelApi 1.1]</field>
		}

		RangeFill.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.RangeFill"/>
		}

		RangeFill.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.RangeFillUpdateData">Properties described by the Excel.Interfaces.RangeFillUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="RangeFill">An existing RangeFill object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		RangeFill.prototype.clear = function() {
			/// <summary>
			/// Resets the range background. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}

		return RangeFill;
	})(OfficeExtension.ClientObject);
	Excel.RangeFill = RangeFill;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var RangeFont = (function(_super) {
		__extends(RangeFont, _super);
		function RangeFont() {
			/// <summary> This object represents the font attributes (font name, font size, color, etc.) for an object. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="bold" type="Boolean">Represents the bold status of font. [Api set: ExcelApi 1.1]</field>
			/// <field name="color" type="String">HTML color code representation of the text color. E.g. #FF0000 represents Red. [Api set: ExcelApi 1.1]</field>
			/// <field name="italic" type="Boolean">Represents the italic status of the font. [Api set: ExcelApi 1.1]</field>
			/// <field name="name" type="String">Font name (e.g. &quot;Calibri&quot;) [Api set: ExcelApi 1.1]</field>
			/// <field name="size" type="Number">Font size. [Api set: ExcelApi 1.1]</field>
			/// <field name="underline" type="String">Type of underline applied to the font. See Excel.RangeUnderlineStyle for details. [Api set: ExcelApi 1.1]</field>
		}

		RangeFont.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.RangeFont"/>
		}

		RangeFont.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.RangeFontUpdateData">Properties described by the Excel.Interfaces.RangeFontUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="RangeFont">An existing RangeFont object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return RangeFont;
	})(OfficeExtension.ClientObject);
	Excel.RangeFont = RangeFont;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var RangeFormat = (function(_super) {
		__extends(RangeFormat, _super);
		function RangeFormat() {
			/// <summary> A format object encapsulating the range&apos;s font, fill, borders, alignment, and other properties. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="borders" type="Excel.RangeBorderCollection">Collection of border objects that apply to the overall range. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="columnWidth" type="Number">Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned. [Api set: ExcelApi 1.2]</field>
			/// <field name="fill" type="Excel.RangeFill">Returns the fill object defined on the overall range. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="font" type="Excel.RangeFont">Returns the font object defined on the overall range. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="horizontalAlignment" type="String">Represents the horizontal alignment for the specified object. See Excel.HorizontalAlignment for details. [Api set: ExcelApi 1.1]</field>
			/// <field name="protection" type="Excel.FormatProtection">Returns the format protection object for a range. [Api set: ExcelApi 1.2]</field>
			/// <field name="rowHeight" type="Number">Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned. [Api set: ExcelApi 1.2]</field>
			/// <field name="verticalAlignment" type="String">Represents the vertical alignment for the specified object. See Excel.VerticalAlignment for details. [Api set: ExcelApi 1.1]</field>
			/// <field name="wrapText" type="Boolean">Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn&apos;t have uniform wrap setting [Api set: ExcelApi 1.1]</field>
		}

		RangeFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.RangeFormat"/>
		}

		RangeFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.RangeFormatUpdateData">Properties described by the Excel.Interfaces.RangeFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="RangeFormat">An existing RangeFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		RangeFormat.prototype.autofitColumns = function() {
			/// <summary>
			/// Changes the width of the columns of the current range to achieve the best fit, based on the current data in the columns. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns ></returns>
		}
		RangeFormat.prototype.autofitRows = function() {
			/// <summary>
			/// Changes the height of the rows of the current range to achieve the best fit, based on the current data in the columns. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns ></returns>
		}

		return RangeFormat;
	})(OfficeExtension.ClientObject);
	Excel.RangeFormat = RangeFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var RangeReference = (function() {
			function RangeReference() {
				/// <summary> Represents a string reference of the form SheetName!A1:B5, or a global or local named range. [Api set: ExcelApi 1.2] </summary>
				/// <field name="address" type="String"> [Api set: ExcelApi 1.2]</field>
			}
			return RangeReference;
		})();
		Interfaces.RangeReference.__proto__ = null;
		Interfaces.RangeReference = RangeReference;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var RangeSort = (function(_super) {
		__extends(RangeSort, _super);
		function RangeSort() {
			/// <summary> Manages sorting operations on Range objects. [Api set: ExcelApi 1.2] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
		}

		RangeSort.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.RangeSort"/>
		}
		RangeSort.prototype.apply = function(fields, matchCase, hasHeaders, orientation, method) {
			/// <summary>
			/// Perform a sort operation. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="fields" type="Array" elementType="Excel.Interfaces.SortField">The list of conditions to sort on.</param>
			/// <param name="matchCase" type="Boolean" optional="true">Whether to have the casing impact string ordering.</param>
			/// <param name="hasHeaders" type="Boolean" optional="true">Whether the range has a header.</param>
			/// <param name="orientation" type="String" optional="true">Whether the operation is sorting rows or columns.</param>
			/// <param name="method" type="String" optional="true">The ordering method used for Chinese characters.</param>
			/// <returns ></returns>
		}

		return RangeSort;
	})(OfficeExtension.ClientObject);
	Excel.RangeSort = RangeSort;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var RangeUnderlineStyle = {
		__proto__: null,
		"none": "none",
		"single": "single",
		"double": "double",
		"singleAccountant": "singleAccountant",
		"doubleAccountant": "doubleAccountant",
	}
	Excel.RangeUnderlineStyle = RangeUnderlineStyle;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1 for Unknown, Empty, String, Integer, Double, Boolean, Error. 1.7 for RichValue] </summary>
	var RangeValueType = {
		__proto__: null,
		"unknown": "unknown",
		"empty": "empty",
		"string": "string",
		"integer": "integer",
		"double": "double",
		"boolean": "boolean",
		"error": "error",
		"richValue": "richValue",
	}
	Excel.RangeValueType = RangeValueType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var RangeView = (function(_super) {
		__extends(RangeView, _super);
		function RangeView() {
			/// <summary> RangeView represents a set of visible cells of the parent range. [Api set: ExcelApi 1.3] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="cellAddresses" type="Array" elementType="Array">Represents the cell addresses of the RangeView. [Api set: ExcelApi 1.3]</field>
			/// <field name="columnCount" type="Number">Returns the number of visible columns. Read-only. [Api set: ExcelApi 1.3]</field>
			/// <field name="formulas" type="Array" elementType="Array">Represents the formula in A1-style notation. [Api set: ExcelApi 1.3]</field>
			/// <field name="formulasLocal" type="Array" elementType="Array">Represents the formula in A1-style notation, in the user&apos;s language and number-formatting locale.  For example, the English &quot;=SUM(A1, 1.5)&quot; formula would become &quot;=SUMME(A1; 1,5)&quot; in German. [Api set: ExcelApi 1.3]</field>
			/// <field name="formulasR1C1" type="Array" elementType="Array">Represents the formula in R1C1-style notation. [Api set: ExcelApi 1.3]</field>
			/// <field name="index" type="Number">Returns a value that represents the index of the RangeView. Read-only. [Api set: ExcelApi 1.3]</field>
			/// <field name="numberFormat" type="Array" elementType="Array">Represents Excel&apos;s number format code for the given cell. [Api set: ExcelApi 1.3]</field>
			/// <field name="rowCount" type="Number">Returns the number of visible rows. Read-only. [Api set: ExcelApi 1.3]</field>
			/// <field name="rows" type="Excel.RangeViewCollection">Represents a collection of range views associated with the range. Read-only. [Api set: ExcelApi 1.3]</field>
			/// <field name="text" type="Array" elementType="Array">Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only. [Api set: ExcelApi 1.3]</field>
			/// <field name="valueTypes" type="Array" elementType="Array">Represents the type of data of each cell. Read-only. [Api set: ExcelApi 1.3]</field>
			/// <field name="values" type="Array" elementType="Array">Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. [Api set: ExcelApi 1.3]</field>
		}

		RangeView.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.RangeView"/>
		}

		RangeView.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.RangeViewUpdateData">Properties described by the Excel.Interfaces.RangeViewUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="RangeView">An existing RangeView object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		RangeView.prototype.getRange = function() {
			/// <summary>
			/// Gets the parent range associated with the current RangeView. [Api set: ExcelApi 1.3]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}

		return RangeView;
	})(OfficeExtension.ClientObject);
	Excel.RangeView = RangeView;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var RangeViewCollection = (function(_super) {
		__extends(RangeViewCollection, _super);
		function RangeViewCollection() {
			/// <summary> Represents a collection of RangeView objects. [Api set: ExcelApi 1.3] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Excel.RangeView">Gets the loaded child items in this collection.</field>
		}

		RangeViewCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.RangeViewCollection"/>
		}
		RangeViewCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the number of RangeView objects in the collection. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		RangeViewCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Gets a RangeView Row via it&apos;s index. Zero-Indexed. [Api set: ExcelApi 1.3]
			/// </summary>
			/// <param name="index" type="Number">Index of the visible row.</param>
			/// <returns type="Excel.RangeView"></returns>
		}

		return RangeViewCollection;
	})(OfficeExtension.ClientObject);
	Excel.RangeViewCollection = RangeViewCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var SelectionChangedEventArgs = (function() {
			function SelectionChangedEventArgs() {
				/// <summary> Provides information about the document that raised the SelectionChanged event. [Api set: ExcelApi 1.2] </summary>
				/// <field name="workbook" type="Excel.Workbook">Gets the workbook object that raised the SelectionChanged event. [Api set: ExcelApi 1.2]</field>
			}
			return SelectionChangedEventArgs;
		})();
		Interfaces.SelectionChangedEventArgs.__proto__ = null;
		Interfaces.SelectionChangedEventArgs = SelectionChangedEventArgs;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Setting = (function(_super) {
		__extends(Setting, _super);
		function Setting() {
			/// <summary> Setting represents a key-value pair of a setting persisted to the document. [Api set: ExcelApi 1.4] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="key" type="String">Returns the key that represents the id of the Setting. Read-only. [Api set: ExcelApi 1.4]</field>
			/// <field name="value" >Represents the value stored for this setting. [Api set: ExcelApi 1.4]</field>
		}

		Setting.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.Setting"/>
		}

		Setting.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.SettingUpdateData">Properties described by the Excel.Interfaces.SettingUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Setting">An existing Setting object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Setting.prototype.delete = function() {
			/// <summary>
			/// Deletes the setting. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns ></returns>
		}

		return Setting;
	})(OfficeExtension.ClientObject);
	Excel.Setting = Setting;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var SettingCollection = (function(_super) {
		__extends(SettingCollection, _super);
		function SettingCollection() {
			/// <summary> Represents a collection of worksheet objects that are part of the workbook. [Api set: ExcelApi 1.4] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="onSettingsChanged" type="OfficeExtension.EventHandlers">Occurs when the Settings in the document are changed. [Api set: ExcelApi 1.4]</field>
			/// <field name="items" type="Array" elementType="Excel.Setting">Gets the loaded child items in this collection.</field>
		}

		SettingCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.SettingCollection"/>
		}
		SettingCollection.prototype.add = function(key, value) {
			/// <summary>
			/// Sets or adds the specified setting to the workbook. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="key" type="String">The Key of the new setting.</param>
			/// <param name="value" >The Value for the new setting.</param>
			/// <returns type="Excel.Setting"></returns>
		}
		SettingCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the number of Settings in the collection. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		SettingCollection.prototype.getItem = function(key) {
			/// <summary>
			/// Gets a Setting entry via the key. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="key" type="String">Key of the setting.</param>
			/// <returns type="Excel.Setting"></returns>
		}
		SettingCollection.prototype.getItemOrNullObject = function(key) {
			/// <summary>
			/// Gets a Setting entry via the key. If the Setting does not exist, will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="key" type="String">The key of the setting.</param>
			/// <returns type="Excel.Setting"></returns>
		}
		SettingCollection.prototype.onSettingsChanged = {
			__proto__: null,
			add: function (handler) {
				/// <param name="handler" type="function(eventArgs: Excel.Interfaces.SettingsChangedEventArgs)">Handler for the event. EventArgs: Provides information about the setting that raised the SettingsChanged event </param>
				/// <returns type="OfficeExtension.EventHandlerResult"></returns>
				var eventInfo = new Excel.Interfaces.SettingsChangedEventArgs();
				eventInfo.__proto__ = null;
				handler(eventInfo);
			},
			remove: function (handler) {
				/// <param name="handler" type="function(eventArgs: Excel.Interfaces.SettingsChangedEventArgs)">Handler for the event.</param>
				return;
			}
		};

		return SettingCollection;
	})(OfficeExtension.ClientObject);
	Excel.SettingCollection = SettingCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var SettingsChangedEventArgs = (function() {
			function SettingsChangedEventArgs() {
				/// <summary> Provides information about the setting that raised the SettingsChanged event [Api set: ExcelApi 1.4] </summary>
				/// <field name="settings" type="Excel.SettingCollection">Gets the Setting object that represents the binding that raised the SettingsChanged event [Api set: ExcelApi 1.4]</field>
			}
			return SettingsChangedEventArgs;
		})();
		Interfaces.SettingsChangedEventArgs.__proto__ = null;
		Interfaces.SettingsChangedEventArgs = SettingsChangedEventArgs;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var SheetVisibility = {
		__proto__: null,
		"visible": "visible",
		"hidden": "hidden",
		"veryHidden": "veryHidden",
	}
	Excel.SheetVisibility = SheetVisibility;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.2] </summary>
	var SortDataOption = {
		__proto__: null,
		"normal": "normal",
		"textAsNumber": "textAsNumber",
	}
	Excel.SortDataOption = SortDataOption;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var SortField = (function() {
			function SortField() {
				/// <summary> Represents a condition in a sorting operation. [Api set: ExcelApi 1.2] </summary>
				/// <field name="ascending" type="Boolean">Represents whether the sorting is done in an ascending fashion. [Api set: ExcelApi 1.2]</field>
				/// <field name="color" type="String">Represents the color that is the target of the condition if the sorting is on font or cell color. [Api set: ExcelApi 1.2]</field>
				/// <field name="dataOption" type="String">Represents additional sorting options for this field. [Api set: ExcelApi 1.2]</field>
				/// <field name="icon" type="Excel.Interfaces.Icon">Represents the icon that is the target of the condition if the sorting is on the cell&apos;s icon. [Api set: ExcelApi 1.2]</field>
				/// <field name="key" type="Number">Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset from the first column (or row). [Api set: ExcelApi 1.2]</field>
				/// <field name="sortOn" type="String">Represents the type of sorting of this condition. [Api set: ExcelApi 1.2]</field>
			}
			return SortField;
		})();
		Interfaces.SortField.__proto__ = null;
		Interfaces.SortField = SortField;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.2] </summary>
	var SortMethod = {
		__proto__: null,
		"pinYin": "pinYin",
		"strokeCount": "strokeCount",
	}
	Excel.SortMethod = SortMethod;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.2] </summary>
	var SortOn = {
		__proto__: null,
		"value": "value",
		"cellColor": "cellColor",
		"fontColor": "fontColor",
		"icon": "icon",
	}
	Excel.SortOn = SortOn;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.2] </summary>
	var SortOrientation = {
		__proto__: null,
		"rows": "rows",
		"columns": "columns",
	}
	Excel.SortOrientation = SortOrientation;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Table = (function(_super) {
		__extends(Table, _super);
		function Table() {
			/// <summary> Represents an Excel table. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="columns" type="Excel.TableColumnCollection">Represents a collection of all the columns in the table. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="highlightFirstColumn" type="Boolean">Indicates whether the first column contains special formatting. [Api set: ExcelApi 1.3]</field>
			/// <field name="highlightLastColumn" type="Boolean">Indicates whether the last column contains special formatting. [Api set: ExcelApi 1.3]</field>
			/// <field name="id" type="String">Returns a value that uniquely identifies the table in a given workbook. The value of the identifier remains the same even when the table is renamed. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="name" type="String">Name of the table. [Api set: ExcelApi 1.1]</field>
			/// <field name="rows" type="Excel.TableRowCollection">Represents a collection of all the rows in the table. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="showBandedColumns" type="Boolean">Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier. [Api set: ExcelApi 1.3]</field>
			/// <field name="showBandedRows" type="Boolean">Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier. [Api set: ExcelApi 1.3]</field>
			/// <field name="showFilterButton" type="Boolean">Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row. [Api set: ExcelApi 1.3]</field>
			/// <field name="showHeaders" type="Boolean">Indicates whether the header row is visible or not. This value can be set to show or remove the header row. [Api set: ExcelApi 1.1]</field>
			/// <field name="showTotals" type="Boolean">Indicates whether the total row is visible or not. This value can be set to show or remove the total row. [Api set: ExcelApi 1.1]</field>
			/// <field name="sort" type="Excel.TableSort">Represents the sorting for the table. [Api set: ExcelApi 1.2]</field>
			/// <field name="style" type="String">Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified. [Api set: ExcelApi 1.1]</field>
			/// <field name="worksheet" type="Excel.Worksheet">The worksheet containing the current table. Read-only. [Api set: ExcelApi 1.2]</field>
		}

		Table.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.Table"/>
		}

		Table.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.TableUpdateData">Properties described by the Excel.Interfaces.TableUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Table">An existing Table object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Table.prototype.clearFilters = function() {
			/// <summary>
			/// Clears all the filters currently applied on the table. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns ></returns>
		}
		Table.prototype.convertToRange = function() {
			/// <summary>
			/// Converts the table into a normal range of cells. All data is preserved. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Table.prototype.delete = function() {
			/// <summary>
			/// Deletes the table. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		Table.prototype.getDataBodyRange = function() {
			/// <summary>
			/// Gets the range object associated with the data body of the table. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Table.prototype.getHeaderRowRange = function() {
			/// <summary>
			/// Gets the range object associated with header row of the table. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Table.prototype.getRange = function() {
			/// <summary>
			/// Gets the range object associated with the entire table. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Table.prototype.getTotalRowRange = function() {
			/// <summary>
			/// Gets the range object associated with totals row of the table. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Table.prototype.reapplyFilters = function() {
			/// <summary>
			/// Reapplies all the filters currently on the table. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns ></returns>
		}

		return Table;
	})(OfficeExtension.ClientObject);
	Excel.Table = Table;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var TableCollection = (function(_super) {
		__extends(TableCollection, _super);
		function TableCollection() {
			/// <summary> Represents a collection of all the tables that are part of the workbook or worksheet, depending on how it was reached. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="count" type="Number">Returns the number of tables in the workbook. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="items" type="Array" elementType="Excel.Table">Gets the loaded child items in this collection.</field>
		}

		TableCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.TableCollection"/>
		}
		TableCollection.prototype.add = function(address, hasHeaders) {
			/// <summary>
			/// Create a new table. The range object or source address determines the worksheet under which the table will be added. If the table cannot be added (e.g., because the address is invalid, or the table would overlap with another table), an error will be thrown. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="address" >A Range object, or a string address or name of the range representing the data source. If the address does not contain a sheet name, the currently-active sheet is used. [Api set: ExcelApi 1.1 for string parameter; 1.3 for accepting a Range object as well]</param>
			/// <param name="hasHeaders" type="Boolean">Boolean value that indicates whether the data being imported has column labels. If the source does not contain headers (i.e,. when this property set to false), Excel will automatically generate header shifting the data down by one row.</param>
			/// <returns type="Excel.Table"></returns>
		}
		TableCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the number of tables in the collection. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		TableCollection.prototype.getItem = function(key) {
			/// <summary>
			/// Gets a table by Name or ID. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="key" >Name or ID of the table to be retrieved.</param>
			/// <returns type="Excel.Table"></returns>
		}
		TableCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Gets a table based on its position in the collection. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="index" type="Number">Index value of the object to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.Table"></returns>
		}
		TableCollection.prototype.getItemOrNullObject = function(key) {
			/// <summary>
			/// Gets a table by Name or ID. If the table does not exist, will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="key" >Name or ID of the table to be retrieved.</param>
			/// <returns type="Excel.Table"></returns>
		}

		return TableCollection;
	})(OfficeExtension.ClientObject);
	Excel.TableCollection = TableCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var TableColumn = (function(_super) {
		__extends(TableColumn, _super);
		function TableColumn() {
			/// <summary> Represents a column in a table. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="filter" type="Excel.Filter">Retrieve the filter applied to the column. [Api set: ExcelApi 1.2]</field>
			/// <field name="id" type="Number">Returns a unique key that identifies the column within the table. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="index" type="Number">Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="name" type="String">Represents the name of the table column. [Api set: ExcelApi 1.1 for getting the name; 1.4 for setting it.]</field>
			/// <field name="values" type="Array" elementType="Array">Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. [Api set: ExcelApi 1.1]</field>
		}

		TableColumn.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.TableColumn"/>
		}

		TableColumn.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.TableColumnUpdateData">Properties described by the Excel.Interfaces.TableColumnUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="TableColumn">An existing TableColumn object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		TableColumn.prototype.delete = function() {
			/// <summary>
			/// Deletes the column from the table. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		TableColumn.prototype.getDataBodyRange = function() {
			/// <summary>
			/// Gets the range object associated with the data body of the column. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		TableColumn.prototype.getHeaderRowRange = function() {
			/// <summary>
			/// Gets the range object associated with the header row of the column. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		TableColumn.prototype.getRange = function() {
			/// <summary>
			/// Gets the range object associated with the entire column. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		TableColumn.prototype.getTotalRowRange = function() {
			/// <summary>
			/// Gets the range object associated with the totals row of the column. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}

		return TableColumn;
	})(OfficeExtension.ClientObject);
	Excel.TableColumn = TableColumn;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var TableColumnCollection = (function(_super) {
		__extends(TableColumnCollection, _super);
		function TableColumnCollection() {
			/// <summary> Represents a collection of all the columns that are part of the table. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="count" type="Number">Returns the number of columns in the table. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="items" type="Array" elementType="Excel.TableColumn">Gets the loaded child items in this collection.</field>
		}

		TableColumnCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.TableColumnCollection"/>
		}
		TableColumnCollection.prototype.add = function(index, values, name) {
			/// <summary>
			/// Adds a new column to the table. [Api set: ExcelApi 1.1 requires an index smaller than the total column count; 1.4 allows index to be optional (null or -1) and will append a column at the end; 1.4 allows name parameter at creation time.]
			/// </summary>
			/// <param name="index" type="Number" optional="true">Specifies the relative position of the new column. If null or -1, the addition happens at the end. Columns with a higher index will be shifted to the side. Zero-indexed.</param>
			/// <param name="values"  optional="true">A 2-dimensional array of unformatted values of the table column.</param>
			/// <param name="name" type="String" optional="true">Specifies the name of the new column. If null, the default name will be used.</param>
			/// <returns type="Excel.TableColumn"></returns>
		}
		TableColumnCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the number of columns in the table. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		TableColumnCollection.prototype.getItem = function(key) {
			/// <summary>
			/// Gets a column object by Name or ID. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="key" >Column Name or ID.</param>
			/// <returns type="Excel.TableColumn"></returns>
		}
		TableColumnCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Gets a column based on its position in the collection. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="index" type="Number">Index value of the object to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.TableColumn"></returns>
		}
		TableColumnCollection.prototype.getItemOrNullObject = function(key) {
			/// <summary>
			/// Gets a column object by Name or ID. If the column does not exist, will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="key" >Column Name or ID.</param>
			/// <returns type="Excel.TableColumn"></returns>
		}

		return TableColumnCollection;
	})(OfficeExtension.ClientObject);
	Excel.TableColumnCollection = TableColumnCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var TableRow = (function(_super) {
		__extends(TableRow, _super);
		function TableRow() {
			/// <summary> Represents a row in a table.                            Note that unlike Ranges or Columns, which will adjust if new rows/columns are added before them,              a TableRow object represent the physical location of the table row, but not the data.              That is, if the data is sorted or if new rows are added, a table row will continue              to point at the index for which it was created. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="index" type="Number">Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="values" type="Array" elementType="Array">Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. [Api set: ExcelApi 1.1]</field>
		}

		TableRow.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.TableRow"/>
		}

		TableRow.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.TableRowUpdateData">Properties described by the Excel.Interfaces.TableRowUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="TableRow">An existing TableRow object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		TableRow.prototype.delete = function() {
			/// <summary>
			/// Deletes the row from the table. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		TableRow.prototype.getRange = function() {
			/// <summary>
			/// Returns the range object associated with the entire row. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}

		return TableRow;
	})(OfficeExtension.ClientObject);
	Excel.TableRow = TableRow;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var TableRowCollection = (function(_super) {
		__extends(TableRowCollection, _super);
		function TableRowCollection() {
			/// <summary> Represents a collection of all the rows that are part of the table.                            Note that unlike Ranges or Columns, which will adjust if new rows/columns are added before them,              a TableRow object represent the physical location of the table row, but not the data.              That is, if the data is sorted or if new rows are added, a table row will continue              to point at the index for which it was created. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="count" type="Number">Returns the number of rows in the table. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="items" type="Array" elementType="Excel.TableRow">Gets the loaded child items in this collection.</field>
		}

		TableRowCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.TableRowCollection"/>
		}
		TableRowCollection.prototype.add = function(index, values) {
			/// <summary>
			/// Adds one or more rows to the table. The return object will be the top of the newly added row(s).                            Note that unlike Ranges or Columns, which will adjust if new rows/columns are added before them,              a TableRow object represent the physical location of the table row, but not the data.              That is, if the data is sorted or if new rows are added, a table row will continue              to point at the index for which it was created. [Api set: ExcelApi 1.1 for adding a single row; 1.4 allows adding of multiple rows.]
			/// </summary>
			/// <param name="index" type="Number" optional="true">Specifies the relative position of the new row. If null or -1, the addition happens at the end. Any rows below the inserted row are shifted downwards. Zero-indexed.</param>
			/// <param name="values"  optional="true">A 2-dimensional array of unformatted values of the table row.</param>
			/// <returns type="Excel.TableRow"></returns>
		}
		TableRowCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the number of rows in the table. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		TableRowCollection.prototype.getItemAt = function(index) {
			/// <summary>
			/// Gets a row based on its position in the collection.                            Note that unlike Ranges or Columns, which will adjust if new rows/columns are added before them,              a TableRow object represent the physical location of the table row, but not the data.              That is, if the data is sorted or if new rows are added, a table row will continue              to point at the index for which it was created. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="index" type="Number">Index value of the object to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.TableRow"></returns>
		}

		return TableRowCollection;
	})(OfficeExtension.ClientObject);
	Excel.TableRowCollection = TableRowCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var TableSort = (function(_super) {
		__extends(TableSort, _super);
		function TableSort() {
			/// <summary> Manages sorting operations on Table objects. [Api set: ExcelApi 1.2] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="fields" type="Array" elementType="Excel.Interfaces.SortField">Represents the current conditions used to last sort the table. [Api set: ExcelApi 1.2]</field>
			/// <field name="matchCase" type="Boolean">Represents whether the casing impacted the last sort of the table. [Api set: ExcelApi 1.2]</field>
			/// <field name="method" type="String">Represents Chinese character ordering method last used to sort the table. [Api set: ExcelApi 1.2]</field>
		}

		TableSort.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.TableSort"/>
		}
		TableSort.prototype.apply = function(fields, matchCase, method) {
			/// <summary>
			/// Perform a sort operation. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <param name="fields" type="Array" elementType="Excel.Interfaces.SortField">The list of conditions to sort on.</param>
			/// <param name="matchCase" type="Boolean" optional="true">Whether to have the casing impact string ordering.</param>
			/// <param name="method" type="String" optional="true">The ordering method used for Chinese characters.</param>
			/// <returns ></returns>
		}
		TableSort.prototype.clear = function() {
			/// <summary>
			/// Clears the sorting that is currently on the table. While this doesn&apos;t modify the table&apos;s ordering, it clears the state of the header buttons. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns ></returns>
		}
		TableSort.prototype.reapply = function() {
			/// <summary>
			/// Reapplies the current sorting parameters to the table. [Api set: ExcelApi 1.2]
			/// </summary>
			/// <returns ></returns>
		}

		return TableSort;
	})(OfficeExtension.ClientObject);
	Excel.TableSort = TableSort;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var TextConditionalFormat = (function(_super) {
		__extends(TextConditionalFormat, _super);
		function TextConditionalFormat() {
			/// <summary> Represents a specific text conditional format. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ConditionalRangeFormat">Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="rule" type="Excel.Interfaces.ConditionalTextComparisonRule">The rule of the conditional format. [Api set: ExcelApi 1.6]</field>
		}

		TextConditionalFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.TextConditionalFormat"/>
		}

		TextConditionalFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.TextConditionalFormatUpdateData">Properties described by the Excel.Interfaces.TextConditionalFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="TextConditionalFormat">An existing TextConditionalFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return TextConditionalFormat;
	})(OfficeExtension.ClientObject);
	Excel.TextConditionalFormat = TextConditionalFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var TopBottomConditionalFormat = (function(_super) {
		__extends(TopBottomConditionalFormat, _super);
		function TopBottomConditionalFormat() {
			/// <summary> Represents a Top/Bottom conditional format. [Api set: ExcelApi 1.6] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="format" type="Excel.ConditionalRangeFormat">Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties. Read-only. [Api set: ExcelApi 1.6]</field>
			/// <field name="rule" type="Excel.Interfaces.ConditionalTopBottomRule">The criteria of the Top/Bottom conditional format. [Api set: ExcelApi 1.6]</field>
		}

		TopBottomConditionalFormat.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.TopBottomConditionalFormat"/>
		}

		TopBottomConditionalFormat.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.TopBottomConditionalFormatUpdateData">Properties described by the Excel.Interfaces.TopBottomConditionalFormatUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="TopBottomConditionalFormat">An existing TopBottomConditionalFormat object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return TopBottomConditionalFormat;
	})(OfficeExtension.ClientObject);
	Excel.TopBottomConditionalFormat = TopBottomConditionalFormat;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.3] </summary>
	var V1CoercionType = {
		__proto__: null,
		"matrix": "matrix",
		"table": "table",
		"text": "text",
		"image": "image",
	}
	Excel.V1CoercionType = V1CoercionType;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.3] </summary>
	var V1TableEnum = {
		__proto__: null,
		"all": "all",
		"data": "data",
		"headers": "headers",
	}
	Excel.V1TableEnum = V1TableEnum;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	/// <summary> [Api set: ExcelApi 1.1] </summary>
	var VerticalAlignment = {
		__proto__: null,
		"top": "top",
		"center": "center",
		"bottom": "bottom",
		"justify": "justify",
		"distributed": "distributed",
	}
	Excel.VerticalAlignment = VerticalAlignment;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Workbook = (function(_super) {
		__extends(Workbook, _super);
		function Workbook() {
			/// <summary> Workbook is the top level object which contains related workbook objects such as worksheets, tables, ranges, etc. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="application" type="Excel.Application">Represents the Excel application instance that contains this workbook. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="bindings" type="Excel.BindingCollection">Represents a collection of bindings that are part of the workbook. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="customXmlParts" type="Excel.CustomXmlPartCollection">Represents the collection of custom XML parts contained by this workbook. Read-only. [Api set: ExcelApi 1.5]</field>
			/// <field name="functions" type="Excel.Functions">Represents a collection of worksheet functions that can be used for computation. Read-only. [Api set: ExcelApi 1.2]</field>
			/// <field name="names" type="Excel.NamedItemCollection">Represents a collection of workbook scoped named items (named ranges and constants). Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="pivotTables" type="Excel.PivotTableCollection">Represents a collection of PivotTables associated with the workbook. Read-only. [Api set: ExcelApi 1.3]</field>
			/// <field name="settings" type="Excel.SettingCollection">Represents a collection of Settings associated with the workbook. Read-only. [Api set: ExcelApi 1.4]</field>
			/// <field name="tables" type="Excel.TableCollection">Represents a collection of tables associated with the workbook. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="worksheets" type="Excel.WorksheetCollection">Represents a collection of worksheets associated with the workbook. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="onSelectionChanged" type="OfficeExtension.EventHandlers">Occurs when the selection in the document is changed. [Api set: ExcelApi 1.2]</field>
		}

		Workbook.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.Workbook"/>
		}
		Workbook.prototype.getSelectedRange = function() {
			/// <summary>
			/// Gets the currently selected range from the workbook. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Range"></returns>
		}
		Workbook.prototype.onSelectionChanged = {
			__proto__: null,
			add: function (handler) {
				/// <param name="handler" type="function(eventArgs: Excel.Interfaces.SelectionChangedEventArgs)">Handler for the event. EventArgs: Provides information about the document that raised the SelectionChanged event. </param>
				/// <returns type="OfficeExtension.EventHandlerResult"></returns>
				var eventInfo = new Excel.Interfaces.SelectionChangedEventArgs();
				eventInfo.__proto__ = null;
				handler(eventInfo);
			},
			remove: function (handler) {
				/// <param name="handler" type="function(eventArgs: Excel.Interfaces.SelectionChangedEventArgs)">Handler for the event.</param>
				return;
			}
		};

		return Workbook;
	})(OfficeExtension.ClientObject);
	Excel.Workbook = Workbook;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Worksheet = (function(_super) {
		__extends(Worksheet, _super);
		function Worksheet() {
			/// <summary> An Excel worksheet is a grid of cells. It can contain data, tables, charts, etc. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="charts" type="Excel.ChartCollection">Returns collection of charts that are part of the worksheet. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="id" type="String">Returns a value that uniquely identifies the worksheet in a given workbook. The value of the identifier remains the same even when the worksheet is renamed or moved. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="name" type="String">The display name of the worksheet. [Api set: ExcelApi 1.1]</field>
			/// <field name="names" type="Excel.NamedItemCollection">Collection of names scoped to the current worksheet. Read-only. [Api set: ExcelApi 1.4]</field>
			/// <field name="pivotTables" type="Excel.PivotTableCollection">Collection of PivotTables that are part of the worksheet. Read-only. [Api set: ExcelApi 1.3]</field>
			/// <field name="position" type="Number">The zero-based position of the worksheet within the workbook. [Api set: ExcelApi 1.1]</field>
			/// <field name="protection" type="Excel.WorksheetProtection">Returns sheet protection object for a worksheet. [Api set: ExcelApi 1.2]</field>
			/// <field name="tables" type="Excel.TableCollection">Collection of tables that are part of the worksheet. Read-only. [Api set: ExcelApi 1.1]</field>
			/// <field name="visibility" type="String">The Visibility of the worksheet. [Api set: ExcelApi 1.1 for reading visibility; 1.2 for setting it.]</field>
		}

		Worksheet.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.Worksheet"/>
		}

		Worksheet.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Excel.Interfaces.WorksheetUpdateData">Properties described by the Excel.Interfaces.WorksheetUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Worksheet">An existing Worksheet object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Worksheet.prototype.activate = function() {
			/// <summary>
			/// Activate the worksheet in the Excel UI. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		Worksheet.prototype.calculate = function(markAllDirty) {
			/// <summary>
			/// Calculates all cells on a worksheet. [Api set: ExcelApi 1.6]
			/// </summary>
			/// <returns ></returns>
		}
		Worksheet.prototype.delete = function() {
			/// <summary>
			/// Deletes the worksheet from the workbook. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		Worksheet.prototype.getCell = function(row, column) {
			/// <summary>
			/// Gets the range object containing the single cell based on row and column numbers. The cell can be outside the bounds of its parent range, so long as it&apos;s stays within the worksheet grid. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="row" type="Number">The row number of the cell to be retrieved. Zero-indexed.</param>
			/// <param name="column" type="Number">the column number of the cell to be retrieved. Zero-indexed.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Worksheet.prototype.getNext = function(visibleOnly) {
			/// <summary>
			/// Gets the worksheet that follows this one. If there are no worksheets following this one, this method will throw an error. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="visibleOnly" type="Boolean" optional="true">If true, considers only visible worksheets, skipping over any hidden ones.</param>
			/// <returns type="Excel.Worksheet"></returns>
		}
		Worksheet.prototype.getNextOrNullObject = function(visibleOnly) {
			/// <summary>
			/// Gets the worksheet that follows this one. If there are no worksheets following this one, this method will return a null object. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="visibleOnly" type="Boolean" optional="true">If true, considers only visible worksheets, skipping over any hidden ones.</param>
			/// <returns type="Excel.Worksheet"></returns>
		}
		Worksheet.prototype.getPrevious = function(visibleOnly) {
			/// <summary>
			/// Gets the worksheet that precedes this one. If there are no previous worksheets, this method will throw an error. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="visibleOnly" type="Boolean" optional="true">If true, considers only visible worksheets, skipping over any hidden ones.</param>
			/// <returns type="Excel.Worksheet"></returns>
		}
		Worksheet.prototype.getPreviousOrNullObject = function(visibleOnly) {
			/// <summary>
			/// Gets the worksheet that precedes this one. If there are no previous worksheets, this method will return a null objet. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <param name="visibleOnly" type="Boolean" optional="true">If true, considers only visible worksheets, skipping over any hidden ones.</param>
			/// <returns type="Excel.Worksheet"></returns>
		}
		Worksheet.prototype.getRange = function(address) {
			/// <summary>
			/// Gets the range object specified by the address or name. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="address" type="String" optional="true">The address or the name of the range. If not specified, the entire worksheet range is returned.</param>
			/// <returns type="Excel.Range"></returns>
		}
		Worksheet.prototype.getUsedRange = function(valuesOnly) {
			/// <summary>
			/// The used range is the smallest range that encompasses any cells that have a value or formatting assigned to them. If the entire worksheet is blank, this function will return the top left cell (i.e.,: it will *not* throw an error). [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="valuesOnly" type="Boolean" optional="true">Considers only cells with values as used cells (ignoring formatting). [Api set: ExcelApi 1.2]</param>
			/// <returns type="Excel.Range"></returns>
		}
		Worksheet.prototype.getUsedRangeOrNullObject = function(valuesOnly) {
			/// <summary>
			/// The used range is the smallest range that encompasses any cells that have a value or formatting assigned to them. If the entire worksheet is blank, this function will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="valuesOnly" type="Boolean" optional="true">Considers only cells with values as used cells.</param>
			/// <returns type="Excel.Range"></returns>
		}

		return Worksheet;
	})(OfficeExtension.ClientObject);
	Excel.Worksheet = Worksheet;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var WorksheetCollection = (function(_super) {
		__extends(WorksheetCollection, _super);
		function WorksheetCollection() {
			/// <summary> Represents a collection of worksheet objects that are part of the workbook. [Api set: ExcelApi 1.1] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Excel.Worksheet">Gets the loaded child items in this collection.</field>
		}

		WorksheetCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.WorksheetCollection"/>
		}
		WorksheetCollection.prototype.add = function(name) {
			/// <summary>
			/// Adds a new worksheet to the workbook. The worksheet will be added at the end of existing worksheets. If you wish to activate the newly added worksheet, call &quot;.activate() on it. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="name" type="String" optional="true">The name of the worksheet to be added. If specified, name should be unqiue. If not specified, Excel determines the name of the new worksheet.</param>
			/// <returns type="Excel.Worksheet"></returns>
		}
		WorksheetCollection.prototype.getActiveWorksheet = function() {
			/// <summary>
			/// Gets the currently active worksheet in the workbook. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <returns type="Excel.Worksheet"></returns>
		}
		WorksheetCollection.prototype.getCount = function(visibleOnly) {
			/// <summary>
			/// Gets the number of worksheets in the collection. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		WorksheetCollection.prototype.getFirst = function(visibleOnly) {
			/// <summary>
			/// Gets the first worksheet in the collection.              If true, considers only visible worksheets, skipping over any hidden ones. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <returns type="Excel.Worksheet"></returns>
		}
		WorksheetCollection.prototype.getItem = function(key) {
			/// <summary>
			/// Gets a worksheet object using its Name or ID. [Api set: ExcelApi 1.1]
			/// </summary>
			/// <param name="key" type="String">The Name or ID of the worksheet.</param>
			/// <returns type="Excel.Worksheet"></returns>
		}
		WorksheetCollection.prototype.getItemOrNullObject = function(key) {
			/// <summary>
			/// Gets a worksheet object using its Name or ID. If the worksheet does not exist, will return a null object. [Api set: ExcelApi 1.4]
			/// </summary>
			/// <param name="key" type="String">The Name or ID of the worksheet.</param>
			/// <returns type="Excel.Worksheet"></returns>
		}
		WorksheetCollection.prototype.getLast = function(visibleOnly) {
			/// <summary>
			/// Gets the last worksheet in the collection.              If true, considers only visible worksheets, skipping over any hidden ones. [Api set: ExcelApi 1.5]
			/// </summary>
			/// <returns type="Excel.Worksheet"></returns>
		}

		return WorksheetCollection;
	})(OfficeExtension.ClientObject);
	Excel.WorksheetCollection = WorksheetCollection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var WorksheetProtection = (function(_super) {
		__extends(WorksheetProtection, _super);
		function WorksheetProtection() {
			/// <summary> Represents the protection of a sheet object. [Api set: ExcelApi 1.2] </summary>
			/// <field name="context" type="Excel.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="options" type="Excel.Interfaces.WorksheetProtectionOptions">Sheet protection options. Read-Only. [Api set: ExcelApi 1.2]</field>
			/// <field name="protected" type="Boolean">Indicates if the worksheet is protected. Read-Only. [Api set: ExcelApi 1.2]</field>
		}

		WorksheetProtection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Excel.WorksheetProtection"/>
		}
		WorksheetProtection.prototype.protect = function(options, password) {
			/// <summary>
			/// Protects a worksheet. Fails if the worksheet has already been protected. [Api set: ExcelApi 1.2 for options; 1.7 for password]
			/// </summary>
			/// <param name="options" type="Excel.Interfaces.WorksheetProtectionOptions" optional="true">sheet protection options.</param>
			/// <param name="password" type="String" optional="true">sheet protection password.</param>
			/// <returns ></returns>
		}
		WorksheetProtection.prototype.unprotect = function(password) {
			/// <summary>
			/// Unprotects a worksheet. [Api set: ExcelApi BETA (PREVIEW ONLY) for password]
			/// </summary>
			/// <param name="password" type="String" optional="true">sheet protection password.</param>
			/// <returns ></returns>
		}

		return WorksheetProtection;
	})(OfficeExtension.ClientObject);
	Excel.WorksheetProtection = WorksheetProtection;
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var WorksheetProtectionOptions = (function() {
			function WorksheetProtectionOptions() {
				/// <summary> Represents the options in sheet protection. [Api set: ExcelApi 1.2] </summary>
				/// <field name="allowAutoFilter" type="Boolean">Represents the worksheet protection option of allowing using auto filter feature. [Api set: ExcelApi 1.2]</field>
				/// <field name="allowDeleteColumns" type="Boolean">Represents the worksheet protection option of allowing deleting columns. [Api set: ExcelApi 1.2]</field>
				/// <field name="allowDeleteRows" type="Boolean">Represents the worksheet protection option of allowing deleting rows. [Api set: ExcelApi 1.2]</field>
				/// <field name="allowFormatCells" type="Boolean">Represents the worksheet protection option of allowing formatting cells. [Api set: ExcelApi 1.2]</field>
				/// <field name="allowFormatColumns" type="Boolean">Represents the worksheet protection option of allowing formatting columns. [Api set: ExcelApi 1.2]</field>
				/// <field name="allowFormatRows" type="Boolean">Represents the worksheet protection option of allowing formatting rows. [Api set: ExcelApi 1.2]</field>
				/// <field name="allowInsertColumns" type="Boolean">Represents the worksheet protection option of allowing inserting columns. [Api set: ExcelApi 1.2]</field>
				/// <field name="allowInsertHyperlinks" type="Boolean">Represents the worksheet protection option of allowing inserting hyperlinks. [Api set: ExcelApi 1.2]</field>
				/// <field name="allowInsertRows" type="Boolean">Represents the worksheet protection option of allowing inserting rows. [Api set: ExcelApi 1.2]</field>
				/// <field name="allowPivotTables" type="Boolean">Represents the worksheet protection option of allowing using PivotTable feature. [Api set: ExcelApi 1.2]</field>
				/// <field name="allowSort" type="Boolean">Represents the worksheet protection option of allowing using sort feature. [Api set: ExcelApi 1.2]</field>
			}
			return WorksheetProtectionOptions;
		})();
		Interfaces.WorksheetProtectionOptions.__proto__ = null;
		Interfaces.WorksheetProtectionOptions = WorksheetProtectionOptions;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var WorksheetUpdateData = (function() {
			function WorksheetUpdateData() {
				/// <summary>An interface for updating data on the Worksheet object, for use in "worksheet.set({ ... })".</summary>
				/// <field name="name" type="String">The display name of the worksheet. [Api set: ExcelApi 1.1]</field>;
				/// <field name="position" type="Number">The zero-based position of the worksheet within the workbook. [Api set: ExcelApi 1.1]</field>;
				/// <field name="visibility" type="String">The Visibility of the worksheet. [Api set: ExcelApi 1.1 for reading visibility; 1.2 for setting it.]</field>;
			}
			return WorksheetUpdateData;
		})();
		Interfaces.WorksheetUpdateData.__proto__ = null;
		Interfaces.WorksheetUpdateData = WorksheetUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var RangeUpdateData = (function() {
			function RangeUpdateData() {
				/// <summary>An interface for updating data on the Range object, for use in "range.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.RangeFormatUpdateData">Returns a format object, encapsulating the range&apos;s font, fill, borders, alignment, and other properties. [Api set: ExcelApi 1.1]</field>
				/// <field name="columnHidden" type="Boolean">Represents if all columns of the current range are hidden. [Api set: ExcelApi 1.2]</field>;
				/// <field name="formulas" type="Array" elementType="Array">Represents the formula in A1-style notation. [Api set: ExcelApi 1.1]</field>;
				/// <field name="formulasLocal" type="Array" elementType="Array">Represents the formula in A1-style notation, in the user&apos;s language and number-formatting locale.  For example, the English &quot;=SUM(A1, 1.5)&quot; formula would become &quot;=SUMME(A1; 1,5)&quot; in German. [Api set: ExcelApi 1.1]</field>;
				/// <field name="formulasR1C1" type="Array" elementType="Array">Represents the formula in R1C1-style notation. [Api set: ExcelApi 1.2]</field>;
				/// <field name="numberFormat" type="Array" elementType="Array">Represents Excel&apos;s number format code for the given cell. [Api set: ExcelApi 1.1]</field>;
				/// <field name="rowHidden" type="Boolean">Represents if all rows of the current range are hidden. [Api set: ExcelApi 1.2]</field>;
				/// <field name="values" type="Array" elementType="Array">Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. [Api set: ExcelApi 1.1]</field>;
			}
			return RangeUpdateData;
		})();
		Interfaces.RangeUpdateData.__proto__ = null;
		Interfaces.RangeUpdateData = RangeUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var RangeViewUpdateData = (function() {
			function RangeViewUpdateData() {
				/// <summary>An interface for updating data on the RangeView object, for use in "rangeView.set({ ... })".</summary>
				/// <field name="formulas" type="Array" elementType="Array">Represents the formula in A1-style notation. [Api set: ExcelApi 1.3]</field>;
				/// <field name="formulasLocal" type="Array" elementType="Array">Represents the formula in A1-style notation, in the user&apos;s language and number-formatting locale.  For example, the English &quot;=SUM(A1, 1.5)&quot; formula would become &quot;=SUMME(A1; 1,5)&quot; in German. [Api set: ExcelApi 1.3]</field>;
				/// <field name="formulasR1C1" type="Array" elementType="Array">Represents the formula in R1C1-style notation. [Api set: ExcelApi 1.3]</field>;
				/// <field name="numberFormat" type="Array" elementType="Array">Represents Excel&apos;s number format code for the given cell. [Api set: ExcelApi 1.3]</field>;
				/// <field name="values" type="Array" elementType="Array">Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. [Api set: ExcelApi 1.3]</field>;
			}
			return RangeViewUpdateData;
		})();
		Interfaces.RangeViewUpdateData.__proto__ = null;
		Interfaces.RangeViewUpdateData = RangeViewUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var SettingUpdateData = (function() {
			function SettingUpdateData() {
				/// <summary>An interface for updating data on the Setting object, for use in "setting.set({ ... })".</summary>
				/// <field name="value" >Represents the value stored for this setting. [Api set: ExcelApi 1.4]</field>;
			}
			return SettingUpdateData;
		})();
		Interfaces.SettingUpdateData.__proto__ = null;
		Interfaces.SettingUpdateData = SettingUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var NamedItemUpdateData = (function() {
			function NamedItemUpdateData() {
				/// <summary>An interface for updating data on the NamedItem object, for use in "namedItem.set({ ... })".</summary>
				/// <field name="comment" type="String">Represents the comment associated with this name. [Api set: ExcelApi 1.4]</field>;
				/// <field name="visible" type="Boolean">Specifies whether the object is visible or not. [Api set: ExcelApi 1.1]</field>;
			}
			return NamedItemUpdateData;
		})();
		Interfaces.NamedItemUpdateData.__proto__ = null;
		Interfaces.NamedItemUpdateData = NamedItemUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var TableUpdateData = (function() {
			function TableUpdateData() {
				/// <summary>An interface for updating data on the Table object, for use in "table.set({ ... })".</summary>
				/// <field name="highlightFirstColumn" type="Boolean">Indicates whether the first column contains special formatting. [Api set: ExcelApi 1.3]</field>;
				/// <field name="highlightLastColumn" type="Boolean">Indicates whether the last column contains special formatting. [Api set: ExcelApi 1.3]</field>;
				/// <field name="name" type="String">Name of the table. [Api set: ExcelApi 1.1]</field>;
				/// <field name="showBandedColumns" type="Boolean">Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier. [Api set: ExcelApi 1.3]</field>;
				/// <field name="showBandedRows" type="Boolean">Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier. [Api set: ExcelApi 1.3]</field>;
				/// <field name="showFilterButton" type="Boolean">Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row. [Api set: ExcelApi 1.3]</field>;
				/// <field name="showHeaders" type="Boolean">Indicates whether the header row is visible or not. This value can be set to show or remove the header row. [Api set: ExcelApi 1.1]</field>;
				/// <field name="showTotals" type="Boolean">Indicates whether the total row is visible or not. This value can be set to show or remove the total row. [Api set: ExcelApi 1.1]</field>;
				/// <field name="style" type="String">Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified. [Api set: ExcelApi 1.1]</field>;
			}
			return TableUpdateData;
		})();
		Interfaces.TableUpdateData.__proto__ = null;
		Interfaces.TableUpdateData = TableUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var TableColumnUpdateData = (function() {
			function TableColumnUpdateData() {
				/// <summary>An interface for updating data on the TableColumn object, for use in "tableColumn.set({ ... })".</summary>
				/// <field name="name" type="String">Represents the name of the table column. [Api set: ExcelApi 1.1 for getting the name; 1.4 for setting it.]</field>;
				/// <field name="values" type="Array" elementType="Array">Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. [Api set: ExcelApi 1.1]</field>;
			}
			return TableColumnUpdateData;
		})();
		Interfaces.TableColumnUpdateData.__proto__ = null;
		Interfaces.TableColumnUpdateData = TableColumnUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var TableRowUpdateData = (function() {
			function TableRowUpdateData() {
				/// <summary>An interface for updating data on the TableRow object, for use in "tableRow.set({ ... })".</summary>
				/// <field name="values" type="Array" elementType="Array">Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string. [Api set: ExcelApi 1.1]</field>;
			}
			return TableRowUpdateData;
		})();
		Interfaces.TableRowUpdateData.__proto__ = null;
		Interfaces.TableRowUpdateData = TableRowUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var RangeFormatUpdateData = (function() {
			function RangeFormatUpdateData() {
				/// <summary>An interface for updating data on the RangeFormat object, for use in "rangeFormat.set({ ... })".</summary>
				/// <field name="fill" type="Excel.Interfaces.RangeFillUpdateData">Returns the fill object defined on the overall range. [Api set: ExcelApi 1.1]</field>
				/// <field name="font" type="Excel.Interfaces.RangeFontUpdateData">Returns the font object defined on the overall range. [Api set: ExcelApi 1.1]</field>
				/// <field name="protection" type="Excel.Interfaces.FormatProtectionUpdateData">Returns the format protection object for a range. [Api set: ExcelApi 1.2]</field>
				/// <field name="columnWidth" type="Number">Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned. [Api set: ExcelApi 1.2]</field>;
				/// <field name="horizontalAlignment" type="String">Represents the horizontal alignment for the specified object. See Excel.HorizontalAlignment for details. [Api set: ExcelApi 1.1]</field>;
				/// <field name="rowHeight" type="Number">Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned. [Api set: ExcelApi 1.2]</field>;
				/// <field name="verticalAlignment" type="String">Represents the vertical alignment for the specified object. See Excel.VerticalAlignment for details. [Api set: ExcelApi 1.1]</field>;
				/// <field name="wrapText" type="Boolean">Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn&apos;t have uniform wrap setting [Api set: ExcelApi 1.1]</field>;
			}
			return RangeFormatUpdateData;
		})();
		Interfaces.RangeFormatUpdateData.__proto__ = null;
		Interfaces.RangeFormatUpdateData = RangeFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var FormatProtectionUpdateData = (function() {
			function FormatProtectionUpdateData() {
				/// <summary>An interface for updating data on the FormatProtection object, for use in "formatProtection.set({ ... })".</summary>
				/// <field name="formulaHidden" type="Boolean">Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn&apos;t have uniform formula hidden setting. [Api set: ExcelApi 1.2]</field>;
				/// <field name="locked" type="Boolean">Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn&apos;t have uniform lock setting. [Api set: ExcelApi 1.2]</field>;
			}
			return FormatProtectionUpdateData;
		})();
		Interfaces.FormatProtectionUpdateData.__proto__ = null;
		Interfaces.FormatProtectionUpdateData = FormatProtectionUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var RangeFillUpdateData = (function() {
			function RangeFillUpdateData() {
				/// <summary>An interface for updating data on the RangeFill object, for use in "rangeFill.set({ ... })".</summary>
				/// <field name="color" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;) [Api set: ExcelApi 1.1]</field>;
			}
			return RangeFillUpdateData;
		})();
		Interfaces.RangeFillUpdateData.__proto__ = null;
		Interfaces.RangeFillUpdateData = RangeFillUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var RangeBorderUpdateData = (function() {
			function RangeBorderUpdateData() {
				/// <summary>An interface for updating data on the RangeBorder object, for use in "rangeBorder.set({ ... })".</summary>
				/// <field name="color" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;). [Api set: ExcelApi 1.1]</field>;
				/// <field name="style" type="String">One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details. [Api set: ExcelApi 1.1]</field>;
				/// <field name="weight" type="String">Specifies the weight of the border around a range. See Excel.BorderWeight for details. [Api set: ExcelApi 1.1]</field>;
			}
			return RangeBorderUpdateData;
		})();
		Interfaces.RangeBorderUpdateData.__proto__ = null;
		Interfaces.RangeBorderUpdateData = RangeBorderUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var RangeFontUpdateData = (function() {
			function RangeFontUpdateData() {
				/// <summary>An interface for updating data on the RangeFont object, for use in "rangeFont.set({ ... })".</summary>
				/// <field name="bold" type="Boolean">Represents the bold status of font. [Api set: ExcelApi 1.1]</field>;
				/// <field name="color" type="String">HTML color code representation of the text color. E.g. #FF0000 represents Red. [Api set: ExcelApi 1.1]</field>;
				/// <field name="italic" type="Boolean">Represents the italic status of the font. [Api set: ExcelApi 1.1]</field>;
				/// <field name="name" type="String">Font name (e.g. &quot;Calibri&quot;) [Api set: ExcelApi 1.1]</field>;
				/// <field name="size" type="Number">Font size. [Api set: ExcelApi 1.1]</field>;
				/// <field name="underline" type="String">Type of underline applied to the font. See Excel.RangeUnderlineStyle for details. [Api set: ExcelApi 1.1]</field>;
			}
			return RangeFontUpdateData;
		})();
		Interfaces.RangeFontUpdateData.__proto__ = null;
		Interfaces.RangeFontUpdateData = RangeFontUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartUpdateData = (function() {
			function ChartUpdateData() {
				/// <summary>An interface for updating data on the Chart object, for use in "chart.set({ ... })".</summary>
				/// <field name="axes" type="Excel.Interfaces.ChartAxesUpdateData">Represents chart axes. [Api set: ExcelApi 1.1]</field>
				/// <field name="dataLabels" type="Excel.Interfaces.ChartDataLabelsUpdateData">Represents the datalabels on the chart. [Api set: ExcelApi 1.1]</field>
				/// <field name="format" type="Excel.Interfaces.ChartAreaFormatUpdateData">Encapsulates the format properties for the chart area. [Api set: ExcelApi 1.1]</field>
				/// <field name="legend" type="Excel.Interfaces.ChartLegendUpdateData">Represents the legend for the chart. [Api set: ExcelApi 1.1]</field>
				/// <field name="title" type="Excel.Interfaces.ChartTitleUpdateData">Represents the title of the specified chart, including the text, visibility, position and formating of the title. [Api set: ExcelApi 1.1]</field>
				/// <field name="height" type="Number">Represents the height, in points, of the chart object. [Api set: ExcelApi 1.1]</field>;
				/// <field name="left" type="Number">The distance, in points, from the left side of the chart to the worksheet origin. [Api set: ExcelApi 1.1]</field>;
				/// <field name="name" type="String">Represents the name of a chart object. [Api set: ExcelApi 1.1]</field>;
				/// <field name="top" type="Number">Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart). [Api set: ExcelApi 1.1]</field>;
				/// <field name="width" type="Number">Represents the width, in points, of the chart object. [Api set: ExcelApi 1.1]</field>;
			}
			return ChartUpdateData;
		})();
		Interfaces.ChartUpdateData.__proto__ = null;
		Interfaces.ChartUpdateData = ChartUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartAreaFormatUpdateData = (function() {
			function ChartAreaFormatUpdateData() {
				/// <summary>An interface for updating data on the ChartAreaFormat object, for use in "chartAreaFormat.set({ ... })".</summary>
				/// <field name="font" type="Excel.Interfaces.ChartFontUpdateData">Represents the font attributes (font name, font size, color, etc.) for the current object. [Api set: ExcelApi 1.1]</field>
			}
			return ChartAreaFormatUpdateData;
		})();
		Interfaces.ChartAreaFormatUpdateData.__proto__ = null;
		Interfaces.ChartAreaFormatUpdateData = ChartAreaFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartSeriesUpdateData = (function() {
			function ChartSeriesUpdateData() {
				/// <summary>An interface for updating data on the ChartSeries object, for use in "chartSeries.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ChartSeriesFormatUpdateData">Represents the formatting of a chart series, which includes fill and line formatting. [Api set: ExcelApi 1.1]</field>
				/// <field name="name" type="String">Represents the name of a series in a chart. [Api set: ExcelApi 1.1]</field>;
			}
			return ChartSeriesUpdateData;
		})();
		Interfaces.ChartSeriesUpdateData.__proto__ = null;
		Interfaces.ChartSeriesUpdateData = ChartSeriesUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartSeriesFormatUpdateData = (function() {
			function ChartSeriesFormatUpdateData() {
				/// <summary>An interface for updating data on the ChartSeriesFormat object, for use in "chartSeriesFormat.set({ ... })".</summary>
				/// <field name="line" type="Excel.Interfaces.ChartLineFormatUpdateData">Represents line formatting. [Api set: ExcelApi 1.1]</field>
			}
			return ChartSeriesFormatUpdateData;
		})();
		Interfaces.ChartSeriesFormatUpdateData.__proto__ = null;
		Interfaces.ChartSeriesFormatUpdateData = ChartSeriesFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartAxesUpdateData = (function() {
			function ChartAxesUpdateData() {
				/// <summary>An interface for updating data on the ChartAxes object, for use in "chartAxes.set({ ... })".</summary>
				/// <field name="categoryAxis" type="Excel.Interfaces.ChartAxisUpdateData">Represents the category axis in a chart. [Api set: ExcelApi 1.1]</field>
				/// <field name="seriesAxis" type="Excel.Interfaces.ChartAxisUpdateData">Represents the series axis of a 3-dimensional chart. [Api set: ExcelApi 1.1]</field>
				/// <field name="valueAxis" type="Excel.Interfaces.ChartAxisUpdateData">Represents the value axis in an axis. [Api set: ExcelApi 1.1]</field>
			}
			return ChartAxesUpdateData;
		})();
		Interfaces.ChartAxesUpdateData.__proto__ = null;
		Interfaces.ChartAxesUpdateData = ChartAxesUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartAxisUpdateData = (function() {
			function ChartAxisUpdateData() {
				/// <summary>An interface for updating data on the ChartAxis object, for use in "chartAxis.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ChartAxisFormatUpdateData">Represents the formatting of a chart object, which includes line and font formatting. [Api set: ExcelApi 1.1]</field>
				/// <field name="majorGridlines" type="Excel.Interfaces.ChartGridlinesUpdateData">Returns a gridlines object that represents the major gridlines for the specified axis. [Api set: ExcelApi 1.1]</field>
				/// <field name="minorGridlines" type="Excel.Interfaces.ChartGridlinesUpdateData">Returns a Gridlines object that represents the minor gridlines for the specified axis. [Api set: ExcelApi 1.1]</field>
				/// <field name="title" type="Excel.Interfaces.ChartAxisTitleUpdateData">Represents the axis title. [Api set: ExcelApi 1.1]</field>
				/// <field name="majorUnit" >Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number. [Api set: ExcelApi 1.1]</field>;
				/// <field name="maximum" >Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number. [Api set: ExcelApi 1.1]</field>;
				/// <field name="minimum" >Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number. [Api set: ExcelApi 1.1]</field>;
				/// <field name="minorUnit" >Represents the interval between two minor tick marks. &quot;Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number. [Api set: ExcelApi 1.1]</field>;
			}
			return ChartAxisUpdateData;
		})();
		Interfaces.ChartAxisUpdateData.__proto__ = null;
		Interfaces.ChartAxisUpdateData = ChartAxisUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartAxisFormatUpdateData = (function() {
			function ChartAxisFormatUpdateData() {
				/// <summary>An interface for updating data on the ChartAxisFormat object, for use in "chartAxisFormat.set({ ... })".</summary>
				/// <field name="font" type="Excel.Interfaces.ChartFontUpdateData">Represents the font attributes (font name, font size, color, etc.) for a chart axis element. [Api set: ExcelApi 1.1]</field>
				/// <field name="line" type="Excel.Interfaces.ChartLineFormatUpdateData">Represents chart line formatting. [Api set: ExcelApi 1.1]</field>
			}
			return ChartAxisFormatUpdateData;
		})();
		Interfaces.ChartAxisFormatUpdateData.__proto__ = null;
		Interfaces.ChartAxisFormatUpdateData = ChartAxisFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartAxisTitleUpdateData = (function() {
			function ChartAxisTitleUpdateData() {
				/// <summary>An interface for updating data on the ChartAxisTitle object, for use in "chartAxisTitle.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ChartAxisTitleFormatUpdateData">Represents the formatting of chart axis title. [Api set: ExcelApi 1.1]</field>
				/// <field name="text" type="String">Represents the axis title. [Api set: ExcelApi 1.1]</field>;
				/// <field name="visible" type="Boolean">A boolean that specifies the visibility of an axis title. [Api set: ExcelApi 1.1]</field>;
			}
			return ChartAxisTitleUpdateData;
		})();
		Interfaces.ChartAxisTitleUpdateData.__proto__ = null;
		Interfaces.ChartAxisTitleUpdateData = ChartAxisTitleUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartAxisTitleFormatUpdateData = (function() {
			function ChartAxisTitleFormatUpdateData() {
				/// <summary>An interface for updating data on the ChartAxisTitleFormat object, for use in "chartAxisTitleFormat.set({ ... })".</summary>
				/// <field name="font" type="Excel.Interfaces.ChartFontUpdateData">Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. [Api set: ExcelApi 1.1]</field>
			}
			return ChartAxisTitleFormatUpdateData;
		})();
		Interfaces.ChartAxisTitleFormatUpdateData.__proto__ = null;
		Interfaces.ChartAxisTitleFormatUpdateData = ChartAxisTitleFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartDataLabelsUpdateData = (function() {
			function ChartDataLabelsUpdateData() {
				/// <summary>An interface for updating data on the ChartDataLabels object, for use in "chartDataLabels.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ChartDataLabelFormatUpdateData">Represents the format of chart data labels, which includes fill and font formatting. [Api set: ExcelApi 1.1]</field>
				/// <field name="position" type="String">DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details. [Api set: ExcelApi 1.1]</field>;
				/// <field name="separator" type="String">String representing the separator used for the data labels on a chart. [Api set: ExcelApi 1.1]</field>;
				/// <field name="showBubbleSize" type="Boolean">Boolean value representing if the data label bubble size is visible or not. [Api set: ExcelApi 1.1]</field>;
				/// <field name="showCategoryName" type="Boolean">Boolean value representing if the data label category name is visible or not. [Api set: ExcelApi 1.1]</field>;
				/// <field name="showLegendKey" type="Boolean">Boolean value representing if the data label legend key is visible or not. [Api set: ExcelApi 1.1]</field>;
				/// <field name="showPercentage" type="Boolean">Boolean value representing if the data label percentage is visible or not. [Api set: ExcelApi 1.1]</field>;
				/// <field name="showSeriesName" type="Boolean">Boolean value representing if the data label series name is visible or not. [Api set: ExcelApi 1.1]</field>;
				/// <field name="showValue" type="Boolean">Boolean value representing if the data label value is visible or not. [Api set: ExcelApi 1.1]</field>;
			}
			return ChartDataLabelsUpdateData;
		})();
		Interfaces.ChartDataLabelsUpdateData.__proto__ = null;
		Interfaces.ChartDataLabelsUpdateData = ChartDataLabelsUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartDataLabelFormatUpdateData = (function() {
			function ChartDataLabelFormatUpdateData() {
				/// <summary>An interface for updating data on the ChartDataLabelFormat object, for use in "chartDataLabelFormat.set({ ... })".</summary>
				/// <field name="font" type="Excel.Interfaces.ChartFontUpdateData">Represents the font attributes (font name, font size, color, etc.) for a chart data label. [Api set: ExcelApi 1.1]</field>
			}
			return ChartDataLabelFormatUpdateData;
		})();
		Interfaces.ChartDataLabelFormatUpdateData.__proto__ = null;
		Interfaces.ChartDataLabelFormatUpdateData = ChartDataLabelFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartGridlinesUpdateData = (function() {
			function ChartGridlinesUpdateData() {
				/// <summary>An interface for updating data on the ChartGridlines object, for use in "chartGridlines.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ChartGridlinesFormatUpdateData">Represents the formatting of chart gridlines. [Api set: ExcelApi 1.1]</field>
				/// <field name="visible" type="Boolean">Boolean value representing if the axis gridlines are visible or not. [Api set: ExcelApi 1.1]</field>;
			}
			return ChartGridlinesUpdateData;
		})();
		Interfaces.ChartGridlinesUpdateData.__proto__ = null;
		Interfaces.ChartGridlinesUpdateData = ChartGridlinesUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartGridlinesFormatUpdateData = (function() {
			function ChartGridlinesFormatUpdateData() {
				/// <summary>An interface for updating data on the ChartGridlinesFormat object, for use in "chartGridlinesFormat.set({ ... })".</summary>
				/// <field name="line" type="Excel.Interfaces.ChartLineFormatUpdateData">Represents chart line formatting. [Api set: ExcelApi 1.1]</field>
			}
			return ChartGridlinesFormatUpdateData;
		})();
		Interfaces.ChartGridlinesFormatUpdateData.__proto__ = null;
		Interfaces.ChartGridlinesFormatUpdateData = ChartGridlinesFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartLegendUpdateData = (function() {
			function ChartLegendUpdateData() {
				/// <summary>An interface for updating data on the ChartLegend object, for use in "chartLegend.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ChartLegendFormatUpdateData">Represents the formatting of a chart legend, which includes fill and font formatting. [Api set: ExcelApi 1.1]</field>
				/// <field name="overlay" type="Boolean">Boolean value for whether the chart legend should overlap with the main body of the chart. [Api set: ExcelApi 1.1]</field>;
				/// <field name="position" type="String">Represents the position of the legend on the chart. See Excel.ChartLegendPosition for details. [Api set: ExcelApi 1.1]</field>;
				/// <field name="visible" type="Boolean">A boolean value the represents the visibility of a ChartLegend object. [Api set: ExcelApi 1.1]</field>;
			}
			return ChartLegendUpdateData;
		})();
		Interfaces.ChartLegendUpdateData.__proto__ = null;
		Interfaces.ChartLegendUpdateData = ChartLegendUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartLegendFormatUpdateData = (function() {
			function ChartLegendFormatUpdateData() {
				/// <summary>An interface for updating data on the ChartLegendFormat object, for use in "chartLegendFormat.set({ ... })".</summary>
				/// <field name="font" type="Excel.Interfaces.ChartFontUpdateData">Represents the font attributes such as font name, font size, color, etc. of a chart legend. [Api set: ExcelApi 1.1]</field>
			}
			return ChartLegendFormatUpdateData;
		})();
		Interfaces.ChartLegendFormatUpdateData.__proto__ = null;
		Interfaces.ChartLegendFormatUpdateData = ChartLegendFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartTitleUpdateData = (function() {
			function ChartTitleUpdateData() {
				/// <summary>An interface for updating data on the ChartTitle object, for use in "chartTitle.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ChartTitleFormatUpdateData">Represents the formatting of a chart title, which includes fill and font formatting. [Api set: ExcelApi 1.1]</field>
				/// <field name="overlay" type="Boolean">Boolean value representing if the chart title will overlay the chart or not. [Api set: ExcelApi 1.1]</field>;
				/// <field name="text" type="String">Represents the title text of a chart. [Api set: ExcelApi 1.1]</field>;
				/// <field name="visible" type="Boolean">A boolean value the represents the visibility of a chart title object. [Api set: ExcelApi 1.1]</field>;
			}
			return ChartTitleUpdateData;
		})();
		Interfaces.ChartTitleUpdateData.__proto__ = null;
		Interfaces.ChartTitleUpdateData = ChartTitleUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartTitleFormatUpdateData = (function() {
			function ChartTitleFormatUpdateData() {
				/// <summary>An interface for updating data on the ChartTitleFormat object, for use in "chartTitleFormat.set({ ... })".</summary>
				/// <field name="font" type="Excel.Interfaces.ChartFontUpdateData">Represents the font attributes (font name, font size, color, etc.) for an object. [Api set: ExcelApi 1.1]</field>
			}
			return ChartTitleFormatUpdateData;
		})();
		Interfaces.ChartTitleFormatUpdateData.__proto__ = null;
		Interfaces.ChartTitleFormatUpdateData = ChartTitleFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartLineFormatUpdateData = (function() {
			function ChartLineFormatUpdateData() {
				/// <summary>An interface for updating data on the ChartLineFormat object, for use in "chartLineFormat.set({ ... })".</summary>
				/// <field name="color" type="String">HTML color code representing the color of lines in the chart. [Api set: ExcelApi 1.1]</field>;
			}
			return ChartLineFormatUpdateData;
		})();
		Interfaces.ChartLineFormatUpdateData.__proto__ = null;
		Interfaces.ChartLineFormatUpdateData = ChartLineFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ChartFontUpdateData = (function() {
			function ChartFontUpdateData() {
				/// <summary>An interface for updating data on the ChartFont object, for use in "chartFont.set({ ... })".</summary>
				/// <field name="bold" type="Boolean">Represents the bold status of font. [Api set: ExcelApi 1.1]</field>;
				/// <field name="color" type="String">HTML color code representation of the text color. E.g. #FF0000 represents Red. [Api set: ExcelApi 1.1]</field>;
				/// <field name="italic" type="Boolean">Represents the italic status of the font. [Api set: ExcelApi 1.1]</field>;
				/// <field name="name" type="String">Font name (e.g. &quot;Calibri&quot;) [Api set: ExcelApi 1.1]</field>;
				/// <field name="size" type="Number">Size of the font (e.g. 11) [Api set: ExcelApi 1.1]</field>;
				/// <field name="underline" type="String">Type of underline applied to the font. See Excel.ChartUnderlineStyle for details. [Api set: ExcelApi 1.1]</field>;
			}
			return ChartFontUpdateData;
		})();
		Interfaces.ChartFontUpdateData.__proto__ = null;
		Interfaces.ChartFontUpdateData = ChartFontUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var PivotTableUpdateData = (function() {
			function PivotTableUpdateData() {
				/// <summary>An interface for updating data on the PivotTable object, for use in "pivotTable.set({ ... })".</summary>
				/// <field name="name" type="String">Name of the PivotTable. [Api set: ExcelApi 1.3]</field>;
			}
			return PivotTableUpdateData;
		})();
		Interfaces.PivotTableUpdateData.__proto__ = null;
		Interfaces.PivotTableUpdateData = PivotTableUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalFormatUpdateData = (function() {
			function ConditionalFormatUpdateData() {
				/// <summary>An interface for updating data on the ConditionalFormat object, for use in "conditionalFormat.set({ ... })".</summary>
				/// <field name="cellValue" type="Excel.Interfaces.CellValueConditionalFormatUpdateData">Returns the cell value conditional format properties if the current conditional format is a CellValue type.              For example to format all cells between 5 and 10. [Api set: ExcelApi 1.6]</field>
				/// <field name="cellValueOrNullObject" type="Excel.Interfaces.CellValueConditionalFormatUpdateData">Returns the cell value conditional format properties if the current conditional format is a CellValue type.              For example to format all cells between 5 and 10. [Api set: ExcelApi 1.6]</field>
				/// <field name="colorScale" type="Excel.Interfaces.ColorScaleConditionalFormatUpdateData">Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type. [Api set: ExcelApi 1.6]</field>
				/// <field name="colorScaleOrNullObject" type="Excel.Interfaces.ColorScaleConditionalFormatUpdateData">Returns the ColorScale conditional format properties if the current conditional format is an ColorScale type. [Api set: ExcelApi 1.6]</field>
				/// <field name="custom" type="Excel.Interfaces.CustomConditionalFormatUpdateData">Returns the custom conditional format properties if the current conditional format is a custom type. [Api set: ExcelApi 1.6]</field>
				/// <field name="customOrNullObject" type="Excel.Interfaces.CustomConditionalFormatUpdateData">Returns the custom conditional format properties if the current conditional format is a custom type. [Api set: ExcelApi 1.6]</field>
				/// <field name="dataBar" type="Excel.Interfaces.DataBarConditionalFormatUpdateData">Returns the data bar properties if the current conditional format is a data bar. [Api set: ExcelApi 1.6]</field>
				/// <field name="dataBarOrNullObject" type="Excel.Interfaces.DataBarConditionalFormatUpdateData">Returns the data bar properties if the current conditional format is a data bar. [Api set: ExcelApi 1.6]</field>
				/// <field name="iconSet" type="Excel.Interfaces.IconSetConditionalFormatUpdateData">Returns the IconSet conditional format properties if the current conditional format is an IconSet type. [Api set: ExcelApi 1.6]</field>
				/// <field name="iconSetOrNullObject" type="Excel.Interfaces.IconSetConditionalFormatUpdateData">Returns the IconSet conditional format properties if the current conditional format is an IconSet type. [Api set: ExcelApi 1.6]</field>
				/// <field name="preset" type="Excel.Interfaces.PresetCriteriaConditionalFormatUpdateData">Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties. [Api set: ExcelApi 1.6]</field>
				/// <field name="presetOrNullObject" type="Excel.Interfaces.PresetCriteriaConditionalFormatUpdateData">Returns the preset criteria conditional format such as above average/below average/unique values/contains blank/nonblank/error/noerror properties. [Api set: ExcelApi 1.6]</field>
				/// <field name="textComparison" type="Excel.Interfaces.TextConditionalFormatUpdateData">Returns the specific text conditional format properties if the current conditional format is a text type.              For example to format cells matching the word &quot;Text&quot;. [Api set: ExcelApi 1.6]</field>
				/// <field name="textComparisonOrNullObject" type="Excel.Interfaces.TextConditionalFormatUpdateData">Returns the specific text conditional format properties if the current conditional format is a text type.              For example to format cells matching the word &quot;Text&quot;. [Api set: ExcelApi 1.6]</field>
				/// <field name="topBottom" type="Excel.Interfaces.TopBottomConditionalFormatUpdateData">Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.              For example to format the top 10% or bottom 10 items. [Api set: ExcelApi 1.6]</field>
				/// <field name="topBottomOrNullObject" type="Excel.Interfaces.TopBottomConditionalFormatUpdateData">Returns the Top/Bottom conditional format properties if the current conditional format is an TopBottom type.              For example to format the top 10% or bottom 10 items. [Api set: ExcelApi 1.6]</field>
				/// <field name="priority" type="Number">The priority (or index) within the conditional format collection that this conditional format currently exists in. Changing this also               changes other conditional formats&apos; priorities, to allow for a contiguous priority order.              Use a negative priority to begin from the back.              Priorities greater than than bounds will get and set to the maximum (or minimum if negative) priority.              Also note that if you change the priority, you have to re-fetch a new copy of the object at that new priority location if you want to make further changes to it. [Api set: ExcelApi 1.6]</field>;
				/// <field name="stopIfTrue" type="Boolean">If the conditions of this conditional format are met, no lower-priority formats shall take effect on that cell.              Null on databars, icon sets, and colorscales as there&apos;s no concept of StopIfTrue for these [Api set: ExcelApi 1.6]</field>;
			}
			return ConditionalFormatUpdateData;
		})();
		Interfaces.ConditionalFormatUpdateData.__proto__ = null;
		Interfaces.ConditionalFormatUpdateData = ConditionalFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var DataBarConditionalFormatUpdateData = (function() {
			function DataBarConditionalFormatUpdateData() {
				/// <summary>An interface for updating data on the DataBarConditionalFormat object, for use in "dataBarConditionalFormat.set({ ... })".</summary>
				/// <field name="negativeFormat" type="Excel.Interfaces.ConditionalDataBarNegativeFormatUpdateData">Representation of all values to the left of the axis in an Excel data bar. [Api set: ExcelApi 1.6]</field>
				/// <field name="positiveFormat" type="Excel.Interfaces.ConditionalDataBarPositiveFormatUpdateData">Representation of all values to the right of the axis in an Excel data bar. [Api set: ExcelApi 1.6]</field>
				/// <field name="axisColor" type="String">HTML color code representing the color of the Axis line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;).              &quot;&quot; (empty string) if no axis is present or set. [Api set: ExcelApi 1.6]</field>;
				/// <field name="axisFormat" type="String">Representation of how the axis is determined for an Excel data bar. [Api set: ExcelApi 1.6]</field>;
				/// <field name="barDirection" type="String">Represents the direction that the data bar graphic should be based on. [Api set: ExcelApi 1.6]</field>;
				/// <field name="lowerBoundRule" type="Excel.Interfaces.ConditionalDataBarRule">The rule for what consistutes the lower bound (and how to calculate it, if applicable) for a data bar. [Api set: ExcelApi 1.6]</field>;
				/// <field name="showDataBarOnly" type="Boolean">If true, hides the values from the cells where the data bar is applied. [Api set: ExcelApi 1.6]</field>;
				/// <field name="upperBoundRule" type="Excel.Interfaces.ConditionalDataBarRule">The rule for what constitutes the upper bound (and how to calculate it, if applicable) for a data bar. [Api set: ExcelApi 1.6]</field>;
			}
			return DataBarConditionalFormatUpdateData;
		})();
		Interfaces.DataBarConditionalFormatUpdateData.__proto__ = null;
		Interfaces.DataBarConditionalFormatUpdateData = DataBarConditionalFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalDataBarPositiveFormatUpdateData = (function() {
			function ConditionalDataBarPositiveFormatUpdateData() {
				/// <summary>An interface for updating data on the ConditionalDataBarPositiveFormat object, for use in "conditionalDataBarPositiveFormat.set({ ... })".</summary>
				/// <field name="borderColor" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;).              &quot;&quot; (empty string) if no border is present or set. [Api set: ExcelApi 1.6]</field>;
				/// <field name="fillColor" type="String">HTML color code representing the fill color, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;). [Api set: ExcelApi 1.6]</field>;
				/// <field name="gradientFill" type="Boolean">Boolean representation of whether or not the DataBar has a gradient. [Api set: ExcelApi 1.6]</field>;
			}
			return ConditionalDataBarPositiveFormatUpdateData;
		})();
		Interfaces.ConditionalDataBarPositiveFormatUpdateData.__proto__ = null;
		Interfaces.ConditionalDataBarPositiveFormatUpdateData = ConditionalDataBarPositiveFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalDataBarNegativeFormatUpdateData = (function() {
			function ConditionalDataBarNegativeFormatUpdateData() {
				/// <summary>An interface for updating data on the ConditionalDataBarNegativeFormat object, for use in "conditionalDataBarNegativeFormat.set({ ... })".</summary>
				/// <field name="borderColor" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;).              &quot;Empty String&quot; if no border is present or set. [Api set: ExcelApi 1.6]</field>;
				/// <field name="fillColor" type="String">HTML color code representing the fill color, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;). [Api set: ExcelApi 1.6]</field>;
				/// <field name="matchPositiveBorderColor" type="Boolean">Boolean representation of whether or not the negative DataBar has the same border color as the positive DataBar. [Api set: ExcelApi 1.6]</field>;
				/// <field name="matchPositiveFillColor" type="Boolean">Boolean representation of whether or not the negative DataBar has the same fill color as the positive DataBar. [Api set: ExcelApi 1.6]</field>;
			}
			return ConditionalDataBarNegativeFormatUpdateData;
		})();
		Interfaces.ConditionalDataBarNegativeFormatUpdateData.__proto__ = null;
		Interfaces.ConditionalDataBarNegativeFormatUpdateData = ConditionalDataBarNegativeFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var CustomConditionalFormatUpdateData = (function() {
			function CustomConditionalFormatUpdateData() {
				/// <summary>An interface for updating data on the CustomConditionalFormat object, for use in "customConditionalFormat.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ConditionalRangeFormatUpdateData">Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties. [Api set: ExcelApi 1.6]</field>
				/// <field name="rule" type="Excel.Interfaces.ConditionalFormatRuleUpdateData">Represents the Rule object on this conditional format. [Api set: ExcelApi 1.6]</field>
			}
			return CustomConditionalFormatUpdateData;
		})();
		Interfaces.CustomConditionalFormatUpdateData.__proto__ = null;
		Interfaces.CustomConditionalFormatUpdateData = CustomConditionalFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalFormatRuleUpdateData = (function() {
			function ConditionalFormatRuleUpdateData() {
				/// <summary>An interface for updating data on the ConditionalFormatRule object, for use in "conditionalFormatRule.set({ ... })".</summary>
				/// <field name="formula" >The formula, if required, to evaluate the conditional format rule on. [Api set: ExcelApi 1.6]</field>;
				/// <field name="formulaLocal" >The formula, if required, to evaluate the conditional format rule on in the user&apos;s language. [Api set: ExcelApi 1.6]</field>;
				/// <field name="formulaR1C1" >The formula, if required, to evaluate the conditional format rule on in R1C1-style notation. [Api set: ExcelApi 1.6]</field>;
			}
			return ConditionalFormatRuleUpdateData;
		})();
		Interfaces.ConditionalFormatRuleUpdateData.__proto__ = null;
		Interfaces.ConditionalFormatRuleUpdateData = ConditionalFormatRuleUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var IconSetConditionalFormatUpdateData = (function() {
			function IconSetConditionalFormatUpdateData() {
				/// <summary>An interface for updating data on the IconSetConditionalFormat object, for use in "iconSetConditionalFormat.set({ ... })".</summary>
				/// <field name="criteria" type="Array" elementType="Excel.Interfaces.ConditionalIconCriterion">An array of Criteria and IconSets for the rules and potential custom icons for conditional icons. Note that for the first criterion only the custom icon can be modified, while type, formula and operator will be ignored when set. [Api set: ExcelApi 1.6]</field>;
				/// <field name="reverseIconOrder" type="Boolean">If true, reverses the icon orders for the IconSet. Note that this cannot be set if custom icons are used. [Api set: ExcelApi 1.6]</field>;
				/// <field name="showIconOnly" type="Boolean">If true, hides the values and only shows icons. [Api set: ExcelApi 1.6]</field>;
				/// <field name="style" type="String">If set, displays the IconSet option for the conditional format. [Api set: ExcelApi 1.6]</field>;
			}
			return IconSetConditionalFormatUpdateData;
		})();
		Interfaces.IconSetConditionalFormatUpdateData.__proto__ = null;
		Interfaces.IconSetConditionalFormatUpdateData = IconSetConditionalFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ColorScaleConditionalFormatUpdateData = (function() {
			function ColorScaleConditionalFormatUpdateData() {
				/// <summary>An interface for updating data on the ColorScaleConditionalFormat object, for use in "colorScaleConditionalFormat.set({ ... })".</summary>
				/// <field name="criteria" type="Excel.Interfaces.ConditionalColorScaleCriteria">The criteria of the color scale. Midpoint is optional when using a two point color scale. [Api set: ExcelApi 1.6]</field>;
			}
			return ColorScaleConditionalFormatUpdateData;
		})();
		Interfaces.ColorScaleConditionalFormatUpdateData.__proto__ = null;
		Interfaces.ColorScaleConditionalFormatUpdateData = ColorScaleConditionalFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var TopBottomConditionalFormatUpdateData = (function() {
			function TopBottomConditionalFormatUpdateData() {
				/// <summary>An interface for updating data on the TopBottomConditionalFormat object, for use in "topBottomConditionalFormat.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ConditionalRangeFormatUpdateData">Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties. [Api set: ExcelApi 1.6]</field>
				/// <field name="rule" type="Excel.Interfaces.ConditionalTopBottomRule">The criteria of the Top/Bottom conditional format. [Api set: ExcelApi 1.6]</field>;
			}
			return TopBottomConditionalFormatUpdateData;
		})();
		Interfaces.TopBottomConditionalFormatUpdateData.__proto__ = null;
		Interfaces.TopBottomConditionalFormatUpdateData = TopBottomConditionalFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var PresetCriteriaConditionalFormatUpdateData = (function() {
			function PresetCriteriaConditionalFormatUpdateData() {
				/// <summary>An interface for updating data on the PresetCriteriaConditionalFormat object, for use in "presetCriteriaConditionalFormat.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ConditionalRangeFormatUpdateData">Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties. [Api set: ExcelApi 1.6]</field>
				/// <field name="rule" type="Excel.Interfaces.ConditionalPresetCriteriaRule">The rule of the conditional format. [Api set: ExcelApi 1.6]</field>;
			}
			return PresetCriteriaConditionalFormatUpdateData;
		})();
		Interfaces.PresetCriteriaConditionalFormatUpdateData.__proto__ = null;
		Interfaces.PresetCriteriaConditionalFormatUpdateData = PresetCriteriaConditionalFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var TextConditionalFormatUpdateData = (function() {
			function TextConditionalFormatUpdateData() {
				/// <summary>An interface for updating data on the TextConditionalFormat object, for use in "textConditionalFormat.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ConditionalRangeFormatUpdateData">Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties. [Api set: ExcelApi 1.6]</field>
				/// <field name="rule" type="Excel.Interfaces.ConditionalTextComparisonRule">The rule of the conditional format. [Api set: ExcelApi 1.6]</field>;
			}
			return TextConditionalFormatUpdateData;
		})();
		Interfaces.TextConditionalFormatUpdateData.__proto__ = null;
		Interfaces.TextConditionalFormatUpdateData = TextConditionalFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var CellValueConditionalFormatUpdateData = (function() {
			function CellValueConditionalFormatUpdateData() {
				/// <summary>An interface for updating data on the CellValueConditionalFormat object, for use in "cellValueConditionalFormat.set({ ... })".</summary>
				/// <field name="format" type="Excel.Interfaces.ConditionalRangeFormatUpdateData">Returns a format object, encapsulating the conditional formats font, fill, borders, and other properties. [Api set: ExcelApi 1.6]</field>
				/// <field name="rule" type="Excel.Interfaces.ConditionalCellValueRule">Represents the Rule object on this conditional format. [Api set: ExcelApi 1.6]</field>;
			}
			return CellValueConditionalFormatUpdateData;
		})();
		Interfaces.CellValueConditionalFormatUpdateData.__proto__ = null;
		Interfaces.CellValueConditionalFormatUpdateData = CellValueConditionalFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalRangeFormatUpdateData = (function() {
			function ConditionalRangeFormatUpdateData() {
				/// <summary>An interface for updating data on the ConditionalRangeFormat object, for use in "conditionalRangeFormat.set({ ... })".</summary>
				/// <field name="borders" type="Excel.Interfaces.ConditionalRangeBorderCollectionUpdateData">Collection of border objects that apply to the overall conditional format range. [Api set: ExcelApi 1.6]</field>
				/// <field name="fill" type="Excel.Interfaces.ConditionalRangeFillUpdateData">Returns the fill object defined on the overall conditional format range. [Api set: ExcelApi 1.6]</field>
				/// <field name="font" type="Excel.Interfaces.ConditionalRangeFontUpdateData">Returns the font object defined on the overall conditional format range. [Api set: ExcelApi 1.6]</field>
				/// <field name="numberFormat" >Represents Excel&apos;s number format code for the given range. Cleared if null is passed in. [Api set: ExcelApi 1.6]</field>;
			}
			return ConditionalRangeFormatUpdateData;
		})();
		Interfaces.ConditionalRangeFormatUpdateData.__proto__ = null;
		Interfaces.ConditionalRangeFormatUpdateData = ConditionalRangeFormatUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalRangeFontUpdateData = (function() {
			function ConditionalRangeFontUpdateData() {
				/// <summary>An interface for updating data on the ConditionalRangeFont object, for use in "conditionalRangeFont.set({ ... })".</summary>
				/// <field name="bold" type="Boolean">Represents the bold status of font. [Api set: ExcelApi 1.6]</field>;
				/// <field name="color" type="String">HTML color code representation of the text color. E.g. #FF0000 represents Red. [Api set: ExcelApi 1.6]</field>;
				/// <field name="italic" type="Boolean">Represents the italic status of the font. [Api set: ExcelApi 1.6]</field>;
				/// <field name="strikethrough" type="Boolean">Represents the strikethrough status of the font. [Api set: ExcelApi 1.6]</field>;
				/// <field name="underline" type="String">Type of underline applied to the font. See Excel.ConditionalRangeFontUnderlineStyle for details. [Api set: ExcelApi 1.6]</field>;
			}
			return ConditionalRangeFontUpdateData;
		})();
		Interfaces.ConditionalRangeFontUpdateData.__proto__ = null;
		Interfaces.ConditionalRangeFontUpdateData = ConditionalRangeFontUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalRangeFillUpdateData = (function() {
			function ConditionalRangeFillUpdateData() {
				/// <summary>An interface for updating data on the ConditionalRangeFill object, for use in "conditionalRangeFill.set({ ... })".</summary>
				/// <field name="color" type="String">HTML color code representing the color of the fill, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;). [Api set: ExcelApi 1.6]</field>;
			}
			return ConditionalRangeFillUpdateData;
		})();
		Interfaces.ConditionalRangeFillUpdateData.__proto__ = null;
		Interfaces.ConditionalRangeFillUpdateData = ConditionalRangeFillUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalRangeBorderUpdateData = (function() {
			function ConditionalRangeBorderUpdateData() {
				/// <summary>An interface for updating data on the ConditionalRangeBorder object, for use in "conditionalRangeBorder.set({ ... })".</summary>
				/// <field name="color" type="String">HTML color code representing the color of the border line, of the form #RRGGBB (e.g. &quot;FFA500&quot;) or as a named HTML color (e.g. &quot;orange&quot;). [Api set: ExcelApi 1.6]</field>;
				/// <field name="style" type="String">One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details. [Api set: ExcelApi 1.6]</field>;
			}
			return ConditionalRangeBorderUpdateData;
		})();
		Interfaces.ConditionalRangeBorderUpdateData.__proto__ = null;
		Interfaces.ConditionalRangeBorderUpdateData = ConditionalRangeBorderUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));

var Excel;
(function (Excel) {
	var Interfaces;
	(function (Interfaces) {
		var ConditionalRangeBorderCollectionUpdateData = (function() {
			function ConditionalRangeBorderCollectionUpdateData() {
				/// <summary>An interface for updating data on the ConditionalRangeBorderCollection object, for use in "conditionalRangeBorderCollection.set({ ... })".</summary>
				/// <field name="bottom" type="Excel.Interfaces.ConditionalRangeBorderUpdateData">Gets the top border [Api set: ExcelApi 1.6]</field>
				/// <field name="left" type="Excel.Interfaces.ConditionalRangeBorderUpdateData">Gets the top border [Api set: ExcelApi 1.6]</field>
				/// <field name="right" type="Excel.Interfaces.ConditionalRangeBorderUpdateData">Gets the top border [Api set: ExcelApi 1.6]</field>
				/// <field name="top" type="Excel.Interfaces.ConditionalRangeBorderUpdateData">Gets the top border [Api set: ExcelApi 1.6]</field>
			}
			return ConditionalRangeBorderCollectionUpdateData;
		})();
		Interfaces.ConditionalRangeBorderCollectionUpdateData.__proto__ = null;
		Interfaces.ConditionalRangeBorderCollectionUpdateData = ConditionalRangeBorderCollectionUpdateData;
	})(Interfaces = Excel.Interfaces || (Excel.Interfaces = { __proto__: null}));
})(Excel || (Excel = {__proto__: null}));
var Excel;
(function (Excel) {
	var RequestContext = (function (_super) {
		__extends(RequestContext, _super);
		function RequestContext() {
			/// <summary>
			/// The RequestContext object facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the request context is required to get access to the Excel object model from the add-in.
			/// </summary>
				/// <field name="workbook" type="Excel.Workbook">Root object for interacting with the document</field>
			_super.call(this, null);
		}
		return RequestContext;
	})(OfficeExtension.ClientRequestContext);
	Excel.RequestContext = RequestContext;

	Excel.run = function (batch) {
		/// <signature>
		/// <summary>
		/// Executes a batch script that performs actions on the Excel object model, using a new RequestContext. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
		/// </summary>
		/// <param name="batch" type="function(context) { ... }">
		/// A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()").
		/// <br />
		/// The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
		/// </param>
		/// </signature>
		/// <signature>
		/// <summary>
		/// Executes a batch script that performs actions on the Excel object model, using the RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
		/// </summary>
		/// <param name="object" type="OfficeExtension.ClientObject">
		/// A previously-created API object. The batch will use the same RequestContext as the passed-in object, which means that any changes applied to the object will be picked up by "context.sync()".
		/// </param>
		/// <param name="batch" type="function(context) { ... }">
		/// A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()").
		/// <br />
		/// The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
		/// </param>
		/// </signature>
		/// <signature>
		/// <summary>
		/// Executes a batch script that performs actions on the Excel object model, using the RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
		/// </summary>
		/// <param name="objects" type="Array&lt;OfficeExtension.ClientObject&gt;">
		/// An array of previously-created API objects. The array will be validated to make sure that all of the objects share the same context. The batch will use this shared RequestContext, which means that any changes applied to these objects will be picked up by "context.sync()".
		/// </param>
		/// <param name="batch" type="function(context) { ... }">
		/// A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()").
		/// <br />
		/// The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
		/// </param>
		/// </signature>
		arguments[arguments.length - 1](new Excel.RequestContext());
		return new OfficeExtension.Promise();
	}
})(Excel || (Excel = {__proto__: null}));
Excel.__proto__ = null;



var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var Alignment = {
		__proto__: null,
		"mixed": "mixed",
		"unknown": "unknown",
		"left": "left",
		"centered": "centered",
		"right": "right",
		"justified": "justified",
	}
	Word.Alignment = Alignment;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Application = (function(_super) {
		__extends(Application, _super);
		function Application() {
			/// <summary> The Application object. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
		}

		Application.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.Application"/>
		}
		Application.prototype.createDocument = function(base64File) {
			/// <summary>
			/// Creates a new hidden document by using an optional base64 encoded .docx file. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="base64File" type="String" optional="true">Optional. The base64 encoded .docx file. The default value is null.</param>
			/// <returns type="Word.DocumentCreated"></returns>
		}

		return Application;
	})(OfficeExtension.ClientObject);
	Word.Application = Application;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Body = (function(_super) {
		__extends(Body, _super);
		function Body() {
			/// <summary> Represents the body of a document or a section. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="contentControls" type="Word.ContentControlCollection">Gets the collection of rich text content control objects in the body. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="font" type="Word.Font">Gets the text format of the body. Use this to get and set font name, size, color and other properties. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="inlinePictures" type="Word.InlinePictureCollection">Gets the collection of inlinePicture objects in the body. The collection does not include floating images. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="lists" type="Word.ListCollection">Gets the collection of list objects in the body. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="paragraphs" type="Word.ParagraphCollection">Gets the collection of paragraph objects in the body. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="parentBody" type="Word.Body">Gets the parent body of the body. For example, a table cell body&apos;s parent body could be a header. Throws if there isn&apos;t a parent body. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentBodyOrNullObject" type="Word.Body">Gets the parent body of the body. For example, a table cell body&apos;s parent body could be a header. Returns a null object if there isn&apos;t a parent body. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentContentControl" type="Word.ContentControl">Gets the content control that contains the body. Throws if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="parentContentControlOrNullObject" type="Word.ContentControl">Gets the content control that contains the body. Returns a null object if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentSection" type="Word.Section">Gets the parent section of the body. Throws if there isn&apos;t a parent section. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentSectionOrNullObject" type="Word.Section">Gets the parent section of the body. Returns a null object if there isn&apos;t a parent section. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="style" type="String">Gets or sets the style name for the body. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the &quot;styleBuiltIn&quot; property. [Api set: WordApi 1.1]</field>
			/// <field name="styleBuiltIn" type="String">Gets or sets the built-in style name for the body. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the &quot;style&quot; property. [Api set: WordApi 1.3]</field>
			/// <field name="tables" type="Word.TableCollection">Gets the collection of table objects in the body. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="text" type="String">Gets the text of the body. Use the insertText method to insert text. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="type" type="String">Gets the type of the body. The type can be &apos;MainDoc&apos;, &apos;Section&apos;, &apos;Header&apos;, &apos;Footer&apos;, or &apos;TableCell&apos;. Read-only. [Api set: WordApi 1.3]</field>
		}

		Body.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.Body"/>
		}

		Body.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.BodyUpdateData">Properties described by the Word.Interfaces.BodyUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Body">An existing Body object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Body.prototype.clear = function() {
			/// <summary>
			/// Clears the contents of the body object. The user can perform the undo operation on the cleared content. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		Body.prototype.getHtml = function() {
			/// <summary>
			/// Gets the HTML representation of the body object. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		Body.prototype.getOoxml = function() {
			/// <summary>
			/// Gets the OOXML (Office Open XML) representation of the body object. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		Body.prototype.getRange = function(rangeLocation) {
			/// <summary>
			/// Gets the whole body, or the starting or ending point of the body, as a range. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rangeLocation" type="String" optional="true">Optional. The range location can be &apos;Whole&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;After&apos; or &apos;Content&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Body.prototype.insertBreak = function(breakType, insertLocation) {
			/// <summary>
			/// Inserts a break at the specified location in the main document. The insertLocation value can be &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="breakType" type="String">Required. The break type to add to the body.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns ></returns>
		}
		Body.prototype.insertContentControl = function() {
			/// <summary>
			/// Wraps the body object with a Rich Text content control. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="Word.ContentControl"></returns>
		}
		Body.prototype.insertFileFromBase64 = function(base64File, insertLocation) {
			/// <summary>
			/// Inserts a document into the body at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="base64File" type="String">Required. The base64 encoded content of a .docx file.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Body.prototype.insertHtml = function(html, insertLocation) {
			/// <summary>
			/// Inserts HTML at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="html" type="String">Required. The HTML to be inserted in the document.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Body.prototype.insertInlinePictureFromBase64 = function(base64EncodedImage, insertLocation) {
			/// <summary>
			/// Inserts a picture into the body at the specified location. The insertLocation value can be &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="base64EncodedImage" type="String">Required. The base64 encoded image to be inserted in the body.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.InlinePicture"></returns>
		}
		Body.prototype.insertOoxml = function(ooxml, insertLocation) {
			/// <summary>
			/// Inserts OOXML at the specified location.  The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="ooxml" type="String">Required. The OOXML to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Body.prototype.insertParagraph = function(paragraphText, insertLocation) {
			/// <summary>
			/// Inserts a paragraph at the specified location. The insertLocation value can be &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="paragraphText" type="String">Required. The paragraph text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.Paragraph"></returns>
		}
		Body.prototype.insertTable = function(rowCount, columnCount, insertLocation, values) {
			/// <summary>
			/// Inserts a table with the specified number of rows and columns. The insertLocation value can be &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rowCount" type="Number">Required. The number of rows in the table.</param>
			/// <param name="columnCount" type="Number">Required. The number of columns in the table.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Start&apos; or &apos;End&apos;.</param>
			/// <param name="values" type="Array" elementType="Array" optional="true">Optional 2D array. Cells are filled if the corresponding strings are specified in the array.</param>
			/// <returns type="Word.Table"></returns>
		}
		Body.prototype.insertText = function(text, insertLocation) {
			/// <summary>
			/// Inserts text into the body at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="text" type="String">Required. Text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Body.prototype.search = function(searchText, searchOptions) {
			/// <summary>
			/// Performs a search with the specified searchOptions on the scope of the body object. The search results are a collection of range objects. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="searchText" type="String">Required. The search text.</param>
			/// <param name="searchOptions" type="Word.SearchOptions" optional="true">Optional. Options for the search.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}
		Body.prototype.select = function(selectionMode) {
			/// <summary>
			/// Selects the body and navigates the Word UI to it. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="selectionMode" type="String" optional="true">Optional. The selection mode can be &apos;Select&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Select&apos; is the default.</param>
			/// <returns ></returns>
		}

		Body.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.Body"/>
		}

		Body.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.Body"/>
		}

		return Body;
	})(OfficeExtension.ClientObject);
	Word.Body = Body;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var BodyType = {
		__proto__: null,
		"unknown": "unknown",
		"mainDoc": "mainDoc",
		"section": "section",
		"header": "header",
		"footer": "footer",
		"tableCell": "tableCell",
	}
	Word.BodyType = BodyType;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var BorderLocation = {
		__proto__: null,
		"top": "top",
		"left": "left",
		"bottom": "bottom",
		"right": "right",
		"insideHorizontal": "insideHorizontal",
		"insideVertical": "insideVertical",
		"inside": "inside",
		"outside": "outside",
		"all": "all",
	}
	Word.BorderLocation = BorderLocation;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var BorderType = {
		__proto__: null,
		"mixed": "mixed",
		"none": "none",
		"single": "single",
		"double": "double",
		"dotted": "dotted",
		"dashed": "dashed",
		"dotDashed": "dotDashed",
		"dot2Dashed": "dot2Dashed",
		"triple": "triple",
		"thinThickSmall": "thinThickSmall",
		"thickThinSmall": "thickThinSmall",
		"thinThickThinSmall": "thinThickThinSmall",
		"thinThickMed": "thinThickMed",
		"thickThinMed": "thickThinMed",
		"thinThickThinMed": "thinThickThinMed",
		"thinThickLarge": "thinThickLarge",
		"thickThinLarge": "thickThinLarge",
		"thinThickThinLarge": "thinThickThinLarge",
		"wave": "wave",
		"doubleWave": "doubleWave",
		"dashedSmall": "dashedSmall",
		"dashDotStroked": "dashDotStroked",
		"threeDEmboss": "threeDEmboss",
		"threeDEngrave": "threeDEngrave",
	}
	Word.BorderType = BorderType;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> Page break, line break, and four section breaks [Api set: WordApi] </summary>
	var BreakType = {
		__proto__: null,
		"page": "page",
		"sectionNext": "sectionNext",
		"sectionContinuous": "sectionContinuous",
		"sectionEven": "sectionEven",
		"sectionOdd": "sectionOdd",
		"line": "line",
	}
	Word.BreakType = BreakType;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var CellPaddingLocation = {
		__proto__: null,
		"top": "top",
		"left": "left",
		"bottom": "bottom",
		"right": "right",
	}
	Word.CellPaddingLocation = CellPaddingLocation;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var ContentControl = (function(_super) {
		__extends(ContentControl, _super);
		function ContentControl() {
			/// <summary> Represents a content control. Content controls are bounded and potentially labeled regions in a document that serve as containers for specific types of content. Individual content controls may contain contents such as images, tables, or paragraphs of formatted text. Currently, only rich text content controls are supported. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="appearance" type="String">Gets or sets the appearance of the content control. The value can be &apos;boundingBox&apos;, &apos;tags&apos; or &apos;hidden&apos;. [Api set: WordApi 1.1]</field>
			/// <field name="cannotDelete" type="Boolean">Gets or sets a value that indicates whether the user can delete the content control. Mutually exclusive with removeWhenEdited. [Api set: WordApi 1.1]</field>
			/// <field name="cannotEdit" type="Boolean">Gets or sets a value that indicates whether the user can edit the contents of the content control. [Api set: WordApi 1.1]</field>
			/// <field name="color" type="String">Gets or sets the color of the content control. Color is specified in &apos;#RRGGBB&apos; format or by using the color name. [Api set: WordApi 1.1]</field>
			/// <field name="contentControls" type="Word.ContentControlCollection">Gets the collection of content control objects in the content control. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="font" type="Word.Font">Gets the text format of the content control. Use this to get and set font name, size, color, and other properties. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="id" type="Number">Gets an integer that represents the content control identifier. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="inlinePictures" type="Word.InlinePictureCollection">Gets the collection of inlinePicture objects in the content control. The collection does not include floating images. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="lists" type="Word.ListCollection">Gets the collection of list objects in the content control. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="paragraphs" type="Word.ParagraphCollection">Get the collection of paragraph objects in the content control. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="parentBody" type="Word.Body">Gets the parent body of the content control. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentContentControl" type="Word.ContentControl">Gets the content control that contains the content control. Throws if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="parentContentControlOrNullObject" type="Word.ContentControl">Gets the content control that contains the content control. Returns a null object if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTable" type="Word.Table">Gets the table that contains the content control. Throws if it is not contained in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableCell" type="Word.TableCell">Gets the table cell that contains the content control. Throws if it is not contained in a table cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableCellOrNullObject" type="Word.TableCell">Gets the table cell that contains the content control. Returns a null object if it is not contained in a table cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableOrNullObject" type="Word.Table">Gets the table that contains the content control. Returns a null object if it is not contained in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="placeholderText" type="String">Gets or sets the placeholder text of the content control. Dimmed text will be displayed when the content control is empty. [Api set: WordApi 1.1]</field>
			/// <field name="removeWhenEdited" type="Boolean">Gets or sets a value that indicates whether the content control is removed after it is edited. Mutually exclusive with cannotDelete. [Api set: WordApi 1.1]</field>
			/// <field name="style" type="String">Gets or sets the style name for the content control. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the &quot;styleBuiltIn&quot; property. [Api set: WordApi 1.1]</field>
			/// <field name="styleBuiltIn" type="String">Gets or sets the built-in style name for the content control. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the &quot;style&quot; property. [Api set: WordApi 1.3]</field>
			/// <field name="subtype" type="String">Gets the content control subtype. The subtype can be &apos;RichTextInline&apos;, &apos;RichTextParagraphs&apos;, &apos;RichTextTableCell&apos;, &apos;RichTextTableRow&apos; and &apos;RichTextTable&apos; for rich text content controls. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="tables" type="Word.TableCollection">Gets the collection of table objects in the content control. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="tag" type="String">Gets or sets a tag to identify a content control. [Api set: WordApi 1.1]</field>
			/// <field name="text" type="String">Gets the text of the content control. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="title" type="String">Gets or sets the title for a content control. [Api set: WordApi 1.1]</field>
			/// <field name="type" type="String">Gets the content control type. Only rich text content controls are supported currently. Read-only. [Api set: WordApi 1.1]</field>
		}

		ContentControl.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.ContentControl"/>
		}

		ContentControl.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.ContentControlUpdateData">Properties described by the Word.Interfaces.ContentControlUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ContentControl">An existing ContentControl object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		ContentControl.prototype.clear = function() {
			/// <summary>
			/// Clears the contents of the content control. The user can perform the undo operation on the cleared content. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		ContentControl.prototype.delete = function(keepContent) {
			/// <summary>
			/// Deletes the content control and its content. If keepContent is set to true, the content is not deleted. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="keepContent" type="Boolean">Required. Indicates whether the content should be deleted with the content control. If keepContent is set to true, the content is not deleted.</param>
			/// <returns ></returns>
		}
		ContentControl.prototype.getHtml = function() {
			/// <summary>
			/// Gets the HTML representation of the content control object. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		ContentControl.prototype.getOoxml = function() {
			/// <summary>
			/// Gets the Office Open XML (OOXML) representation of the content control object. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		ContentControl.prototype.getRange = function(rangeLocation) {
			/// <summary>
			/// Gets the whole content control, or the starting or ending point of the content control, as a range. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rangeLocation" type="String" optional="true">Optional. The range location can be &apos;Whole&apos;, &apos;Before&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;After&apos; or &apos;Content&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		ContentControl.prototype.getTextRanges = function(endingMarks, trimSpacing) {
			/// <summary>
			/// Gets the text ranges in the content control by using punctuation marks and/or other ending marks. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="endingMarks" type="Array" elementType="String">Required. The punctuation marks and/or other ending marks as an array of strings.</param>
			/// <param name="trimSpacing" type="Boolean" optional="true">Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}
		ContentControl.prototype.insertBreak = function(breakType, insertLocation) {
			/// <summary>
			/// Inserts a break at the specified location in the main document. The insertLocation value can be &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. This method cannot be used with &apos;RichTextTable&apos;, &apos;RichTextTableRow&apos; and &apos;RichTextTableCell&apos; content controls. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="breakType" type="String">Required. Type of break.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns ></returns>
		}
		ContentControl.prototype.insertFileFromBase64 = function(base64File, insertLocation) {
			/// <summary>
			/// Inserts a document into the content control at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="base64File" type="String">Required. The base64 encoded content of a .docx file.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Replace&apos; cannot be used with &apos;RichTextTable&apos; and &apos;RichTextTableRow&apos; content controls.</param>
			/// <returns type="Word.Range"></returns>
		}
		ContentControl.prototype.insertHtml = function(html, insertLocation) {
			/// <summary>
			/// Inserts HTML into the content control at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="html" type="String">Required. The HTML to be inserted in to the content control.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Replace&apos; cannot be used with &apos;RichTextTable&apos; and &apos;RichTextTableRow&apos; content controls.</param>
			/// <returns type="Word.Range"></returns>
		}
		ContentControl.prototype.insertInlinePictureFromBase64 = function(base64EncodedImage, insertLocation) {
			/// <summary>
			/// Inserts an inline picture into the content control at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="base64EncodedImage" type="String">Required. The base64 encoded image to be inserted in the content control.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Replace&apos; cannot be used with &apos;RichTextTable&apos; and &apos;RichTextTableRow&apos; content controls.</param>
			/// <returns type="Word.InlinePicture"></returns>
		}
		ContentControl.prototype.insertOoxml = function(ooxml, insertLocation) {
			/// <summary>
			/// Inserts OOXML into the content control at the specified location.  The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="ooxml" type="String">Required. The OOXML to be inserted in to the content control.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Replace&apos; cannot be used with &apos;RichTextTable&apos; and &apos;RichTextTableRow&apos; content controls.</param>
			/// <returns type="Word.Range"></returns>
		}
		ContentControl.prototype.insertParagraph = function(paragraphText, insertLocation) {
			/// <summary>
			/// Inserts a paragraph at the specified location. The insertLocation value can be &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="paragraphText" type="String">Required. The paragrph text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. &apos;Before&apos; and &apos;After&apos; cannot be used with &apos;RichTextTable&apos;, &apos;RichTextTableRow&apos; and &apos;RichTextTableCell&apos; content controls.</param>
			/// <returns type="Word.Paragraph"></returns>
		}
		ContentControl.prototype.insertTable = function(rowCount, columnCount, insertLocation, values) {
			/// <summary>
			/// Inserts a table with the specified number of rows and columns into, or next to, a content control. The insertLocation value can be &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rowCount" type="Number">Required. The number of rows in the table.</param>
			/// <param name="columnCount" type="Number">Required. The number of columns in the table.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. &apos;Before&apos; and &apos;After&apos; cannot be used with &apos;RichTextTable&apos;, &apos;RichTextTableRow&apos; and &apos;RichTextTableCell&apos; content controls.</param>
			/// <param name="values" type="Array" elementType="Array" optional="true">Optional 2D array. Cells are filled if the corresponding strings are specified in the array.</param>
			/// <returns type="Word.Table"></returns>
		}
		ContentControl.prototype.insertText = function(text, insertLocation) {
			/// <summary>
			/// Inserts text into the content control at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="text" type="String">Required. The text to be inserted in to the content control.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Replace&apos; cannot be used with &apos;RichTextTable&apos; and &apos;RichTextTableRow&apos; content controls.</param>
			/// <returns type="Word.Range"></returns>
		}
		ContentControl.prototype.search = function(searchText, searchOptions) {
			/// <summary>
			/// Performs a search with the specified searchOptions on the scope of the content control object. The search results are a collection of range objects. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="searchText" type="String">Required. The search text.</param>
			/// <param name="searchOptions" type="Word.SearchOptions" optional="true">Optional. Options for the search.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}
		ContentControl.prototype.select = function(selectionMode) {
			/// <summary>
			/// Selects the content control. This causes Word to scroll to the selection. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="selectionMode" type="String" optional="true">Optional. The selection mode can be &apos;Select&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Select&apos; is the default.</param>
			/// <returns ></returns>
		}
		ContentControl.prototype.split = function(delimiters, multiParagraphs, trimDelimiters, trimSpacing) {
			/// <summary>
			/// Splits the content control into child ranges by using delimiters. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="delimiters" type="Array" elementType="String">Required. The delimiters as an array of strings.</param>
			/// <param name="multiParagraphs" type="Boolean" optional="true">Optional. Indicates whether a returned child range can cover multiple paragraphs. Default is false which indicates that the paragraph boundaries are also used as delimiters.</param>
			/// <param name="trimDelimiters" type="Boolean" optional="true">Optional. Indicates whether to trim delimiters from the ranges in the range collection. Default is false which indicates that the delimiters are included in the ranges returned in the range collection.</param>
			/// <param name="trimSpacing" type="Boolean" optional="true">Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}

		ContentControl.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.ContentControl"/>
		}

		ContentControl.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.ContentControl"/>
		}

		return ContentControl;
	})(OfficeExtension.ClientObject);
	Word.ContentControl = ContentControl;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> ContentControl appearance [Api set: WordApi] </summary>
	var ContentControlAppearance = {
		__proto__: null,
		"boundingBox": "boundingBox",
		"tags": "tags",
		"hidden": "hidden",
	}
	Word.ContentControlAppearance = ContentControlAppearance;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var ContentControlCollection = (function(_super) {
		__extends(ContentControlCollection, _super);
		function ContentControlCollection() {
			/// <summary> Contains a collection of [contentControl](contentControl.md) objects. Content controls are bounded and potentially labeled regions in a document that serve as containers for specific types of content. Individual content controls may contain contents such as images, tables, or paragraphs of formatted text. Currently, only rich text content controls are supported. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Word.ContentControl">Gets the loaded child items in this collection.</field>
		}

		ContentControlCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.ContentControlCollection"/>
		}
		ContentControlCollection.prototype.getById = function(id) {
			/// <summary>
			/// Gets a content control by its identifier. Throws if there isn&apos;t a content control with the identifier in this collection. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="id" type="Number">Required. A content control identifier.</param>
			/// <returns type="Word.ContentControl"></returns>
		}
		ContentControlCollection.prototype.getByIdOrNullObject = function(id) {
			/// <summary>
			/// Gets a content control by its identifier. Returns a null object if there isn&apos;t a content control with the identifier in this collection. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="id" type="Number">Required. A content control identifier.</param>
			/// <returns type="Word.ContentControl"></returns>
		}
		ContentControlCollection.prototype.getByTag = function(tag) {
			/// <summary>
			/// Gets the content controls that have the specified tag. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="tag" type="String">Required. A tag set on a content control.</param>
			/// <returns type="Word.ContentControlCollection"></returns>
		}
		ContentControlCollection.prototype.getByTitle = function(title) {
			/// <summary>
			/// Gets the content controls that have the specified title. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="title" type="String">Required. The title of a content control.</param>
			/// <returns type="Word.ContentControlCollection"></returns>
		}
		ContentControlCollection.prototype.getByTypes = function(types) {
			/// <summary>
			/// Gets the content controls that have the specified types and/or subtypes. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="types" type="Array" elementType="String">Required. An array of content control types and/or subtypes.</param>
			/// <returns type="Word.ContentControlCollection"></returns>
		}
		ContentControlCollection.prototype.getFirst = function() {
			/// <summary>
			/// Gets the first content control in this collection. Throws if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.ContentControl"></returns>
		}
		ContentControlCollection.prototype.getFirstOrNullObject = function() {
			/// <summary>
			/// Gets the first content control in this collection. Returns a null object if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.ContentControl"></returns>
		}
		ContentControlCollection.prototype.getItem = function(index) {
			/// <summary>
			/// Gets a content control by its index in the collection. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="index" >The index.</param>
			/// <returns type="Word.ContentControl"></returns>
		}

		ContentControlCollection.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.ContentControlCollection"/>
		}

		ContentControlCollection.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.ContentControlCollection"/>
		}

		return ContentControlCollection;
	})(OfficeExtension.ClientObject);
	Word.ContentControlCollection = ContentControlCollection;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> Specifies supported content control types and subtypes. [Api set: WordApi] </summary>
	var ContentControlType = {
		__proto__: null,
		"unknown": "unknown",
		"richTextInline": "richTextInline",
		"richTextParagraphs": "richTextParagraphs",
		"richTextTableCell": "richTextTableCell",
		"richTextTableRow": "richTextTableRow",
		"richTextTable": "richTextTable",
		"plainTextInline": "plainTextInline",
		"plainTextParagraph": "plainTextParagraph",
		"picture": "picture",
		"buildingBlockGallery": "buildingBlockGallery",
		"checkBox": "checkBox",
		"comboBox": "comboBox",
		"dropDownList": "dropDownList",
		"datePicker": "datePicker",
		"repeatingSection": "repeatingSection",
		"richText": "richText",
		"plainText": "plainText",
	}
	Word.ContentControlType = ContentControlType;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var CustomProperty = (function(_super) {
		__extends(CustomProperty, _super);
		function CustomProperty() {
			/// <summary> Represents a custom property. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="key" type="String">Gets the key of the custom property. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="type" type="String">Gets the value type of the custom property. Possible values are: String, Number, Date, Boolean. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="value" >Gets or sets the value of the custom property. Note that even though Word Online and the docx file format allow these properties to be arbitrarily long, the desktop version of Word will truncate string values to 255 16-bit chars (possibly creating invalid unicode by breaking up a surrogate pair). [Api set: WordApi 1.3]</field>
		}

		CustomProperty.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.CustomProperty"/>
		}

		CustomProperty.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.CustomPropertyUpdateData">Properties described by the Word.Interfaces.CustomPropertyUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="CustomProperty">An existing CustomProperty object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		CustomProperty.prototype.delete = function() {
			/// <summary>
			/// Deletes the custom property. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}

		CustomProperty.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.CustomProperty"/>
		}

		CustomProperty.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.CustomProperty"/>
		}

		return CustomProperty;
	})(OfficeExtension.ClientObject);
	Word.CustomProperty = CustomProperty;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var CustomPropertyCollection = (function(_super) {
		__extends(CustomPropertyCollection, _super);
		function CustomPropertyCollection() {
			/// <summary> Contains the collection of [customProperty](customProperty.md) objects. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Word.CustomProperty">Gets the loaded child items in this collection.</field>
		}

		CustomPropertyCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.CustomPropertyCollection"/>
		}
		CustomPropertyCollection.prototype.add = function(key, value) {
			/// <summary>
			/// Creates a new or sets an existing custom property. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="key" type="String">Required. The custom property&apos;s key, which is case-insensitive.</param>
			/// <param name="value" >Required. The custom property&apos;s value.</param>
			/// <returns type="Word.CustomProperty"></returns>
		}
		CustomPropertyCollection.prototype.deleteAll = function() {
			/// <summary>
			/// Deletes all custom properties in this collection. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		CustomPropertyCollection.prototype.getCount = function() {
			/// <summary>
			/// Gets the count of custom properties. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		CustomPropertyCollection.prototype.getItem = function(key) {
			/// <summary>
			/// Gets a custom property object by its key, which is case-insensitive. Throws if the custom property does not exist. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="key" type="String">The key that identifies the custom property object.</param>
			/// <returns type="Word.CustomProperty"></returns>
		}
		CustomPropertyCollection.prototype.getItemOrNullObject = function(key) {
			/// <summary>
			/// Gets a custom property object by its key, which is case-insensitive. Returns a null object if the custom property does not exist. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="key" type="String">Required. The key that identifies the custom property object.</param>
			/// <returns type="Word.CustomProperty"></returns>
		}

		CustomPropertyCollection.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.CustomPropertyCollection"/>
		}

		CustomPropertyCollection.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.CustomPropertyCollection"/>
		}

		return CustomPropertyCollection;
	})(OfficeExtension.ClientObject);
	Word.CustomPropertyCollection = CustomPropertyCollection;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Document = (function(_super) {
		__extends(Document, _super);
		function Document() {
			/// <summary> The Document object is the top level object. A Document object contains one or more sections, content controls, and the body that contains the contents of the document. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="body" type="Word.Body">Gets the body object of the document. The body is the text that excludes headers, footers, footnotes, textboxes, etc.. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="contentControls" type="Word.ContentControlCollection">Gets the collection of content control objects in the document. This includes content controls in the body of the document, headers, footers, textboxes, etc.. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="properties" type="Word.DocumentProperties">Gets the properties of the document. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="saved" type="Boolean">Indicates whether the changes in the document have been saved. A value of true indicates that the document hasn&apos;t changed since it was saved. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="sections" type="Word.SectionCollection">Gets the collection of section objects in the document. Read-only. [Api set: WordApi 1.1]</field>
		}

		Document.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.Document"/>
		}

		Document.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.DocumentUpdateData">Properties described by the Word.Interfaces.DocumentUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Document">An existing Document object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Document.prototype.getSelection = function() {
			/// <summary>
			/// Gets the current selection of the document. Multiple selections are not supported. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="Word.Range"></returns>
		}
		Document.prototype.open = function() {
			/// <summary>
			/// Open the document. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		Document.prototype.save = function() {
			/// <summary>
			/// Saves the document. This will use the Word default file naming convention if the document has not been saved before. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}

		Document.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.Document"/>
		}

		Document.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.Document"/>
		}

		return Document;
	})(OfficeExtension.ClientObject);
	Word.Document = Document;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var DocumentCreated = (function(_super) {
		__extends(DocumentCreated, _super);
		function DocumentCreated() {
			/// <summary> The DocumentCreated object is the top level object created by Application.CreateDocument. A DocumentCreated object is a special Document object. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="body" type="Word.Body">Gets the body object of the document. The body is the text that excludes headers, footers, footnotes, textboxes, etc.. Read-only. [Api set: WordApiHiddenDocument 1.3]</field>
			/// <field name="contentControls" type="Word.ContentControlCollection">Gets the collection of content control objects in the document. This includes content controls in the body of the document, headers, footers, textboxes, etc.. Read-only. [Api set: WordApiHiddenDocument 1.3]</field>
			/// <field name="properties" type="Word.DocumentProperties">Gets the properties of the document. Read-only. [Api set: WordApiHiddenDocument 1.3]</field>
			/// <field name="saved" type="Boolean">Indicates whether the changes in the document have been saved. A value of true indicates that the document hasn&apos;t changed since it was saved. Read-only. [Api set: WordApiHiddenDocument 1.3]</field>
			/// <field name="sections" type="Word.SectionCollection">Gets the collection of section objects in the document. Read-only. [Api set: WordApiHiddenDocument 1.3]</field>
		}

		DocumentCreated.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.DocumentCreated"/>
		}

		DocumentCreated.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.DocumentCreatedUpdateData">Properties described by the Word.Interfaces.DocumentCreatedUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="DocumentCreated">An existing DocumentCreated object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		DocumentCreated.prototype.open = function() {
			/// <summary>
			/// Open the document. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		DocumentCreated.prototype.save = function() {
			/// <summary>
			/// Saves the document. This will use the Word default file naming convention if the document has not been saved before. [Api set: WordApiHiddenDocument 1.3]
			/// </summary>
			/// <returns ></returns>
		}

		DocumentCreated.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.DocumentCreated"/>
		}

		DocumentCreated.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.DocumentCreated"/>
		}

		return DocumentCreated;
	})(OfficeExtension.ClientObject);
	Word.DocumentCreated = DocumentCreated;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var DocumentProperties = (function(_super) {
		__extends(DocumentProperties, _super);
		function DocumentProperties() {
			/// <summary> Represents document properties. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="applicationName" type="String">Gets the application name of the document. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="author" type="String">Gets or sets the author of the document. [Api set: WordApi 1.3]</field>
			/// <field name="category" type="String">Gets or sets the category of the document. [Api set: WordApi 1.3]</field>
			/// <field name="comments" type="String">Gets or sets the comments of the document. [Api set: WordApi 1.3]</field>
			/// <field name="company" type="String">Gets or sets the company of the document. [Api set: WordApi 1.3]</field>
			/// <field name="creationDate" type="Date">Gets the creation date of the document. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="customProperties" type="Word.CustomPropertyCollection">Gets the collection of custom properties of the document. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="format" type="String">Gets or sets the format of the document. [Api set: WordApi 1.3]</field>
			/// <field name="keywords" type="String">Gets or sets the keywords of the document. [Api set: WordApi 1.3]</field>
			/// <field name="lastAuthor" type="String">Gets the last author of the document. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="lastPrintDate" type="Date">Gets the last print date of the document. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="lastSaveTime" type="Date">Gets the last save time of the document. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="manager" type="String">Gets or sets the manager of the document. [Api set: WordApi 1.3]</field>
			/// <field name="revisionNumber" type="String">Gets the revision number of the document. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="security" type="Number">Gets the security of the document. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="subject" type="String">Gets or sets the subject of the document. [Api set: WordApi 1.3]</field>
			/// <field name="template" type="String">Gets the template of the document. Read only. [Api set: WordApi 1.3]</field>
			/// <field name="title" type="String">Gets or sets the title of the document. [Api set: WordApi 1.3]</field>
		}

		DocumentProperties.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.DocumentProperties"/>
		}

		DocumentProperties.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.DocumentPropertiesUpdateData">Properties described by the Word.Interfaces.DocumentPropertiesUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="DocumentProperties">An existing DocumentProperties object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		DocumentProperties.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.DocumentProperties"/>
		}

		DocumentProperties.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.DocumentProperties"/>
		}

		return DocumentProperties;
	})(OfficeExtension.ClientObject);
	Word.DocumentProperties = DocumentProperties;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var DocumentPropertyType = {
		__proto__: null,
		"string": "string",
		"number": "number",
		"date": "date",
		"boolean": "boolean",
	}
	Word.DocumentPropertyType = DocumentPropertyType;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Font = (function(_super) {
		__extends(Font, _super);
		function Font() {
			/// <summary> Represents a font. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="bold" type="Boolean">Gets or sets a value that indicates whether the font is bold. True if the font is formatted as bold, otherwise, false. [Api set: WordApi 1.1]</field>
			/// <field name="color" type="String">Gets or sets the color for the specified font. You can provide the value in the &apos;#RRGGBB&apos; format or the color name. [Api set: WordApi 1.1]</field>
			/// <field name="doubleStrikeThrough" type="Boolean">Gets or sets a value that indicates whether the font has a double strike through. True if the font is formatted as double strikethrough text, otherwise, false. [Api set: WordApi 1.1]</field>
			/// <field name="highlightColor" type="String">Gets or sets the highlight color. To set it, use a value either in the &apos;#RRGGBB&apos; format or the color name. To remove highlight color, set it to null. The returned highlight color can be in the &apos;#RRGGBB&apos; format, or an empty string for mixed highlight colors, or null for no highlight color. [Api set: WordApi 1.1]</field>
			/// <field name="italic" type="Boolean">Gets or sets a value that indicates whether the font is italicized. True if the font is italicized, otherwise, false. [Api set: WordApi 1.1]</field>
			/// <field name="name" type="String">Gets or sets a value that represents the name of the font. [Api set: WordApi 1.1]</field>
			/// <field name="size" type="Number">Gets or sets a value that represents the font size in points. [Api set: WordApi 1.1]</field>
			/// <field name="strikeThrough" type="Boolean">Gets or sets a value that indicates whether the font has a strike through. True if the font is formatted as strikethrough text, otherwise, false. [Api set: WordApi 1.1]</field>
			/// <field name="subscript" type="Boolean">Gets or sets a value that indicates whether the font is a subscript. True if the font is formatted as subscript, otherwise, false. [Api set: WordApi 1.1]</field>
			/// <field name="superscript" type="Boolean">Gets or sets a value that indicates whether the font is a superscript. True if the font is formatted as superscript, otherwise, false. [Api set: WordApi 1.1]</field>
			/// <field name="underline" type="String">Gets or sets a value that indicates the font&apos;s underline type. &apos;None&apos; if the font is not underlined. [Api set: WordApi 1.1]</field>
		}

		Font.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.Font"/>
		}

		Font.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.FontUpdateData">Properties described by the Word.Interfaces.FontUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Font">An existing Font object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		Font.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.Font"/>
		}

		Font.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.Font"/>
		}

		return Font;
	})(OfficeExtension.ClientObject);
	Word.Font = Font;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var HeaderFooterType = {
		__proto__: null,
		"primary": "primary",
		"firstPage": "firstPage",
		"evenPages": "evenPages",
	}
	Word.HeaderFooterType = HeaderFooterType;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var ImageFormat = {
		__proto__: null,
		"unsupported": "unsupported",
		"undefined": "undefined",
		"bmp": "bmp",
		"jpeg": "jpeg",
		"gif": "gif",
		"tiff": "tiff",
		"png": "png",
		"icon": "icon",
		"exif": "exif",
		"wmf": "wmf",
		"emf": "emf",
		"pict": "pict",
		"pdf": "pdf",
		"svg": "svg",
	}
	Word.ImageFormat = ImageFormat;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var InlinePicture = (function(_super) {
		__extends(InlinePicture, _super);
		function InlinePicture() {
			/// <summary> Represents an inline picture. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="altTextDescription" type="String">Gets or sets a string that represents the alternative text associated with the inline image [Api set: WordApi 1.1]</field>
			/// <field name="altTextTitle" type="String">Gets or sets a string that contains the title for the inline image. [Api set: WordApi 1.1]</field>
			/// <field name="height" type="Number">Gets or sets a number that describes the height of the inline image. [Api set: WordApi 1.1]</field>
			/// <field name="hyperlink" type="String">Gets or sets a hyperlink on the image. Use a &apos;#&apos; to separate the address part from the optional location part. [Api set: WordApi 1.1]</field>
			/// <field name="lockAspectRatio" type="Boolean">Gets or sets a value that indicates whether the inline image retains its original proportions when you resize it. [Api set: WordApi 1.1]</field>
			/// <field name="paragraph" type="Word.Paragraph">Gets the parent paragraph that contains the inline image. Read-only. [Api set: WordApi 1.2]</field>
			/// <field name="parentContentControl" type="Word.ContentControl">Gets the content control that contains the inline image. Throws if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="parentContentControlOrNullObject" type="Word.ContentControl">Gets the content control that contains the inline image. Returns a null object if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTable" type="Word.Table">Gets the table that contains the inline image. Throws if it is not contained in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableCell" type="Word.TableCell">Gets the table cell that contains the inline image. Throws if it is not contained in a table cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableCellOrNullObject" type="Word.TableCell">Gets the table cell that contains the inline image. Returns a null object if it is not contained in a table cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableOrNullObject" type="Word.Table">Gets the table that contains the inline image. Returns a null object if it is not contained in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="width" type="Number">Gets or sets a number that describes the width of the inline image. [Api set: WordApi 1.1]</field>
		}

		InlinePicture.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.InlinePicture"/>
		}

		InlinePicture.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.InlinePictureUpdateData">Properties described by the Word.Interfaces.InlinePictureUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="InlinePicture">An existing InlinePicture object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		InlinePicture.prototype.delete = function() {
			/// <summary>
			/// Deletes the inline picture from the document. [Api set: WordApi 1.2]
			/// </summary>
			/// <returns ></returns>
		}
		InlinePicture.prototype.getBase64ImageSrc = function() {
			/// <summary>
			/// Gets the base64 encoded string representation of the inline image. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		InlinePicture.prototype.getNext = function() {
			/// <summary>
			/// Gets the next inline image. Throws if this inline image is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.InlinePicture"></returns>
		}
		InlinePicture.prototype.getNextOrNullObject = function() {
			/// <summary>
			/// Gets the next inline image. Returns a null object if this inline image is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.InlinePicture"></returns>
		}
		InlinePicture.prototype.getRange = function(rangeLocation) {
			/// <summary>
			/// Gets the picture, or the starting or ending point of the picture, as a range. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rangeLocation" type="String" optional="true">Optional. The range location can be &apos;Whole&apos;, &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		InlinePicture.prototype.insertBreak = function(breakType, insertLocation) {
			/// <summary>
			/// Inserts a break at the specified location in the main document. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="breakType" type="String">Required. The break type to add.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns ></returns>
		}
		InlinePicture.prototype.insertContentControl = function() {
			/// <summary>
			/// Wraps the inline picture with a rich text content control. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="Word.ContentControl"></returns>
		}
		InlinePicture.prototype.insertFileFromBase64 = function(base64File, insertLocation) {
			/// <summary>
			/// Inserts a document at the specified location. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="base64File" type="String">Required. The base64 encoded content of a .docx file.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		InlinePicture.prototype.insertHtml = function(html, insertLocation) {
			/// <summary>
			/// Inserts HTML at the specified location. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="html" type="String">Required. The HTML to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		InlinePicture.prototype.insertInlinePictureFromBase64 = function(base64EncodedImage, insertLocation) {
			/// <summary>
			/// Inserts an inline picture at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="base64EncodedImage" type="String">Required. The base64 encoded image to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.InlinePicture"></returns>
		}
		InlinePicture.prototype.insertOoxml = function(ooxml, insertLocation) {
			/// <summary>
			/// Inserts OOXML at the specified location.  The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="ooxml" type="String">Required. The OOXML to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		InlinePicture.prototype.insertParagraph = function(paragraphText, insertLocation) {
			/// <summary>
			/// Inserts a paragraph at the specified location. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="paragraphText" type="String">Required. The paragraph text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Paragraph"></returns>
		}
		InlinePicture.prototype.insertText = function(text, insertLocation) {
			/// <summary>
			/// Inserts text at the specified location. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="text" type="String">Required. Text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		InlinePicture.prototype.select = function(selectionMode) {
			/// <summary>
			/// Selects the inline picture. This causes Word to scroll to the selection. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="selectionMode" type="String" optional="true">Optional. The selection mode can be &apos;Select&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Select&apos; is the default.</param>
			/// <returns ></returns>
		}

		InlinePicture.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.InlinePicture"/>
		}

		InlinePicture.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.InlinePicture"/>
		}

		return InlinePicture;
	})(OfficeExtension.ClientObject);
	Word.InlinePicture = InlinePicture;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var InlinePictureCollection = (function(_super) {
		__extends(InlinePictureCollection, _super);
		function InlinePictureCollection() {
			/// <summary> Contains a collection of [inlinePicture](inlinePicture.md) objects. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Word.InlinePicture">Gets the loaded child items in this collection.</field>
		}

		InlinePictureCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.InlinePictureCollection"/>
		}
		InlinePictureCollection.prototype.getFirst = function() {
			/// <summary>
			/// Gets the first inline image in this collection. Throws if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.InlinePicture"></returns>
		}
		InlinePictureCollection.prototype.getFirstOrNullObject = function() {
			/// <summary>
			/// Gets the first inline image in this collection. Returns a null object if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.InlinePicture"></returns>
		}

		InlinePictureCollection.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.InlinePictureCollection"/>
		}

		InlinePictureCollection.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.InlinePictureCollection"/>
		}

		return InlinePictureCollection;
	})(OfficeExtension.ClientObject);
	Word.InlinePictureCollection = InlinePictureCollection;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> The insertion location types [Api set: WordApi] </summary>
	var InsertLocation = {
		__proto__: null,
		"before": "before",
		"after": "after",
		"start": "start",
		"end": "end",
		"replace": "replace",
	}
	Word.InsertLocation = InsertLocation;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var List = (function(_super) {
		__extends(List, _super);
		function List() {
			/// <summary> Contains a collection of [paragraph](paragraph.md) objects. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="id" type="Number">Gets the list&apos;s id. [Api set: WordApi 1.3]</field>
			/// <field name="levelExistences" type="Array" elementType="Boolean">Checks whether each of the 9 levels exists in the list. A true value indicates the level exists, which means there is at least one list item at that level. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="levelTypes" type="Array" elementType="String">Gets all 9 level types in the list. Each type can be &apos;Bullet&apos;, &apos;Number&apos; or &apos;Picture&apos;. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="paragraphs" type="Word.ParagraphCollection">Gets paragraphs in the list. Read-only. [Api set: WordApi 1.3]</field>
		}

		List.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.List"/>
		}
		List.prototype.getLevelParagraphs = function(level) {
			/// <summary>
			/// Gets the paragraphs that occur at the specified level in the list. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="level" type="Number">Required. The level in the list.</param>
			/// <returns type="Word.ParagraphCollection"></returns>
		}
		List.prototype.getLevelString = function(level) {
			/// <summary>
			/// Gets the bullet, number or picture at the specified level as a string. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="level" type="Number">Required. The level in the list.</param>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		List.prototype.insertParagraph = function(paragraphText, insertLocation) {
			/// <summary>
			/// Inserts a paragraph at the specified location. The insertLocation value can be &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="paragraphText" type="String">Required. The paragraph text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Paragraph"></returns>
		}
		List.prototype.setLevelAlignment = function(level, alignment) {
			/// <summary>
			/// Sets the alignment of the bullet, number or picture at the specified level in the list. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="level" type="Number">Required. The level in the list.</param>
			/// <param name="alignment" type="String">Required. The level alignment that can be &apos;left&apos;, &apos;centered&apos; or &apos;right&apos;.</param>
			/// <returns ></returns>
		}
		List.prototype.setLevelBullet = function(level, listBullet, charCode, fontName) {
			/// <summary>
			/// Sets the bullet format at the specified level in the list. If the bullet is &apos;Custom&apos;, the charCode is required. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="level" type="Number">Required. The level in the list.</param>
			/// <param name="listBullet" type="String">Required. The bullet.</param>
			/// <param name="charCode" type="Number" optional="true">Optional. The bullet character&apos;s code value. Used only if the bullet is &apos;Custom&apos;.</param>
			/// <param name="fontName" type="String" optional="true">Optional. The bullet&apos;s font name. Used only if the bullet is &apos;Custom&apos;.</param>
			/// <returns ></returns>
		}
		List.prototype.setLevelIndents = function(level, textIndent, bulletNumberPictureIndent) {
			/// <summary>
			/// Sets the two indents of the specified level in the list. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="level" type="Number">Required. The level in the list.</param>
			/// <param name="textIndent" type="Number">Required. The text indent in points. It is the same as paragraph left indent.</param>
			/// <param name="textIndent" type="Number">Required. The relative indent, in points, of the bullet, number or picture. It is the same as paragraph first line indent.</param>
			/// <returns ></returns>
		}
		List.prototype.setLevelNumbering = function(level, listNumbering, formatString) {
			/// <summary>
			/// Sets the numbering format at the specified level in the list. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="level" type="Number">Required. The level in the list.</param>
			/// <param name="listNumbering" type="String">Required. The ordinal format.</param>
			/// <param name="formatString" type="Array"  optional="true">Optional. The numbering string format defined as an array of strings and/or integers. Each integer is a level of number type that is higher than or equal to this level. For example, an array of [&quot;(&quot;, level - 1, &quot;.&quot;, level, &quot;)&quot;] can define the format of &quot;(2.c)&quot;, where 2 is the parent&apos;s item number and c is this level&apos;s item number.</param>
			/// <returns ></returns>
		}
		List.prototype.setLevelStartingNumber = function(level, startingNumber) {
			/// <summary>
			/// Sets the starting number at the specified level in the list. Default value is 1. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="level" type="Number">Required. The level in the list.</param>
			/// <param name="startingNumber" type="Number">Required. The number to start with.</param>
			/// <returns ></returns>
		}

		List.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.List"/>
		}

		List.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.List"/>
		}

		return List;
	})(OfficeExtension.ClientObject);
	Word.List = List;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var ListBullet = {
		__proto__: null,
		"custom": "custom",
		"solid": "solid",
		"hollow": "hollow",
		"square": "square",
		"diamonds": "diamonds",
		"arrow": "arrow",
		"checkmark": "checkmark",
	}
	Word.ListBullet = ListBullet;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var ListCollection = (function(_super) {
		__extends(ListCollection, _super);
		function ListCollection() {
			/// <summary> Contains a collection of [list](list.md) objects. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Word.List">Gets the loaded child items in this collection.</field>
		}

		ListCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.ListCollection"/>
		}
		ListCollection.prototype.getById = function(id) {
			/// <summary>
			/// Gets a list by its identifier. Throws if there isn&apos;t a list with the identifier in this collection. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="id" type="Number">Required. A list identifier.</param>
			/// <returns type="Word.List"></returns>
		}
		ListCollection.prototype.getByIdOrNullObject = function(id) {
			/// <summary>
			/// Gets a list by its identifier. Returns a null object if there isn&apos;t a list with the identifier in this collection. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="id" type="Number">Required. A list identifier.</param>
			/// <returns type="Word.List"></returns>
		}
		ListCollection.prototype.getFirst = function() {
			/// <summary>
			/// Gets the first list in this collection. Throws if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.List"></returns>
		}
		ListCollection.prototype.getFirstOrNullObject = function() {
			/// <summary>
			/// Gets the first list in this collection. Returns a null object if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.List"></returns>
		}
		ListCollection.prototype.getItem = function(index) {
			/// <summary>
			/// Gets a list object by its index in the collection. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="index" >A number that identifies the index location of a list object.</param>
			/// <returns type="Word.List"></returns>
		}

		ListCollection.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.ListCollection"/>
		}

		ListCollection.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.ListCollection"/>
		}

		return ListCollection;
	})(OfficeExtension.ClientObject);
	Word.ListCollection = ListCollection;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var ListItem = (function(_super) {
		__extends(ListItem, _super);
		function ListItem() {
			/// <summary> Represents the paragraph list item format. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="level" type="Number">Gets or sets the level of the item in the list. [Api set: WordApi 1.3]</field>
			/// <field name="listString" type="String">Gets the list item bullet, number or picture as a string. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="siblingIndex" type="Number">Gets the list item order number in relation to its siblings. Read-only. [Api set: WordApi 1.3]</field>
		}

		ListItem.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.ListItem"/>
		}

		ListItem.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.ListItemUpdateData">Properties described by the Word.Interfaces.ListItemUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="ListItem">An existing ListItem object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		ListItem.prototype.getAncestor = function(parentOnly) {
			/// <summary>
			/// Gets the list item parent, or the closest ancestor if the parent does not exist. Throws if the list item has no ancester. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="parentOnly" type="Boolean" optional="true">Optional. Specified only the list item&apos;s parent will be returned. The default is false that specifies to get the lowest ancestor.</param>
			/// <returns type="Word.Paragraph"></returns>
		}
		ListItem.prototype.getAncestorOrNullObject = function(parentOnly) {
			/// <summary>
			/// Gets the list item parent, or the closest ancestor if the parent does not exist. Returns a null object if the list item has no ancester. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="parentOnly" type="Boolean" optional="true">Optional. Specified only the list item&apos;s parent will be returned. The default is false that specifies to get the lowest ancestor.</param>
			/// <returns type="Word.Paragraph"></returns>
		}
		ListItem.prototype.getDescendants = function(directChildrenOnly) {
			/// <summary>
			/// Gets all descendant list items of the list item. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="directChildrenOnly" type="Boolean" optional="true">Optional. Specified only the list item&apos;s direct children will be returned. The default is false that indicates to get all descendant items.</param>
			/// <returns type="Word.ParagraphCollection"></returns>
		}

		ListItem.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.ListItem"/>
		}

		ListItem.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.ListItem"/>
		}

		return ListItem;
	})(OfficeExtension.ClientObject);
	Word.ListItem = ListItem;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var ListLevelType = {
		__proto__: null,
		"bullet": "bullet",
		"number": "number",
		"picture": "picture",
	}
	Word.ListLevelType = ListLevelType;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var ListNumbering = {
		__proto__: null,
		"none": "none",
		"arabic": "arabic",
		"upperRoman": "upperRoman",
		"lowerRoman": "lowerRoman",
		"upperLetter": "upperLetter",
		"lowerLetter": "lowerLetter",
	}
	Word.ListNumbering = ListNumbering;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var LocationRelation = {
		__proto__: null,
		"unrelated": "unrelated",
		"equal": "equal",
		"containsStart": "containsStart",
		"containsEnd": "containsEnd",
		"contains": "contains",
		"insideStart": "insideStart",
		"insideEnd": "insideEnd",
		"inside": "inside",
		"adjacentBefore": "adjacentBefore",
		"overlapsBefore": "overlapsBefore",
		"before": "before",
		"adjacentAfter": "adjacentAfter",
		"overlapsAfter": "overlapsAfter",
		"after": "after",
	}
	Word.LocationRelation = LocationRelation;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Paragraph = (function(_super) {
		__extends(Paragraph, _super);
		function Paragraph() {
			/// <summary> Represents a single paragraph in a selection, range, content control, or document body. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="alignment" type="String">Gets or sets the alignment for a paragraph. The value can be &apos;left&apos;, &apos;centered&apos;, &apos;right&apos;, or &apos;justified&apos;. [Api set: WordApi 1.1]</field>
			/// <field name="contentControls" type="Word.ContentControlCollection">Gets the collection of content control objects in the paragraph. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="firstLineIndent" type="Number">Gets or sets the value, in points, for a first line or hanging indent. Use a positive value to set a first-line indent, and use a negative value to set a hanging indent. [Api set: WordApi 1.1]</field>
			/// <field name="font" type="Word.Font">Gets the text format of the paragraph. Use this to get and set font name, size, color, and other properties. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="inlinePictures" type="Word.InlinePictureCollection">Gets the collection of inlinePicture objects in the paragraph. The collection does not include floating images. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="isLastParagraph" type="Boolean">Indicates the paragraph is the last one inside its parent body. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="isListItem" type="Boolean">Checks whether the paragraph is a list item. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="leftIndent" type="Number">Gets or sets the left indent value, in points, for the paragraph. [Api set: WordApi 1.1]</field>
			/// <field name="lineSpacing" type="Number">Gets or sets the line spacing, in points, for the specified paragraph. In the Word UI, this value is divided by 12. [Api set: WordApi 1.1]</field>
			/// <field name="lineUnitAfter" type="Number">Gets or sets the amount of spacing, in grid lines. after the paragraph. [Api set: WordApi 1.1]</field>
			/// <field name="lineUnitBefore" type="Number">Gets or sets the amount of spacing, in grid lines, before the paragraph. [Api set: WordApi 1.1]</field>
			/// <field name="list" type="Word.List">Gets the List to which this paragraph belongs. Throws if the paragraph is not in a list. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="listItem" type="Word.ListItem">Gets the ListItem for the paragraph. Throws if the paragraph is not part of a list. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="listItemOrNullObject" type="Word.ListItem">Gets the ListItem for the paragraph. Returns a null object if the paragraph is not part of a list. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="listOrNullObject" type="Word.List">Gets the List to which this paragraph belongs. Returns a null object if the paragraph is not in a list. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="outlineLevel" type="Number">Gets or sets the outline level for the paragraph. [Api set: WordApi 1.1]</field>
			/// <field name="parentBody" type="Word.Body">Gets the parent body of the paragraph. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentContentControl" type="Word.ContentControl">Gets the content control that contains the paragraph. Throws if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="parentContentControlOrNullObject" type="Word.ContentControl">Gets the content control that contains the paragraph. Returns a null object if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTable" type="Word.Table">Gets the table that contains the paragraph. Throws if it is not contained in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableCell" type="Word.TableCell">Gets the table cell that contains the paragraph. Throws if it is not contained in a table cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableCellOrNullObject" type="Word.TableCell">Gets the table cell that contains the paragraph. Returns a null object if it is not contained in a table cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableOrNullObject" type="Word.Table">Gets the table that contains the paragraph. Returns a null object if it is not contained in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="rightIndent" type="Number">Gets or sets the right indent value, in points, for the paragraph. [Api set: WordApi 1.1]</field>
			/// <field name="spaceAfter" type="Number">Gets or sets the spacing, in points, after the paragraph. [Api set: WordApi 1.1]</field>
			/// <field name="spaceBefore" type="Number">Gets or sets the spacing, in points, before the paragraph. [Api set: WordApi 1.1]</field>
			/// <field name="style" type="String">Gets or sets the style name for the paragraph. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the &quot;styleBuiltIn&quot; property. [Api set: WordApi 1.1]</field>
			/// <field name="styleBuiltIn" type="String">Gets or sets the built-in style name for the paragraph. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the &quot;style&quot; property. [Api set: WordApi 1.3]</field>
			/// <field name="tableNestingLevel" type="Number">Gets the level of the paragraph&apos;s table. It returns 0 if the paragraph is not in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="text" type="String">Gets the text of the paragraph. Read-only. [Api set: WordApi 1.1]</field>
		}

		Paragraph.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.Paragraph"/>
		}

		Paragraph.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.ParagraphUpdateData">Properties described by the Word.Interfaces.ParagraphUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Paragraph">An existing Paragraph object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Paragraph.prototype.attachToList = function(listId, level) {
			/// <summary>
			/// Lets the paragraph join an existing list at the specified level. Fails if the paragraph cannot join the list or if the paragraph is already a list item. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="listId" type="Number">Required. The ID of an existing list.</param>
			/// <param name="level" type="Number">Required. The level in the list.</param>
			/// <returns type="Word.List"></returns>
		}
		Paragraph.prototype.clear = function() {
			/// <summary>
			/// Clears the contents of the paragraph object. The user can perform the undo operation on the cleared content. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		Paragraph.prototype.delete = function() {
			/// <summary>
			/// Deletes the paragraph and its content from the document. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		Paragraph.prototype.detachFromList = function() {
			/// <summary>
			/// Moves this paragraph out of its list, if the paragraph is a list item. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		Paragraph.prototype.getHtml = function() {
			/// <summary>
			/// Gets the HTML representation of the paragraph object. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		Paragraph.prototype.getNext = function() {
			/// <summary>
			/// Gets the next paragraph. Throws if the paragraph is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		Paragraph.prototype.getNextOrNullObject = function() {
			/// <summary>
			/// Gets the next paragraph. Returns a null object if the paragraph is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		Paragraph.prototype.getOoxml = function() {
			/// <summary>
			/// Gets the Office Open XML (OOXML) representation of the paragraph object. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		Paragraph.prototype.getPrevious = function() {
			/// <summary>
			/// Gets the previous paragraph. Throws if the paragraph is the first one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		Paragraph.prototype.getPreviousOrNullObject = function() {
			/// <summary>
			/// Gets the previous paragraph. Returns a null object if the paragraph is the first one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		Paragraph.prototype.getRange = function(rangeLocation) {
			/// <summary>
			/// Gets the whole paragraph, or the starting or ending point of the paragraph, as a range. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rangeLocation" type="String" optional="true">Optional. The range location can be &apos;Whole&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;After&apos; or &apos;Content&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Paragraph.prototype.getTextRanges = function(endingMarks, trimSpacing) {
			/// <summary>
			/// Gets the text ranges in the paragraph by using punctuation marks and/or other ending marks. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="endingMarks" type="Array" elementType="String">Required. The punctuation marks and/or other ending marks as an array of strings.</param>
			/// <param name="trimSpacing" type="Boolean" optional="true">Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}
		Paragraph.prototype.insertBreak = function(breakType, insertLocation) {
			/// <summary>
			/// Inserts a break at the specified location in the main document. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="breakType" type="String">Required. The break type to add to the document.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns ></returns>
		}
		Paragraph.prototype.insertContentControl = function() {
			/// <summary>
			/// Wraps the paragraph object with a rich text content control. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="Word.ContentControl"></returns>
		}
		Paragraph.prototype.insertFileFromBase64 = function(base64File, insertLocation) {
			/// <summary>
			/// Inserts a document into the paragraph at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="base64File" type="String">Required. The base64 encoded content of a .docx file.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Paragraph.prototype.insertHtml = function(html, insertLocation) {
			/// <summary>
			/// Inserts HTML into the paragraph at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="html" type="String">Required. The HTML to be inserted in the paragraph.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Paragraph.prototype.insertInlinePictureFromBase64 = function(base64EncodedImage, insertLocation) {
			/// <summary>
			/// Inserts a picture into the paragraph at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="base64EncodedImage" type="String">Required. The base64 encoded image to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.InlinePicture"></returns>
		}
		Paragraph.prototype.insertOoxml = function(ooxml, insertLocation) {
			/// <summary>
			/// Inserts OOXML into the paragraph at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="ooxml" type="String">Required. The OOXML to be inserted in the paragraph.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Paragraph.prototype.insertParagraph = function(paragraphText, insertLocation) {
			/// <summary>
			/// Inserts a paragraph at the specified location. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="paragraphText" type="String">Required. The paragraph text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Paragraph"></returns>
		}
		Paragraph.prototype.insertTable = function(rowCount, columnCount, insertLocation, values) {
			/// <summary>
			/// Inserts a table with the specified number of rows and columns. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rowCount" type="Number">Required. The number of rows in the table.</param>
			/// <param name="columnCount" type="Number">Required. The number of columns in the table.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <param name="values" type="Array" elementType="Array" optional="true">Optional 2D array. Cells are filled if the corresponding strings are specified in the array.</param>
			/// <returns type="Word.Table"></returns>
		}
		Paragraph.prototype.insertText = function(text, insertLocation) {
			/// <summary>
			/// Inserts text into the paragraph at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="text" type="String">Required. Text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos; or &apos;End&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Paragraph.prototype.search = function(searchText, searchOptions) {
			/// <summary>
			/// Performs a search with the specified searchOptions on the scope of the paragraph object. The search results are a collection of range objects. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="searchText" type="String">Required. The search text.</param>
			/// <param name="searchOptions" type="Word.SearchOptions" optional="true">Optional. Options for the search.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}
		Paragraph.prototype.select = function(selectionMode) {
			/// <summary>
			/// Selects and navigates the Word UI to the paragraph. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="selectionMode" type="String" optional="true">Optional. The selection mode can be &apos;Select&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Select&apos; is the default.</param>
			/// <returns ></returns>
		}
		Paragraph.prototype.split = function(delimiters, trimDelimiters, trimSpacing) {
			/// <summary>
			/// Splits the paragraph into child ranges by using delimiters. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="delimiters" type="Array" elementType="String">Required. The delimiters as an array of strings.</param>
			/// <param name="trimDelimiters" type="Boolean" optional="true">Optional. Indicates whether to trim delimiters from the ranges in the range collection. Default is false which indicates that the delimiters are included in the ranges returned in the range collection.</param>
			/// <param name="trimSpacing" type="Boolean" optional="true">Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}
		Paragraph.prototype.startNewList = function() {
			/// <summary>
			/// Starts a new list with this paragraph. Fails if the paragraph is already a list item. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.List"></returns>
		}

		Paragraph.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.Paragraph"/>
		}

		Paragraph.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.Paragraph"/>
		}

		return Paragraph;
	})(OfficeExtension.ClientObject);
	Word.Paragraph = Paragraph;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var ParagraphCollection = (function(_super) {
		__extends(ParagraphCollection, _super);
		function ParagraphCollection() {
			/// <summary> Contains a collection of [paragraph](paragraph.md) objects. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Word.Paragraph">Gets the loaded child items in this collection.</field>
		}

		ParagraphCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.ParagraphCollection"/>
		}
		ParagraphCollection.prototype.getFirst = function() {
			/// <summary>
			/// Gets the first paragraph in this collection. Throws if the collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		ParagraphCollection.prototype.getFirstOrNullObject = function() {
			/// <summary>
			/// Gets the first paragraph in this collection. Returns a null object if the collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		ParagraphCollection.prototype.getLast = function() {
			/// <summary>
			/// Gets the last paragraph in this collection. Throws if the collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		ParagraphCollection.prototype.getLastOrNullObject = function() {
			/// <summary>
			/// Gets the last paragraph in this collection. Returns a null object if the collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}

		ParagraphCollection.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.ParagraphCollection"/>
		}

		ParagraphCollection.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.ParagraphCollection"/>
		}

		return ParagraphCollection;
	})(OfficeExtension.ClientObject);
	Word.ParagraphCollection = ParagraphCollection;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Range = (function(_super) {
		__extends(Range, _super);
		function Range() {
			/// <summary> Represents a contiguous area in a document. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="contentControls" type="Word.ContentControlCollection">Gets the collection of content control objects in the range. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="font" type="Word.Font">Gets the text format of the range. Use this to get and set font name, size, color, and other properties. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="hyperlink" type="String">Gets the first hyperlink in the range, or sets a hyperlink on the range. All hyperlinks in the range are deleted when you set a new hyperlink on the range. Use a &apos;#&apos; to separate the address part from the optional location part. [Api set: WordApi 1.3]</field>
			/// <field name="inlinePictures" type="Word.InlinePictureCollection">Gets the collection of inline picture objects in the range. Read-only. [Api set: WordApi 1.2]</field>
			/// <field name="isEmpty" type="Boolean">Checks whether the range length is zero. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="lists" type="Word.ListCollection">Gets the collection of list objects in the range. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="paragraphs" type="Word.ParagraphCollection">Gets the collection of paragraph objects in the range. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="parentBody" type="Word.Body">Gets the parent body of the range. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentContentControl" type="Word.ContentControl">Gets the content control that contains the range. Throws if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.1]</field>
			/// <field name="parentContentControlOrNullObject" type="Word.ContentControl">Gets the content control that contains the range. Returns a null object if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTable" type="Word.Table">Gets the table that contains the range. Throws if it is not contained in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableCell" type="Word.TableCell">Gets the table cell that contains the range. Throws if it is not contained in a table cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableCellOrNullObject" type="Word.TableCell">Gets the table cell that contains the range. Returns a null object if it is not contained in a table cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableOrNullObject" type="Word.Table">Gets the table that contains the range. Returns a null object if it is not contained in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="style" type="String">Gets or sets the style name for the range. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the &quot;styleBuiltIn&quot; property. [Api set: WordApi 1.1]</field>
			/// <field name="styleBuiltIn" type="String">Gets or sets the built-in style name for the range. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the &quot;style&quot; property. [Api set: WordApi 1.3]</field>
			/// <field name="tables" type="Word.TableCollection">Gets the collection of table objects in the range. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="text" type="String">Gets the text of the range. Read-only. [Api set: WordApi 1.1]</field>
		}

		Range.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.Range"/>
		}

		Range.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.RangeUpdateData">Properties described by the Word.Interfaces.RangeUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Range">An existing Range object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Range.prototype.clear = function() {
			/// <summary>
			/// Clears the contents of the range object. The user can perform the undo operation on the cleared content. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		Range.prototype.compareLocationWith = function(range) {
			/// <summary>
			/// Compares this range&apos;s location with another range&apos;s location. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="range" type="Word.Range">Required. The range to compare with this range.</param>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		Range.prototype.delete = function() {
			/// <summary>
			/// Deletes the range and its content from the document. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns ></returns>
		}
		Range.prototype.expandTo = function(range) {
			/// <summary>
			/// Returns a new range that extends from this range in either direction to cover another range. This range is not changed. Throws if the two ranges do not have a union. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="range" type="Word.Range">Required. Another range.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.expandToOrNullObject = function(range) {
			/// <summary>
			/// Returns a new range that extends from this range in either direction to cover another range. This range is not changed. Returns a null object if the two ranges do not have a union. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="range" type="Word.Range">Required. Another range.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.getHtml = function() {
			/// <summary>
			/// Gets the HTML representation of the range object. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		Range.prototype.getHyperlinkRanges = function() {
			/// <summary>
			/// Gets hyperlink child ranges within the range. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.RangeCollection"></returns>
		}
		Range.prototype.getNextTextRange = function(endingMarks, trimSpacing) {
			/// <summary>
			/// Gets the next text range by using punctuation marks and/or other ending marks. Throws if this text range is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="endingMarks" type="Array" elementType="String">Required. The punctuation marks and/or other ending marks as an array of strings.</param>
			/// <param name="trimSpacing" type="Boolean" optional="true">Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the returned range. Default is false which indicates that spacing characters at the start and end of the range are included.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.getNextTextRangeOrNullObject = function(endingMarks, trimSpacing) {
			/// <summary>
			/// Gets the next text range by using punctuation marks and/or other ending marks. Returns a null object if this text range is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="endingMarks" type="Array" elementType="String">Required. The punctuation marks and/or other ending marks as an array of strings.</param>
			/// <param name="trimSpacing" type="Boolean" optional="true">Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the returned range. Default is false which indicates that spacing characters at the start and end of the range are included.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.getOoxml = function() {
			/// <summary>
			/// Gets the OOXML representation of the range object. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="OfficeExtension.ClientResult&lt;string&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = '';
			return result;
		}
		Range.prototype.getRange = function(rangeLocation) {
			/// <summary>
			/// Clones the range, or gets the starting or ending point of the range as a new range. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rangeLocation" type="String" optional="true">Optional. The range location can be &apos;Whole&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;After&apos; or &apos;Content&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.getTextRanges = function(endingMarks, trimSpacing) {
			/// <summary>
			/// Gets the text child ranges in the range by using punctuation marks and/or other ending marks. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="endingMarks" type="Array" elementType="String">Required. The punctuation marks and/or other ending marks as an array of strings.</param>
			/// <param name="trimSpacing" type="Boolean" optional="true">Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}
		Range.prototype.insertBreak = function(breakType, insertLocation) {
			/// <summary>
			/// Inserts a break at the specified location in the main document. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="breakType" type="String">Required. The break type to add.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns ></returns>
		}
		Range.prototype.insertContentControl = function() {
			/// <summary>
			/// Wraps the range object with a rich text content control. [Api set: WordApi 1.1]
			/// </summary>
			/// <returns type="Word.ContentControl"></returns>
		}
		Range.prototype.insertFileFromBase64 = function(base64File, insertLocation) {
			/// <summary>
			/// Inserts a document at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="base64File" type="String">Required. The base64 encoded content of a .docx file.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.insertHtml = function(html, insertLocation) {
			/// <summary>
			/// Inserts HTML at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="html" type="String">Required. The HTML to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.insertInlinePictureFromBase64 = function(base64EncodedImage, insertLocation) {
			/// <summary>
			/// Inserts a picture at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.2]
			/// </summary>
			/// <param name="base64EncodedImage" type="String">Required. The base64 encoded image to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.InlinePicture"></returns>
		}
		Range.prototype.insertOoxml = function(ooxml, insertLocation) {
			/// <summary>
			/// Inserts OOXML at the specified location.  The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="ooxml" type="String">Required. The OOXML to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.insertParagraph = function(paragraphText, insertLocation) {
			/// <summary>
			/// Inserts a paragraph at the specified location. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="paragraphText" type="String">Required. The paragraph text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Paragraph"></returns>
		}
		Range.prototype.insertTable = function(rowCount, columnCount, insertLocation, values) {
			/// <summary>
			/// Inserts a table with the specified number of rows and columns. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rowCount" type="Number">Required. The number of rows in the table.</param>
			/// <param name="columnCount" type="Number">Required. The number of columns in the table.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <param name="values" type="Array" elementType="Array" optional="true">Optional 2D array. Cells are filled if the corresponding strings are specified in the array.</param>
			/// <returns type="Word.Table"></returns>
		}
		Range.prototype.insertText = function(text, insertLocation) {
			/// <summary>
			/// Inserts text at the specified location. The insertLocation value can be &apos;Replace&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="text" type="String">Required. Text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Replace&apos;, &apos;Start&apos;, &apos;End&apos;, &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.intersectWith = function(range) {
			/// <summary>
			/// Returns a new range as the intersection of this range with another range. This range is not changed. Throws if the two ranges are not overlapped or adjacent. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="range" type="Word.Range">Required. Another range.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.intersectWithOrNullObject = function(range) {
			/// <summary>
			/// Returns a new range as the intersection of this range with another range. This range is not changed. Returns a null object if the two ranges are not overlapped or adjacent. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="range" type="Word.Range">Required. Another range.</param>
			/// <returns type="Word.Range"></returns>
		}
		Range.prototype.search = function(searchText, searchOptions) {
			/// <summary>
			/// Performs a search with the specified searchOptions on the scope of the range object. The search results are a collection of range objects. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="searchText" type="String">Required. The search text.</param>
			/// <param name="searchOptions" type="Word.SearchOptions" optional="true">Optional. Options for the search.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}
		Range.prototype.select = function(selectionMode) {
			/// <summary>
			/// Selects and navigates the Word UI to the range. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="selectionMode" type="String" optional="true">Optional. The selection mode can be &apos;Select&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Select&apos; is the default.</param>
			/// <returns ></returns>
		}
		Range.prototype.split = function(delimiters, multiParagraphs, trimDelimiters, trimSpacing) {
			/// <summary>
			/// Splits the range into child ranges by using delimiters. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="delimiters" type="Array" elementType="String">Required. The delimiters as an array of strings.</param>
			/// <param name="multiParagraphs" type="Boolean" optional="true">Optional. Indicates whether a returned child range can cover multiple paragraphs. Default is false which indicates that the paragraph boundaries are also used as delimiters.</param>
			/// <param name="trimDelimiters" type="Boolean" optional="true">Optional. Indicates whether to trim delimiters from the ranges in the range collection. Default is false which indicates that the delimiters are included in the ranges returned in the range collection.</param>
			/// <param name="trimSpacing" type="Boolean" optional="true">Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}

		Range.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.Range"/>
		}

		Range.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.Range"/>
		}

		return Range;
	})(OfficeExtension.ClientObject);
	Word.Range = Range;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var RangeCollection = (function(_super) {
		__extends(RangeCollection, _super);
		function RangeCollection() {
			/// <summary> Contains a collection of [range](range.md) objects. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Word.Range">Gets the loaded child items in this collection.</field>
		}

		RangeCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.RangeCollection"/>
		}
		RangeCollection.prototype.getFirst = function() {
			/// <summary>
			/// Gets the first range in this collection. Throws if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Range"></returns>
		}
		RangeCollection.prototype.getFirstOrNullObject = function() {
			/// <summary>
			/// Gets the first range in this collection. Returns a null object if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Range"></returns>
		}

		RangeCollection.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.RangeCollection"/>
		}

		RangeCollection.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.RangeCollection"/>
		}

		return RangeCollection;
	})(OfficeExtension.ClientObject);
	Word.RangeCollection = RangeCollection;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var RangeLocation = {
		__proto__: null,
		"whole": "whole",
		"start": "start",
		"end": "end",
		"before": "before",
		"after": "after",
		"content": "content",
	}
	Word.RangeLocation = RangeLocation;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var SearchOptions = (function(_super) {
		__extends(SearchOptions, _super);
		function SearchOptions() {
			/// <summary> Specifies the options to be included in a search operation. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="ignorePunct" type="Boolean">Gets or sets a value that indicates whether to ignore all punctuation characters between words. Corresponds to the Ignore punctuation check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>
			/// <field name="ignoreSpace" type="Boolean">Gets or sets a value that indicates whether to ignore all whitespace between words. Corresponds to the Ignore whitespace characters check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>
			/// <field name="matchCase" type="Boolean">Gets or sets a value that indicates whether to perform a case sensitive search. Corresponds to the Match case check box in the Find and Replace dialog box (Edit menu). [Api set: WordApi 1.1]</field>
			/// <field name="matchPrefix" type="Boolean">Gets or sets a value that indicates whether to match words that begin with the search string. Corresponds to the Match prefix check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>
			/// <field name="matchSuffix" type="Boolean">Gets or sets a value that indicates whether to match words that end with the search string. Corresponds to the Match suffix check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>
			/// <field name="matchWholeWord" type="Boolean">Gets or sets a value that indicates whether to find operation only entire words, not text that is part of a larger word. Corresponds to the Find whole words only check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>
			/// <field name="matchWildcards" type="Boolean">Gets or sets a value that indicates whether the search will be performed using special search operators. Corresponds to the Use wildcards check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>
		}

		SearchOptions.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.SearchOptions"/>
		}

		SearchOptions.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.SearchOptionsUpdateData">Properties described by the Word.Interfaces.SearchOptionsUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="SearchOptions">An existing SearchOptions object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		return SearchOptions;
	})(OfficeExtension.ClientObject);
	Word.SearchOptions = SearchOptions;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Section = (function(_super) {
		__extends(Section, _super);
		function Section() {
			/// <summary> Represents a section in a Word document. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="body" type="Word.Body">Gets the body object of the section. This does not include the header/footer and other section metadata. Read-only. [Api set: WordApi 1.1]</field>
		}

		Section.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.Section"/>
		}

		Section.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.SectionUpdateData">Properties described by the Word.Interfaces.SectionUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Section">An existing Section object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Section.prototype.getFooter = function(type) {
			/// <summary>
			/// Gets one of the section&apos;s footers. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="type" type="String">Required. The type of footer to return. This value can be: &apos;primary&apos;, &apos;firstPage&apos; or &apos;evenPages&apos;.</param>
			/// <returns type="Word.Body"></returns>
		}
		Section.prototype.getHeader = function(type) {
			/// <summary>
			/// Gets one of the section&apos;s headers. [Api set: WordApi 1.1]
			/// </summary>
			/// <param name="type" type="String">Required. The type of header to return. This value can be: &apos;primary&apos;, &apos;firstPage&apos; or &apos;evenPages&apos;.</param>
			/// <returns type="Word.Body"></returns>
		}
		Section.prototype.getNext = function() {
			/// <summary>
			/// Gets the next section. Throws if this section is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Section"></returns>
		}
		Section.prototype.getNextOrNullObject = function() {
			/// <summary>
			/// Gets the next section. Returns a null object if this section is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Section"></returns>
		}

		Section.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.Section"/>
		}

		Section.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.Section"/>
		}

		return Section;
	})(OfficeExtension.ClientObject);
	Word.Section = Section;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var SectionCollection = (function(_super) {
		__extends(SectionCollection, _super);
		function SectionCollection() {
			/// <summary> Contains the collection of the document&apos;s [section](section.md) objects. [Api set: WordApi 1.1] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Word.Section">Gets the loaded child items in this collection.</field>
		}

		SectionCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.SectionCollection"/>
		}
		SectionCollection.prototype.getFirst = function() {
			/// <summary>
			/// Gets the first section in this collection. Throws if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Section"></returns>
		}
		SectionCollection.prototype.getFirstOrNullObject = function() {
			/// <summary>
			/// Gets the first section in this collection. Returns a null object if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Section"></returns>
		}

		SectionCollection.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.SectionCollection"/>
		}

		SectionCollection.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.SectionCollection"/>
		}

		return SectionCollection;
	})(OfficeExtension.ClientObject);
	Word.SectionCollection = SectionCollection;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var SelectionMode = {
		__proto__: null,
		"select": "select",
		"start": "start",
		"end": "end",
	}
	Word.SelectionMode = SelectionMode;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var Style = {
		__proto__: null,
		"other": "other",
		"normal": "normal",
		"heading1": "heading1",
		"heading2": "heading2",
		"heading3": "heading3",
		"heading4": "heading4",
		"heading5": "heading5",
		"heading6": "heading6",
		"heading7": "heading7",
		"heading8": "heading8",
		"heading9": "heading9",
		"toc1": "toc1",
		"toc2": "toc2",
		"toc3": "toc3",
		"toc4": "toc4",
		"toc5": "toc5",
		"toc6": "toc6",
		"toc7": "toc7",
		"toc8": "toc8",
		"toc9": "toc9",
		"footnoteText": "footnoteText",
		"header": "header",
		"footer": "footer",
		"caption": "caption",
		"footnoteReference": "footnoteReference",
		"endnoteReference": "endnoteReference",
		"endnoteText": "endnoteText",
		"title": "title",
		"subtitle": "subtitle",
		"hyperlink": "hyperlink",
		"strong": "strong",
		"emphasis": "emphasis",
		"noSpacing": "noSpacing",
		"listParagraph": "listParagraph",
		"quote": "quote",
		"intenseQuote": "intenseQuote",
		"subtleEmphasis": "subtleEmphasis",
		"intenseEmphasis": "intenseEmphasis",
		"subtleReference": "subtleReference",
		"intenseReference": "intenseReference",
		"bookTitle": "bookTitle",
		"bibliography": "bibliography",
		"tocHeading": "tocHeading",
		"tableGrid": "tableGrid",
		"plainTable1": "plainTable1",
		"plainTable2": "plainTable2",
		"plainTable3": "plainTable3",
		"plainTable4": "plainTable4",
		"plainTable5": "plainTable5",
		"tableGridLight": "tableGridLight",
		"gridTable1Light": "gridTable1Light",
		"gridTable1Light_Accent1": "gridTable1Light_Accent1",
		"gridTable1Light_Accent2": "gridTable1Light_Accent2",
		"gridTable1Light_Accent3": "gridTable1Light_Accent3",
		"gridTable1Light_Accent4": "gridTable1Light_Accent4",
		"gridTable1Light_Accent5": "gridTable1Light_Accent5",
		"gridTable1Light_Accent6": "gridTable1Light_Accent6",
		"gridTable2": "gridTable2",
		"gridTable2_Accent1": "gridTable2_Accent1",
		"gridTable2_Accent2": "gridTable2_Accent2",
		"gridTable2_Accent3": "gridTable2_Accent3",
		"gridTable2_Accent4": "gridTable2_Accent4",
		"gridTable2_Accent5": "gridTable2_Accent5",
		"gridTable2_Accent6": "gridTable2_Accent6",
		"gridTable3": "gridTable3",
		"gridTable3_Accent1": "gridTable3_Accent1",
		"gridTable3_Accent2": "gridTable3_Accent2",
		"gridTable3_Accent3": "gridTable3_Accent3",
		"gridTable3_Accent4": "gridTable3_Accent4",
		"gridTable3_Accent5": "gridTable3_Accent5",
		"gridTable3_Accent6": "gridTable3_Accent6",
		"gridTable4": "gridTable4",
		"gridTable4_Accent1": "gridTable4_Accent1",
		"gridTable4_Accent2": "gridTable4_Accent2",
		"gridTable4_Accent3": "gridTable4_Accent3",
		"gridTable4_Accent4": "gridTable4_Accent4",
		"gridTable4_Accent5": "gridTable4_Accent5",
		"gridTable4_Accent6": "gridTable4_Accent6",
		"gridTable5Dark": "gridTable5Dark",
		"gridTable5Dark_Accent1": "gridTable5Dark_Accent1",
		"gridTable5Dark_Accent2": "gridTable5Dark_Accent2",
		"gridTable5Dark_Accent3": "gridTable5Dark_Accent3",
		"gridTable5Dark_Accent4": "gridTable5Dark_Accent4",
		"gridTable5Dark_Accent5": "gridTable5Dark_Accent5",
		"gridTable5Dark_Accent6": "gridTable5Dark_Accent6",
		"gridTable6Colorful": "gridTable6Colorful",
		"gridTable6Colorful_Accent1": "gridTable6Colorful_Accent1",
		"gridTable6Colorful_Accent2": "gridTable6Colorful_Accent2",
		"gridTable6Colorful_Accent3": "gridTable6Colorful_Accent3",
		"gridTable6Colorful_Accent4": "gridTable6Colorful_Accent4",
		"gridTable6Colorful_Accent5": "gridTable6Colorful_Accent5",
		"gridTable6Colorful_Accent6": "gridTable6Colorful_Accent6",
		"gridTable7Colorful": "gridTable7Colorful",
		"gridTable7Colorful_Accent1": "gridTable7Colorful_Accent1",
		"gridTable7Colorful_Accent2": "gridTable7Colorful_Accent2",
		"gridTable7Colorful_Accent3": "gridTable7Colorful_Accent3",
		"gridTable7Colorful_Accent4": "gridTable7Colorful_Accent4",
		"gridTable7Colorful_Accent5": "gridTable7Colorful_Accent5",
		"gridTable7Colorful_Accent6": "gridTable7Colorful_Accent6",
		"listTable1Light": "listTable1Light",
		"listTable1Light_Accent1": "listTable1Light_Accent1",
		"listTable1Light_Accent2": "listTable1Light_Accent2",
		"listTable1Light_Accent3": "listTable1Light_Accent3",
		"listTable1Light_Accent4": "listTable1Light_Accent4",
		"listTable1Light_Accent5": "listTable1Light_Accent5",
		"listTable1Light_Accent6": "listTable1Light_Accent6",
		"listTable2": "listTable2",
		"listTable2_Accent1": "listTable2_Accent1",
		"listTable2_Accent2": "listTable2_Accent2",
		"listTable2_Accent3": "listTable2_Accent3",
		"listTable2_Accent4": "listTable2_Accent4",
		"listTable2_Accent5": "listTable2_Accent5",
		"listTable2_Accent6": "listTable2_Accent6",
		"listTable3": "listTable3",
		"listTable3_Accent1": "listTable3_Accent1",
		"listTable3_Accent2": "listTable3_Accent2",
		"listTable3_Accent3": "listTable3_Accent3",
		"listTable3_Accent4": "listTable3_Accent4",
		"listTable3_Accent5": "listTable3_Accent5",
		"listTable3_Accent6": "listTable3_Accent6",
		"listTable4": "listTable4",
		"listTable4_Accent1": "listTable4_Accent1",
		"listTable4_Accent2": "listTable4_Accent2",
		"listTable4_Accent3": "listTable4_Accent3",
		"listTable4_Accent4": "listTable4_Accent4",
		"listTable4_Accent5": "listTable4_Accent5",
		"listTable4_Accent6": "listTable4_Accent6",
		"listTable5Dark": "listTable5Dark",
		"listTable5Dark_Accent1": "listTable5Dark_Accent1",
		"listTable5Dark_Accent2": "listTable5Dark_Accent2",
		"listTable5Dark_Accent3": "listTable5Dark_Accent3",
		"listTable5Dark_Accent4": "listTable5Dark_Accent4",
		"listTable5Dark_Accent5": "listTable5Dark_Accent5",
		"listTable5Dark_Accent6": "listTable5Dark_Accent6",
		"listTable6Colorful": "listTable6Colorful",
		"listTable6Colorful_Accent1": "listTable6Colorful_Accent1",
		"listTable6Colorful_Accent2": "listTable6Colorful_Accent2",
		"listTable6Colorful_Accent3": "listTable6Colorful_Accent3",
		"listTable6Colorful_Accent4": "listTable6Colorful_Accent4",
		"listTable6Colorful_Accent5": "listTable6Colorful_Accent5",
		"listTable6Colorful_Accent6": "listTable6Colorful_Accent6",
		"listTable7Colorful": "listTable7Colorful",
		"listTable7Colorful_Accent1": "listTable7Colorful_Accent1",
		"listTable7Colorful_Accent2": "listTable7Colorful_Accent2",
		"listTable7Colorful_Accent3": "listTable7Colorful_Accent3",
		"listTable7Colorful_Accent4": "listTable7Colorful_Accent4",
		"listTable7Colorful_Accent5": "listTable7Colorful_Accent5",
		"listTable7Colorful_Accent6": "listTable7Colorful_Accent6",
	}
	Word.Style = Style;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Table = (function(_super) {
		__extends(Table, _super);
		function Table() {
			/// <summary> Represents a table in a Word document. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="alignment" type="String">Gets or sets the alignment of the table against the page column. The value can be &apos;left&apos;, &apos;centered&apos; or &apos;right&apos;. [Api set: WordApi 1.3]</field>
			/// <field name="font" type="Word.Font">Gets the font. Use this to get and set font name, size, color, and other properties. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="headerRowCount" type="Number">Gets and sets the number of header rows. [Api set: WordApi 1.3]</field>
			/// <field name="horizontalAlignment" type="String">Gets and sets the horizontal alignment of every cell in the table. The value can be &apos;left&apos;, &apos;centered&apos;, &apos;right&apos;, or &apos;justified&apos;. [Api set: WordApi 1.3]</field>
			/// <field name="isUniform" type="Boolean">Indicates whether all of the table rows are uniform. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="nestingLevel" type="Number">Gets the nesting level of the table. Top-level tables have level 1. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentBody" type="Word.Body">Gets the parent body of the table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentContentControl" type="Word.ContentControl">Gets the content control that contains the table. Throws if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentContentControlOrNullObject" type="Word.ContentControl">Gets the content control that contains the table. Returns a null object if there isn&apos;t a parent content control. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTable" type="Word.Table">Gets the table that contains this table. Throws if it is not contained in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableCell" type="Word.TableCell">Gets the table cell that contains this table. Throws if it is not contained in a table cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableCellOrNullObject" type="Word.TableCell">Gets the table cell that contains this table. Returns a null object if it is not contained in a table cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTableOrNullObject" type="Word.Table">Gets the table that contains this table. Returns a null object if it is not contained in a table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="rowCount" type="Number">Gets the number of rows in the table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="rows" type="Word.TableRowCollection">Gets all of the table rows. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="shadingColor" type="String">Gets and sets the shading color. [Api set: WordApi 1.3]</field>
			/// <field name="style" type="String">Gets or sets the style name for the table. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the &quot;styleBuiltIn&quot; property. [Api set: WordApi 1.3]</field>
			/// <field name="styleBandedColumns" type="Boolean">Gets and sets whether the table has banded columns. [Api set: WordApi 1.3]</field>
			/// <field name="styleBandedRows" type="Boolean">Gets and sets whether the table has banded rows. [Api set: WordApi 1.3]</field>
			/// <field name="styleBuiltIn" type="String">Gets or sets the built-in style name for the table. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the &quot;style&quot; property. [Api set: WordApi 1.3]</field>
			/// <field name="styleFirstColumn" type="Boolean">Gets and sets whether the table has a first column with a special style. [Api set: WordApi 1.3]</field>
			/// <field name="styleLastColumn" type="Boolean">Gets and sets whether the table has a last column with a special style. [Api set: WordApi 1.3]</field>
			/// <field name="styleTotalRow" type="Boolean">Gets and sets whether the table has a total (last) row with a special style. [Api set: WordApi 1.3]</field>
			/// <field name="tables" type="Word.TableCollection">Gets the child tables nested one level deeper. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="values" type="Array" elementType="Array">Gets and sets the text values in the table, as a 2D Javascript array. [Api set: WordApi 1.3]</field>
			/// <field name="verticalAlignment" type="String">Gets and sets the vertical alignment of every cell in the table. The value can be &apos;top&apos;, &apos;center&apos; or &apos;bottom&apos;. [Api set: WordApi 1.3]</field>
			/// <field name="width" type="Number">Gets and sets the width of the table in points. [Api set: WordApi 1.3]</field>
		}

		Table.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.Table"/>
		}

		Table.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.TableUpdateData">Properties described by the Word.Interfaces.TableUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="Table">An existing Table object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		Table.prototype.addColumns = function(insertLocation, columnCount, values) {
			/// <summary>
			/// Adds columns to the start or end of the table, using the first or last existing column as a template. This is applicable to uniform tables. The string values, if specified, are set in the newly inserted rows. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="insertLocation" type="String">Required. It can be &apos;Start&apos; or &apos;End&apos;, corresponding to the appropriate side of the table.</param>
			/// <param name="columnCount" type="Number">Required. Number of columns to add.</param>
			/// <param name="values" type="Array" elementType="Array" optional="true">Optional 2D array. Cells are filled if the corresponding strings are specified in the array.</param>
			/// <returns ></returns>
		}
		Table.prototype.addRows = function(insertLocation, rowCount, values) {
			/// <summary>
			/// Adds rows to the start or end of the table, using the first or last existing row as a template. The string values, if specified, are set in the newly inserted rows. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="insertLocation" type="String">Required. It can be &apos;Start&apos; or &apos;End&apos;.</param>
			/// <param name="rowCount" type="Number">Required. Number of rows to add.</param>
			/// <param name="values" type="Array" elementType="Array" optional="true">Optional 2D array. Cells are filled if the corresponding strings are specified in the array.</param>
			/// <returns type="Word.TableRowCollection"></returns>
		}
		Table.prototype.autoFitWindow = function() {
			/// <summary>
			/// Autofits the table columns to the width of the window. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		Table.prototype.clear = function() {
			/// <summary>
			/// Clears the contents of the table. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		Table.prototype.delete = function() {
			/// <summary>
			/// Deletes the entire table. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		Table.prototype.deleteColumns = function(columnIndex, columnCount) {
			/// <summary>
			/// Deletes specific columns. This is applicable to uniform tables. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="columnIndex" type="Number">Required. The first column to delete.</param>
			/// <param name="columnCount" type="Number" optional="true">Optional. The number of columns to delete. Default 1.</param>
			/// <returns ></returns>
		}
		Table.prototype.deleteRows = function(rowIndex, rowCount) {
			/// <summary>
			/// Deletes specific rows. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rowIndex" type="Number">Required. The first row to delete.</param>
			/// <param name="rowCount" type="Number" optional="true">Optional. The number of rows to delete. Default 1.</param>
			/// <returns ></returns>
		}
		Table.prototype.distributeColumns = function() {
			/// <summary>
			/// Distributes the column widths evenly. This is applicable to uniform tables. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		Table.prototype.getBorder = function(borderLocation) {
			/// <summary>
			/// Gets the border style for the specified border. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="borderLocation" type="String">Required. The border location.</param>
			/// <returns type="Word.TableBorder"></returns>
		}
		Table.prototype.getCell = function(rowIndex, cellIndex) {
			/// <summary>
			/// Gets the table cell at a specified row and column. Throws if the specified table cell does not exist. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rowIndex" type="Number">Required. The index of the row.</param>
			/// <param name="cellIndex" type="Number">Required. The index of the cell in the row.</param>
			/// <returns type="Word.TableCell"></returns>
		}
		Table.prototype.getCellOrNullObject = function(rowIndex, cellIndex) {
			/// <summary>
			/// Gets the table cell at a specified row and column. Returns a null object if the specified table cell does not exist. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rowIndex" type="Number">Required. The index of the row.</param>
			/// <param name="cellIndex" type="Number">Required. The index of the cell in the row.</param>
			/// <returns type="Word.TableCell"></returns>
		}
		Table.prototype.getCellPadding = function(cellPaddingLocation) {
			/// <summary>
			/// Gets cell padding in points. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="cellPaddingLocation" type="String">Required. The cell padding location can be &apos;Top&apos;, &apos;Left&apos;, &apos;Bottom&apos; or &apos;Right&apos;.</param>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		Table.prototype.getNext = function() {
			/// <summary>
			/// Gets the next table. Throws if this table is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Table"></returns>
		}
		Table.prototype.getNextOrNullObject = function() {
			/// <summary>
			/// Gets the next table. Returns a null object if this table is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Table"></returns>
		}
		Table.prototype.getParagraphAfter = function() {
			/// <summary>
			/// Gets the paragraph after the table. Throws if there isn&apos;t a paragraph after the table. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		Table.prototype.getParagraphAfterOrNullObject = function() {
			/// <summary>
			/// Gets the paragraph after the table. Returns a null object if there isn&apos;t a paragraph after the table. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		Table.prototype.getParagraphBefore = function() {
			/// <summary>
			/// Gets the paragraph before the table. Throws if there isn&apos;t a paragraph before the table. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		Table.prototype.getParagraphBeforeOrNullObject = function() {
			/// <summary>
			/// Gets the paragraph before the table. Returns a null object if there isn&apos;t a paragraph before the table. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Paragraph"></returns>
		}
		Table.prototype.getRange = function(rangeLocation) {
			/// <summary>
			/// Gets the range that contains this table, or the range at the start or end of the table. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rangeLocation" type="String" optional="true">Optional. The range location can be &apos;Whole&apos;, &apos;Start&apos;, &apos;End&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Range"></returns>
		}
		Table.prototype.insertContentControl = function() {
			/// <summary>
			/// Inserts a content control on the table. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.ContentControl"></returns>
		}
		Table.prototype.insertParagraph = function(paragraphText, insertLocation) {
			/// <summary>
			/// Inserts a paragraph at the specified location. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="paragraphText" type="String">Required. The paragraph text to be inserted.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <returns type="Word.Paragraph"></returns>
		}
		Table.prototype.insertTable = function(rowCount, columnCount, insertLocation, values) {
			/// <summary>
			/// Inserts a table with the specified number of rows and columns. The insertLocation value can be &apos;Before&apos; or &apos;After&apos;. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="rowCount" type="Number">Required. The number of rows in the table.</param>
			/// <param name="columnCount" type="Number">Required. The number of columns in the table.</param>
			/// <param name="insertLocation" type="String">Required. The value can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <param name="values" type="Array" elementType="Array" optional="true">Optional 2D array. Cells are filled if the corresponding strings are specified in the array.</param>
			/// <returns type="Word.Table"></returns>
		}
		Table.prototype.search = function(searchText, searchOptions) {
			/// <summary>
			/// Performs a search with the specified searchOptions on the scope of the table object. The search results are a collection of range objects. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="searchText" type="String">Required. The search text.</param>
			/// <param name="searchOptions" type="Word.SearchOptions" optional="true">Optional. Options for the search.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}
		Table.prototype.select = function(selectionMode) {
			/// <summary>
			/// Selects the table, or the position at the start or end of the table, and navigates the Word UI to it. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="selectionMode" type="String" optional="true">Optional. The selection mode can be &apos;Select&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Select&apos; is the default.</param>
			/// <returns ></returns>
		}
		Table.prototype.setCellPadding = function(cellPaddingLocation, cellPadding) {
			/// <summary>
			/// Sets cell padding in points. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="cellPaddingLocation" type="String">Required. The cell padding location can be &apos;Top&apos;, &apos;Left&apos;, &apos;Bottom&apos; or &apos;Right&apos;.</param>
			/// <param name="cellPadding" type="Number">Required. The cell padding.</param>
			/// <returns ></returns>
		}

		Table.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.Table"/>
		}

		Table.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.Table"/>
		}

		return Table;
	})(OfficeExtension.ClientObject);
	Word.Table = Table;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var TableBorder = (function(_super) {
		__extends(TableBorder, _super);
		function TableBorder() {
			/// <summary> Specifies the border style [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="color" type="String">Gets or sets the table border color, as a hex value or name. [Api set: WordApi 1.3]</field>
			/// <field name="type" type="String">Gets or sets the type of the table border. [Api set: WordApi 1.3]</field>
			/// <field name="width" type="Number">Gets or sets the width, in points, of the table border. Not applicable to table border types that have fixed widths. [Api set: WordApi 1.3]</field>
		}

		TableBorder.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.TableBorder"/>
		}

		TableBorder.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.TableBorderUpdateData">Properties described by the Word.Interfaces.TableBorderUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="TableBorder">An existing TableBorder object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}

		TableBorder.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.TableBorder"/>
		}

		TableBorder.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.TableBorder"/>
		}

		return TableBorder;
	})(OfficeExtension.ClientObject);
	Word.TableBorder = TableBorder;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var TableCell = (function(_super) {
		__extends(TableCell, _super);
		function TableCell() {
			/// <summary> Represents a table cell in a Word document. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="body" type="Word.Body">Gets the body object of the cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="cellIndex" type="Number">Gets the index of the cell in its row. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="columnWidth" type="Number">Gets and sets the width of the cell&apos;s column in points. This is applicable to uniform tables. [Api set: WordApi 1.3]</field>
			/// <field name="horizontalAlignment" type="String">Gets and sets the horizontal alignment of the cell. The value can be &apos;left&apos;, &apos;centered&apos;, &apos;right&apos;, or &apos;justified&apos;. [Api set: WordApi 1.3]</field>
			/// <field name="parentRow" type="Word.TableRow">Gets the parent row of the cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="parentTable" type="Word.Table">Gets the parent table of the cell. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="rowIndex" type="Number">Gets the index of the cell&apos;s row in the table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="shadingColor" type="String">Gets or sets the shading color of the cell. Color is specified in &quot;#RRGGBB&quot; format or by using the color name. [Api set: WordApi 1.3]</field>
			/// <field name="value" type="String">Gets and sets the text of the cell. [Api set: WordApi 1.3]</field>
			/// <field name="verticalAlignment" type="String">Gets and sets the vertical alignment of the cell. The value can be &apos;top&apos;, &apos;center&apos; or &apos;bottom&apos;. [Api set: WordApi 1.3]</field>
			/// <field name="width" type="Number">Gets the width of the cell in points. Read-only. [Api set: WordApi 1.3]</field>
		}

		TableCell.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.TableCell"/>
		}

		TableCell.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.TableCellUpdateData">Properties described by the Word.Interfaces.TableCellUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="TableCell">An existing TableCell object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		TableCell.prototype.deleteColumn = function() {
			/// <summary>
			/// Deletes the column containing this cell. This is applicable to uniform tables. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		TableCell.prototype.deleteRow = function() {
			/// <summary>
			/// Deletes the row containing this cell. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		TableCell.prototype.getBorder = function(borderLocation) {
			/// <summary>
			/// Gets the border style for the specified border. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="borderLocation" type="String">Required. The border location.</param>
			/// <returns type="Word.TableBorder"></returns>
		}
		TableCell.prototype.getCellPadding = function(cellPaddingLocation) {
			/// <summary>
			/// Gets cell padding in points. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="cellPaddingLocation" type="String">Required. The cell padding location can be &apos;Top&apos;, &apos;Left&apos;, &apos;Bottom&apos; or &apos;Right&apos;.</param>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		TableCell.prototype.getNext = function() {
			/// <summary>
			/// Gets the next cell. Throws if this cell is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.TableCell"></returns>
		}
		TableCell.prototype.getNextOrNullObject = function() {
			/// <summary>
			/// Gets the next cell. Returns a null object if this cell is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.TableCell"></returns>
		}
		TableCell.prototype.insertColumns = function(insertLocation, columnCount, values) {
			/// <summary>
			/// Adds columns to the left or right of the cell, using the cell&apos;s column as a template. This is applicable to uniform tables. The string values, if specified, are set in the newly inserted rows. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="insertLocation" type="String">Required. It can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <param name="columnCount" type="Number">Required. Number of columns to add</param>
			/// <param name="values" type="Array" elementType="Array" optional="true">Optional 2D array. Cells are filled if the corresponding strings are specified in the array.</param>
			/// <returns ></returns>
		}
		TableCell.prototype.insertRows = function(insertLocation, rowCount, values) {
			/// <summary>
			/// Inserts rows above or below the cell, using the cell&apos;s row as a template. The string values, if specified, are set in the newly inserted rows. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="insertLocation" type="String">Required. It can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <param name="rowCount" type="Number">Required. Number of rows to add.</param>
			/// <param name="values" type="Array" elementType="Array" optional="true">Optional 2D array. Cells are filled if the corresponding strings are specified in the array.</param>
			/// <returns type="Word.TableRowCollection"></returns>
		}
		TableCell.prototype.setCellPadding = function(cellPaddingLocation, cellPadding) {
			/// <summary>
			/// Sets cell padding in points. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="cellPaddingLocation" type="String">Required. The cell padding location can be &apos;Top&apos;, &apos;Left&apos;, &apos;Bottom&apos; or &apos;Right&apos;.</param>
			/// <param name="cellPadding" type="Number">Required. The cell padding.</param>
			/// <returns ></returns>
		}

		TableCell.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.TableCell"/>
		}

		TableCell.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.TableCell"/>
		}

		return TableCell;
	})(OfficeExtension.ClientObject);
	Word.TableCell = TableCell;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var TableCellCollection = (function(_super) {
		__extends(TableCellCollection, _super);
		function TableCellCollection() {
			/// <summary> Contains the collection of the document&apos;s TableCell objects. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Word.TableCell">Gets the loaded child items in this collection.</field>
		}

		TableCellCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.TableCellCollection"/>
		}
		TableCellCollection.prototype.getFirst = function() {
			/// <summary>
			/// Gets the first table cell in this collection. Throws if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.TableCell"></returns>
		}
		TableCellCollection.prototype.getFirstOrNullObject = function() {
			/// <summary>
			/// Gets the first table cell in this collection. Returns a null object if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.TableCell"></returns>
		}

		TableCellCollection.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.TableCellCollection"/>
		}

		TableCellCollection.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.TableCellCollection"/>
		}

		return TableCellCollection;
	})(OfficeExtension.ClientObject);
	Word.TableCellCollection = TableCellCollection;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var TableCollection = (function(_super) {
		__extends(TableCollection, _super);
		function TableCollection() {
			/// <summary> Contains the collection of the document&apos;s Table objects. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Word.Table">Gets the loaded child items in this collection.</field>
		}

		TableCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.TableCollection"/>
		}
		TableCollection.prototype.getFirst = function() {
			/// <summary>
			/// Gets the first table in this collection. Throws if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Table"></returns>
		}
		TableCollection.prototype.getFirstOrNullObject = function() {
			/// <summary>
			/// Gets the first table in this collection. Returns a null object if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.Table"></returns>
		}

		TableCollection.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.TableCollection"/>
		}

		TableCollection.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.TableCollection"/>
		}

		return TableCollection;
	})(OfficeExtension.ClientObject);
	Word.TableCollection = TableCollection;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var TableRow = (function(_super) {
		__extends(TableRow, _super);
		function TableRow() {
			/// <summary> Represents a row in a Word document. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="cellCount" type="Number">Gets the number of cells in the row. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="cells" type="Word.TableCellCollection">Gets cells. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="font" type="Word.Font">Gets the font. Use this to get and set font name, size, color, and other properties. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="horizontalAlignment" type="String">Gets and sets the horizontal alignment of every cell in the row. The value can be &apos;left&apos;, &apos;centered&apos;, &apos;right&apos;, or &apos;justified&apos;. [Api set: WordApi 1.3]</field>
			/// <field name="isHeader" type="Boolean">Checks whether the row is a header row. Read-only. To set the number of header rows, use HeaderRowCount on the Table object. [Api set: WordApi 1.3]</field>
			/// <field name="parentTable" type="Word.Table">Gets parent table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="preferredHeight" type="Number">Gets and sets the preferred height of the row in points. [Api set: WordApi 1.3]</field>
			/// <field name="rowIndex" type="Number">Gets the index of the row in its parent table. Read-only. [Api set: WordApi 1.3]</field>
			/// <field name="shadingColor" type="String">Gets and sets the shading color. [Api set: WordApi 1.3]</field>
			/// <field name="values" type="Array" elementType="Array">Gets and sets the text values in the row, as a 2D Javascript array. [Api set: WordApi 1.3]</field>
			/// <field name="verticalAlignment" type="String">Gets and sets the vertical alignment of the cells in the row. The value can be &apos;top&apos;, &apos;center&apos; or &apos;bottom&apos;. [Api set: WordApi 1.3]</field>
		}

		TableRow.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.TableRow"/>
		}

		TableRow.prototype.set = function() {
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on JSON input.</summary>
			/// <param name="properties" type="Word.Interfaces.TableRowUpdateData">Properties described by the Word.Interfaces.TableRowUpdateData interface.</param>
			/// <param name="options" type="string">Options of the form { throwOnReadOnly?: boolean }
			/// <br />
			/// * throwOnReadOnly: Throw an error if the passed-in property list includes read-only properties (default = true).
			/// </param>
			/// </signature>
			/// <signature>
			/// <summary>Sets multiple properties on the object at the same time, based on an existing loaded object.</summary>
			/// <param name="properties" type="TableRow">An existing TableRow object, with properties that have already been loaded and synced.</param>
			/// </signature>
		}
		TableRow.prototype.clear = function() {
			/// <summary>
			/// Clears the contents of the row. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		TableRow.prototype.delete = function() {
			/// <summary>
			/// Deletes the entire row. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns ></returns>
		}
		TableRow.prototype.getBorder = function(borderLocation) {
			/// <summary>
			/// Gets the border style of the cells in the row. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="borderLocation" type="String">Required. The border location.</param>
			/// <returns type="Word.TableBorder"></returns>
		}
		TableRow.prototype.getCellPadding = function(cellPaddingLocation) {
			/// <summary>
			/// Gets cell padding in points. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="cellPaddingLocation" type="String">Required. The cell padding location can be &apos;Top&apos;, &apos;Left&apos;, &apos;Bottom&apos; or &apos;Right&apos;.</param>
			/// <returns type="OfficeExtension.ClientResult&lt;number&gt;"></returns>
			var result = new OfficeExtension.ClientResult();
			result.__proto__ = null;
			result.value = 0;
			return result;
		}
		TableRow.prototype.getNext = function() {
			/// <summary>
			/// Gets the next row. Throws if this row is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.TableRow"></returns>
		}
		TableRow.prototype.getNextOrNullObject = function() {
			/// <summary>
			/// Gets the next row. Returns a null object if this row is the last one. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.TableRow"></returns>
		}
		TableRow.prototype.insertRows = function(insertLocation, rowCount, values) {
			/// <summary>
			/// Inserts rows using this row as a template. If values are specified, inserts the values into the new rows. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="insertLocation" type="String">Required. Where the new rows should be inserted, relative to the current row. It can be &apos;Before&apos; or &apos;After&apos;.</param>
			/// <param name="rowCount" type="Number">Required. Number of rows to add</param>
			/// <param name="values" type="Array" elementType="Array" optional="true">Optional. Strings to insert in the new rows, specified as a 2D array. The number of cells in each row must not exceed the number of cells in the existing row.</param>
			/// <returns type="Word.TableRowCollection"></returns>
		}
		TableRow.prototype.search = function(searchText, searchOptions) {
			/// <summary>
			/// Performs a search with the specified searchOptions on the scope of the row. The search results are a collection of range objects. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="searchText" type="String">Required. The search text.</param>
			/// <param name="searchOptions" type="Word.SearchOptions" optional="true">Optional. Options for the search.</param>
			/// <returns type="Word.RangeCollection"></returns>
		}
		TableRow.prototype.select = function(selectionMode) {
			/// <summary>
			/// Selects the row and navigates the Word UI to it. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="selectionMode" type="String" optional="true">Optional. The selection mode can be &apos;Select&apos;, &apos;Start&apos; or &apos;End&apos;. &apos;Select&apos; is the default.</param>
			/// <returns ></returns>
		}
		TableRow.prototype.setCellPadding = function(cellPaddingLocation, cellPadding) {
			/// <summary>
			/// Sets cell padding in points. [Api set: WordApi 1.3]
			/// </summary>
			/// <param name="cellPaddingLocation" type="String">Required. The cell padding location can be &apos;Top&apos;, &apos;Left&apos;, &apos;Bottom&apos; or &apos;Right&apos;.</param>
			/// <param name="cellPadding" type="Number">Required. The cell padding.</param>
			/// <returns ></returns>
		}

		TableRow.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.TableRow"/>
		}

		TableRow.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.TableRow"/>
		}

		return TableRow;
	})(OfficeExtension.ClientObject);
	Word.TableRow = TableRow;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var TableRowCollection = (function(_super) {
		__extends(TableRowCollection, _super);
		function TableRowCollection() {
			/// <summary> Contains the collection of the document&apos;s TableRow objects. [Api set: WordApi 1.3] </summary>
			/// <field name="context" type="Word.RequestContext">The request context associated with this object.</field>
			/// <field name="isNull" type="Boolean">Returns a boolean value for whether the corresponding object is null. You must call "context.sync()" before reading the isNull property.</field>
			/// <field name="items" type="Array" elementType="Word.TableRow">Gets the loaded child items in this collection.</field>
		}

		TableRowCollection.prototype.load = function(option) {
			/// <summary>
			/// Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
			/// </summary>
			/// <param name="option" type="string | string[] | OfficeExtension.LoadOption"/>
			/// <returns type="Word.TableRowCollection"/>
		}
		TableRowCollection.prototype.getFirst = function() {
			/// <summary>
			/// Gets the first row in this collection. Throws if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.TableRow"></returns>
		}
		TableRowCollection.prototype.getFirstOrNullObject = function() {
			/// <summary>
			/// Gets the first row in this collection. Returns a null object if this collection is empty. [Api set: WordApi 1.3]
			/// </summary>
			/// <returns type="Word.TableRow"></returns>
		}

		TableRowCollection.prototype.track = function() {
			/// <summary>
			/// Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
			/// </summary>
			/// <returns type="Word.TableRowCollection"/>
		}

		TableRowCollection.prototype.untrack = function() {
			/// <summary>
			/// Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
			/// </summary>
			/// <returns type="Word.TableRowCollection"/>
		}

		return TableRowCollection;
	})(OfficeExtension.ClientObject);
	Word.TableRowCollection = TableRowCollection;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> Underline types [Api set: WordApi] </summary>
	var UnderlineType = {
		__proto__: null,
		"mixed": "mixed",
		"none": "none",
		"single": "single",
		"word": "word",
		"double": "double",
		"thick": "thick",
		"dotted": "dotted",
		"dottedHeavy": "dottedHeavy",
		"dashLine": "dashLine",
		"dashLineHeavy": "dashLineHeavy",
		"dashLineLong": "dashLineLong",
		"dashLineLongHeavy": "dashLineLongHeavy",
		"dotDashLine": "dotDashLine",
		"dotDashLineHeavy": "dotDashLineHeavy",
		"twoDotDashLine": "twoDotDashLine",
		"twoDotDashLineHeavy": "twoDotDashLineHeavy",
		"wave": "wave",
		"waveHeavy": "waveHeavy",
		"waveDouble": "waveDouble",
	}
	Word.UnderlineType = UnderlineType;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	/// <summary> [Api set: WordApi] </summary>
	var VerticalAlignment = {
		__proto__: null,
		"mixed": "mixed",
		"top": "top",
		"center": "center",
		"bottom": "bottom",
	}
	Word.VerticalAlignment = VerticalAlignment;
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var BodyUpdateData = (function() {
			function BodyUpdateData() {
				/// <summary>An interface for updating data on the Body object, for use in "body.set({ ... })".</summary>
				/// <field name="font" type="Word.Interfaces.FontUpdateData">Gets the text format of the body. Use this to get and set font name, size, color and other properties. [Api set: WordApi 1.1]</field>
				/// <field name="style" type="String">Gets or sets the style name for the body. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the &quot;styleBuiltIn&quot; property. [Api set: WordApi 1.1]</field>;
				/// <field name="styleBuiltIn" type="String">Gets or sets the built-in style name for the body. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the &quot;style&quot; property. [Api set: WordApi 1.3]</field>;
			}
			return BodyUpdateData;
		})();
		Interfaces.BodyUpdateData.__proto__ = null;
		Interfaces.BodyUpdateData = BodyUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var ContentControlUpdateData = (function() {
			function ContentControlUpdateData() {
				/// <summary>An interface for updating data on the ContentControl object, for use in "contentControl.set({ ... })".</summary>
				/// <field name="font" type="Word.Interfaces.FontUpdateData">Gets the text format of the content control. Use this to get and set font name, size, color, and other properties. [Api set: WordApi 1.1]</field>
				/// <field name="appearance" type="String">Gets or sets the appearance of the content control. The value can be &apos;boundingBox&apos;, &apos;tags&apos; or &apos;hidden&apos;. [Api set: WordApi 1.1]</field>;
				/// <field name="cannotDelete" type="Boolean">Gets or sets a value that indicates whether the user can delete the content control. Mutually exclusive with removeWhenEdited. [Api set: WordApi 1.1]</field>;
				/// <field name="cannotEdit" type="Boolean">Gets or sets a value that indicates whether the user can edit the contents of the content control. [Api set: WordApi 1.1]</field>;
				/// <field name="color" type="String">Gets or sets the color of the content control. Color is specified in &apos;#RRGGBB&apos; format or by using the color name. [Api set: WordApi 1.1]</field>;
				/// <field name="placeholderText" type="String">Gets or sets the placeholder text of the content control. Dimmed text will be displayed when the content control is empty. [Api set: WordApi 1.1]</field>;
				/// <field name="removeWhenEdited" type="Boolean">Gets or sets a value that indicates whether the content control is removed after it is edited. Mutually exclusive with cannotDelete. [Api set: WordApi 1.1]</field>;
				/// <field name="style" type="String">Gets or sets the style name for the content control. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the &quot;styleBuiltIn&quot; property. [Api set: WordApi 1.1]</field>;
				/// <field name="styleBuiltIn" type="String">Gets or sets the built-in style name for the content control. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the &quot;style&quot; property. [Api set: WordApi 1.3]</field>;
				/// <field name="tag" type="String">Gets or sets a tag to identify a content control. [Api set: WordApi 1.1]</field>;
				/// <field name="title" type="String">Gets or sets the title for a content control. [Api set: WordApi 1.1]</field>;
			}
			return ContentControlUpdateData;
		})();
		Interfaces.ContentControlUpdateData.__proto__ = null;
		Interfaces.ContentControlUpdateData = ContentControlUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var CustomPropertyUpdateData = (function() {
			function CustomPropertyUpdateData() {
				/// <summary>An interface for updating data on the CustomProperty object, for use in "customProperty.set({ ... })".</summary>
				/// <field name="value" >Gets or sets the value of the custom property. Note that even though Word Online and the docx file format allow these properties to be arbitrarily long, the desktop version of Word will truncate string values to 255 16-bit chars (possibly creating invalid unicode by breaking up a surrogate pair). [Api set: WordApi 1.3]</field>;
			}
			return CustomPropertyUpdateData;
		})();
		Interfaces.CustomPropertyUpdateData.__proto__ = null;
		Interfaces.CustomPropertyUpdateData = CustomPropertyUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var DocumentUpdateData = (function() {
			function DocumentUpdateData() {
				/// <summary>An interface for updating data on the Document object, for use in "document.set({ ... })".</summary>
				/// <field name="body" type="Word.Interfaces.BodyUpdateData">Gets the body object of the document. The body is the text that excludes headers, footers, footnotes, textboxes, etc.. [Api set: WordApi 1.1]</field>
				/// <field name="properties" type="Word.Interfaces.DocumentPropertiesUpdateData">Gets the properties of the document. [Api set: WordApi 1.3]</field>
			}
			return DocumentUpdateData;
		})();
		Interfaces.DocumentUpdateData.__proto__ = null;
		Interfaces.DocumentUpdateData = DocumentUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var DocumentCreatedUpdateData = (function() {
			function DocumentCreatedUpdateData() {
				/// <summary>An interface for updating data on the DocumentCreated object, for use in "documentCreated.set({ ... })".</summary>
				/// <field name="body" type="Word.Interfaces.BodyUpdateData">Gets the body object of the document. The body is the text that excludes headers, footers, footnotes, textboxes, etc.. [Api set: WordApiHiddenDocument 1.3]</field>
				/// <field name="properties" type="Word.Interfaces.DocumentPropertiesUpdateData">Gets the properties of the document. [Api set: WordApiHiddenDocument 1.3]</field>
			}
			return DocumentCreatedUpdateData;
		})();
		Interfaces.DocumentCreatedUpdateData.__proto__ = null;
		Interfaces.DocumentCreatedUpdateData = DocumentCreatedUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var DocumentPropertiesUpdateData = (function() {
			function DocumentPropertiesUpdateData() {
				/// <summary>An interface for updating data on the DocumentProperties object, for use in "documentProperties.set({ ... })".</summary>
				/// <field name="author" type="String">Gets or sets the author of the document. [Api set: WordApi 1.3]</field>;
				/// <field name="category" type="String">Gets or sets the category of the document. [Api set: WordApi 1.3]</field>;
				/// <field name="comments" type="String">Gets or sets the comments of the document. [Api set: WordApi 1.3]</field>;
				/// <field name="company" type="String">Gets or sets the company of the document. [Api set: WordApi 1.3]</field>;
				/// <field name="format" type="String">Gets or sets the format of the document. [Api set: WordApi 1.3]</field>;
				/// <field name="keywords" type="String">Gets or sets the keywords of the document. [Api set: WordApi 1.3]</field>;
				/// <field name="manager" type="String">Gets or sets the manager of the document. [Api set: WordApi 1.3]</field>;
				/// <field name="subject" type="String">Gets or sets the subject of the document. [Api set: WordApi 1.3]</field>;
				/// <field name="title" type="String">Gets or sets the title of the document. [Api set: WordApi 1.3]</field>;
			}
			return DocumentPropertiesUpdateData;
		})();
		Interfaces.DocumentPropertiesUpdateData.__proto__ = null;
		Interfaces.DocumentPropertiesUpdateData = DocumentPropertiesUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var FontUpdateData = (function() {
			function FontUpdateData() {
				/// <summary>An interface for updating data on the Font object, for use in "font.set({ ... })".</summary>
				/// <field name="bold" type="Boolean">Gets or sets a value that indicates whether the font is bold. True if the font is formatted as bold, otherwise, false. [Api set: WordApi 1.1]</field>;
				/// <field name="color" type="String">Gets or sets the color for the specified font. You can provide the value in the &apos;#RRGGBB&apos; format or the color name. [Api set: WordApi 1.1]</field>;
				/// <field name="doubleStrikeThrough" type="Boolean">Gets or sets a value that indicates whether the font has a double strike through. True if the font is formatted as double strikethrough text, otherwise, false. [Api set: WordApi 1.1]</field>;
				/// <field name="highlightColor" type="String">Gets or sets the highlight color. To set it, use a value either in the &apos;#RRGGBB&apos; format or the color name. To remove highlight color, set it to null. The returned highlight color can be in the &apos;#RRGGBB&apos; format, or an empty string for mixed highlight colors, or null for no highlight color. [Api set: WordApi 1.1]</field>;
				/// <field name="italic" type="Boolean">Gets or sets a value that indicates whether the font is italicized. True if the font is italicized, otherwise, false. [Api set: WordApi 1.1]</field>;
				/// <field name="name" type="String">Gets or sets a value that represents the name of the font. [Api set: WordApi 1.1]</field>;
				/// <field name="size" type="Number">Gets or sets a value that represents the font size in points. [Api set: WordApi 1.1]</field>;
				/// <field name="strikeThrough" type="Boolean">Gets or sets a value that indicates whether the font has a strike through. True if the font is formatted as strikethrough text, otherwise, false. [Api set: WordApi 1.1]</field>;
				/// <field name="subscript" type="Boolean">Gets or sets a value that indicates whether the font is a subscript. True if the font is formatted as subscript, otherwise, false. [Api set: WordApi 1.1]</field>;
				/// <field name="superscript" type="Boolean">Gets or sets a value that indicates whether the font is a superscript. True if the font is formatted as superscript, otherwise, false. [Api set: WordApi 1.1]</field>;
				/// <field name="underline" type="String">Gets or sets a value that indicates the font&apos;s underline type. &apos;None&apos; if the font is not underlined. [Api set: WordApi 1.1]</field>;
			}
			return FontUpdateData;
		})();
		Interfaces.FontUpdateData.__proto__ = null;
		Interfaces.FontUpdateData = FontUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var InlinePictureUpdateData = (function() {
			function InlinePictureUpdateData() {
				/// <summary>An interface for updating data on the InlinePicture object, for use in "inlinePicture.set({ ... })".</summary>
				/// <field name="altTextDescription" type="String">Gets or sets a string that represents the alternative text associated with the inline image [Api set: WordApi 1.1]</field>;
				/// <field name="altTextTitle" type="String">Gets or sets a string that contains the title for the inline image. [Api set: WordApi 1.1]</field>;
				/// <field name="height" type="Number">Gets or sets a number that describes the height of the inline image. [Api set: WordApi 1.1]</field>;
				/// <field name="hyperlink" type="String">Gets or sets a hyperlink on the image. Use a &apos;#&apos; to separate the address part from the optional location part. [Api set: WordApi 1.1]</field>;
				/// <field name="lockAspectRatio" type="Boolean">Gets or sets a value that indicates whether the inline image retains its original proportions when you resize it. [Api set: WordApi 1.1]</field>;
				/// <field name="width" type="Number">Gets or sets a number that describes the width of the inline image. [Api set: WordApi 1.1]</field>;
			}
			return InlinePictureUpdateData;
		})();
		Interfaces.InlinePictureUpdateData.__proto__ = null;
		Interfaces.InlinePictureUpdateData = InlinePictureUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var ListItemUpdateData = (function() {
			function ListItemUpdateData() {
				/// <summary>An interface for updating data on the ListItem object, for use in "listItem.set({ ... })".</summary>
				/// <field name="level" type="Number">Gets or sets the level of the item in the list. [Api set: WordApi 1.3]</field>;
			}
			return ListItemUpdateData;
		})();
		Interfaces.ListItemUpdateData.__proto__ = null;
		Interfaces.ListItemUpdateData = ListItemUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var ParagraphUpdateData = (function() {
			function ParagraphUpdateData() {
				/// <summary>An interface for updating data on the Paragraph object, for use in "paragraph.set({ ... })".</summary>
				/// <field name="font" type="Word.Interfaces.FontUpdateData">Gets the text format of the paragraph. Use this to get and set font name, size, color, and other properties. [Api set: WordApi 1.1]</field>
				/// <field name="listItem" type="Word.Interfaces.ListItemUpdateData">Gets the ListItem for the paragraph. Throws if the paragraph is not part of a list. [Api set: WordApi 1.3]</field>
				/// <field name="listItemOrNullObject" type="Word.Interfaces.ListItemUpdateData">Gets the ListItem for the paragraph. Returns a null object if the paragraph is not part of a list. [Api set: WordApi 1.3]</field>
				/// <field name="alignment" type="String">Gets or sets the alignment for a paragraph. The value can be &apos;left&apos;, &apos;centered&apos;, &apos;right&apos;, or &apos;justified&apos;. [Api set: WordApi 1.1]</field>;
				/// <field name="firstLineIndent" type="Number">Gets or sets the value, in points, for a first line or hanging indent. Use a positive value to set a first-line indent, and use a negative value to set a hanging indent. [Api set: WordApi 1.1]</field>;
				/// <field name="leftIndent" type="Number">Gets or sets the left indent value, in points, for the paragraph. [Api set: WordApi 1.1]</field>;
				/// <field name="lineSpacing" type="Number">Gets or sets the line spacing, in points, for the specified paragraph. In the Word UI, this value is divided by 12. [Api set: WordApi 1.1]</field>;
				/// <field name="lineUnitAfter" type="Number">Gets or sets the amount of spacing, in grid lines. after the paragraph. [Api set: WordApi 1.1]</field>;
				/// <field name="lineUnitBefore" type="Number">Gets or sets the amount of spacing, in grid lines, before the paragraph. [Api set: WordApi 1.1]</field>;
				/// <field name="outlineLevel" type="Number">Gets or sets the outline level for the paragraph. [Api set: WordApi 1.1]</field>;
				/// <field name="rightIndent" type="Number">Gets or sets the right indent value, in points, for the paragraph. [Api set: WordApi 1.1]</field>;
				/// <field name="spaceAfter" type="Number">Gets or sets the spacing, in points, after the paragraph. [Api set: WordApi 1.1]</field>;
				/// <field name="spaceBefore" type="Number">Gets or sets the spacing, in points, before the paragraph. [Api set: WordApi 1.1]</field>;
				/// <field name="style" type="String">Gets or sets the style name for the paragraph. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the &quot;styleBuiltIn&quot; property. [Api set: WordApi 1.1]</field>;
				/// <field name="styleBuiltIn" type="String">Gets or sets the built-in style name for the paragraph. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the &quot;style&quot; property. [Api set: WordApi 1.3]</field>;
			}
			return ParagraphUpdateData;
		})();
		Interfaces.ParagraphUpdateData.__proto__ = null;
		Interfaces.ParagraphUpdateData = ParagraphUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var RangeUpdateData = (function() {
			function RangeUpdateData() {
				/// <summary>An interface for updating data on the Range object, for use in "range.set({ ... })".</summary>
				/// <field name="font" type="Word.Interfaces.FontUpdateData">Gets the text format of the range. Use this to get and set font name, size, color, and other properties. [Api set: WordApi 1.1]</field>
				/// <field name="hyperlink" type="String">Gets the first hyperlink in the range, or sets a hyperlink on the range. All hyperlinks in the range are deleted when you set a new hyperlink on the range. Use a &apos;#&apos; to separate the address part from the optional location part. [Api set: WordApi 1.3]</field>;
				/// <field name="style" type="String">Gets or sets the style name for the range. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the &quot;styleBuiltIn&quot; property. [Api set: WordApi 1.1]</field>;
				/// <field name="styleBuiltIn" type="String">Gets or sets the built-in style name for the range. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the &quot;style&quot; property. [Api set: WordApi 1.3]</field>;
			}
			return RangeUpdateData;
		})();
		Interfaces.RangeUpdateData.__proto__ = null;
		Interfaces.RangeUpdateData = RangeUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var SearchOptionsUpdateData = (function() {
			function SearchOptionsUpdateData() {
				/// <summary>An interface for updating data on the SearchOptions object, for use in "searchOptions.set({ ... })".</summary>
				/// <field name="ignorePunct" type="Boolean">Gets or sets a value that indicates whether to ignore all punctuation characters between words. Corresponds to the Ignore punctuation check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>;
				/// <field name="ignoreSpace" type="Boolean">Gets or sets a value that indicates whether to ignore all whitespace between words. Corresponds to the Ignore whitespace characters check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>;
				/// <field name="matchCase" type="Boolean">Gets or sets a value that indicates whether to perform a case sensitive search. Corresponds to the Match case check box in the Find and Replace dialog box (Edit menu). [Api set: WordApi 1.1]</field>;
				/// <field name="matchPrefix" type="Boolean">Gets or sets a value that indicates whether to match words that begin with the search string. Corresponds to the Match prefix check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>;
				/// <field name="matchSuffix" type="Boolean">Gets or sets a value that indicates whether to match words that end with the search string. Corresponds to the Match suffix check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>;
				/// <field name="matchWholeWord" type="Boolean">Gets or sets a value that indicates whether to find operation only entire words, not text that is part of a larger word. Corresponds to the Find whole words only check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>;
				/// <field name="matchWildcards" type="Boolean">Gets or sets a value that indicates whether the search will be performed using special search operators. Corresponds to the Use wildcards check box in the Find and Replace dialog box. [Api set: WordApi 1.1]</field>;
			}
			return SearchOptionsUpdateData;
		})();
		Interfaces.SearchOptionsUpdateData.__proto__ = null;
		Interfaces.SearchOptionsUpdateData = SearchOptionsUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var SectionUpdateData = (function() {
			function SectionUpdateData() {
				/// <summary>An interface for updating data on the Section object, for use in "section.set({ ... })".</summary>
				/// <field name="body" type="Word.Interfaces.BodyUpdateData">Gets the body object of the section. This does not include the header/footer and other section metadata. [Api set: WordApi 1.1]</field>
			}
			return SectionUpdateData;
		})();
		Interfaces.SectionUpdateData.__proto__ = null;
		Interfaces.SectionUpdateData = SectionUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var TableUpdateData = (function() {
			function TableUpdateData() {
				/// <summary>An interface for updating data on the Table object, for use in "table.set({ ... })".</summary>
				/// <field name="font" type="Word.Interfaces.FontUpdateData">Gets the font. Use this to get and set font name, size, color, and other properties. [Api set: WordApi 1.3]</field>
				/// <field name="alignment" type="String">Gets or sets the alignment of the table against the page column. The value can be &apos;left&apos;, &apos;centered&apos; or &apos;right&apos;. [Api set: WordApi 1.3]</field>;
				/// <field name="headerRowCount" type="Number">Gets and sets the number of header rows. [Api set: WordApi 1.3]</field>;
				/// <field name="horizontalAlignment" type="String">Gets and sets the horizontal alignment of every cell in the table. The value can be &apos;left&apos;, &apos;centered&apos;, &apos;right&apos;, or &apos;justified&apos;. [Api set: WordApi 1.3]</field>;
				/// <field name="shadingColor" type="String">Gets and sets the shading color. [Api set: WordApi 1.3]</field>;
				/// <field name="style" type="String">Gets or sets the style name for the table. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the &quot;styleBuiltIn&quot; property. [Api set: WordApi 1.3]</field>;
				/// <field name="styleBandedColumns" type="Boolean">Gets and sets whether the table has banded columns. [Api set: WordApi 1.3]</field>;
				/// <field name="styleBandedRows" type="Boolean">Gets and sets whether the table has banded rows. [Api set: WordApi 1.3]</field>;
				/// <field name="styleBuiltIn" type="String">Gets or sets the built-in style name for the table. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the &quot;style&quot; property. [Api set: WordApi 1.3]</field>;
				/// <field name="styleFirstColumn" type="Boolean">Gets and sets whether the table has a first column with a special style. [Api set: WordApi 1.3]</field>;
				/// <field name="styleLastColumn" type="Boolean">Gets and sets whether the table has a last column with a special style. [Api set: WordApi 1.3]</field>;
				/// <field name="styleTotalRow" type="Boolean">Gets and sets whether the table has a total (last) row with a special style. [Api set: WordApi 1.3]</field>;
				/// <field name="values" type="Array" elementType="Array">Gets and sets the text values in the table, as a 2D Javascript array. [Api set: WordApi 1.3]</field>;
				/// <field name="verticalAlignment" type="String">Gets and sets the vertical alignment of every cell in the table. The value can be &apos;top&apos;, &apos;center&apos; or &apos;bottom&apos;. [Api set: WordApi 1.3]</field>;
				/// <field name="width" type="Number">Gets and sets the width of the table in points. [Api set: WordApi 1.3]</field>;
			}
			return TableUpdateData;
		})();
		Interfaces.TableUpdateData.__proto__ = null;
		Interfaces.TableUpdateData = TableUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var TableRowUpdateData = (function() {
			function TableRowUpdateData() {
				/// <summary>An interface for updating data on the TableRow object, for use in "tableRow.set({ ... })".</summary>
				/// <field name="font" type="Word.Interfaces.FontUpdateData">Gets the font. Use this to get and set font name, size, color, and other properties. [Api set: WordApi 1.3]</field>
				/// <field name="horizontalAlignment" type="String">Gets and sets the horizontal alignment of every cell in the row. The value can be &apos;left&apos;, &apos;centered&apos;, &apos;right&apos;, or &apos;justified&apos;. [Api set: WordApi 1.3]</field>;
				/// <field name="preferredHeight" type="Number">Gets and sets the preferred height of the row in points. [Api set: WordApi 1.3]</field>;
				/// <field name="shadingColor" type="String">Gets and sets the shading color. [Api set: WordApi 1.3]</field>;
				/// <field name="values" type="Array" elementType="Array">Gets and sets the text values in the row, as a 2D Javascript array. [Api set: WordApi 1.3]</field>;
				/// <field name="verticalAlignment" type="String">Gets and sets the vertical alignment of the cells in the row. The value can be &apos;top&apos;, &apos;center&apos; or &apos;bottom&apos;. [Api set: WordApi 1.3]</field>;
			}
			return TableRowUpdateData;
		})();
		Interfaces.TableRowUpdateData.__proto__ = null;
		Interfaces.TableRowUpdateData = TableRowUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var TableCellUpdateData = (function() {
			function TableCellUpdateData() {
				/// <summary>An interface for updating data on the TableCell object, for use in "tableCell.set({ ... })".</summary>
				/// <field name="body" type="Word.Interfaces.BodyUpdateData">Gets the body object of the cell. [Api set: WordApi 1.3]</field>
				/// <field name="columnWidth" type="Number">Gets and sets the width of the cell&apos;s column in points. This is applicable to uniform tables. [Api set: WordApi 1.3]</field>;
				/// <field name="horizontalAlignment" type="String">Gets and sets the horizontal alignment of the cell. The value can be &apos;left&apos;, &apos;centered&apos;, &apos;right&apos;, or &apos;justified&apos;. [Api set: WordApi 1.3]</field>;
				/// <field name="shadingColor" type="String">Gets or sets the shading color of the cell. Color is specified in &quot;#RRGGBB&quot; format or by using the color name. [Api set: WordApi 1.3]</field>;
				/// <field name="value" type="String">Gets and sets the text of the cell. [Api set: WordApi 1.3]</field>;
				/// <field name="verticalAlignment" type="String">Gets and sets the vertical alignment of the cell. The value can be &apos;top&apos;, &apos;center&apos; or &apos;bottom&apos;. [Api set: WordApi 1.3]</field>;
			}
			return TableCellUpdateData;
		})();
		Interfaces.TableCellUpdateData.__proto__ = null;
		Interfaces.TableCellUpdateData = TableCellUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));

var Word;
(function (Word) {
	var Interfaces;
	(function (Interfaces) {
		var TableBorderUpdateData = (function() {
			function TableBorderUpdateData() {
				/// <summary>An interface for updating data on the TableBorder object, for use in "tableBorder.set({ ... })".</summary>
				/// <field name="color" type="String">Gets or sets the table border color, as a hex value or name. [Api set: WordApi 1.3]</field>;
				/// <field name="type" type="String">Gets or sets the type of the table border. [Api set: WordApi 1.3]</field>;
				/// <field name="width" type="Number">Gets or sets the width, in points, of the table border. Not applicable to table border types that have fixed widths. [Api set: WordApi 1.3]</field>;
			}
			return TableBorderUpdateData;
		})();
		Interfaces.TableBorderUpdateData.__proto__ = null;
		Interfaces.TableBorderUpdateData = TableBorderUpdateData;
	})(Interfaces = Word.Interfaces || (Word.Interfaces = { __proto__: null}));
})(Word || (Word = {__proto__: null}));
var Word;
(function (Word) {
	var RequestContext = (function (_super) {
		__extends(RequestContext, _super);
		function RequestContext() {
			/// <summary>
			/// The RequestContext object facilitates requests to the Word application. Since the Office add-in and the Word application run in two different processes, the request context is required to get access to the Word object model from the add-in.
			/// </summary>
				/// <field name="document" type="Word.Document">Root object for interacting with the document</field>
			_super.call(this, null);
		}
		return RequestContext;
	})(OfficeExtension.ClientRequestContext);
	Word.RequestContext = RequestContext;

	Word.run = function (batch) {
		/// <signature>
		/// <summary>
		/// Executes a batch script that performs actions on the Word object model, using a new RequestContext. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
		/// </summary>
		/// <param name="batch" type="function(context) { ... }">
		/// A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()").
		/// <br />
		/// The context parameter facilitates requests to the Word application. Since the Office add-in and the Word application run in two different processes, the RequestContext is required to get access to the Word object model from the add-in.
		/// </param>
		/// </signature>
		/// <signature>
		/// <summary>
		/// Executes a batch script that performs actions on the Word object model, using the RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
		/// </summary>
		/// <param name="object" type="OfficeExtension.ClientObject">
		/// A previously-created API object. The batch will use the same RequestContext as the passed-in object, which means that any changes applied to the object will be picked up by "context.sync()".
		/// </param>
		/// <param name="batch" type="function(context) { ... }">
		/// A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()").
		/// <br />
		/// The context parameter facilitates requests to the Word application. Since the Office add-in and the Word application run in two different processes, the RequestContext is required to get access to the Word object model from the add-in.
		/// </param>
		/// </signature>
		/// <signature>
		/// <summary>
		/// Executes a batch script that performs actions on the Word object model, using the RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
		/// </summary>
		/// <param name="objects" type="Array&lt;OfficeExtension.ClientObject&gt;">
		/// An array of previously-created API objects. The array will be validated to make sure that all of the objects share the same context. The batch will use this shared RequestContext, which means that any changes applied to these objects will be picked up by "context.sync()".
		/// </param>
		/// <param name="batch" type="function(context) { ... }">
		/// A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()").
		/// <br />
		/// The context parameter facilitates requests to the Word application. Since the Office add-in and the Word application run in two different processes, the RequestContext is required to get access to the Word object model from the add-in.
		/// </param>
		/// </signature>
		arguments[arguments.length - 1](new Word.RequestContext());
		return new OfficeExtension.Promise();
	}
})(Word || (Word = {__proto__: null}));
Word.__proto__ = null;