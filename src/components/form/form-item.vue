<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <div>
            <slot></slot>
            <div v-if="validateState === 'error'" style="color: red">{{ validateMessage }}</div>
        </div>
    </div>
</template>
<script>
    import AsyncValidator from 'async-validator';
    import Emitter from '../../mixins/emitter';

    export default {
        name: 'iFormItem',
        mixins: [ Emitter ],
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: {
                type: String
            },
        },
        data () {
            return {
                isRequired: false,
                validateState: '',
                validateMessage: '',
            }
        },
        computed: {
            fieldValue () {
                return this.form.model[this.prop];
            }
        },
        methods: {
            setRules () {
                let rules = this.getRules();
                if (rules.length) {
                    rules.every((rule) => {
                        this.isRequired = rule.required;
                    });
                }

                this.$off('on-form-blur', this.onFieldBlur);
                this.$off('on-form-change', this.onFieldChange);
                this.$on('on-form-blur', this.onFieldBlur);
                this.$on('on-form-change', this.onFieldChange);
            },
            getRules () {
                let formRules = this.form.rules;

                formRules = formRules ? formRules[this.prop] : [];

                return [].concat(formRules || []);
            },
            getFilteredRule (trigger) {
                const rules = this.getRules();

                // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
                return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
            },
            validate(trigger, callback = function () {}) {
                let rules = this.getFilteredRule(trigger);

                if (!rules || rules.length === 0) {
                    return true;
                }

                this.validateState = 'validating';

                let descriptor = {};
                descriptor[this.prop] = rules;

                const validator = new AsyncValidator(descriptor);
                let model = {};

                model[this.prop] = this.fieldValue;

                validator.validate(model, { firstFields: true }, errors => {
                    this.validateState = !errors ? 'success' : 'error';
                    this.validateMessage = errors ? errors[0].message : '';

                    callback(this.validateMessage);
                });
            },
            resetField () {
                this.validateState = '';
                this.validateMessage = '';

                this.form.model[this.prop] = this.initialValue;
            },
            onFieldBlur() {
                this.validate('blur');
            },
            onFieldChange() {
                this.validate('change');
            }
        },
        mounted () {
            if (this.prop) {
                this.dispatch('iForm', 'on-form-item-add', this);

                // 设置初始值，以便在重置时恢复默认值
                this.initialValue = this.fieldValue;

                this.setRules();
            }
        },
        beforeDestroy () {
            this.dispatch('iForm', 'on-form-item-remove', this);
        }
    }
</script>