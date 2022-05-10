'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _reactJsonschemaForm = require('react-jsonschema-form');

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/root/open5gs/webui/src/components/Shared/Form.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: calc(100vw - 2rem);\n  '], ['\n    width: calc(100vw - 2rem);\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    height: calc(100vh - 16rem);\n  '], ['\n    height: calc(100vh - 16rem);\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1m62379-0'
})(['display:flex;flex-direction:column;postion:relative;width:', ';', ' background:white;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);'], function (p) {
  return p.width || '1050px';
}, _styleUtils.media.mobile(_templateObject));

var Header = _styledComponents2.default.div.withConfig({
  componentId: 's1m62379-1'
})(['display:flex;justify-content:flex-start;padding:1rem;font-size:1.5rem;background:', ';'], _openColor2.default.gray[1]);

var Body = _styledComponents2.default.div.withConfig({
  componentId: 's1m62379-2'
})(['padding:2rem;font-size:14px;height:', ';', ' overflow:scroll;'], function (p) {
  return p.height || '500px';
}, _styleUtils.media.mobile(_templateObject2));

var Footer = _styledComponents2.default.div.withConfig({
  componentId: 's1m62379-3'
})(['display:flex;justify-content:flex-end;padding:1rem;']);

/* We can UI design with styled-componented. Later! */
var REQUIRED_FIELD_SYMBOL = "*";

var CustomTitleField = function CustomTitleField(props) {
  var id = props.id,
      title = props.title,
      required = props.required;

  var legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return _react2.default.createElement('legend', { id: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, legend);
};

var fields = {
  TitleField: CustomTitleField
};

function Label(props) {
  //  modified by acetcom
  //  const { label, required, id } = props;
  var label = props.label,
      id = props.id;

  var required = 0;
  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    });
  }
  return _react2.default.createElement('label', { className: 'control-label', htmlFor: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, required ? label + REQUIRED_FIELD_SYMBOL : label);
}

