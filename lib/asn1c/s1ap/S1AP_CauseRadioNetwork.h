/*
 * Generated by asn1c-0.9.29 (http://lionet.info/asn1c)
 * From ASN.1 module "S1AP-IEs"
 * 	found in "../support/s1ap-r16.7.0/36413-g70.asn"
 * 	`asn1c -pdu=all -fcompound-names -findirect-choice -fno-include-deps -no-gen-BER -no-gen-XER -no-gen-OER -no-gen-UPER`
 */

#ifndef	_S1AP_CauseRadioNetwork_H_
#define	_S1AP_CauseRadioNetwork_H_


#include <asn_application.h>

/* Including external dependencies */
#include <NativeEnumerated.h>

#ifdef __cplusplus
extern "C" {
#endif

/* Dependencies */
typedef enum S1AP_CauseRadioNetwork {
	S1AP_CauseRadioNetwork_unspecified	= 0,
	S1AP_CauseRadioNetwork_tx2relocoverall_expiry	= 1,
	S1AP_CauseRadioNetwork_successful_handover	= 2,
	S1AP_CauseRadioNetwork_release_due_to_eutran_generated_reason	= 3,
	S1AP_CauseRadioNetwork_handover_cancelled	= 4,
	S1AP_CauseRadioNetwork_partial_handover	= 5,
	S1AP_CauseRadioNetwork_ho_failure_in_target_EPC_eNB_or_target_system	= 6,
	S1AP_CauseRadioNetwork_ho_target_not_allowed	= 7,
	S1AP_CauseRadioNetwork_tS1relocoverall_expiry	= 8,
	S1AP_CauseRadioNetwork_tS1relocprep_expiry	= 9,
	S1AP_CauseRadioNetwork_cell_not_available	= 10,
	S1AP_CauseRadioNetwork_unknown_targetID	= 11,
	S1AP_CauseRadioNetwork_no_radio_resources_available_in_target_cell	= 12,
	S1AP_CauseRadioNetwork_unknown_mme_ue_s1ap_id	= 13,
	S1AP_CauseRadioNetwork_unknown_enb_ue_s1ap_id	= 14,
	S1AP_CauseRadioNetwork_unknown_pair_ue_s1ap_id	= 15,
	S1AP_CauseRadioNetwork_handover_desirable_for_radio_reason	= 16,
	S1AP_CauseRadioNetwork_time_critical_handover	= 17,
	S1AP_CauseRadioNetwork_resource_optimisation_handover	= 18,
	S1AP_CauseRadioNetwork_reduce_load_in_serving_cell	= 19,
	S1AP_CauseRadioNetwork_user_inactivity	= 20,
	S1AP_CauseRadioNetwork_radio_connection_with_ue_lost	= 21,
	S1AP_CauseRadioNetwork_load_balancing_tau_required	= 22,
	S1AP_CauseRadioNetwork_cs_fallback_triggered	= 23,
	S1AP_CauseRadioNetwork_ue_not_available_for_ps_service	= 24,
	S1AP_CauseRadioNetwork_radio_resources_not_available	= 25,
	S1AP_CauseRadioNetwork_failure_in_radio_interface_procedure	= 26,
	S1AP_CauseRadioNetwork_invalid_qos_combination	= 27,
	S1AP_CauseRadioNetwork_interrat_redirection	= 28,
	S1AP_CauseRadioNetwork_interaction_with_other_procedure	= 29,
	S1AP_CauseRadioNetwork_unknown_E_RAB_ID	= 30,
	S1AP_CauseRadioNetwork_multiple_E_RAB_ID_instances	= 31,
	S1AP_CauseRadioNetwork_encryption_and_or_integrity_protection_algorithms_not_supported	= 32,
	S1AP_CauseRadioNetwork_s1_intra_system_handover_triggered	= 33,
	S1AP_CauseRadioNetwork_s1_inter_system_handover_triggered	= 34,
	S1AP_CauseRadioNetwork_x2_handover_triggered	= 35,
	/*
	 * Enumeration is extensible
	 */
	S1AP_CauseRadioNetwork_redirection_towards_1xRTT	= 36,
	S1AP_CauseRadioNetwork_not_supported_QCI_value	= 37,
	S1AP_CauseRadioNetwork_invalid_CSG_Id	= 38,
	S1AP_CauseRadioNetwork_release_due_to_pre_emption	= 39,
	S1AP_CauseRadioNetwork_n26_interface_not_available	= 40,
	S1AP_CauseRadioNetwork_insufficient_ue_capabilities	= 41
} e_S1AP_CauseRadioNetwork;

/* S1AP_CauseRadioNetwork */
typedef long	 S1AP_CauseRadioNetwork_t;

/* Implementation */
extern asn_per_constraints_t asn_PER_type_S1AP_CauseRadioNetwork_constr_1;
extern asn_TYPE_descriptor_t asn_DEF_S1AP_CauseRadioNetwork;
extern const asn_INTEGER_specifics_t asn_SPC_CauseRadioNetwork_specs_1;
asn_struct_free_f CauseRadioNetwork_free;
asn_struct_print_f CauseRadioNetwork_print;
asn_constr_check_f CauseRadioNetwork_constraint;
per_type_decoder_f CauseRadioNetwork_decode_aper;
per_type_encoder_f CauseRadioNetwork_encode_aper;

#ifdef __cplusplus
}
#endif

#endif	/* _S1AP_CauseRadioNetwork_H_ */
#include <asn_internal.h>
