/*
 * Generated by asn1c-0.9.29 (http://lionet.info/asn1c)
 * From ASN.1 module "NGAP-IEs"
 * 	found in "../support/ngap-r16.7.0/38413-g70.asn"
 * 	`asn1c -pdu=all -fcompound-names -findirect-choice -fno-include-deps -no-gen-BER -no-gen-XER -no-gen-OER -no-gen-UPER`
 */

#ifndef	_NGAP_M6report_Interval_H_
#define	_NGAP_M6report_Interval_H_


#include <asn_application.h>

/* Including external dependencies */
#include <NativeEnumerated.h>

#ifdef __cplusplus
extern "C" {
#endif

/* Dependencies */
typedef enum NGAP_M6report_Interval {
	NGAP_M6report_Interval_ms120	= 0,
	NGAP_M6report_Interval_ms240	= 1,
	NGAP_M6report_Interval_ms480	= 2,
	NGAP_M6report_Interval_ms640	= 3,
	NGAP_M6report_Interval_ms1024	= 4,
	NGAP_M6report_Interval_ms2048	= 5,
	NGAP_M6report_Interval_ms5120	= 6,
	NGAP_M6report_Interval_ms10240	= 7,
	NGAP_M6report_Interval_ms20480	= 8,
	NGAP_M6report_Interval_ms40960	= 9,
	NGAP_M6report_Interval_min1	= 10,
	NGAP_M6report_Interval_min6	= 11,
	NGAP_M6report_Interval_min12	= 12,
	NGAP_M6report_Interval_min30	= 13
	/*
	 * Enumeration is extensible
	 */
} e_NGAP_M6report_Interval;

/* NGAP_M6report-Interval */
typedef long	 NGAP_M6report_Interval_t;

/* Implementation */
extern asn_per_constraints_t asn_PER_type_NGAP_M6report_Interval_constr_1;
extern asn_TYPE_descriptor_t asn_DEF_NGAP_M6report_Interval;
extern const asn_INTEGER_specifics_t asn_SPC_M6report_Interval_specs_1;
asn_struct_free_f M6report_Interval_free;
asn_struct_print_f M6report_Interval_print;
asn_constr_check_f M6report_Interval_constraint;
per_type_decoder_f M6report_Interval_decode_aper;
per_type_encoder_f M6report_Interval_encode_aper;

#ifdef __cplusplus
}
#endif

#endif	/* _NGAP_M6report_Interval_H_ */
#include <asn_internal.h>