var CustomFieldTemplate = function CustomFieldTemplate(props) {
  var id = props.id,
      classNames = props.classNames,
      label = props.label,
      children = props.children,
      errors = props.errors,
      help = props.help,
      description = props.description,
      hidden = props.hidden,
      required = props.required,
      displayLabel = props.displayLabel;

  if (hidden) {
    return children;
  }

  return _react2.default.createElement('div', { className: classNames, __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, displayLabel && _react2.default.createElement(Label, { label: label, required: required, id: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }), displayLabel && description ? description : null, children, errors, help);
};

var transformErrors = function transformErrors(errors) {
  return errors.map(function (error) {
    // use error messages from JSON schema if any
    if (error.schema.messages && error.schema.messages[error.name]) {
      return (0, _extends3.default)({}, error, {
        message: error.schema.messages[error.name]
      });
    }
    return error;
  });
};

var Form = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleChange = function (data) {
      var onChange = _this.props.onChange;

      var formDataChanged = null;
      if (onChange) {
        formDataChanged = onChange(data.formData);
      }
      _this.setState({
        editing: true,
        disableSubmitButton: (0, _keys2.default)(data.errors).length > 0,
        formData: formDataChanged ? formDataChanged : data.formData
      });
    }, _this.handleSubmit = function (data) {
      var onSubmit = _this.props.onSubmit;

      onSubmit(data.formData);
    }, _this.handleSubmitButton = function () {
      _this.setState({
        disabled: true,
        disableSubmitButton: true
      });
      _this.submitButton.click();
    }, _this.handleOutside = function () {
      var onHide = _this.props.onHide;

      if (_this.state.editing === true) {
        _this.setState({ confirm: true });
      } else {
        onHide();
      }
    }, _this.handleClose = function () {
      var onHide = _this.props.onHide;

      _this.setState({ confirm: false });
      onHide();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Form, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visible === false && nextProps.visible === true) {
        // Initialize State Variable when form view is visible for the first time
        this.setState({
          formData: nextProps.formData,
          disabled: false,
          editing: false,
          confirm: false,
          disableSubmitButton: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var handleChange = this.handleChange,
          handleSubmit = this.handleSubmit,
          handleSubmitButton = this.handleSubmitButton,
          handleOutside = this.handleOutside,
          handleClose = this.handleClose;
      var _props = this.props,
          visible = _props.visible,
          title = _props.title,
          schema = _props.schema,
          uiSchema = _props.uiSchema,
          isLoading = _props.isLoading,
          validate = _props.validate,
          onSubmit = _props.onSubmit,
          onError = _props.onError;
      var _state = this.state,
          disabled = _state.disabled,
          disableSubmitButton = _state.disableSubmitButton,
          formData = _state.formData;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, _react2.default.createElement(_Modal2.default, {
        visible: visible,
        onOutside: handleOutside,
        disableOnClickOutside: this.state.confirm, __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, _react2.default.createElement(Wrapper, { id: 'nprogress-base-form', width: this.props.width, __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, title), _react2.default.createElement(Body, { height: this.props.height, __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, isLoading && _react2.default.createElement(_Spinner2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }), !isLoading && _react2.default.createElement(_reactJsonschemaForm2.default, {
        schema: schema,
        uiSchema: disabled ? (0, _extends3.default)({
          "ui:disabled": true
        }, uiSchema) : (0, _extends3.default)({}, uiSchema),
        formData: formData,
        disableSubmitButton: disableSubmitButton,
        fields: fields,
        FieldTemplate: CustomFieldTemplate,
        liveValidate: true,
        validate: validate,
        showErrorList: false,
        transformErrors: transformErrors,
        autocomplete: 'off',
        onChange: handleChange,
        onSubmit: handleSubmit,
        onError: onError, __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, _react2.default.createElement('div', {
        'data-jsx': 301980644,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, _react2.default.createElement('button', { type: 'submit', ref: function ref(el) {
          return _this2.submitButton = el;
        }, 'data-jsx': 301980644,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 301980644,
        css: 'button[data-jsx="301980644"]{display:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNSZ0MsQUFHc0MsYUFDZiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9TaGFyZWQvRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvcm9vdC9vcGVuNWdzL3dlYnVpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgb2MgZnJvbSAnb3Blbi1jb2xvcic7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJ2hlbHBlcnMvc3R5bGUtdXRpbHMnO1xuXG5pbXBvcnQgSnNvblNjaGVtYUZvcm0gZnJvbSAncmVhY3QtanNvbnNjaGVtYS1mb3JtJztcblxuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuaW1wb3J0IENvbmZpcm0gZnJvbSAnLi9Db25maXJtJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc3Rpb246IHJlbGF0aXZlO1xuICB3aWR0aDogJHtwID0+IHAud2lkdGggfHwgYDEwNTBweGB9O1xuXG4gICR7bWVkaWEubW9iaWxlYFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gIGB9XG5cbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xuYFxuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJhY2tncm91bmQ6ICR7b2MuZ3JheVsxXX07XG5gXG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAycmVtO1xuICBmb250LXNpemU6IDE0cHg7XG5cbiAgaGVpZ2h0OiAke3AgPT4gcC5oZWlnaHQgfHwgYDUwMHB4YH07XG4gICR7bWVkaWEubW9iaWxlYFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2cmVtKTtcbiAgYH1cblxuICBvdmVyZmxvdzogc2Nyb2xsO1xuYFxuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gIHBhZGRpbmc6IDFyZW07XG5gXG5cbi8qIFdlIGNhbiBVSSBkZXNpZ24gd2l0aCBzdHlsZWQtY29tcG9uZW50ZWQuIExhdGVyISAqL1xuY29uc3QgUkVRVUlSRURfRklFTERfU1lNQk9MID0gXCIqXCI7XG5cbmNvbnN0IEN1c3RvbVRpdGxlRmllbGQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgaWQsIHRpdGxlLCByZXF1aXJlZCB9ID0gcHJvcHM7XG4gIGNvbnN0IGxlZ2VuZCA9IHJlcXVpcmVkID8gdGl0bGUgKyBSRVFVSVJFRF9GSUVMRF9TWU1CT0wgOiB0aXRsZTtcbiAgcmV0dXJuIDxsZWdlbmQgaWQ9e2lkfT57bGVnZW5kfTwvbGVnZW5kPjtcblxufTtcblxuY29uc3QgZmllbGRzID0ge1xuICBUaXRsZUZpZWxkOiBDdXN0b21UaXRsZUZpZWxkLFxufTtcblxuZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbi8vICBtb2RpZmllZCBieSBhY2V0Y29tXG4vLyAgY29uc3QgeyBsYWJlbCwgcmVxdWlyZWQsIGlkIH0gPSBwcm9wcztcbiAgY29uc3QgeyBsYWJlbCwgaWQgfSA9IHByb3BzO1xuICBjb25zdCByZXF1aXJlZCA9IDA7XG4gIGlmICghbGFiZWwpIHtcbiAgICAvLyBTZWUgIzMxMjogRW5zdXJlIGNvbXBhdGliaWxpdHkgd2l0aCBvbGQgdmVyc2lvbnMgb2YgUmVhY3QuXG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9e2lkfT5cbiAgICAgIHtyZXF1aXJlZCA/IGxhYmVsICsgUkVRVUlSRURfRklFTERfU1lNQk9MIDogbGFiZWx9XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cblxuY29uc3QgQ3VzdG9tRmllbGRUZW1wbGF0ZSA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGNsYXNzTmFtZXMsXG4gICAgbGFiZWwsXG4gICAgY2hpbGRyZW4sXG4gICAgZXJyb3JzLFxuICAgIGhlbHAsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaGlkZGVuLFxuICAgIHJlcXVpcmVkLFxuICAgIGRpc3BsYXlMYWJlbCxcbiAgfSA9IHByb3BzO1xuXG4gIGlmIChoaWRkZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cbiAgICAgIHtkaXNwbGF5TGFiZWwgJiYgPExhYmVsIGxhYmVsPXtsYWJlbH0gcmVxdWlyZWQ9e3JlcXVpcmVkfSBpZD17aWR9IC8+fVxuICAgICAge2Rpc3BsYXlMYWJlbCAmJiBkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogbnVsbH1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtlcnJvcnN9XG4gICAgICB7aGVscH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgdHJhbnNmb3JtRXJyb3JzID0gZXJyb3JzID0+IHtcbiAgcmV0dXJuIGVycm9ycy5tYXAoZXJyb3IgPT4ge1xuICAgIC8vIHVzZSBlcnJvciBtZXNzYWdlcyBmcm9tIEpTT04gc2NoZW1hIGlmIGFueVxuICAgIGlmIChlcnJvci5zY2hlbWEubWVzc2FnZXMgJiYgZXJyb3Iuc2NoZW1hLm1lc3NhZ2VzW2Vycm9yLm5hbWVdKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5lcnJvcixcbiAgICAgICAgbWVzc2FnZTogZXJyb3Iuc2NoZW1hLm1lc3NhZ2VzW2Vycm9yLm5hbWVdXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG4gIH0pO1xufTtcblxuY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2NoZW1hOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHVpU2NoZW1hOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZvcm1EYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgdmFsZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIHRpdGxlOiBcIlwiXG4gIH07XG5cbiAgc3RhdGUgPSB7fTtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgPT09IGZhbHNlICYmIG5leHRQcm9wcy52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgICAvLyBJbml0aWFsaXplIFN0YXRlIFZhcmlhYmxlIHdoZW4gZm9ybSB2aWV3IGlzIHZpc2libGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgIGZvcm1EYXRhOiBuZXh0UHJvcHMuZm9ybURhdGEsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgZWRpdGluZzogZmFsc2UsXG4gICAgICAgIGNvbmZpcm06IGZhbHNlLFxuICAgICAgICBkaXNhYmxlU3VibWl0QnV0dG9uOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGRhdGEgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2hhbmdlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgZm9ybURhdGFDaGFuZ2VkID0gbnVsbDsgIFxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgIGZvcm1EYXRhQ2hhbmdlZCA9IG9uQ2hhbmdlKGRhdGEuZm9ybURhdGEpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRpbmc6IHRydWUsXG4gICAgICBkaXNhYmxlU3VibWl0QnV0dG9uOiAoT2JqZWN0LmtleXMoZGF0YS5lcnJvcnMpLmxlbmd0aCA+IDApLFxuICAgICAgZm9ybURhdGE6IGZvcm1EYXRhQ2hhbmdlZCA/IGZvcm1EYXRhQ2hhbmdlZCA6IGRhdGEuZm9ybURhdGFcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZGF0YSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25TdWJtaXRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uU3VibWl0KGRhdGEuZm9ybURhdGEpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBkaXNhYmxlU3VibWl0QnV0dG9uOiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICB9XG5cbiAgaGFuZGxlT3V0c2lkZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbkhpZGVcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0aGlzLnN0YXRlLmVkaXRpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb25maXJtOiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG9uSGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uSGlkZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbmZpcm06IGZhbHNlIH0pXG4gICAgb25IaWRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgaGFuZGxlU3VibWl0QnV0dG9uLFxuICAgICAgaGFuZGxlT3V0c2lkZSxcbiAgICAgIGhhbmRsZUNsb3NlXG4gICAgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB7XG4gICAgICB2aXNpYmxlLFxuICAgICAgdGl0bGUsXG4gICAgICBzY2hlbWEsXG4gICAgICB1aVNjaGVtYSxcbiAgICAgIGlzTG9hZGluZyxcbiAgICAgIHZhbGlkYXRlLFxuICAgICAgb25TdWJtaXQsXG4gICAgICBvbkVycm9yXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGRpc2FibGVTdWJtaXRCdXR0b24sXG4gICAgICBmb3JtRGF0YVxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxNb2RhbCBcbiAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfSBcbiAgICAgICAgICBvbk91dHNpZGU9e2hhbmRsZU91dHNpZGV9XG4gICAgICAgICAgZGlzYWJsZU9uQ2xpY2tPdXRzaWRlPXt0aGlzLnN0YXRlLmNvbmZpcm19PlxuICAgICAgICAgIDxXcmFwcGVyIGlkPSducHJvZ3Jlc3MtYmFzZS1mb3JtJyB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0+XG4gICAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxCb2R5IGhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHR9PlxuICAgICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxTcGlubmVyLz59XG4gICAgICAgICAgICAgIHshaXNMb2FkaW5nICYmIFxuICAgICAgICAgICAgICAgIDxKc29uU2NoZW1hRm9ybVxuICAgICAgICAgICAgICAgICAgc2NoZW1hPXtzY2hlbWF9XG4gICAgICAgICAgICAgICAgICB1aVNjaGVtYT17XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID8ge1xuICAgICAgICAgICAgICAgICAgICAgIFwidWk6ZGlzYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi51aVNjaGVtYVxuICAgICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnVpU2NoZW1hXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVTdWJtaXRCdXR0b249e2Rpc2FibGVTdWJtaXRCdXR0b259XG4gICAgICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgICAgIEZpZWxkVGVtcGxhdGU9e0N1c3RvbUZpZWxkVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICBsaXZlVmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHNob3dFcnJvckxpc3Q9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRXJyb3JzPXt0cmFuc2Zvcm1FcnJvcnN9XG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICBvbkVycm9yPXtvbkVycm9yfT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHJlZj17KGVsID0+IHRoaXMuc3VibWl0QnV0dG9uID0gZWwpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvSnNvblNjaGVtYUZvcm0+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICAgIDxGb290ZXI+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2xlYXIgZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgQ0FOQ0VMXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsZWFyIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBkaXNhYmxlU3VibWl0QnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVTdWJtaXRCdXR0b259PlxuICAgICAgICAgICAgICAgIFNBVkVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgICA8L1dyYXBwZXI+ICBcbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPENvbmZpcm0gXG4gICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5jb25maXJtfSBcbiAgICAgICAgICBtZXNzYWdlPVwiWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzLiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2U/XCJcbiAgICAgICAgICBidXR0b25zPXtbXG4gICAgICAgICAgICB7IHRleHQ6IFwiQ0xPU0VcIiwgYWN0aW9uOiBoYW5kbGVDbG9zZSwgaW5mbzp0cnVlIH0sXG4gICAgICAgICAgICB7IHRleHQ6IFwiTk9cIiwgYWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29uZmlybTogZmFsc2UgfSl9XG4gICAgICAgICAgXX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXX0= */\n/*@ sourceURL=src/components/Shared/Form.js */'
      })))), _react2.default.createElement(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, _react2.default.createElement(_Button2.default, { clear: true, disabled: disabled, onClick: handleClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, 'CANCEL'), _react2.default.createElement(_Button2.default, { clear: true, disabled: disabled || disableSubmitButton, onClick: handleSubmitButton, __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, 'SAVE')))), _react2.default.createElement(_Confirm2.default, {
        visible: this.state.confirm,
        message: 'You have unsaved changes. Are you sure you want to close?',
        buttons: [{ text: "CLOSE", action: handleClose, info: true }, { text: "NO", action: function action() {
            return _this2.setState({ confirm: false });
          } }], __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }));
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  visible: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  schema: _propTypes2.default.object,
  uiSchema: _propTypes2.default.object,
  formData: _propTypes2.default.object,
  isLoading: _propTypes2.default.bool,
  valdate: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onError: _propTypes2.default.func
};
Form.defaultProps = {
  visible: false,
  title: ""
};

exports.default = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9Gb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIm9jIiwibWVkaWEiLCJKc29uU2NoZW1hRm9ybSIsIk1vZGFsIiwiQnV0dG9uIiwiU3Bpbm5lciIsIkNvbmZpcm0iLCJXcmFwcGVyIiwiZGl2IiwicCIsIndpZHRoIiwibW9iaWxlIiwiSGVhZGVyIiwiZ3JheSIsIkJvZHkiLCJoZWlnaHQiLCJGb290ZXIiLCJSRVFVSVJFRF9GSUVMRF9TWU1CT0wiLCJDdXN0b21UaXRsZUZpZWxkIiwiaWQiLCJwcm9wcyIsInRpdGxlIiwicmVxdWlyZWQiLCJsZWdlbmQiLCJmaWVsZHMiLCJUaXRsZUZpZWxkIiwiTGFiZWwiLCJsYWJlbCIsIkN1c3RvbUZpZWxkVGVtcGxhdGUiLCJjbGFzc05hbWVzIiwiY2hpbGRyZW4iLCJlcnJvcnMiLCJoZWxwIiwiZGVzY3JpcHRpb24iLCJoaWRkZW4iLCJkaXNwbGF5TGFiZWwiLCJ0cmFuc2Zvcm1FcnJvcnMiLCJtYXAiLCJlcnJvciIsInNjaGVtYSIsIm1lc3NhZ2VzIiwibmFtZSIsIm1lc3NhZ2UiLCJGb3JtIiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJvbkNoYW5nZSIsImZvcm1EYXRhQ2hhbmdlZCIsImRhdGEiLCJmb3JtRGF0YSIsInNldFN0YXRlIiwiZWRpdGluZyIsImRpc2FibGVTdWJtaXRCdXR0b24iLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdEJ1dHRvbiIsImRpc2FibGVkIiwic3VibWl0QnV0dG9uIiwiY2xpY2siLCJoYW5kbGVPdXRzaWRlIiwib25IaWRlIiwiY29uZmlybSIsImhhbmRsZUNsb3NlIiwibmV4dFByb3BzIiwidmlzaWJsZSIsInVpU2NoZW1hIiwiaXNMb2FkaW5nIiwidmFsaWRhdGUiLCJvbkVycm9yIiwiZWwiLCJ0ZXh0IiwiYWN0aW9uIiwiaW5mbyIsInByb3BUeXBlcyIs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